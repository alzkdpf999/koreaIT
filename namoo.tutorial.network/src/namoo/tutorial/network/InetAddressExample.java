package namoo.tutorial.network;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class InetAddressExample {
	public static void main(String[] args) {
//		내 컴퓨터의 아이피주소 확인하기
//		IntenAdderss클래스는 ip address 추상화
		try {
			InetAddress ia= InetAddress.getLocalHost();
		String address =	ia.getHostAddress(); // ip가져오기
		String name=ia.getHostName();	
		System.out.println(address+" "+"\n"+name);
		
		//google 도메인 아이핀
		String domain="www.google.com";
		InetAddress go=InetAddress.getByName(domain);
			System.out.println(go.getHostAddress());
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
