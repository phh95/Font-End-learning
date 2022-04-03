// import 'css-loader!../css/style.css'; // 内联式使用css-loader
import '../css/style.css';
import '../css/title.less';
import '../css/image.css';
import '../font/iconfont.css';

// 把图片当成模块引入文件中
import jyImage from '../img/jy.png'

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好哇，Webpack";

document.body.appendChild(divEl);

// 给一个div设置图片背景
const bgDivEl = document.createElement("div");
bgDivEl.className = "bg-image";

document.body.appendChild(bgDivEl);

// 给img元素设置src属性
const imgEl = document.createElement("img");
imgEl.src = jyImage;

document.body.appendChild(imgEl);

// 使用图标字体
const iconEl = document.createElement("i");
iconEl.className = "iconfont icon-delete";

document.body.appendChild(iconEl);

console.log("bbbbbb");