import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take some time...')); // eslint-disable-line no-console

webpack(webpackConfig).run((err, stats) => {
	if (err) {
		console.log(chalk.red(err)); // eslint-disable-line no-console
		return 1;
	}

	const jsonStats = stats.toJson();
	if (jsonStats.hasErrors) jsonStats.errors.map(err => console.log(chalk.red(err))); // eslint-disable-line no-console
	if (jsonStats.hasWarnings) {
		console.log(chalk.yellow('Webpack generated the following warnings:')); // eslint-disable-line no-console
		jsonStats.warnings.map(warning => console.log(chalk.red(warning))); // eslint-disable-line no-console
	}

	console.log('Webpack stats:', stats); // eslint-disable-line no-console

	// Successful build
    console.log(chalk.green('Your app has been successfully built for production and written to /dist')); // eslint-disable-line no-console
    
	return 0;
});
