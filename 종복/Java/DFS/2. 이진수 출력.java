import java.util.*;

public class Main {
	public void DFS(int n){
		
		if(n == 0){
		    return;
		}
		
		DFS(n/2);
		System.out.println(n%2);
	}

	public void solution(int n){
		DFS(n);
	}
	public static void main(String[] args){
		Main T = new Main();
		T.solution(15);
		//System.out.println(T.solution(3));
	}	
}
