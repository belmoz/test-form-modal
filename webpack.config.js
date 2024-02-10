const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
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
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"), // Каталог для статики
		},
		open: true, // Автоматически открывать браузер
	},
};
