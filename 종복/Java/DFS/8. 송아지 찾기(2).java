import java.util.*;

public class Main {
	int answer = 0;
	int[] dis = {1, -1, 5};
	int[] ch;
	
	public int BFS(int s, int e){
	
	    ch = new int[10001];
	    int L = 0; 
	    Queue<Integer> q = new LinkedList<>();
	    q.offer(s);
	    ch[s] = 1;
	    
	    while(!q.isEmpty()){
	        int len = q.size();
	        
	        for(int i=0; i<len; i++){
	            int x = q.poll();
	            
	            for(int j=0; j<3; j++){
	                int nx = x+dis[j];
	                if(nx == e) return L+1;
	                if(1<=nx && nx<=10000 && ch[nx] == 0){
	                    ch[nx] = 1;
	                    q.offer(nx);
	                }
	            }
	        }
	        L++;
	    }
	    return 0; 
	    
	    
	}

	

	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int s=kb.nextInt();
		int e=kb.nextInt();
		System.out.println(T.BFS(s, e));
	}	
}
