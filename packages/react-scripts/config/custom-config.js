var cssModulesKey = 'npm_package_custom-create-react-app_css-modules';
var eslintFixKey = 'FIX_ESLINT';

module.exports = function(env) {
  // Set default values
  var config = {
    cssLoader: {
      dev: 'style!css?importLoaders=1!postcss',
      prod: ['style', 'css?importLoaders=1!postcss']
    },
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
