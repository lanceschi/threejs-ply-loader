/**
 * @author lanceschi / https://github.com/lanceschi
 * Simple example that renders a scene with a vertex-colored cube to a PNG image file.
 */
const THREE = require('three');
const {SoftwareRenderer} = require('three-software-renderer');
const {PNG} = require('pngjs');
const fs = require('fs');
const PLYLoader = require('../src')(THREE);


(() => {
  try {
    // Scene and perspective camera setup
    const width = 1024;
    const height = 768;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
    camera.position.set(2, 2, 2);
    camera.lookAt(0, 0, 0);

    // Read 3D Model as PLY file
    const fileBuffer = fs.readFileSync('assets/cube.ply')

    // Instantiate PLYLoader object
    const plyLoader = new PLYLoader();

    // Conver node file Buffer to ArrayBuffer
    const fileArrayBuffer = plyLoader.bufferToArrayBuffer(fileBuffer);


    // Parse 3D model geometry
    const geometry = plyLoader.parse(fileArrayBuffer);

    // Setup the material for the mesh
    const materialProps = {
      vertexColors: THREE.VertexColors,
      side: THREE.FrontSide
    };
    const material = new THREE.MeshBasicMaterial(materialProps);

    // Create the mesh and add it to the scene
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Render into pixels-array (RGBA)
    const renderer = new SoftwareRenderer();
    renderer.setSize(width, height);
    var imagedata = renderer.render(scene, camera);

    // Create a PNG from the pixels array (RGBA)
    const png = new PNG({
      width: width,
      height: height,
      filterType: -1
    });

    for (let i=0; i < imagedata.data.length; i++) {
      png.data[i] = imagedata.data[i];
    }


    if (!fs.existsSync("temp")) {
      fs.mkdirSync("temp");
    }
    png.pack().pipe(fs.createWriteStream("temp/vertex-colored-cube.png"));

  } catch (e) {
    console.trace(e);
  }
})();