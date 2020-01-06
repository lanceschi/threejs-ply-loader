const THREE = require('three');
const {expect} = require('chai');


describe('Library main test suite', () => {
  it('PLYLoader should be imported correctly', () => {
    const PLYLoader = require('../src')(THREE);

    expect(PLYLoader).to.be.a('function');
  });

  it('Should instantiate correctly the PLYLoader object', () => {
    const PLYLoader = require('../src')(THREE);
    const plyLoader = new PLYLoader();

    expect(plyLoader).to.be.a('object');
    expect(plyLoader).to.be.an.instanceof(PLYLoader);
    expect(plyLoader).to.have.property('bufferToArrayBuffer');
  });

  it('PLYLoader instance should feature a bufferToArrayBuffer function', () => {
    const PLYLoader = require('../src')(THREE);
    const plyLoader = new PLYLoader();

    expect(plyLoader).to.have.property('bufferToArrayBuffer');
    expect(plyLoader.bufferToArrayBuffer).to.be.a('function');
  });

  it('PLYLoader instance should feature a parse function', () => {
    const PLYLoader = require('../src')(THREE);
    const plyLoader = new PLYLoader();

    expect(plyLoader).to.have.property('parse');
    expect(plyLoader.parse).to.be.a('function');
  });

  it('PLYLoader bufferToArrayBuffer should throw if argument is not a Buffer', () => {
    const PLYLoader = require('../src')(THREE);
    const plyLoader = new PLYLoader();

    const thowingFunc = () => plyLoader.bufferToArrayBuffer('Hahahah - ;)');

    expect(thowingFunc).to.throw(Error);
  });

  it('PLYLoader bufferToArrayBuffer should convert Buffer to ArrayBuffer', () => {
    const fs = require('fs');
    const PLYLoader = require('../src')(THREE);
    const plyLoader = new PLYLoader();

    // Read 3D Model as PLY file
    const fileBuffer = fs.readFileSync('./examples/assets/cube.ply');

    // Conver node file Buffer to ArrayBuffer
    const fileArrayBuffer = plyLoader.bufferToArrayBuffer(fileBuffer);

    expect(fileArrayBuffer).to.be.a('ArrayBuffer');
  });

  it('Parsed file should an instance of BufferGeometry', () => {
    const fs = require('fs');
    const PLYLoader = require('../src')(THREE);
    const plyLoader = new PLYLoader();


    // Read 3D Model as PLY file
    const fileBuffer = fs.readFileSync('./examples/assets/cube.ply');

    // Conver node file Buffer to ArrayBuffer
    const fileArrayBuffer = plyLoader.bufferToArrayBuffer(fileBuffer);

    // Parse 3D model geometry
    const geometry = plyLoader.parse(fileArrayBuffer);

    expect(geometry).to.be.a('object');
    expect(geometry).to.be.an.instanceof(THREE.BufferGeometry);
  });
});