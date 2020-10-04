const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    resolve: {
        extensions: [".js", ".jsx", ".scss", ".css"]
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    exclude: /node_modules/,
                    sourceMaps: true,
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                useBuiltIns: "usage",
                                corejs: 3,
                            },
                        ],
                        "@babel/preset-react"
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.template.html",
            publicPath: "/",
            filename: "index.html",
            inject: true
        })
    ]
};
