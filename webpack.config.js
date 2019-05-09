const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
	entry: './src/lib/main.js',
	output: {
		library: 'loudr',
		libraryTarget: 'umd',
		libraryExport: 'default',
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	plugins: [
		new uglifyJsPlugin(),
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html')
		}),
		new webpack.HotModuleReplacementPlugin(),
	]
};