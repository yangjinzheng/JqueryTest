<%--
  Created by IntelliJ IDEA.
  User: pc
  Date: 2018/1/31
  Time: 19:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>弹出菜单</title>
    <link type="text/css" rel="stylesheet" href="Css/menu.css"/>
    <script type="text/javascript" src="Jslib/jquery.js"></script>
    <script type="text/javascript" src="Jslib/jquerymenu.js"></script>

</head>
<body>
<ul>
    <a href="#">我是菜单1</a>
    <li><a href="#" id="index.jsp">我是子菜单1</a></li>
    <li><a href="#">我是子菜单2</a></li>
</ul>
<ul>
    <a href="#">我是菜单2</a>
    <li><a href="#">我是子菜单3</a></li>
    <li><a href="#">我是子菜单4</a></li>
</ul>
<div id="content">

</div>
</body>
</html>
