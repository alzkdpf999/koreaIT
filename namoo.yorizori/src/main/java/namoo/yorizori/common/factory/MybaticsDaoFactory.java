package namoo.yorizori.common.factory;

import namoo.yorizori.dao.user.UserDao;
/**
 *	Mybatics 기술을 이용하는 Dao 객체를 생성하는 팩토리 
 * @author 정충효
 *
 */
public class MybaticsDaoFactory implements DaoFactory {

	@Override
	public UserDao getUserDao() {
		return null;
	}

}