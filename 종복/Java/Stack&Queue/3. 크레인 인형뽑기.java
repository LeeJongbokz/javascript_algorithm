import java.util.*;

public class Main {	
	public int solution(int[][] board, int[] moves){
		int answer=0;
	    int N = board[0].length;      
	    Stack<Integer> stk = new Stack<>();      
	    
	    for(int i=0; i<moves.length; i++){
	        int pos = moves[i]-1;
	        
	        for(int j=0; j<N; j++){
	            int num = board[j][pos];
	            if(num == 0){
	                continue;
	            }
	            
	            if(stk.isEmpty()){
	                stk.push(num);
	            }else{
	                if(stk.peek() == num){
	                    stk.pop();
	                    answer += 2;
	                }else{
	                    stk.push(num);
	                }
	            }
	            board[j][pos] = 0;
	            break;
	        }
	        
	    }    
	
		return answer;
	}
	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int n=kb.nextInt();
		int[][] board=new int[n][n];
		for(int i=0; i<n; i++){
			for(int j=0; j<n; j++){
				board[i][j]=kb.nextInt();
			}
		}
		int m=kb.nextInt();
		int[] moves=new int[m];
		for(int i=0; i<m; i++) moves[i]=kb.nextInt();
		System.out.println(T.solution(board, moves));
	}
}
