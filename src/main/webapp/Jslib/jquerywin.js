function showwin() {
    //1.找到窗口的div节点
    var winNode = $("#win");
    //2.让div对应的窗口显示出来
    //方法1，修改节点的css值，让窗口显示出来
    //winNode.css("display","block");
    //方法2，利用jquery的show方法
     winNode.show("slow");
    //方法3，利用jquery的fadein方法
    //winNode.fadeIn("slow");
}
//隐藏窗口的方法
function hide() {
    //1.找到窗口的节点
    var winNode = $("#win");
    //2.将窗口隐藏
    //方法1
    //winNode.css("display","none");
    //方法2
    //winNode.hide();
    //方法3，利用fadeout方法
    winNode.fadeOut("slow");
}