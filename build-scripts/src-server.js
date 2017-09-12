import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const compiler = webpack(config);
const app = express();

app.use(webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: '/'
}));

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
})
