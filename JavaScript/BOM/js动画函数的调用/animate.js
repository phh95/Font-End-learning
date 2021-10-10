function animate(obj, target, callback) {
    clearInterval(obj.timer); // 先清除以前的定时器
    obj.timer = setInterval(function() {
        // step 盒子每次移动的距离，也叫步长
        // 涉及到除法，结果会有小数，由于精度问题，会导致盒子移动的距离出现误差，我们需要使用向上取整 math.ceil()
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // div.offsetLeft 获得盒子当前的位置
        if (obj.offsetLeft == target) {
            //停止动画 本质就是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束 之后
            // if 判断是否有传入 callback 参数，有的话就调用这个回调函数
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}