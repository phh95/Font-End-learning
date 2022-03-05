// CommonJS 导入，使用 CommonJS 的模块化规范
const { add, mul } = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(30, 50));

// ES6 模块化导入，使用 ES6 的模块化规范

import { name, age, height } from './js/info'
console.log(name);
console.log(age);
console.log(height);