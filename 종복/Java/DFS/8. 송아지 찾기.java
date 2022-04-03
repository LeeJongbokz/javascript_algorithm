import java.util.*;
class Main {
	int answer=0;
	int[] dis={1, -1, 5};
    int[] ch;
    Queue<Integer> q = new LinkedList<>();
    
  
    public int BFS(int s, int e){
        ch = new int[10010];
        q.add(s);
        ch[s] = 1;
        int L = 0; 
      
        while(!q.isEmpty()){
           
            int len = q.size();
          
            for(int i=0; i<len; i++){
                 int num = q.poll(); 
                 
                 for(int j=0; j<3; j++){
                     int pos = num + dis[j];
                   
                     if(pos == e){
                        return L+1;
                     }  
                     
                     if(1<=pos && pos<=10000 && ch[pos] == 0){
                        ch[pos] = 1;
                        q.add(pos);
                     }
                   
                }
              
            }
            L++;
        }
         
        return 0; 
    }
   

	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int s=kb.nextInt();
		int e=kb.nextInt();
		System.out.println(T.BFS(s, e));
	}	
}
