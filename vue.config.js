const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/assets/global.scss')],
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('docs')
      .test(/\.(pptx|pdf)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({ name: '[name]-assets.[ext]' });
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/umed-ui/'
    : '/',
};

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/global.scss'),
      ],
    });
}
