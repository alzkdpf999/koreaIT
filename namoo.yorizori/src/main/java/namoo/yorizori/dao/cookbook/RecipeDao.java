package namoo.yorizori.dao.cookbook;

import java.sql.SQLException;
import java.util.List;

import namoo.yorizori.dto.cookbook.Recipe;

public interface RecipeDao {
	public void regist(Recipe recipe) throws SQLException;
	public  List<Recipe> view_All(int book_id) throws SQLException;
	
	public Recipe image(int recipe_id) throws SQLException;
}