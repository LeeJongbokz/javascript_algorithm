import java.util.*;

public class Main {
	static int n, m, answer=0;
	static ArrayList<ArrayList<Integer>> graph;
	static int[] ch, dis;

    public void BFS(int n){
        
        Queue<Integer> q = new LinkedList<>();
        q.add(n);
        dis[n] = answer;
        
        while(!q.isEmpty()){
            
            int num = q.poll();
            
            for(int i=0; i<graph.get(num).size(); i++){
                int next = graph.get(num).get(i);
                if(ch[next] == 0){
                    answer++;
                    break;
                }
            }
            
            
            for(int i=0; i<graph.get(num).size(); i++){
                int next = graph.get(num).get(i);
                if(ch[next] == 0){
                    ch[next] = 1;
                    dis[next] = answer;
                    q.add(next);
                }
            }
            
        }
        
    }
	
	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		n=kb.nextInt();
		m=kb.nextInt();
		graph=new ArrayList<ArrayList<Integer>>();
		for(int i=0; i<=n; i++){
			graph.add(new ArrayList<Integer>());
		}
		ch=new int[n+1];
		dis=new int[n+1];
		for(int i=0; i<m; i++){
			int a=kb.nextInt();
			int b=kb.nextInt();
			graph.get(a).add(b);
		}
		T.BFS(1);
		for(int i=2; i<=n; i++){
			System.out.println(i+" : "+dis[i]);
		}
	}	
}
