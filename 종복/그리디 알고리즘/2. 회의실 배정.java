import java.util.*;

class Time implements Comparable<Time>{
    public int s, e;
    Time(int s, int e) {
        this.s = s;
        this.e = e;
    }
    @Override
    public int compareTo(Time o){
        if(this.e==o.e) return this.s-o.s;
		else return this.e-o.e;
    }
}

public class Main {
	public int solution(ArrayList<Time> arr, int n){
		int cnt = 0;
		
		Collections.sort(arr);
		int endTime = 0; 
		endTime = arr.get(0).e;
		cnt += 1;
		
		for(int i=0; i<n; i++){
		    if(arr.get(i).s >= endTime){
		        endTime = arr.get(i).e;
		        cnt += 1;
		    }
		}
		
		return cnt; 
	}

	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int n=kb.nextInt();
		ArrayList<Time> arr = new ArrayList<>();
		for(int i=0; i<n; i++){
			int x=kb.nextInt();
			int y=kb.nextInt();
			arr.add(new Time(x, y));
		}
		System.out.println(T.solution(arr, n));
	}
}
