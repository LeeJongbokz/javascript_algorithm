import java.util.*;

public class Main {	
	public String solution(String s1, String s2){
	     String answer = "YES";
      
         HashMap<Character, Integer> map = new HashMap<>();
          
         for(char c: s1.toCharArray()){
             if(map.containsKey(c)){
                map.put(c, map.get(c)+1);
             }else{
                map.put(c, 1);
             }
         }
      
         for(char c: s2.toCharArray()){
             if(map.containsKey(c)){
                map.put(c, map.get(c)-1);
                if(map.get(c) == 0){
                    map.remove(c);
                }
             }else{
               answer = "NO";
               break;
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
