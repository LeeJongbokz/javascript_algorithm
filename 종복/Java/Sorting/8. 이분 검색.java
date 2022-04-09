import java.util.*;

public class Main {
	public int solution(int n, int m, int[] arr){
	
	    int answer = 1;
	    
	    Arrays.sort(arr);
	    int start = 0;
	    int end = n-1;
	    
	    while(true){
	        
	        int mid = (start+end)/2;
	        
	        if(arr[mid] == m){
	            answer = mid+1;
	            break;
	        }else if(arr[mid] < m){
	            start = mid;
	        }else if(arr[mid] > m){
	            end = mid;
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
		for(int i=0; i<n; i++) arr[i]=kb.nextInt();
		System.out.println(T.solution(n, m, arr));
	}
}
