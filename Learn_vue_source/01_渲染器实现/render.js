const h = (tag, props, children) => {
    // h函数返回的是一个vnode，vnode 本质上是一个 js 对象
    return {
        tag,
        props,
        children
    }
}

const mount = (vnode, container) => {
    // mount 的目的，将 vnode 转换为真实的 DOM（element）
    // 1. 创建出真实的元素，并且在 vnode 上保留 el
    const el = vnode.el = document.createElement(vnode.tag);

    // 2. 处理 props
    if (vnode.props) {
        // {class: "phh"}   {key, value}
        for (const key in vnode.props) {
            const value = vnode.props[key];

            // { onClick: function(){} }  当props是一个绑定的事件时，需要处理
            if (key.startsWith("on")) {
                // 去除onClick前面的on，并将 Click 转换为小写字母 click
                el.addEventListener(key.slice(2).toLowerCase(), value)
            } else {
                el.setAttribute(key, value);
            }
        }
    }

    // 3. 处理 children
    if (vnode.children) {
        if (typeof vnode.children === "string") {
            el.textContent = vnode.children;
        } else {
            // 传入的 children 可能还是一个数组，进行遍历
            vnode.children.forEach(item => {
                // 如果数组中包含 vnode 节点，还需要再次调用 mount 递归调用
                mount(item, el);
            })
        }
    }

    // 4. 将el挂载到container
    container.appendChild(el);
}

// patch，传入两个 vnode 节点，进行 diff 算法

const patch = (n1, n2) => {
    if (n1.tag !== n2.tag) {
        const n1ElParent = n1.el.parentElement;
        n1ElParent.removeChild(n1.el);
        mount(n2, n1ElParent);
    } else {
        // 1. 获取 el
        // 两个vnode的tag相同的情况下，要做更详细的逻辑处理
        const el = n2.el = n1.el;

        // 2. 处理 props
        const oldProps = n1.props || {}; // 如果 vnode 中的 props 为空，赋值为一个空的对象
        const newProps = n2.props || {};

        // 2.1 获取所有的 newProps，添加到 el
        for (const key in newProps) {
            const oldValue = oldProps[key];
            const newValue = newProps[key];
            if (newValue !== oldValue) {
                if (key.startsWith("on")) {
                    el.addEventListener(key.slice(2).toLowerCase(), newValue);
                } else {
                    el.setAttribute(key, newValue);
                }
            }
        }

        // 2.2 删除旧的 props
        for (const key in oldProps) {
            if (!(key in newProps)) {
                if (key.startsWith("on")) {
                    const value = oldProps[key]
                    el.removeEventListener(key.slice(2).toLowerCase(), value);
                } else {
                    el.removeAttribute(key);
                }
            }
        }

        // 3. 处理 children，传入 h 函数的 children 有两种情况，数组或字符串
        const oldChildren = n1.children || [];
        const newChildren = n2.children || [];

        // newChildren 是一个字符串的时候
        if (typeof newChildren === "string") {
            if (typeof oldChildren === "string") {
                if (newChildren !== oldChildren) {
                    el.textContent = newChildren
                }
            } else {
                el.innerHTML = newChildren;
            }
        } else { // newChildren 是一个数组的时候
            if (typeof oldChildren === "string") {
                el.innerHTML = ""
                newChildren.forEach(item => {
                    mount(item, el);
                })
            } else {
                // newChildren 和 oldChildren 都为数组的情况
                // oldChildren [v1, v2, v3]
                // newChildren [v1, v4, v6, v8]

                // 前面有相同节点的元素进行 patch 操作
                const commonLength = Math.min(oldChildren.length, newChildren.length);
                for (let i = 0; i < commonLength; i++) {
                    patch(oldChildren[i], newChildren[i]);
                }

                // newChildren.length > oldChildren.length
                // oldChildren [v1, v2, v3]
                // newChildren [v1, v4, v6, v8]
                if (newChildren.length > oldChildren.length) {
                    newChildren.slice(oldChildren.length).forEach(item => {
                        mount(item, el);
                    })
                }

                // newChildren.length < oldChildren.length
                // oldChildren [v1, v2, v3, v6, v9]
                // newChildren [v1, v4, v6]
                if (newChildren.length < oldChildren.length) {
                    oldChildren.slice(newChildren.length).forEach(item => {
                        el.removeChild(item.el);
                    })
                }
            }
        }
    }
}