import jsf from 'json-schema-faker';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { schema } from './mock-data-schema';


const json = JSON.stringify(jsf(schema));

fs.writeFile(path.resolve(__dirname, '../src/api', 'db.json'), json, (err) => {
    if(err) console.log(chalk.red(err)); // eslint-disable-line no-console
    else console.log(chalk.green('Mock data generated!')); // eslint-disable-line no-console
})
