var cssModulesKey = 'npm_package_custom-create-react-app_css-modules';
var eslintFixKey = 'FIX_ESLINT';

module.exports = function(env) {
  // Set default values
  var globalLoader = {
    dev: 'style!css?importLoaders=1!postcss',
    prod: ['style', 'css?importLoaders=1!postcss']
  };

  var config = {
    cssLoader: globalLoader,
    cssGlobals: [ /react\-select\.css$/ ],
    cssGlobalLoader: globalLoader,
    eslintFixErrors: false
  };

  if (env[cssModulesKey]) {
    config.cssLoader = {
      dev: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
      prod: ['style', 'css?modules&importLoaders=1', 'postcss']
    }
  }

  if (env[eslintFixKey]) {
    config.eslintFixErrors = true;
  }

  return config;
}
