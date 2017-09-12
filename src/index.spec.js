import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import path from 'path';
import fs from 'fs';

describe('index.js', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say hello', () => {
        const dom = new JSDOM(fs.readFileSync(path.resolve(__dirname, 'index.html')));
        const p = dom.window.document.getElementsByTagName('p')[0];
        expect(p.innerHtml).to.equal('Hello World!')
    });
});
