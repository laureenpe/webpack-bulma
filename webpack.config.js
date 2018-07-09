const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = env => {

    const isProduction = env.production ? true : false;
    const envType = isProduction ? 'production' : 'development';

    return {
        mode: envType,
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/script.js'
        },
        devServer: {
            contentBase: "./dist"
        },
        /*Loaders*/
        module: {
            rules: [{
                    test: /\.css$/,
                    use: 'css-loader'
                },
                {
                    test: /\.scss$/,
                    use: [
                        // fallback to style-loader in development
                        !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ["file-loader"]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: ["file-loader"]
                }
            ]

        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "css/[name].css",
            }),
            new CleanWebpackPlugin(["dist"]),
            new HtmlWebpackPlugin({
                template: "./src/templates/index.html",
                title: "Bulma!"
            }),
            new CopyWebpackPlugin([{
                from: "src/templates",
                to: ""
            }])
        ],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    uglifyOptions: {
                        ie8: true,
                        safari10: true,
                        keep_classnames: true,
                        warnings: false
                    }
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
    }
};