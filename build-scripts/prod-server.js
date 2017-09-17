import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

import userApi from '../src/routes/user'

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
	res.sendfile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.use(userApi);

app.listen(port, err => {
	if (err) {
		console.log(err);
	} else {
		open(`http://localhost:${port}`);
	}
});
