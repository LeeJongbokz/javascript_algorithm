import java.util.*;

public class Main {	
	public int solution(String str){
		int cnt=0;
		Stack<Character> stk = new Stack<>();
		
		for(int i=0; i<str.length(); i++){
		    if(str.charAt(i) == '('){
		        stk.push('(');
		    }else if(str.charAt(i) == ')'){
		        stk.pop();
		        if(str.charAt(i-1) == ')'){
		            cnt += 1;
		        }else{
		            cnt += stk.size();
		        }
		    }
		}
		
		
		return cnt;
	}
	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		String str=kb.next();
		System.out.println(T.solution(str));
	}
}
