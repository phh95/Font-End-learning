import { sum } from './js/math';
const { priceFormat } = require('./js/format');

import './js/element';

console.log(sum(20, 30));
console.log(priceFormat());

// ES6语法编写的代码
const message = "Hello Babel";
const names = ['abc', '臭皮匠', 'nba'];

console.log(message);
names.forEach(item => console.log(item));