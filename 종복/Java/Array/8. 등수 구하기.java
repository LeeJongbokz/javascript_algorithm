import java.util.*;
class Main {	
	public int[] solution(int n, int[] arr){
        int[] answer = new int[arr.length];
      
        for(int i=0; i<n; i++){
          int num = arr[i];
          int cnt = 0; 
          for(int j=0; j<n; j++){
              if( (i != j) && num < arr[j]){
                  cnt += 1;
              }
          }
          answer[i] = cnt+1;
        }
      
        return answer;
		
	}
	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int n=kb.nextInt();
		int[] arr=new int[n];
		for(int i=0; i<n; i++){
			arr[i]=kb.nextInt();
		}
		for(int x :T.solution(n, arr)) System.out.print(x+" ");
	}
}
