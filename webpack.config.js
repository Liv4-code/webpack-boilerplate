const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist/assets"),
        filename: "bundle.js",
        publicPath: "/assets/",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 9000,
        hot: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
};
