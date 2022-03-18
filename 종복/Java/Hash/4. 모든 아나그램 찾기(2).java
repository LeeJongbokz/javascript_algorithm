import java.util.*;
class Main {	
		public int solution(String a, String b){
		int answer=0;
        
        int lenA = a.length();
        int lenB = b.length();
        HashMap<Character, Integer> mapA = new HashMap<>();
        HashMap<Character, Integer> mapB = new HashMap<>();
        
        for(int i=0; i<lenB-1; i++){
            mapA.put(a.charAt(i), mapA.getOrDefault(a.charAt(i),0)+1);
        }
        
        for(int i=0; i<lenB; i++){
            mapB.put(b.charAt(i), mapB.getOrDefault(b.charAt(i),0)+1);
        }
        
        for(int i=lenB-1; i<lenA; i++){
            mapA.put(a.charAt(i), mapA.getOrDefault(a.charAt(i), 0)+1);
          
            
            if(mapA.equals(mapB)){
                answer += 1;
            }
            
            mapA.put(a.charAt(i-(lenB-1)), mapA.get(a.charAt(i-(lenB-1)))-1);
         
            if(mapA.get(a.charAt(i-(lenB-1))) == 0){
               mapA.remove(a.charAt(i-(lenB-1)));    
            }
        }
        
      
		return answer;
	}	

	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		String a=kb.next();
		String b=kb.next();
		System.out.print(T.solution(a, b));
	}
}
