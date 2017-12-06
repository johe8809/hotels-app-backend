const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    entry: './src/server.ts',
    resolve:{
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module:{
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "commonjs"
    },
    target: 'node',
    externals: [nodeExternals()]
}