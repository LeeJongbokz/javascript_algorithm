import java.util.*;
class Main {	
	public int[] solution(int n, int[] arr){
	    
        
        for(int i=0; i<n; i++){
          
          int minNum = arr[i];
          int minPos = i;
          
          for(int j=i+1; j<n; j++){
              if(arr[j] < minNum){
                 minNum = arr[j];
                 minPos = j;
              }
          }
          
          int tmp;
          tmp = arr[i];
          arr[i] = minNum;
          arr[minPos] = tmp;

        }   
           
		return arr;
	}
	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int n=kb.nextInt();
		int[] arr=new int[n];
		for(int i=0; i<n; i++) arr[i]=kb.nextInt();
		for(int x : T.solution(n, arr)) System.out.print(x+" ");
	}
}
