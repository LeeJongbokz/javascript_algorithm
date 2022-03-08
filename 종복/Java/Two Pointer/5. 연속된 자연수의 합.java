import java.util.*;
class Main {	
	public int solution(int n){
		int answer=0;
        
        for(int i=1; i<=(int)(n/2); i++){
          int sum = 0;
            
          for(int j=i; j<=n; j++){
              sum += j;
              if(sum == n){
                answer += 1;
                break;
              }else if(sum > n){
                break;
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
