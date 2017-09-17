import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
	// debug: true,
	devtool: 'source-map',
	// noInfo: false,
	entry: {
		main: path.resolve(__dirname, 'src/index'),
		vendor: path.resolve(__dirname, 'src/vendor')
	},
	target: 'web', // Can also target 'node', 'electron'
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	plugins: [
		// Generate html file with bundled js/css
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
        }),
		// Create a separat chunk of vendor to take advantage of caching
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		// Has the files using md5 so that their names changes when content changes
		new WebpackMd5Hash(),
		// Generate an external css with a hash in the filename
		new ExtractTextPlugin('[name].[chunkhash].css')
	],
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}
		]
	}
};
