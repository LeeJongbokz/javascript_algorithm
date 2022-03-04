import java.util.*;
class Main {	
	public int solution(int n, int[][] arr){
	    	
        int maxSum = Integer.MIN_VALUE;
      
        for(int i=0; i<n; i++){
           int tempSum1 = 0;
           int tempSum2 = 0; 
          
           for(int j=0; j<n; j++){
              tempSum1 += arr[i][j];
              tempSum2 += arr[j][i];
           }
          
           maxSum = Math.max(maxSum, tempSum1);
           maxSum = Math.max(maxSum, tempSum2);
       }
        
        
       int tempSum1 = 0;
       int tempSum2 = 0;
       
       for(int i=0; i<n; i++){
          tempSum1 += arr[i][i];
          tempSum2 += arr[i][n-1-i];
       }
      
       maxSum = Math.max(maxSum, tempSum1);
       maxSum = Math.max(maxSum, tempSum2); 
       
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
