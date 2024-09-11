const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        // port: 9000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: './index.html',
            baseUrl: '/'
        }),
        new CopyPlugin({
            patterns: [
                {from: "./src/templates", to: "templates"},
                {from: "./src/static/images", to: "images"},
                {from: "./AdminLTE-3.2.0/plugins/fontawesome-free/webfonts", to: "webfonts"},
                {from: "./AdminLTE-3.2.0/plugins/fontawesome-free/css/all.min.css", to: "css"},
                {from: "./AdminLTE-3.2.0/dist/css/adminlte.min.css", to: "css"},
                {from: "./AdminLTE-3.2.0/dist/js/adminlte.min.js", to: "js"},
                {from: "./AdminLTE-3.2.0/plugins/jquery/jquery.min.js", to: "js"},
                {from: "./AdminLTE-3.2.0/plugins/icheck-bootstrap/icheck-bootstrap.min.css", to: "css"},
                {from: "./AdminLTE-3.2.0/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css", to: "css"},
                {from: "./AdminLTE-3.2.0/plugins/datatables/jquery.dataTables.min.js", to: "js"},
                {from: "./AdminLTE-3.2.0/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js", to: "js"},
                {from: "./AdminLTE-3.2.0/plugins/bs-custom-file-input/bs-custom-file-input.min.js", to: "js"},
                {from: "./AdminLTE-3.2.0/plugins/moment/moment.min.js", to: "js"},
                {from: "./AdminLTE-3.2.0/plugins/moment/locale/ru.js", to: "js/moment-ru-locale.js"},
                {from: "./AdminLTE-3.2.0/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js", to: "js"},
                {from: "./AdminLTE-3.2.0/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css", to: "css"},
                {from: "./AdminLTE-3.2.0/plugins/select2/js/select2.full.min.js", to: "js"},
                {from: "./AdminLTE-3.2.0/plugins/select2/css/select2.min.css", to: "css"},
                {from: "./AdminLTE-3.2.0/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css", to: "css"},
                {from: "./AdminLTE-3.2.0/plugins/fullcalendar/main.js", to: "js/fullcalendar.js"},
                {from: "./AdminLTE-3.2.0/plugins/fullcalendar/main.css", to: "css/fullcalendar.css"},
                {from: "./AdminLTE-3.2.0/plugins/fullcalendar/locales/ru.js", to: "js/fullcalendar-locale-ru.js"},
                {from: "./.env", to: "./"},
            ],
        }),
    ],
};