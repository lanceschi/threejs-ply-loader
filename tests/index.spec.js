const THREE = require('three');
const fs = require('fs');
const { expect } = require('chai');

describe('Library main test suite | CommonJS', () => {
  let PLYLoader;

  before(async () => {
    const { PLYLoaderFactory } = await import('../src/index.mjs');
    PLYLoader = PLYLoaderFactory(THREE);
  });

  it('PLYLoader should be imported correctly', () => {
    expect(PLYLoader).to.be.a('function');
    expect(new PLYLoader()).to.be.an.instanceof(PLYLoader);
  });

  it('Should instantiate correctly the PLYLoader object', () => {
    const plyLoader = new PLYLoader();

    expect(plyLoader).to.be.a('object');
    expect(plyLoader).to.be.an.instanceof(PLYLoader);
    expect(plyLoader).to.have.property('bufferToArrayBuffer');
  });

  it('PLYLoader instance should feature a bufferToArrayBuffer function', () => {
    const plyLoader = new PLYLoader();

    expect(plyLoader).to.have.property('bufferToArrayBuffer');
    expect(plyLoader.bufferToArrayBuffer).to.be.a('function');
  });

  it('PLYLoader instance should feature a parse function', () => {
    const plyLoader = new PLYLoader();

    expect(plyLoader).to.have.property('parse');
    expect(plyLoader.parse).to.be.a('function');
  });

  it('PLYLoader bufferToArrayBuffer should throw if argument is not a Buffer', () => {
    const plyLoader = new PLYLoader();

    const thowingFunc = () => plyLoader.bufferToArrayBuffer('Hahahah - ;)');

    expect(thowingFunc).to.throw(Error);
  });

  it('PLYLoader bufferToArrayBuffer should convert Buffer to ArrayBuffer', () => {
    const plyLoader = new PLYLoader();

    // Read 3D Model as PLY file
    const fileBuffer = fs.readFileSync('./examples/assets/cube.ply');

    // Convert node file Buffer to ArrayBuffer
    const fileArrayBuffer = plyLoader.bufferToArrayBuffer(fileBuffer);

    expect(fileArrayBuffer).to.be.a('ArrayBuffer');
  });

  it('Parsed file should an instance of BufferGeometry', () => {
    const plyLoader = new PLYLoader();

    // Read 3D Model as PLY file
    const fileBuffer = fs.readFileSync('./examples/assets/cube.ply');

    // Convert node file Buffer to ArrayBuffer
    const fileArrayBuffer = plyLoader.bufferToArrayBuffer(fileBuffer);

    // Parse 3D model geometry
    const geometry = plyLoader.parse(fileArrayBuffer);

    expect(geometry).to.be.a('object');
    expect(geometry).to.be.an.instanceof(THREE.BufferGeometry);
  });
});
