import java.util.*;
class Main{
	static int n, m, answer=Integer.MAX_VALUE;
	
    public void DFS(int L, int sum, Integer[] arr){
      
        if(L>=answer){
           return;
        }
		
		if(sum == m){
		    answer = Math.min(answer, L);
		    return; 
		}else if(sum > m){
		    return;
		}else{
		    for(int i=0; i<arr.length; i++){
		        DFS(L+1, sum+arr[i], arr);
		    }
        }	
	}
	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		n=kb.nextInt();
		Integer[] arr=new Integer[n];
		for(int i=0; i<n; i++) arr[i]=kb.nextInt();
		Arrays.sort(arr, Collections.reverseOrder());
		m=kb.nextInt();
		T.DFS(0, 0, arr);
		System.out.println(answer);
	}
}
