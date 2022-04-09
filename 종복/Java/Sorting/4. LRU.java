import java.util.*;

public class Main {	
	public int[] solution(int size, int n, int[] arr){
		
	    int[] cache = new int[size];
	    
	    for(int i=0; i<size; i++){
	        cache[i] = 0;
	    }
	    
	    for(int i=0; i<arr.length; i++){
	        
	        int num = arr[i];
	        boolean cacheHit = false;
	        int pos = 0;
	        
	        for(int j=0; j<size; j++){
	            if(num == cache[j]){
	                cacheHit = true;
	                pos = j; 
	            }
	        }
	        
	        if(cacheHit == true){
	            
	            cache[pos] = 0; 
	            
	            for(int j=pos-1; j>=0; j--){
	                cache[j+1] = cache[j];
	            }
	            cache[0] = num;
	            
	            
	        }else{
	            
	            for(int j=size-2; j>=0; j--){
	                cache[j+1] = cache[j];
	            }
	            cache[0] = num;
	        }
	    }

	    
		return cache;
		
		
	}
	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int s=kb.nextInt();
		int n=kb.nextInt();
		int[] arr=new int[n];
		for(int i=0; i<n; i++) arr[i]=kb.nextInt();
		for(int x : T.solution(s, n, arr)) System.out.print(x+" ");
	}
}
