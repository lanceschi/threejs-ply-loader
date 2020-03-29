# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Upgraded `three` NPM dependency to `0.115.0`

## [v1.1.0] - 2020-01-06
### Added
- Added `mocha` NPM to **devDependencies**
- Added `chai` NPM to **devDependencies**
- Added `eslint` NPM to **devDependencies**
- Added `index.spec.js` file and code to the `tests` folder
- Added **test** and **test:watch** to `scripts` property of `package.json` file
- Added **example:cube-to-png** to `scripts` property of `package.json` file

### Changed
- `README.md` edits

## [v1.0.0] - 2020-01-03
### Added
- Added `three` NPM to **devDependencies**
- Added `three` NPM to **peerDependencies**
- Added `CHANGELOG.md` file a repo tracked file
- Added `LICENCE` file a repo tracked file
- Added `.editorconfig` file a repo tracked file
- Added `package.json` as a repo tracked file
- Added `package-lock.json` as a repo tracked file
- Added **engines** property to `package.json`
- Added `.nvmrc` in order to easily support [node version manager][nvm]
- Added `pngjs` NPM to **devDependencies** for example source code support
- Added `PLYLoader.js` source file taken from [three.js/dev/examples/js/loaders/PLYLoader.js][plyloader-source-url]
- Added `bufferToArrayBuffer` method to `THREE.PLYLoader`


### Changed
- `PLYLoader.js` edits in order to make it usable with Node.js

[nvm]: https://github.com/nvm-sh/nvm
[plyloader-source-url]: https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/loaders/PLYLoader.js