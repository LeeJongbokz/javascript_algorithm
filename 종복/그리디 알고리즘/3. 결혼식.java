import java.util.*;

class Time implements Comparable<Time>{
    public int arrive;
	public int leave;
    Time(int arrive, int leave) {
        this.arrive = arrive;
        this.leave = leave;
    }
    @Override
    public int compareTo(Time ob){
        if(this.arrive==ob.arrive) return this.leave-ob.leave;
		else return this.leave-ob.leave;
    }
}

public class Main {
	public int solution(ArrayList<Time> arr){
	
	       Collections.sort(arr);
	       int[] time = new int[200];
	       int maxNum = 0;
	       
	       for(int i=0; i<arr.size(); i++){
	           int arrive = arr.get(i).arrive;
	           int leave = arr.get(i).leave;
	           
	           for(int j=arrive; j<leave; j++){
	               time[j] += 1;
	           }
	       }
	       
	       for(int i=0; i<=72; i++){
	           maxNum = Math.max(maxNum, time[i]);
	       }
	       
	       return maxNum;
	}

	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int n=kb.nextInt();
		ArrayList<Time> arr = new ArrayList<>();
		for(int i=0; i<n; i++){
			int sT=kb.nextInt();
			int eT=kb.nextInt();
			arr.add(new Time(sT, eT));
		}
		System.out.println(T.solution(arr));
	}
}
