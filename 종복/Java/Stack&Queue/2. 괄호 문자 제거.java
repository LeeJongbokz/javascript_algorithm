import java.util.*;
class Main {	
	public String solution(String str){
		String answer="";
        Stack<Character> stk = new Stack<>(); 
         
        for(char x: str.toCharArray()){
            if(x == '('){
                stk.push('(');
            }else if(x == ')'){
                stk.pop();
            }else{
                if(stk.isEmpty()){
                    answer += Character.toString(x);
                }
            }
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
