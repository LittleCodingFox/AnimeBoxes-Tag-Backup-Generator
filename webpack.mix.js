const mix = require('laravel-mix');
const rootPath = Mix.paths.root.bind(Mix.paths);

require('mix-html-builder');
require('mix-tailwindcss');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
  .html({
    htmlRoot: 'src/index.html', // Your html root file(s)
    output: 'dist', // The html output folder
    minify: {
      removeComments: true,
    },
  })
  .js('src/js/index.js', 'dist/js')
  .postCss('src/css/index.css', 'dist/css')
  .tailwind()
  .purgeCss({
    content: [rootPath('src/**/*.html'), rootPath('src/**/*.js')],
  });
