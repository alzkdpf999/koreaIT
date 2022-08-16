<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="/css/basic.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<script type="module" defer src="/js/check.js"></script>

</head>
<body>
	<!-- header start -->
	<jsp:include page="/include/header.jsp" />
	<!-- header end -->

	<!-- main body start -->
	<div class="row">
		<div class="leftcolumn">
			<div class="w3-container">
				<div class="w3-center">
					<h3>회원 가입</h3>
				</div>
				<div class="w3-responsive w3-card-4">
					<form class="row" method="post">
						<div class="mb-3">
							<label for="id" class="form-label">아이디 </label>
							<div id="ui">
								<input type="text" class="form-control" id="id" name="id"
									placeholder="Id" required="required">
								<button type="submit" class="check" id="dbCheckId">중복체크</button>
							</div>
						</div>

						<div class="mb-3">
							<label for="passwd" class="form-label">비밀번호</label> <input
								type="password" class="form-control" id="passwd" name="passwd"
								placeholder="Password" required="required">
								<label id="err">영어, 특수문자, 숫자의 조합을 이용해주세요</label>
						</div>

						<div class="mb-3">
							<label for="name" class="form-label">이름</label> <input
								type="text" class="form-control" id="name" name="name"
								placeholder="Name" required="required">
						</div>

						<div class="mb-3">
							<label for="email" class="form-label">이메일</label> <input
								type="email" class="form-control" id="email" name="email"
								placeholder="name@example.com" required="required">
						</div>
						<div class="col-auto">
							<button type="submit" class="btn btn-primary mb-3">회원가입</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!--aside start module  -->
		<jsp:include page="/include/aside.jsp"></jsp:include>
		<!--aside end module  -->
	</div>
	<!-- main body  end -->

	<!-- footer start -->
	<jsp:include page="/include/footer.jsp"></jsp:include>
	<!-- footer end -->
	<div class="alert alert-warning alert-dismissible fade show"
		role="alert" id="case">
		<!-- <h4>전체 삭제하시겠습니까?</h4> -->
		<div class="Allbtn">
		<!-- 	<button type="button" id="removeall" value="removeall"
				class="btn btn-dark">확인</button> -->
		</div>
	</div>
</body>
</html>