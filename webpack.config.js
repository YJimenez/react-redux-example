module.exports = {
	entry: [
		"./src/index.js",
	],
	output: {
		filename: "bundle.js",
		publicPath: '/',
		path: __dirname,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ["babel-loader"]
			},
		]
	}
};