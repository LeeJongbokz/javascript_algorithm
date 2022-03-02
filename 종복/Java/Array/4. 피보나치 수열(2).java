import java.util.*;

public class Main {	
	public void solution(int n){
		int a=1;
		int b=1;
		int c;
		System.out.print(a+ " ");
		System.out.print(b+ " ");
		
		for(int i=3; i<=n; i++){
		    c = a+b;
		    System.out.print(c+ " ");
		    a = b;
		    b = c;
		}
		
	}
	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int n=kb.nextInt();
		T.solution(n);
	}
}
