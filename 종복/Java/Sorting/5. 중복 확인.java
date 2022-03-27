import java.util.*;
class Main {	
	public String solution(int n, int[] arr){
	  
        String answer = "D";
        HashSet<Integer> set = new HashSet<>();
      
        for(int i=0; i<arr.length; i++){
             set.add(arr[i]);  
        }
       
        if(set.size() == n){
           answer = "U"; 
        }
       
		return answer;
	}
	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int n=kb.nextInt();
		int[] arr=new int[n];
		for(int i=0; i<n; i++) arr[i]=kb.nextInt();
		System.out.println(T.solution(n, arr));
	}
}
