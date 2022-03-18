import java.util.*;

public class Main {	
	public int solution(String a, String b){
		int answer=0;
        
        HashMap<Character, Integer> mapA = new HashMap<>();
        HashMap<Character, Integer> mapB = new HashMap<>();
        
        int lenA = a.length();
        int lenB = b.length();
        int L = lenB-1;
        
        for(int i=0; i<lenB; i++){
            mapB.put(b.charAt(i), mapB.getOrDefault(b.charAt(i), 0)+1);
        }
        
        for(int i=0; i<L; i++){
            mapA.put(a.charAt(i), mapA.getOrDefault(a.charAt(i), 0)+1);
        }
        
        int lt = 0; 
        
        for(int rt=L; rt<lenA; rt++){
            mapA.put(a.charAt(rt), mapA.getOrDefault(a.charAt(rt), 0)+1);
  
            if(mapA.equals(mapB)){
                answer += 1;
            }
            mapA.put(a.charAt(lt), mapA.get(a.charAt(lt))-1);
            if(mapA.get(a.charAt(lt)) == 0){
                mapA.remove(a.charAt(lt));
            }
            lt++;
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
