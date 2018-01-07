var webpack = require("webpack");
var path = require("path");


module.exports = {
    entry: './src/main.jsx',
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: "bundle.js"
    },
    devtool: "source-map",
    module:{
        loaders : [
            {test: /.css$/, loader: "style-loader!css-loader"},
            {
                test: /.js|jsx$/, exclude: /node_modules/,
                loader: "babel-loader",
                options: { //或者新建.babelrc文件，直接{presets:[...]}
                    presets : ['es2015','react'],
                    plugins: ['react-hot-loader/babel']
                }
            },
            {test: /.(png|woff|woff2|eot|ttf|svg)$/, loader:'url-loader?limit=100000' }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('@iiimix 版权所有')
    ]

}