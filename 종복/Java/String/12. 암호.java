import java.util.*;

public class Main {	
	public String solution(int n, String s){
		String answer="";
        String tmp = "";
      
        for(int i=0; i<s.length(); i++){
          if(s.charAt(i) == '#'){
             tmp += '1';
          }else{
             tmp += '0';
          }
          
          if(tmp.length() == 7){
             int num = 0;
             int cnt = 0; 
             
             for(int j=tmp.length()-1; j>=0; j--){
                 int tempNum = Character.getNumericValue(tmp.charAt(j));
                 num += tempNum*Math.pow(2, cnt++);
             }
             answer += (char)num;
             tmp = "";
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
