import java.util.*;
import java.io.*;

class Pair{
    int x;
    int y;
    Pair(int x, int y){
        this.x = x;
        this.y = y; 
    }
}


public class Main {	
	public int solution(int n, int m, int[] arr){
		int answer=0;
		Queue<Pair> q = new LinkedList<>();
		PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
		
		for(int i=0; i<arr.length; i++){
		    q.add(new Pair(arr[i], i));
		    pq.add(arr[i]);
		}
		
		int cnt = 0;
		
		while(true){
		    
		    if(q.peek().x == pq.peek()){
		        answer++;
		        if(m == q.peek().y){
		            break;
		        }
		        q.poll();
		        pq.poll();
		        
		    }else{
		        int x = q.peek().x;
		        int y = q.peek().y;
		        q.add(new Pair(x, y));
		        q.poll();
		        
		    }
		    
		}
	
		return answer;
	}

	public static void main(String[] args) throws IOException{
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int n=kb.nextInt();
		int m=kb.nextInt();
		int[] arr = new int[n];
		for(int i=0; i<n; i++){
			arr[i]=kb.nextInt();
		}
		System.out.println(T.solution(n, m, arr));	
	}
}
