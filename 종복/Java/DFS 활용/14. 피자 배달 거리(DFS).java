import java.util.*;
class Point{
	public int x, y;
	Point(int x, int y){
		this.x=x;
		this.y=y;
	}
}
public class Main {
	static int n, m, len, answer=Integer.MAX_VALUE;
	static int[] check;
	static ArrayList<Point> home, pizza;
	public void DFS(int L, int s){
	    
	     if(s == len+1){
	         return; 
	     }
	    
	     if(L == m){
	         
	         int totalMinDistance = 0;
	         
	         for(int i=0; i<home.size(); i++){
	             Point tmpHome = home.get(i);
	             int minDistance = Integer.MAX_VALUE;
	             
	             for(int j=0; j<len; j++){
	                 if(check[j] == 1){
	                     Point tmpPizza = pizza.get(j);
	                     int distance = Math.abs(tmpHome.x-tmpPizza.x)+Math.abs(tmpHome.y-tmpPizza.y);
	                     minDistance = Math.min(minDistance, distance);
	                 }
	             }
	             totalMinDistance += minDistance;
	         }
	         answer = Math.min(answer, totalMinDistance);
	         return; 
	         
	     }else{
	         check[s] = 1;
	         DFS(L+1, s+1);
	         check[s] = 0;
	         DFS(L, s+1);
	     }
	    
	}

	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		n=kb.nextInt();
		m=kb.nextInt();
		pizza=new ArrayList<>();
		home=new ArrayList<>();
		for(int i=0; i<n; i++){
			for(int j=0; j<n; j++){
				int tmp=kb.nextInt();
				if(tmp==1) home.add(new Point(i, j));
				else if(tmp==2) pizza.add(new Point(i, j));
			}
		}
		len=pizza.size();
		check=new int[len+10];
		T.DFS(0, 0);
		System.out.println(answer);
	}
}
