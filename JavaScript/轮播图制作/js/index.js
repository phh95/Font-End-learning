window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var imgWidth = focus.offsetWidth; // 轮播图区域focus盒子的宽度，就是一张图片的宽度
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer); // 清除自动播放轮播图
        timer = null; // 清除定时器变量
    })
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        // 鼠标离开focus，再次启用 自动播放轮播图
        timer = setInterval(function() {
            // 自动播放轮播图，很像我们点击右侧的箭头，我们可以 手动调用点击事件
            arrow_r.click();
        }, 2000);
    });
    // 动态生成底部的小圆圈，有几张图片，就有几个小圆圈（自动生成）
    var ul = focus.querySelector('ul'); // 页面有比较多的ul，要限定在focus对象下
    var ol = focus.querySelector('.circle');
    // 获取 ul 中小 li 的个数，这个个数就是 ol 小圆圈的个数
    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个小 li
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号，将其赋值给自定义属性 index
        li.setAttribute('index', i);
        // 把生成的小 li 插入 ol 中
        ol.appendChild(li);
        // 给小圆圈添加点击事件 排他思想
        li.addEventListener('click', function() {
            // 排他思想，先干掉所有人，清除所有小 li 的样式
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 再留下我自己
            this.className = 'current';
            // 点击小圆圈，移动图片 移动的是整个 ul，而不是里面单独的小li
            // ul移动的距离 = 小圆圈的索引号 * 图片的宽度
            var index = this.getAttribute('index');
            // 点击了小圆圈，就要把这个小圆圈的索引号 赋值给全局变量 num 和 circle
            num = index;
            circle = index;
            // console.log(imgWidth);
            // console.log(index);
            animate(ul, -index * imgWidth);
        })
    }
    // 第一个小圆圈的类名设置为 current，方便后面给它设置样式
    ol.children[0].className = 'current';

    // 克隆ul中的第一张图片，放到ul的最后面
    var first = ul.children[0].cloneNode(true); // true 深克隆，会克隆子节点
    ul.appendChild(first);

    // 点击右侧箭头，图片移动
    var num = 0;
    var circle = 0; // 声明一个变量，来控制小圆圈与左右两侧按钮的交互
    var flag = true; // 节流阀
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false; // 节流阀，点击一次之后，点击事件的函数暂时无法调用
            // 点击箭头，到达最后一张图片的时候，要立马跳转到开头，才能实现图片的无缝切换
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            // 每点击一次右侧的箭头，num 自加 1
            num++;
            animate(ul, -num * imgWidth, function() {
                flag = true; // 回调函数，动画执行完毕之后，再次恢复为 flase
            });

            // 点击右侧箭头，底部的小圆圈也跟着变化
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    })

    //左侧按钮
    arrow_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            // 点击箭头，到达最后一张图片的时候，要立马跳转到开头，才能实现图片的无缝切换
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * imgWidth + 'px';

            }
            num--;
            animate(ul, -num * imgWidth, function() {
                flag = true;
            });

            // 点击右侧箭头，底部的小圆圈也跟着变化
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
    })

    // 自动播放轮播图，用定时器实现
    var timer = setInterval(function() {
        // 自动播放轮播图，很像我们点击右侧的箭头，我们可以 手动调用点击事件
        arrow_r.click();
    }, 2000);
})