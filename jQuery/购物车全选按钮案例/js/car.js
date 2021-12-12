$(function() {
    // 全选功能模块
    $(".checkall").change(function() {
            // console.log($(this).prop("checked"));
            $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        })
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
    })
})