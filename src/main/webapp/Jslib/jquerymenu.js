//需要点击主菜单的按钮时，对应的子菜单可以显示，再次点击隐藏
//需要编写代码，在页面装载时，给所有的主菜单添加onclick事件
//保证主菜单点击时可以显示或隐藏子菜单
//注册页面装载时执行的方法
$(document).ready(function () {
    //这里首先要会找到所有的主菜单
    //然后给所有的主菜单注册点击事件
    //找到ul中的节点
    var as = $("ul > a");
    as.click(function () {
        //这里需要找到当前ul中的li,然后让li显示出来
        //获取当前被点击的a节点
        var aNode = $(this);
        //找到当前a节点的所有li兄弟节点
        var lis = aNode.nextAll("li");
        //让子节点显示或隐藏
        lis.toggle("show");
    });
    $("li>a").click(function () {
        $("#content").load($(this).attr("id"));
    });

});