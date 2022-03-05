// CommonJS 导入，使用 CommonJS 的模块化规范
const { add, mul } = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(30, 50));

// ES6 模块化导入，使用 ES6 的模块化规范

import { name, age, height } from './js/info'
console.log(name);
console.log(age);
console.log(height);

// css 依赖
require('./css/normal.css')

// less 依赖 
require('./css/special.less')

// 往html页面添加内容
document.writeln('<h2>Hello, Webpack</h2>')