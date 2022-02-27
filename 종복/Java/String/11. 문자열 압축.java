import java.util.*;
class Main {	
	  public String solution(String s){
		String answer = "";
		answer += s.charAt(0);
		int cnt = 1;
		
		for(int i=1; i<s.length(); i++){
		    
		    if(s.charAt(i-1) == s.charAt(i)){
		        cnt += 1;
		    }else{
		        if(cnt != 1){
		            answer += Integer.toString(cnt);
		        }
		        answer += s.charAt(i);
		        cnt = 1;
		    }
		    
		}
		
		if(cnt != 1){
		    answer += Integer.toString(cnt);
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
