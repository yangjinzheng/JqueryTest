<%--
  Created by IntelliJ IDEA.
  User: pc
  Date: 2018/2/1
  Time: 19:54
  To change this template use File | Settings | File Templates.
--%>
<!--与传统的视图层不同，该jsp返回的是xml的数据，所以conttype是xml-->
<%@ page contentType="text/xml;charset=UTF-8" language="java" %>
<!--返回xml数据的视图层暂时不做任何逻辑判断你先将所有单词都返回，待前后台应用可以完整的协作之后，再限制返回的内容-->
<%
    //页面端传送的字符串
    String word = (String)request.getAttribute("word");
%>
<words>
    <%if ("absolute".startsWith(word)) {%>
    <word>absolute</word>
    <%}%>
    <%if ("anyone".startsWith(word)) {%>
    <word>anyone</word>
    <%}%>
    <%if ("anything".startsWith(word)) {%>
    <word>anything</word>
    <%}%>
    <%if ("apple".startsWith(word)) {%>
    <word>apple</word>
    <%}%>
    <%if ("abandon".startsWith(word)) {%>
    <word>abandon</word>
    <%}%>
    <%if ("breach".startsWith(word)) {%>
    <word>breach</word>
    <%}%>
    <%if ("break".startsWith(word)) {%>
    <word>break</word>
    <%}%>
    <%if ("boolean".startsWith(word)) {%>
    <word>boolean</word>
    <%}%>
</words>
