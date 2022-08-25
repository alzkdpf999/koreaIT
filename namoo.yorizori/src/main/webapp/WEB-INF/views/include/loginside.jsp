<%@page import="namoo.yorizori.dto.user.User"%>
<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
User loginUser = (User) session.getAttribute("loginUser");
String checkId = null;
int errMsg = 1;
String errId = null;
Cookie[] cookies = request.getCookies();
if (cookies != null) {
	for (Cookie cookie : cookies) {
		if (cookie.getName().equals("id"))
	checkId = cookie.getValue();
		if (cookie.getName().equals("err"))
	errMsg = Integer.parseInt(cookie.getValue());
		if (cookie.getName().equals("errPsw"))
	errId = cookie.getValue();
	}
}
%>

<c:choose>
	<c:when test="${empty loginUser}">
		<form action="${initParam.ctx }/user/login.do"
			method="post" name="login"
			class="row row-cols-lg-auto g-3 align-items-center">

			<div id="saveCheck">
				<label for="save"> <input type="checkbox" name="yes"
					value="yes" id="save" ${empty cookie.id.value ? '' : 'checked'}>
					<i class="circle"></i> <span class="text">아이디 저장${cookie.err.value }</span>
				</label>
			</div>
			<div class="col-12">
				<input type="text" id="id" name="id"
					placeholder="${ cookie.err.value eq -1 ? '아이디 오류': (cookie.err.value eq -2 ? '아이디 오류' : '아이디')}"
					class="${ cookie.err.value eq -1 ? 'id form-control err': (cookie.err.value eq -2 ? 'id form-control err' : 'id form-control')}"
					value="${empty cookie.id.value ? (cookie.err.value eq -2 ? '' : (cookie.err.value eq 0 ? cookie.errPsw.value : '')): cookie.id.value }">
			</div> 
			<div class="col-12">
				<input type="password" id="passwd" name="passwd"
					placeholder="${ cookie.err.value eq 0 ? '비밀번호 오류': (cookie.err.value eq -2 ? '비밀번호 오류' : '비밀번호')}"
					class="${cookie.err.value eq 0 ? 'passwd form-control err' : (cookie.err.value eq -2 ? 'passwd form-control err' : 'passwd form-control') }">
			</div>

			<div class="col-12">
				<button type="submit" class="btn btn-primary">로그인</button>
			</div>

			<div class="col-12">
				<a href="user/signup.do" class="btn btn-warning">회원가입</a>
			</div>

		</form>
	</c:when>
	<c:when test="${!empty loginUser}">
		<form action="${initParam.ctx }/user/login.do"
			method="get" name="logout">
			<h3 id="asid">${loginUser.getName() }님</h3>
			<button type="submit" class="btn btn-warning">로그아웃</button>
		</form>
	</c:when>
</c:choose>
