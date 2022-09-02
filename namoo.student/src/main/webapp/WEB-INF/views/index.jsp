<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" >
  <title>Document</title>
  <script type="module" defer src="${ctx}/js/StudentApp.js"></script>
  <link href="${ctx }/css/style.css" rel="stylesheet" />
</head>

<body>
  <h3 id="h3">KOREA IT ACADEMY 중학교 성적 관리</h3>

  <form action="">
    <table class="table table-striped table-dark" id="table">
      <tr>
        <th><label for="text">학번</label></th>
        <td>
          <input id="ssn" type="text" class="form-control" placeholder="18" maxlength="2" id="insert">
        </td>
        <td><button type="button" class="btn btn-outline-success" id="smsearch">조회</button></td>
        <td><button type="button" class="btn btn-outline-danger" id="remove">삭제</button></td>
        <td colspan="2"><input type="reset" value="초기화" class="btn btn-outline-danger"></td>
      </tr>
      <tr>
        <th>
          <label for="fname">이름</label>
        </th>
        <td><input id="name" type="text" class="form-control" placeholder="홍길동" aria-label="Username" id="insert"></td>
        <td><button type="button" class="btn btn-outline-success" id="search">검색</button></td>
        <td><button type="button" class="btn btn-outline-success" id="sort">정렬</button></td>
        <td colspan="2"><button type="button" class="btn btn-outline-danger" id="removeall">전체삭제</button></td>
      </tr>
      <tr>
        <th><label for="korea" id="score">국어</label></th>
        <td><input id="kr" type="text" class="form-control" placeholder="90" maxlength="3" id="score"></td>
        <th><label for="english" id="score">영어</label></th>
        <td><input id="en" type="text" class="form-control" placeholder="90" maxlength="3" id="score "></td>
        <th><label for="math" id="score">수학</label></th>
        <td><input id="ma" type="text" class="form-control" placeholder="90" maxlength="3" id="score"></td>
      </tr>
      <tr id="buttr">
        <td colspan="3"><button type="button" class="btn btn-outline-success" id="register">등록</button></td>
        <td colspan="3"><button type="button" class="btn btn-outline-success" id="allSearch">전체검색</button></td>
      </tr>
    </table>
      <div class="li_table bg-dark" id="list">
        <ul>
          <li>학번</li><li>이름</li><li>국어</li><li>영어</li><li>수학</li><li>평균</li>
        </ul>
      </div>
      
  </form>
      <div class="alert alert-warning alert-dismissible fade show" role="alert" id="case" >
        <div class="Allbtn">
          <button type="button" class="btn btn-dark cancle">취소</button>
        </div>
      </div> 
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" ></script>
</body>

</html>