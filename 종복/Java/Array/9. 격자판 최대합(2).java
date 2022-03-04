import java.util.*;
class Main {	
	public int solution(int n, int[][] arr){
	   
        int maxSum = Integer.MIN_VALUE;
        int sum1, sum2;
      
        for(int i=0; i<n; i++){
           sum1 = sum2 = 0;
           for(int j=0; j<n; j++){
             sum1 += arr[i][j];
             sum2 += arr[j][i];
           }
           maxSum = Math.max(maxSum, sum1);
           maxSum = Math.max(maxSum, sum2);
        }
      
        sum1 = sum2 = 0;
      
        for(int i=0; i<n; i++){
           sum1 += arr[i][i];
           sum2 += arr[i][n-1-i];
        }
      
        maxSum = Math.max(maxSum, sum1);
        maxSum = Math.max(maxSum, sum2);
           
        return maxSum;
      
	}

	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int n=kb.nextInt();
		int[][] arr=new int[n][n];
		for(int i=0; i<n; i++){
			for(int j=0; j<n; j++){
				arr[i][j]=kb.nextInt();
			}
		}
		System.out.print(T.solution(n, arr));
	}
}
