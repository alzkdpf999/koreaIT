package namoo.yorizori.dao.cookbook;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import namoo.yorizori.dto.cookbook.Cookbook;

public class jdbcCookbookDao implements CookbookDao{
	private DataSource dataSource;

	public jdbcCookbookDao(DataSource dataSource) {
		this.dataSource = dataSource;
	}
	public void regist(Cookbook cookbook) throws SQLException{
		Connection con = null;
		PreparedStatement pstmt = null;
		// +는 낭비가 심해서 StringBuilder를 이용한다.
		StringBuilder sb = new StringBuilder();
		sb.append(" INSERT INTO cookbook(book_id,book_name,book_desc,author_id)")
		  .append(" VALUES(cookbook_seq.NEXTVAL,?,?,?)");
		
		try {
			con = dataSource.getConnection();
			String sql = sb.toString();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, cookbook.getBook_name());
			pstmt.setString(2, cookbook.getBook_desc());
			pstmt.setString(3, cookbook.getAuthor_id());
			pstmt.executeUpdate(); // sql 실행

		}
		finally {
			if (pstmt != null)
				pstmt.close();
			if (con != null)
				con.close(); // 예외 저대로 안발생
		}
	}
	public  List<Cookbook> view_All() throws SQLException{
		List<Cookbook> list = null;
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet result = null;
		// +는 낭비가 심해서 StringBuilder를 이용한다.
		StringBuilder sb = new StringBuilder();
		sb.append(" Select book_id,book_name,book_desc,author_id,view_num")
				.append(" from cookbook")
				.append(" ORDER BY book_id");
		
		try {
			con = dataSource.getConnection();
			String sql = sb.toString();
			pstmt = con.prepareStatement(sql);
			result = pstmt.executeQuery();
			list = new ArrayList<Cookbook>();
			while(result.next()) {
				Cookbook book = createbook(result);
				list.add(book);
			}
		} finally {
			if (result != null)
				result.close();
			if (pstmt != null)
				pstmt.close();
			if (con != null)
				con.close(); // 예외 저대로 안발생
		}
		return list;
	}
	
	
	private Cookbook createbook(ResultSet result) throws SQLException {
		Cookbook book = new Cookbook();
		book.setBook_id(result.getString("book_id"));
		book.setBook_name(result.getString("book_name"));
		book.setBook_desc(result.getString("book_desc"));
		book.setAuthor_id(result.getString("author_id"));
		book.setView_num(result.getString("view_num"));
		return book;
	}
	public  Cookbook view_All(String book_id) throws SQLException{
		Cookbook cookbook = null;
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet result = null;
		// +는 낭비가 심해서 StringBuilder를 이용한다.
		StringBuilder sb = new StringBuilder();
		sb.append(" Select book_id,book_name,book_desc,author_id,view_num")
				.append(" from cookbook")
				.append(" WHERE book_id = ?")
				.append(" ORDER BY book_id");
		
		try {
			con = dataSource.getConnection();
			String sql = sb.toString();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1,book_id);
			result = pstmt.executeQuery();
			if(result.next()) {
				cookbook = createbook(result);
			}
		} finally {
			if (result != null)
				result.close();
			if (pstmt != null)
				pstmt.close();
			if (con != null)
				con.close(); // 예외 저대로 안발생
		}
		return cookbook;
	}
	
}







