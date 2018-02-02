<%--
  Created by IntelliJ IDEA.
  User: pc
  Date: 2018/1/31
  Time: 14:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>浮动窗口</title>
    <script type="text/javascript" src="Jslib/jquery.js"></script>
    <script type="text/javascript" src="Jslib/jquerywin.js"></script>
    <!--链接外部的css-->
    <link type="text/css" rel="stylesheet" href="Css/win.css"/>
</head>
<body>
<a onclick="showwin()" href="#">显示浮动窗口</a>
<!--如何表示页面中的一个弹出窗口？可以使用div来表示-->
<!--目前不是窗口，需要用css来改变一下这个div的样子-->
<!--出现标题栏和内容区域-->
<div id="win">
    <div id="title">我是标题栏<span id="close" onclick="hide()">X</span></div>
    <div id="content">我是一个窗口</div>
</div>
</body>
</html>
