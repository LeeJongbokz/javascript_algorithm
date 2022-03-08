import java.util.*;
class Main {	
	
	public int solution(int n, int m, int[] arr){
	
	    int answer = 0; 
        int lt = 0; 
        int rt = 0;
        int sum = arr[0];
       
        while(true){
          if(sum == m){
              answer += 1;
              rt += 1;
              if(rt == n){
                 break;
              }
              sum += arr[rt];
          }else if(sum < m){
              rt += 1;
              
              if(rt == n){
                 break;
              }
              sum += arr[rt];
          }else if(sum > m){
              sum -= arr[lt];
              lt += 1;
          }
          
        }
      
      
		return answer;
	}


	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int n=kb.nextInt();
		int m=kb.nextInt();
		int[] arr=new int[n];
		for(int i=0; i<n; i++){
			arr[i]=kb.nextInt();
		}
		System.out.print(T.solution(n, m, arr));
	}
}
