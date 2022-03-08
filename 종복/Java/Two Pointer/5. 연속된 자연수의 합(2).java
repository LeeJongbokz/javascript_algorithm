import java.util.*;
class Main {	
		
	public int solution(int n){
		int answer=0;
        int lt = 1;
        int rt = 1;
        int sum = 0;
        
        for(rt=1; rt<=(int)(n/2)+1; rt++){
            sum += rt;
            if(sum == n) answer += 1;
            
            while(sum >= n){
                sum -= (lt++);
                if(sum == n){
                    answer += 1;
                }
            }
        }
               
       return answer; 
	}

	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int n=kb.nextInt();
		System.out.print(T.solution(n));
	}
}
