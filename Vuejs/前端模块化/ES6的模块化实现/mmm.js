import { flag, sum } from './aaa.js';

if (flag) {
    console.log('我是小豪，哈哈哈哈哈');
}

import { num1, height } from './aaa.js';

console.log(num1);
console.log(height);

// 导入函数
import { mul } from './aaa.js';
console.log(mul(50, 30));

// 导入类
import { Person } from './aaa.js';
const p = new Person();
p.run()

// 导入 export default
import addr from './aaa.js'
// console.log(addr);
addr('你好啊')

// 这里的 addr 没有加花括号，说明导入的是 export default 的内容


// 5. 统一全部导入
// import { flag, sum, num1, height, mul, Person } from './aaa.js';
import * as aaa from './aaa.js';
console.log(aaa.flag);
console.log(aaa.height);
// 这里的 aaa 是一个对象{}