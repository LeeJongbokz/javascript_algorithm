import java.util.*;
class Main {	
	public String solution(String str){
		String answer="YES";
        Stack<Character> stk = new Stack<>();
      
        for(int i=0; i<str.length(); i++){
            if(str.charAt(i) == '('){
               stk.push('('); 
            }else{
              if(stk.size() == 0){
                  return "NO"; 
              }else{
                 stk.pop();
              }
            }
        }
      
        if(stk.size() != 0){
            return "NO";
        }
      
		return answer;
	}

	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		String str=kb.next();
		System.out.println(T.solution(str));
	}
}
