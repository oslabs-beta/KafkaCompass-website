const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports={
    mode: process.env.NODE_ENV,
    entry: "./index.js", 
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    target: "web",
    devServer: {
        port: "8080",
        open: true,
        hot: true ,
        liveReload: true
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,  
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']}
                  }
            },
            {
                test: /\.css$/i,
                use: [
                  'style-loader',
                  'css-loader',
                ]
              },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: './index.html'
        })
     ]
}