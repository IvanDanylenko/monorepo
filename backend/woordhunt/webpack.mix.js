const path = require('path');
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .ts('resources/js/app.tsx', 'public/js')
  .sass('resources/scss/app.scss', 'public/css')
  .react()
  .alias({
    '@': path.join(__dirname, 'resources/js'),
  })
  .options({
    hmrOptions: {
      host: 'localhost',
      port: 3000
    }
  })
  .disableNotifications();
