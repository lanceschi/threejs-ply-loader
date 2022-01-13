![ci](https://github.com/lanceschi/threejs-ply-loader/workflows/ci/badge.svg)&nbsp;&nbsp;&nbsp;![npm publish](https://github.com/lanceschi/threejs-ply-loader/workflows/npm%20publish/badge.svg)&nbsp;&nbsp;&nbsp;[![npm version](https://badge.fury.io/js/threejs-ply-loader.svg)](http://badge.fury.io/js/threejs-ply-loader)&nbsp;&nbsp;&nbsp;![npm](https://img.shields.io/npm/dm/threejs-ply-loader)


# Three.js PLY file format loader to use with Node.js

## Description
Node.js wrapper for [three.js][THREEJS-github-link] PLYLoader (currently three.js v0.136.0).

Original PLYLoader source code can be found [here][PLYLoader-source-link].

Beside some minor edits, I added an additional helper function for converting Node Buffer to ArrayBuffer (convenience-wise) and I put in place tests.

This library was developed as a [JavaScript Module][javascript-module-url]. The recommended use with CommonJS files is through [dynamic imports][dynamic-import-url].

## Usage

```javascript
const fs = require("fs");
const { join } = require("path");
const THREE = require("three");

(async () => {
  // Import PLYLoader Factory
  const { PLYLoaderFactory } = await import("threejs-ply-loader");

  // Initialize PLYLoader Class
  const PLYLoader = PLYLoaderFactory(THREE);

  // Instantiate PLYLoader object
  const plyLoader = new PLYLoader();

  // Read 3D Model as PLY file format
  const sourceFilepath = join(__dirname, "assets/cube.ply");
  const fileBuffer = fs.readFileSync(sourceFilepath);

  // Convert node file Buffer to ArrayBuffer
  const fileArrayBuffer = plyLoader.bufferToArrayBuffer(fileBuffer);

  // Parse 3D model into THREE geometry
  const geometry = plyLoader.parse(fileArrayBuffer);
})();
```


## Example

An example is present in the examples folder. It will load a PLY file model and output its rendering to a PNG file. It can be run from a shell:

```bash
npm install
npm run example:cube-to-png
```

The output image is going to located in `examples/temp/vertex-colored-cube.png`


## Tests
They can be run from a shell:

```bash
npm install
npm test
```

## Development notes
Developed with Node v16.13.2

[THREEJS-github-link]: https://github.com/mrdoob/three.js
[PLYLoader-source-link]: https://github.com/mrdoob/three.js/blob/r136/examples/js/loaders/PLYLoader.js
[javascript-module-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[dynamic-import-url]: https://v8.dev/features/dynamic-import#dynamic
