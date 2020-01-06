# Threejs Ply Loader to use with Node.js

## Description
Node.js wrapper for three.js PLYLoader


## Usage

```javascript
const fs = require('fs');
const {join} = require('path');
const THREE = require('three');

// Require object constructor
const PLYLoader = require('threejs-ply-loader')(THREE);

// Instantiate PLYLoader object
const plyLoader = new PLYLoader();

// Read 3D Model as PLY file format
const sourceFilepath = join(__dirname, 'assets/cube.ply');
const fileBuffer = fs.readFileSync(sourceFilepath);

// Conver node file Buffer to ArrayBuffer
const fileArrayBuffer = plyLoader.bufferToArrayBuffer(fileBuffer);

// Parse 3D model into THREE geometry
const geometry = plyLoader.parse(fileArrayBuffer);
```