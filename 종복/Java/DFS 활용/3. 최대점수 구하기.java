import java.util.*;

public class Main{
	static int answer=Integer.MIN_VALUE, n, m;
	boolean flag=false;
	public void DFS(int L, int sum, int time, int[] ps, int[] pt){
	  
	   if(L == n){
	       if(time<=m){
	           answer = Math.max(answer, sum);
	       }
	       return; 
	   }else{
	       DFS(L+1, sum+ps[L], time+pt[L], ps, pt);
	       DFS(L+1, sum, time, ps, pt);
	   }
	
	}

	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		n=kb.nextInt();
		m=kb.nextInt();
		int[] a=new int[n];
		int[] b=new int[n];
		for(int i=0; i<n; i++){
			a[i]=kb.nextInt();
			b[i]=kb.nextInt();
		}
		T.DFS(0, 0, 0, a, b);
		System.out.println(answer);
	}
}
