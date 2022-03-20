import java.util.*;

public class Main {	
	public int solution(String str){
	  	int answer=0;
	    Stack<Integer> stk = new Stack<>();
	    
	    for(char x: str.toCharArray()){
	        if(Character.isDigit(x)){
	            stk.push(Character.getNumericValue(x));
	        }else{
	            
	            int num1 = stk.pop();
	            int num2 = stk.pop();
	            int num = 0;
	            
	            if(x == '+'){
	                num = num1+num2;
	            }else if(x == '-'){
	                num = num2-num1;
	            }else if(x == '*'){
	                num = num1*num2;
	            }else if(x == '/'){
	                num = num2/num1;
	            }
	            stk.push(num);
	        }
	    }
	    
	    answer = stk.pop();
	
	
		return answer;
	}
	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		String str=kb.next();
		System.out.println(T.solution(str));
	}
}
