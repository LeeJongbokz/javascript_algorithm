import java.util.*;

public class Main {	
	public int solution(int n, int m, int[][] arr){
		int answer=0;
		
		for(int i=1; i<=n; i++){
		    for(int j=i+1; j<=n; j++){
		        
		        int iCnt = 0;
		        int jCnt = 0;
		        
		        for(int k=0; k<m; k++){
		            
		            int iPos = 0;
		            int jPos = 0; 
		            
		            for(int l=0; l<n; l++){
		                
		                if(arr[k][l] == i){
		                    iPos = l;
		                }
		                if(arr[k][l] == j){
		                    jPos = l;
		                }
		             
		           }
		              
		            if(iPos < jPos){
		                iCnt += 1;
		            }else{
		                jCnt += 1;
		            }
		            
		        }
		        
		        if(iCnt == m || jCnt == m){
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
		int m=kb.nextInt();
		int[][] arr=new int[m][n];
		for(int i=0; i<m; i++){
			for(int j=0; j<n; j++){
				arr[i][j]=kb.nextInt();
			}
		}
		System.out.print(T.solution(n, m, arr));
	}
}
