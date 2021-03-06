const webpack = require('webpack');
const { UNI_PLATFORM } = process.env;

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        flyio:
          UNI_PLATFORM !== 'h5' ? 'flyio/dist/npm/wx' : 'flyio/dist/npm/fly'
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          UNI_PLATFORM: JSON.stringify(UNI_PLATFORM)
        }
      })
    ]
  }
};
