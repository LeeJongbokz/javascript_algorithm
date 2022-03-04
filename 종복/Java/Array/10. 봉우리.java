import java.util.*;
class Main {	
	int[] dx={-1, 0, 1, 0};
	int[] dy={0, 1, 0, -1};
  
    public boolean isInside(int x, int y, int n){
        if(0<=x && x<n && 0<=y && y<n){
           return true;  
        }else{
          return false;
        }
    }
      
  
	public int solution(int n, int[][] arr){
		int answer=0;
      
        for(int i=0; i<n; i++){
           for(int j=0; j<n; j++){
             boolean isMountain = true;
             
             int num = arr[i][j];
             
             for(int k=0; k<4; k++){
               int ni = i+dx[k];
               int nj = j+dy[k];
               
               if(isInside(ni, nj, n) && (arr[ni][nj]>=arr[i][j])){
                   isMountain = false;
                   break;
               }
             }
             
             if(isMountain == true){
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
		int[][] arr=new int[n][n];
		for(int i=0; i<n; i++){
			for(int j=0; j<n; j++){
				arr[i][j]=kb.nextInt();
			}
		}
		System.out.print(T.solution(n, arr));
	}
}
