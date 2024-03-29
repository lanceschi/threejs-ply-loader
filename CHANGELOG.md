# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v2.0.2] - 2022-01-29

### Changed

- NPM package upgrades:
  - cross-blob ^3.0.0 → ^3.0.1
  - chai ^4.3.4 → ^4.3.6
  - eslint ^8.6.0 → ^8.8.0
  - mocha ^9.1.3 → ^9.2.0
  - three ^0.125.1 → ^0.137.5
- `.npmignore` edits

## [v2.0.1] - 2022-01-15

### Added

- Added `.npmignore` file

## [v2.0.0] - 2022-01-13

### Added

- Added NPM packages:
  - `cross-blob` `3.0.0`

### Changed

- Changed the library to a JavaScript Module
- Node engine version is now set to `>=12.0.0`
- Updated wrapped `PLYLoader` library to the latest: `0.136.0`
- Partial test rewrote
- README.md edits
- NPM package upgrades:
  - three ^0.125.0 → ^0.136.0

## [v1.2.2] - 2022-01-13

### Changed

- Version bump

## [v1.2.1] - 2022-01-13

### Added

- Added test coverage script in `package.json`
- NPM devDependencies:
  - `c8` `^7.11.0`

## [v1.2.0] - 2022-01-13

### Changed

- Upgraded Node binary reference from `12.16` to `v16.13.2` in `.nvmrc`
- `LICENSE` edits
- `README.md` edits
- Beautified `src/helpers/index.js`
- Beautified `src/index.js`
- Beautified `examples/ply-model-to-png.js`
- NPM package upgrades:
  - chai ^4.2.0 → ^4.3.4
  - eslint ^7.1.0 → ^8.6.0
  - mocha ^7.2.0 → ^9.1.3
  - pngjs ^4.0.0 → ^6.0.0
  - three ^0.115.0 → ^0.125.0

## [v1.1.10] - 2020-05-29

### Changed

- Node engine version is now set to `>=10.0.0`. Thanks to [Kevin Li][2]
- `eslint` devDependency upgraded from `^6.8.0` to `^7.1.0`
- `mocha` devDependency upgraded from `^7.1.1` to `^7.2.0`

## [v1.1.9] - 2020-05-08

### Changed

- Node engine version is now set to `>=10.0.0`. Thanks to [Kevin Li][2]
- `eslint` devDependency upgraded from `^6.8.0` to `^7.1.0`
- `mocha` devDependency upgraded from `^7.1.1` to `^7.2.0`

## [v1.1.9] - 2020-05-08

### Changed

- `three` peerDependency is now set to `>=0.115.0`. Thanks to [vanillaike][1]

## [v1.1.8] - 2020-04-18

### Changed

- README.md edits

## [v1.1.7] - 2020-04-13

### Added

- NPM version badge

## [v1.1.6] - 2020-04-13

### Changed

- Automated Github NPM publish workflow edits
- **README.md** edits

## [v1.1.5] - 2020-04-13

### Added

- Automated Github NPM publish workflow

## [v1.1.4] - 2020-04-13

### Added

- Automated Github test CI workflow
- Contributing policy file

## [v1.1.3] - 2020-04-13

### Changed

- pngjs NPM devDependeny update to `v4.0.0`

## [v1.1.2] - 2020-03-29

### Changed

- **README.md** edits

## [v1.1.1] - 2020-03-29

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
[1]: https://github.com/vanillaike
[2]: https://github.com/jiaweihli
