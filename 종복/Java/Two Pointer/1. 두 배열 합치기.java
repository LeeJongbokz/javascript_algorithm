import java.util.*;
class Main {	
	public ArrayList<Integer> solution(int n, int m, int[] a, int[] b){
	      
          ArrayList<Integer> answer = new ArrayList<>();
          int aPos = 0;
          int bPos = 0;
      
          while(aPos < n && bPos < m){
            if(a[aPos] < b[bPos]){
                answer.add(a[aPos]);
                aPos++;
            }else{
                answer.add(b[bPos]);
                bPos++;
            }
          }
      
          while(aPos < n){
             answer.add(a[aPos]);
             aPos++;
          }
      
          while(bPos < m){
             answer.add(b[bPos]);
             bPos++;
          }
          
          return answer;               
      
	}

	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int n=kb.nextInt();
		int[] a=new int[n];
		for(int i=0; i<n; i++){
			a[i]=kb.nextInt();
		}
		int m=kb.nextInt();
		int[] b=new int[m];
		for(int i=0; i<m; i++){
			b[i]=kb.nextInt();
		}
		for(int x : T.solution(n, m, a, b)) System.out.print(x+" ");
	}
}
