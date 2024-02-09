const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/",
	},
	resolve: {
		// modules: [path.resolve(__dirname, "src"), "node_modules"],
		extensions: [".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
		],
	},
	devServer: {
		static: path.join(__dirname, "./"),
		compress: true,
		port: 8080,
	},
};
