<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<jsp:useBean id="user" class="namoo.user.dto.User" scope="session"/>
<%-- useBean가 같은 
	Course course = request.getAttribute("course");
	if(course == null){
		course = new Course();
		request.setAttribute("course", course);
	}
--%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title></title>
</head>
<body>
아이디 : <jsp:getProperty property="id" name="user"/><br>
이름 : <jsp:getProperty property="name" name="user"/><br>

session부분
</body>
</html>