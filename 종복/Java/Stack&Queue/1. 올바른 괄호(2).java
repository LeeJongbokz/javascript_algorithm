import java.util.*;
class Main {	
	public String solution(String str){
		String answer="YES";
        Stack<Character> stk = new Stack<>();
      
        for(char x: str.toCharArray()){
            if(x == '('){
              stk.push(x); 
            }else{
              if(stk.isEmpty()){
                return "NO"; 
              }else{
                stk.pop();
              }
           }
        }
          
        if(!stk.isEmpty()){
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
