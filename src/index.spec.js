import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import path from 'path';
import fs from 'fs';

import {sayHello} from './index';

describe('index.js', () => {
	describe('sayHello()', () => {
        it('should return Hello World!', () => {
            const result = sayHello();
            const text = 'Hello World!';
            expect(result).to.equal(text);
        });
    });
});

describe('index.html', () => {
	it('should say hello', () => {
		const dom = new JSDOM(fs.readFileSync(path.resolve(__dirname, 'index.html')));
		const p = dom.window.document.getElementsByTagName('p')[0];
		const text = 'Hello World!';
		expect(p.innerHTML).to.equal(text);
	});
});
