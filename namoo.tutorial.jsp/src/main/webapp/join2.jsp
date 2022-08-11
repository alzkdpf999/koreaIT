<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>



<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  
</head>
<body>
    
    <h2 style="font-weight: bold;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">jsp 연습</h2>
    <form method="post" action="userRegist.jsp">
    <table border="1" >
        <tr>
           <th> <label for="name">이름</label></th>
           <td><input type="text" name="name" id="name"></td>
        </tr>
        <tr>
            <th><label for="id">아이디</label> </th>
            <td>
                <input type="text" name="id" id="id">
                <input type="button" value="중복체크">
            </td>
        </tr>
        <tr>
            <th><label for="passwd">비밀번호</label></th>
            <td><input type="password" id="passwd" name="passwd"></td>
        </tr>
  
        <tr>
            <th><label for="email">이메일</label> </th>
            <td>
                <input type="email" name="email" id="email" placeholder="ex) naver.com" >

            </td>    
        </tr>
    </table><br>
    <input type="reset" value="취소">
    <input type="submit" value="저장">
    </form> 
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>
</body>
</html>

