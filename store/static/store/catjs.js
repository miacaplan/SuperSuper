"use strict";

let fs = require('fs');

const fileNames = ['store.module.js',
'cart.service.js',
'main.component.js',
'very-nice-panel.component.js',
'categories.component.js',
'product.component.js',
'category.component.js',
'cart.component.js'];

for (let n of fileNames) {
    fs.appendFileSync('build.js', fs.readFileSync(n));
}
