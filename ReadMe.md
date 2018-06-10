# README

## Table of Contents

- [Details](#details)
- [Requirements](#requirements)
- [Installation](#installation)
- [Build](#build)
- [Usage](#usage)


## Details
### Name
JS Web Crawler

### Description
JS crawler that gets all the links from website

### Author
Roberto Sousa

## Requirements
- Install [Node.js](https://nodejs.org/en/)

## Installation
- Set the URL on the crawler

- Install dependencies
```
npm i
```
- Start the local project
```
npm run start
```



##Build
| Yarn Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Does the same as 'npm run serve'. Can be invoked with `npm start`                                 |
| `build`                   | Full build. Runs ALL build tasks (`build-ts`, `tslint`)                                           |
| `serve`                   | Runs node on `dist/server.js` which is the apps entry point                                       |
| `watch`                   | Runs all watch tasks (TypeScript, Node). Use this if you're not touching static assets.           |
| `build-ts`                | Compiles all source `.ts` files to `.js` files in the `dist` folder                               |
| `watch-ts`                | Same as `build-ts` but continuously watches `.ts` files and re-compiles when needed               |
| `tslint`                  | Runs TSLint on project files                                                                      |
| `develop`                 | Start the project with the dev options on                                                         |
