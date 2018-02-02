//页面装载时，让所有的td都拥有一个点击事件
$(document).ready(function () {
    //找到所有的td节点
    var tds = $("td");
    //给所有的td节点增加点击事件
    tds.click(tdclick);


});
/*td被点击的事件*/
function tdclick() {
    //0.保存当前的td节点
    var td = $(this);
    //1.取出当前的td中的文本内容保存起来
    var text = td.text();
    //2.清空td里面的内容
    td.html("");//也可以用td.empty();
    //3.建立一个文本框，也就是input的元素节点
    var input = $("<input>");//创建input节点用jquery包装
    //4.设置文本框得值是保存起来的文本内容
    input.attr("value",text);
    //4.5让文本框可以响应键盘按下的事件，主要用于处理回车确认
    input.keyup(function (event) {
        //0.获取当前用户按下的键值
        //解决不同浏览器获取对象的差异
        var myEvent = event||window.event;
        var kcode = myEvent.keyCode;
        //1.判断是否回车按下
        if(kcode==13){
            var inputNode = $(this);
            //2.获取当前文本框的内容
            var inputtext = inputNode.val();
            //3.清空td里面的内容
            var tdNode = inputNode.parent();
            //4.将保存的文本框的内容填充到td中
            tdNode.html(inputtext);
            //5.让td重新拥有点击事件
            tdNode.click(tdclick);
        }
    })
    //5.将文本框加入到td中
    td.append(input);//也可用input.appendTo(input);
    //5.5让文本框里的为被高亮选中
    //需要将jquery的对象转化为dom对象
    var inputdom = input.get(0);
    inputdom.select();
    //6.需要清除td上的点击事件
    td.unbind("click");

}