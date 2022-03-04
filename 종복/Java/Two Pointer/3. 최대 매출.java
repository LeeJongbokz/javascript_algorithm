import java.util.*;
class Main {	
	public int solution(int n, int k, int[] arr){
		int answer = 0;
        int sum=0;
        int maxSum = Integer.MIN_VALUE;
	    
        for(int i=0; i<k; i++){
           sum += arr[i]; 
        }
      
        maxSum = Math.max(maxSum, sum);
        
        for(int i=k; i<n; i++){
           sum += arr[i];
           sum -= arr[i-k];
           maxSum = Math.max(maxSum, sum);
        }
        
        answer = maxSum; 
      
		return answer;
	}

	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int n=kb.nextInt();
		int k=kb.nextInt();
		int[] arr=new int[n];
		for(int i=0; i<n; i++){
			arr[i]=kb.nextInt();
		}
		System.out.print(T.solution(n, k, arr));
	}
}
