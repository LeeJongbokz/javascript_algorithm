import java.util.*;
class Main {	
	public char solution(int n, String s){
		char answer=' ';
	    HashMap<Character, Integer> map = new HashMap<Character, Integer>();
      
        for(char c: s.toCharArray()){
           map.put(c, map.getOrDefault(c, 0)+1); 
        }   
      
        int max = Integer.MIN_VALUE;
      
        for(char c: map.keySet()){
           if(max < map.get(c)){
              max = map.get(c);
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
