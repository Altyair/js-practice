const path = require('path');
module.exports = {
    mode: 'development',
    devtool: "source-map",
    entry: "./js/script.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dist/js/main.js',
    },
    module:{},
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
