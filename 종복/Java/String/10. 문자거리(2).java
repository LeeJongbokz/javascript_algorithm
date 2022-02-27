import java.util.*;
class Main {	
	public ArrayList<Integer> solution(String s, char t){
	    
	  ArrayList<Integer> answer = new ArrayList<>();
	  
      int p = 1000;
      
      for(int i=0; i<s.length(); i++){
         if(s.charAt(i) == t){
            p = 0;
            answer.add(p);
         }else{
           p++;
           answer.add(p);
         }
      } 
        
      p = 1000;
      
      for(int i=s.length()-1; i>=0; i--){
         if(s.charAt(i) == t){
            p = 0; 
         }else{
           p++;
           int num = Math.min(answer.get(i), p);
           answer.set(i, num);
         }
      }
      
      return answer;
	}
	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		String str=kb.next();
		char c=kb.next().charAt(0);
		for(int x : T.solution(str, c)){
			System.out.print(x+" ");
		}
	}
}
