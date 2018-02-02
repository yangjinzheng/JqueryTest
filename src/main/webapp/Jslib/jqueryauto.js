//表示当前高亮的节点
var heightNode = -1;
var timeoutId;
$(document).ready(function () {
    var wordInput = $("#word");
    var wordInputOffset = wordInput.offset();
    //自动补全框最开始应该隐藏起来
    $("#auto").hide().css("border","1px black solid").css("position","absolute")
        .css("top",wordInputOffset.top+wordInput.height+5+"px").css("left",wordInputOffset.left+"px").width(wordInput.width()+2);
    //给文本框添加键盘并弹起的事件
    $("#word").keyup(function (event) {
         //处理文本框中的键盘事件
        var myEvent = event||window.event;
        var keyCode = myEvent.keyCode;
        //如果输入的是字母，应该将文本框中的最新的信息发送给服务器
        //如果输入的是退格键或删除键，也应该将文本框中的最新信息发送给服务器
        if(keyCode>=65&&keyCode<=90||keyCode==8||keyCode==46) {
            //1.首先获取文本框中的内容
            var word = wordInput.val();
            var autoNode = $("#auto");
            if(word!="") {
                //2.文本框中的内容发送给服务器端
                //对上次未完成的延时操作进行取消
                clearTimeout(timeoutId);
                //对服务器端进行交互延迟，避免快速打字总成频繁请求
                    timeoutId = setTimeout(function () {
                    $.post("autocomplete", {word: word}, function (data) {
                        //将dom对象data转换成jquery对象
                        var jqueryobj = $(data);
                        //找到所有的word节点
                        var wordNodes = jqueryobj.find("word");
                        //遍历所有的word节点，取出单词内容，然后将但此内容添加到弹出框中

                        //需要清空原来的内容
                        autoNode.html("");
                        wordNodes.each(function (i) {
                            //取出单词内容
                            var wordNode = $(this);
                            //新建div节点
                            //将新建的节点加入到弹出框的节点中
                            var newDivNode = $("<div>").attr("id",i);
                            newDivNode.html(wordNode.text()).appendTo(autoNode);
                            //增加鼠标进入事件,高亮节点
                            newDivNode.mouseover(function () {
                                if(heightNode!=-1){
                                    $("#auto").children("div").eq(heightNode).css("background-color","white");
                                }
                                heightNode = $(this).attr("id");
                                $(this).css("background-color","red")
                            });
                            //增加鼠标移出事件
                            newDivNode.mouseout(function () {
                                //取消鼠标移出节点的高亮
                                $(this).css("background-color","white");
                            });
                            //增加鼠标点击事件，可以进行补全
                            newDivNode.click(function () {
                                //取出高亮文本
                                var content = $(this).text();
                                $("#auto").hide();
                                heightNode = -1;
                                //文本框中的内容变成高亮内容
                                $("#word").val(content);
                            })

                        })
                        //如果服务器端有数据返回，则显示弹出框
                        if (wordNodes.length > 0) {
                            autoNode.show();
                        } else {
                            autoNode.hide();
                            heightNode = -1;
                        }
                    }, "xml");//post
                },500);

            }else{
                autoNode.hide();
            }
        }else if(keyCode==38|| keyCode==40){
            //如果输入的是向上38向下40按键
            if(keyCode==38){
                //向上
                var autoNodes = $("#auto").children("div");
                if(heightNode!=-1){
                    //若原来存在高亮节点，则将背景色改成白色
                    autoNodes.eq(heightNode).css("background-color","white");
                    heightNode--;
                }else{
                    heightNode = autoNodes.length-1;
                }

                if(heightNode==-1){
                    //如果修改索引值之后index变成-1，则将索引值指向最后一个元素
                    heightNode = autoNodes.length-1;
                }
                //让现在高亮的内容变红色
                autoNodes.eq(heightNode).css("background-color","red");
            }else {
                //向下
                var autoNodes = $("#auto").children("div");
                if(heightNode!=-1){
                    //若原来存在高亮节点，则将背景色改成白色
                    autoNodes.eq(heightNode).css("background-color","white");
                }
                heightNode++;
                if(heightNode==autoNodes.length){
                    //如果修改索引值之后index变成-1，则将索引值指向最后一个元素
                    heightNode = 0;
                }
                //让现在高亮的内容变红色
                autoNodes.eq(heightNode).css("background-color","red");
            }
        }else if(keyCode==13){
            //如果输入的是回车
            //下拉框有高亮内容
            if(heightNode!=-1){
                //取出高亮文本
                var content = $("#auto").hide().children("div").eq(heightNode).text();
                heightNode = -1;
                //文本框中的内容变成高亮内容
                $("#word").val(content);
            }else{
            //下拉框没有高亮内容
                alert("文本框中的["+$("#word").val()+"]被提交了");
                $("#auto").hide();
                //让文本框失去焦点
                $("#word").get(0).blur();
            }
        }
    });
    //给按钮添加事件,表示文本框中的数据被提交
    $("input[type='button']").click(function () {
        alert("文本框中的["+$("#word").val+"]被提交了");
    });
})