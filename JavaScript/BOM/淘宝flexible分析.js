(function flexible(window, document) {
    var docEl = document.documentElement // 获取 html 根元素
        // dpr 物理像素比，PC 端物理像素比为 1
        // iPhone 6/7/8 的物理像素比为 2
    var dpr = window.devicePixelRatio || 1

    // adjust body font size  设置 body 的字体大小
    function setBodyFontSize() {
        // 如果页面有 body 这个元素，就设置 body 的字体大小
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {
            // 如果没有 body 这个元素，就等着页面主要的 DOM 元素加载完毕，再去设置body的字体大小
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10   rem布局核心，与 html 元素字体大小相关
    function setRemUnit() {
        var rem = docEl.clientWidth / 10 // html 的宽度划分成 10 等份，每 1 等份就是 1rem
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize  页面尺寸大小发生变化时，要重新设置 rem 的大小
    window.addEventListener('resize', setRemUnit)
        // pageshow 重新加载页面会触发的事件，使用这个而不使用 load 事件，是考虑到火狐浏览器的往返缓存 
    window.addEventListener('pageshow', function(e) {
        // e.persisted 返回 true，页面就是从缓存取过来的页面，也要重新加载页面，重新计算一下rem的大小
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports 有些移动端浏览器不支持 0.5px 的写法
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))