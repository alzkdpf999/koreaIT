	
<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta name="요리책 상세보기port"
	content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<meta name="description" content="" />
<meta name="author" content="" />
<title>Shop Homepage - Start Bootstrap Template</title>
<!-- Favicon-->
<link rel="icon" type="image/x-icon" href="${ctx }/assets/favicon.ico" />
<!-- Bootstrap icons-->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
	rel="stylesheet" />
<!-- Core theme CSS (includes Bootstrap)-->
<link href="${ctx}/css/styles.css" rel="stylesheet" />
<script type="module" defer src="${ctx}/js/popControl.js"></script>
</head>
<script type="text/javascript">
</script>
<style>
.card:after {
	content: '';
}
</style>
<body>
	<!-- Navigation-->
	<jsp:include page="/WEB-INF/views/include/header.jsp"></jsp:include>
	<!-- Header-->

	<!-- Section-->
		<c:forEach var="list" items="${Hashlist}">
	
	<section class="py-5">

		<div class="container px-4 px-lg-5 mt-5">
			<div class="row">
				<div class="col h2">
					${list.key.book_name}<a
						href="${ctx}/recipe/regist.do?cbid=${list.key.book_id}"
						class="btn btn-md btn-primary">레시피 등록</a> 
				</div>
			</div>
			<div class="row" style="height: 15px">
				<p class="col">${list.key.book_desc}</p>
			</div>
		</div>

		<div class="container px-4 px-lg-5 mt-5">
			<div
				class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
				id="delpop">
				
				<!-- 요리책 목록 -->
							<c:forEach var="recipe" items="${list.value}">
					<div class="col mb-5">
						<div class="card h-70">
							<img class="card-img-top"
								src="${ctx}/recipe/image.do?recipeid=${recipe.recipe_id}"
								alt="..." />

							<!-- book details-->
							<div class="card-body p-4">
								<div class="text-center">
									<!-- book name 이미지 불러올때 쓰기${recipe.recipe_id}-->
									<h5 class="fw-bolder">${recipe.recipe_name}</h5>
									<!-- author-->
									${recipe.recipe_time}분(난이도: ${recipe.recipe_level eq 3 ? '상' : (recipe.recipe_level eq 2 ? '중' : '하')})
								</div>
							</div>
							<!-- Product actions-->
							<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
								<div class="cook-btn">
									<c:if test="${loginUser.id eq recipe.writer_id }">
										<a href="${ctx}/recipe/myrecipe/modify.do?recipeid=${recipe.recipe_id}"
											class="btn btn-primary">수정</a>
									</c:if>
									<a href="${ctx}/recipe/myrecipe/detail.do?recipeid=${recipe.recipe_id}"
										class="btn btn-primary">상세보기</a>
								</div>
							</div>
						</div>
					</div>
				</c:forEach>
			
			</div>
		</div>

	</section>
		</c:forEach>
	<!-- Footer-->
	<jsp:include page="/WEB-INF/views/include/footer.jsp"></jsp:include>
	<!-- Bootstrap core JS-->
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
	<!-- Core theme JS-->
	<script src="js/scripts.js"></script>
</body>
</html>
