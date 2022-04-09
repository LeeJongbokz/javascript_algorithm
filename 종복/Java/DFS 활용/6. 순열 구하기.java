import java.util.*;

public class Main{
	static int[] pm, ch, arr;
	static int n, m;
	public void DFS(int L){
	
	   if(L == m){
	       for(int i=0; i<m; i++){
	           System.out.print(pm[i] + " ");
	       }
	       System.out.println();
	       return; 
	       
	   }else{
	       for(int i=0; i<n; i++){
	           if(ch[i] == 0){
	               ch[i] = 1;
	               pm[L] = arr[i];
	               DFS(L+1);
	               ch[i] = 0;
	               pm[L] = 0; 
	           }
	       }
	   }

	}
	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		n=kb.nextInt();
		m=kb.nextInt();
		arr=new int[n];
		for(int i=0; i<n; i++) arr[i]=kb.nextInt();
		ch=new int[n];
		pm=new int[m];
		T.DFS(0);
	}
}
