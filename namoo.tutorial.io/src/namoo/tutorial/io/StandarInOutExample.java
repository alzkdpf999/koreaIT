package namoo.tutorial.io;

import java.io.IOException;
import java.util.Scanner;

// 표준 입출력
public class StandarInOutExample {

	public static void main(String[] args) throws IOException {
		/*System.out.println(10);
		System.out.println(System.out);
		System.out.println(System.in);*/
		//System.out 은 PrintStream class 
		System.out.print("당신 이름이 뭡니까?:");
//		byte[] buffer = new byte[10];
//		System.in.read(buffer);
//		String name = new String(buffer, 0 , buffer.length);
//		System.out.println(name);

		Scanner sc= new Scanner(System.in); //그냥 연습 위에 과정을 다 해줌  꼭 키보드가 아니여도 파일 가능
		String a= sc.nextLine();
		int age = sc.nextInt();
		System.out.println(a+ " : " + age);
	}
}
