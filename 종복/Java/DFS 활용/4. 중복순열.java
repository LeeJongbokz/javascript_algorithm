import java.util.*;

public class Main{
	static int[] pm;
	static int n, m;
	public void DFS(int L){
	   
	   if(L == m){
	        for(int i=0; i<m; i++){
	            System.out.print(pm[i]+ " ");
	        }
	        System.out.println();
	        return;
	   }else{
	       for(int i=1; i<=n; i++){
	           pm[L] = i;
	           DFS(L+1);
	           pm[L] = 0;
	       }
	   }
	   
	
	
	}
	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		n=kb.nextInt();
		m=kb.nextInt();
		pm=new int[m];
		T.DFS(0);
	}
}
