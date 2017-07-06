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


## What’s included?
- [React 15.6 and PropTypes](https://facebook.github.io/react/)
- [URI.js](https://medialize.github.io/URI.js/) for URL manipulation
- [Babel](https://babeljs.io/) with presets `env`, `react` and the [object spread operator plugin](https://babeljs.io/docs/plugins/transform-object-rest-spread/)
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
