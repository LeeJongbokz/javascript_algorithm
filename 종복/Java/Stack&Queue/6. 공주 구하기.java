import java.util.*;
class Main {	
	
    public int solution(int n, int k){
		int answer=0;
		
		Queue<Integer> q = new LinkedList<Integer>();
		
		for(int i=1; i<=n; i++){
		    q.add(i);
		}
		
		while(true){
		    
		    if(q.size() == 1){
		        break;
		    }
		    
		    for(int i=1; i<=k; i++){
		        int num = q.poll();
		        if(i != k){
		            q.add(num);
		        }
		    }
		}
		
	    answer = q.poll();  	
      
		return answer;
	}
	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int n=kb.nextInt();
		int k=kb.nextInt();
		System.out.println(T.solution(n, k));
	}
}
