import java.util.*;
class Main {	
	public int solution(String a, String b){
		int answer=0;
        
        int lenA = a.length();
        int lenB = b.length();
            
        char bArray[] = b.toCharArray();
        Arrays.sort(bArray);
        b = new String(bArray);
      
        for(int i=0; i<=lenA-lenB; i++){
           String tmp = a.substring(i, i+lenB);
           char tmpArray[] = tmp.toCharArray();
           Arrays.sort(tmpArray);
           tmp = new String(tmpArray);
           
           if(b.equals(tmp)){
             answer += 1; 
           }
        }
      
		return answer;
	}
			

	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		String a=kb.next();
		String b=kb.next();
		System.out.print(T.solution(a, b));
	}
}
