module.exports = {
	entry: './src/js/show.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders:[
			{
				test: /\.css$/,	// 以css结尾的文件
				loader: 'style-loader!css-loader'
			}
		]
	},
	devServer: {
		port: 8081
	}
}