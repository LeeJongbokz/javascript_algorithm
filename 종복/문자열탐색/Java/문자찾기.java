import java.util.Scanner;
  
public class Main {
  
  public int solution(String str, char c){
    
     int answer = 0; 
   	 str = str.toUpperCase();
     c = Character.toUpperCase(c);
    
     for(int i=0; i<str.length(); i++){
       if(str.charAt(i) == c){
      	    answer += 1;
       }
     }
    
     return answer; 
  }
   
 
  public static void main(String[] args){
    
    Main T = new Main();
    Scanner kb=new Scanner(System.in);
    String str = kb.next();
    char c = kb.next().charAt(0);
    
    System.out.println(T.solution(str, c));
  }
}
