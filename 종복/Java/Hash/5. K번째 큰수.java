import java.util.*;
class Main {	
	public int solution(int[] arr, int n, int k){
	    
	    int answer = -1; 
	    
	    TreeSet<Integer> set = new TreeSet<>(Collections.reverseOrder());
		
		for(int i=0; i<n; i++){
		    for(int j=i+1; j<n; j++){
		        for(int l=j+1; l<n; l++){
		            int sum = arr[i]+arr[j]+arr[l];
		            set.add(sum);
		        }
		    }
		}
		int order = 1; 
		
        for(int num: set){
            if(order == k){
                answer = num;
                break;
            }
            order++;
        }
      
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
		System.out.println(T.solution(arr, n, k));
	}
}
