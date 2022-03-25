// import 'css-loader!../css/style.css'; // 内联式使用css-loader
import '../css/style.css';
import '../css/title.less';

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好哇，Webpack";

document.body.appendChild(divEl);