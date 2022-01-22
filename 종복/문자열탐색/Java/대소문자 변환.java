import java.util.Scanner;
  
public class Main {
  
  public String solution(String str){
      
    String result = "";
    
    for(int i=0; i<str.length(); i++){
    	int num = (int)str.charAt(i);
    	System.out.println(num);
        if(65<=num && num<=90){
        	num += 32;  
        }else if(97<=num && num <= 122){
            num -= 32;
        } 
      
        result += (char)num;
      
    }
    
    return result;
    
  }
  
  
  public static void main(String[] args){
    
    Main T = new Main();
    Scanner kb=new Scanner(System.in);
    String str = kb.next();
    
    System.out.println(T.solution(str));
    return ;
  }
}
