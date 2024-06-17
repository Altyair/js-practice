const path = require('path');
module.exports = {
    mode: 'development',
    devtool: "source-map",
    entry: "./js/script.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dist/js/main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/, //using regex to tell babel exactly what files to transcompile
                exclude: /node_modules/, // files to be ignored
                use: {
                    loader: 'babel-loader' // specify the loader
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: __dirname,
        },
        compress: true,
        port: 8000,
        liveReload: true,
        host: "0.0.0.0",
        allowedHosts: 'all',
    },
}
