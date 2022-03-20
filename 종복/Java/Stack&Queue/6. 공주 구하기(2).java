import java.util.*;
class Main {	
	
    public int solution(int n, int k){
		int answer=0;
		
		Queue<Integer> q = new LinkedList<>();
        for(int i=1; i<=n; i++){
            q.offer(i); 
        }
      
        while(!q.isEmpty()){
            
            for(int i=1; i<k; i++){
               q.offer(q.poll()); 
            }
            q.poll();
            if(q.size() == 1){
              answer = q.poll();
              break;
            }
        }
      
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
