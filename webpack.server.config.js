const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: {
        server: './src/backend/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/backend'),
        filename: 'server.js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()],
}
