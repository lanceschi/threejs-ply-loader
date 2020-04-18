![ci](https://github.com/lanceschi/threejs-ply-loader/workflows/ci/badge.svg)&nbsp;&nbsp;&nbsp;![npm publish](https://github.com/lanceschi/threejs-ply-loader/workflows/npm%20publish/badge.svg)&nbsp;&nbsp;&nbsp;[![npm version](https://badge.fury.io/js/threejs-ply-loader.svg)](http://badge.fury.io/js/threejs-ply-loader)&nbsp;&nbsp;&nbsp;![npm](https://img.shields.io/npm/dm/threejs-ply-loader)


# Three.js PLY file format loader to use with Node.js

## Description
Node.js wrapper for [three.js][THREEJS-github-link] PLYLoader (currently three.js v0.115.1).

Original PLYLoader source code can be found [here][PLYLoader-source-link].

Beside some minor edits, I added an additional helper function for converting Node Buffer to ArrayBuffer (convenience-wise) and I put in place tests.

## Usage

```javascript
const fs = require("fs");
const { join } = require("path");
const THREE = require("three");

// Require object constructor
const PLYLoader = require("threejs-ply-loader")(THREE);

// Instantiate PLYLoader object
const plyLoader = new PLYLoader();

// Read 3D Model as PLY file format
const sourceFilepath = join(__dirname, "assets/cube.ply");
const fileBuffer = fs.readFileSync(sourceFilepath);

// Convert node file Buffer to ArrayBuffer
const fileArrayBuffer = plyLoader.bufferToArrayBuffer(fileBuffer);

// Parse 3D model into THREE geometry
const geometry = plyLoader.parse(fileArrayBuffer);
```


## Example

An example is present in the examples folder. It will load a PLY file model and output its rendering to a PNG file. It can be run from a shell:

```bash
$ npm install
$ npm run example:cube-to-png
```

The output image is going to located in `examples/temp/vertex-colored-cube.png`


## Tests
They can be run from a shell:

```bash
$ npm install
$ npm test
```

## Development notes
Developed with Node v12.16.1

[THREEJS-github-link]: https://github.com/mrdoob/three.js
[PLYLoader-source-link]: https://github.com/mrdoob/three.js/blob/dev/examples/js/loaders/PLYLoader.js


