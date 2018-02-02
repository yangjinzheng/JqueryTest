//期望进入页面后就可以开始从服务器端获取数据，然后显示股票价格
var obj;
var sid;
$(document).ready(function () {
        //页面载入时隐藏弹出窗口
        var stockNode = $("#stock").css("border","1px solid black").width("150px")
            .css("position","absolute").css("z-index","99").css("background-color","blue")
            .css("color","yellow");
        stockNode.hide();
        var as = $("a");
        //定义鼠标进入股票名称时的操作
        as.mouseover(function (event) {
            //获取到当前股票的代码
            var aNode = $(this);
            var divNode = aNode.parent();
            sid = divNode.attr("id");
            //找到对应的股票对象
            updatediv();
            //控制弹出框的位置
            //1.找到当前连接的位置
            // var offset = aNode.offset();
            //2.设置弹出框的位置
            // stockNode.css("left",offset.left+"px").css("top",offset.top+aNode.height()+"px");
            //期望出现在鼠标的右下方
            var myEvent = event||window.event;
            stockNode.css("left",myEvent.clientX+5+"px").css("top",myEvent.clientY+5+"px");

            //弹出框显示
            stockNode.show();
        });
        //定义鼠标离开股票名称时的操作
        as.mouseout(function () {
            stockNode.hide();
        });
        getInfo();
        //3.每隔一秒钟和服务器交互一次，用户不用刷新页面就可以看到最新的股票信息
        setInterval(getInfo,1000);


});
//从服务器端获取数据并显示在页面上的方法
function getInfo() {
    //1.向服务器发起请求，获取数据
    $.get("GetStockInfo",null,function (data) {
        //2.接受并解析数据
        //obj = eval(data);
        obj = data;
        //2.1获取两支股票的当前指数信息
        var szzs = obj["300001"];//obj.300001
        var pfyh = obj["00001"];
        /*
         遍历一个js对象
         for(var stockid in obj){
         var stock = obj[stockid];
         }
         * */
        //2.2找到页面中对应的节点，然后填充最新的股票价格
        var span3 = $("#300001").children("span").html(szzs.now);
        span3.html(szzs.now)
        if(szzs.now>szzs.yes){
            //当前价格大于昨天收盘，则显示红色
            span3.css("color","red");
        }else{
            span3.css("color","green");
        }

        var span1 = $("#00001").children("span").html(pfyh.now);
        span1.html(pfyh.now)
        if(pfyh.now>pfyh.yes){
            //当前价格大于昨天收盘，则显示红色
            span1.css("color","red");
        }else{
            span1.css("color","green");
        }
        updatediv();
    },"json");
}
//更新弹出框中的内容
function updatediv() {
    var stockobj = obj[sid];
    for(var proname in stockobj)
    {
        if(proname!="name"){
            //找到对应弹出框中的div节点，然后找到span子节点,将数据填充
            $("#"+proname).children("span").html(stockobj[proname]);
        }
    }
}