var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
	entry: [
		path.join(__dirname, '../index.js')
	],
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
				},
				{
				test: /\.less$/,
				include: /styles/,
				loaders: ["style-loader", "css-loader", "less-loader"]
				},
                {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
                }
			]
		},
	output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
    	contentBase: parentDir,
    	historyApiFallback: true
	}
}