import java.util.*;

public class Main {
	static int n;
	static int[] ch;
	public void DFS(int L){
		
		if(L == n+1){
		    for(int i=1; i<=n; i++){
		        if(ch[i] != 0){
		          System.out.print(ch[i]+ " ");
		        }
		    }
		    System.out.println();
		    return;
		    
		}else{
		    ch[L] = L;
		    DFS(L+1);
		    ch[L] = 0;
		    DFS(L+1);
		}
		
	}

	public static void main(String[] args){
		Main T = new Main();
		n=4;
		ch=new int[n+1];
		T.DFS(1);
	}	
}
