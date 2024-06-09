const { resolve} = require("path");
module.exports = {
    mode: 'development',
    context: __dirname,
    devtool: "source-map",
    entry: "./js/3d_figure_tests.js",
    output: {
        path: resolve(__dirname, './dist/'),
        filename: './dist/js/main.js',
    },
    module:{},
    devServer: {
        static: {
            directory: __dirname,
        },
        compress: true,
        port: 9000,
        hot: true,
        liveReload: true,
    },
}
