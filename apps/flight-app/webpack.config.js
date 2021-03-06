const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  ['@flight-workspace/shared/auth-lib'],
]);

module.exports = {
  output: {
    uniqueName: 'flightApp',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      // Shel === Host
      // import('passenger/*')

      shared: {
        '@angular/core': {
          singleton: true,
          strictVersion: true,
        },
        '@angular/common': {
          singleton: true,
          strictVersion: true,
        },
        '@angular/common/http': {
          singleton: true,
          strictVersion: true,
        },
        '@angular/router': {
          singleton: true,
          strictVersion: true,
        },

        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
