const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withTM = require('next-transpile-modules');
const withImages = require('next-images')
module.exports = withImages(withCSS(withSass(withTM({
  transpileModules: ['react-flexbox-grid']
}))));
