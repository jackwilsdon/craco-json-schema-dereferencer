const { addBeforeLoader, loaderByName } = require('@craco/craco');

module.exports = {
  overrideWebpackConfig: ({
    webpackConfig,
    pluginOptions: { test = /\.json$/, include } = {},
    context: {
      paths: { appSrc },
    },
  }) => {
    // Add the JSON Schema reference loader before the file loader.
    addBeforeLoader(webpackConfig, loaderByName('file-loader'), {
      loader: '@cloudflare/json-schema-ref-loader',
      test,
      include: include || appSrc,
      // Bypass webpack's built-in JSON loader.
      type: 'javascript/auto',
    });

    return webpackConfig;
  },
};
