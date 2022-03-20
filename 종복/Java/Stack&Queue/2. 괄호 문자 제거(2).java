import java.util.*;
class Main {	
	public String solution(String str){
		String answer="";
        Stack<Character> stk = new Stack<>(); 
         
        for(char x: str.toCharArray()){
           if(x == ')'){
             while(stk.pop() != '(');
           }else{
             stk.push(x); 
           }
        }
       
        for(int i=0; i<stk.size(); i++){
           answer += stk.get(i); 
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
