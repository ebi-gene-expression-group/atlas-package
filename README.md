# Template for Expression Atlas and Single Cell Atlas ES packages

## Instructions

### Clone this repository
```
git clone https://github.com/gxa/atlas-package my-package
cd new-package-name
git remote set-url origin https://github.com/gxa/my-package.git
```
Remember to create the new repository. The recommendation is to prefix the package name with “atlas-”.

### Fill in package metadata
Fill in the fields `name`, `description` and `repository`. As a general rule the packages are prefixed with 
“expression-atlas-” or “sc-atlas-”. Finally, replace or remove `README.md`.

## Scripts

### `build`
Creates a pre-compiled (i.e. Babel transpiled) version of the code from `src` to `lib`. The main entry of the package 
is `lib/index.js`. The `lib` directory mimics the structure of `src` so all your exports should be in  `src/index.js`. 
All other files (images, stylesheets, etc.) should be placed inside `src` following whatever directory structure you 
prefer (e.g. `src/assets`, `src/img`). You may use [Less](http://lesscss.org/) or [Sass](http://sass-lang.com/) but 
remember to compile them to regular CSS and `import` the latter. In short: files with the extension `js` will be 
transpiled, all others will be copied through, `less` and `sass` files will be skipped.

### `prepublish`
Runs the `build` script.

### `test`
No test script is provided but it’s a very good idea to do so. In 
[React EBI Species](https://github.com/wbazant/react-ebi-species) we are using [Jest](https://facebook.github.io/jest/)
but [Mocha](https://mochajs.org/) is a good alternative and integrates well with Webpack using 
[Mocha loader](https://github.com/webpack-contrib/mocha-loader).

## What’s included?
- [React 15.6 and PropTypes](https://facebook.github.io/react/)
- [URI.js](https://medialize.github.io/URI.js/) for URL manipulation
- [Babel](https://babeljs.io/) with presets `env`, `react` and the [object spread operator plugin](https://babeljs.io/docs/plugins/transform-object-rest-spread/) (see `.babelrc`)
- [Webpack and Webpack dev server](https://webpack.js.org/) with [React Hot Loader](http://gaearon.github.io/react-hot-loader/)

## Polyfills
No polyfills are included by default, but you might want one or both of these two:
- [Fetch polyfill](https://github.com/github/fetch)
- [Babel polyfill](https://babeljs.io/docs/usage/polyfill/)

### NPM
```
npm install --save-dev whatwg-fetch babel-polyfill
```
### Yarn
```
yarn add --dev whatwg-fetch babel-polyfill
```
Tweak your `webpack.config.js` to include them in your entry points:
```
entry: {
  myComponent: ['babel-polyfill', 'whatwg-fetch', './html/render.js']
  ...
}
```
