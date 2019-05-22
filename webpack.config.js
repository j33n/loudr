const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [{
					loader: "html-loader"
				}]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [
		new uglifyJsPlugin(),
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
			filename: path.resolve(__dirname, './index.html')
		}),
		new webpack.HotModuleReplacementPlugin(),
	]
};