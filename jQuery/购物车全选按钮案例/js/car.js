$(function() {
    // 全选功能模块
    $(".checkall").change(function() {
        // console.log($(this).prop("checked"));
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
    });
    // 第二步：3 个小复选框都被选上，顶部和底部的全选按钮也会被选上
    $(".j-checkbox").change(function() {
        // 条件判断
        // console.log($(".j-checkbox:checked").length); 返回被选中的小复选框的个数
        // 判断被选中的小复选框个数，是否等于 3
        // $(".j-checkbox:checked").length 代表被选中的小复选框的个数
        // if ($(".j-checkbox:checked").length == 3) {
        //     $(".checkall").prop("checked", true)
        // } else {
        //     $(".checkall").prop("checked", false)
        // }
        // 右侧的 3 是写死的，要替换成变量
        // $(".j-checkbox").length 代表所有小复选框的个数
        if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
            $(".checkall").prop("checked", true)
        } else {
            $(".checkall").prop("checked", false)
        }
    });
    // 点击购物车商品的加号 + ，里面的数字增加 1
    $(".increment").click(function() {
        var n = $(this).siblings(".itxt").val();
        // console.log(n);
        // 点击之后，自增 1
        n++;
        $(this).siblings(".itxt").val(n);
        // 商品小计模块 
        var p = $(this).parent().parent().siblings(".p-price").text();
        // console.log(p);
        p = p.substr(1); // 截取字符串，去掉单价最前面的人民币符号 ￥
        // 计算商品单价和商品数量相乘
        var price = p * n;
        // toFixed(2) 小数点后保留两位
        $(this).parent().parent().siblings(".p-sum").text("￥" + price.toFixed(2));
    });
    // 点击购物车商品的减号 -，里面的数字减少 1
    $(".decrement").click(function() {
        var n = $(this).siblings(".itxt").val();
        // 相比加法，减法需要增加一个判断条件
        if (n == 1) {
            return false;
        }
        // 满足条件，会执行 return 语句，return 后面的代码就不再执行
        n--;
        $(this).siblings(".itxt").val(n);
        // 商品小计模块 
        var p = $(this).parent().parent().siblings(".p-price").text();
        // console.log(p);
        p = p.substr(1); // 去掉单价最前面的人民币符号 ￥
        // 计算商品单价和商品数量相乘
        var price = p * n;
        // toFixed(2) 小数点后保留两位
        $(this).parent().parent().siblings(".p-sum").text("￥" + price.toFixed(2));
    });

    // 用户直接修改文本框的值，计算 小计模块
    $(".itxt").change(function() {
        var n = $(this).val();
        var p = $(this).parents(".p-num").siblings(".p-price").text();
        p = p.substr(1);
        var price = (p * n).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + price);
    })
})