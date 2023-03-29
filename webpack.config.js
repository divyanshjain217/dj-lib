const path = require('path')

module.exports = {
	entry: "./src/index.ts",
	mode: "development",
    devtool: "source-map",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		// libraryTarget: "umd",
		// library: "djlib"
		library: {
			type: "umd",
			name: "djlib",
		},
		sourceMapFilename: "[name].map",
	},
	module: {
		rules: [
			{
				test: /\.css/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(tsx?| jsx?)$/,
				use: ["babel-loader", "ts-loader"],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	},
	externals: {
		react: "react",
		"react-dom": "react-dom",
	},
};