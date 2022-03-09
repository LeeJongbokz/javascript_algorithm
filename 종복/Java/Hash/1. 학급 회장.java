import java.util.*;

public class Main {	
	public char solution(int n, String s){
	    char answer= ' ';
        int maxNum = 0;
      
        HashMap<Character, Integer> map = new HashMap<>();
      
        for(char c: s.toCharArray()){
            if(map.containsKey(c)){
               map.put(c, map.get(c)+1); 
            }else{
               map.put(c, 1);
            }
        }
      
        Set<Character> k = map.keySet();
      
        for(char c: k){
           if(maxNum < map.get(c)){
              maxNum = map.get(c);
              answer = c;
           }
        }
      
        return answer;
	}

	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int n=kb.nextInt();
		String str=kb.next();
		System.out.println(T.solution(n, str));
	}
}
