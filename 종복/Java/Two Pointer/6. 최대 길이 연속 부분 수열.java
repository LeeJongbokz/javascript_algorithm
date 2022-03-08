import java.util.*;
class Main {	
		public int solution(int n, int k, int[] arr){
		int answer=0, cnt=0, rt=0;
		
		ArrayList<Integer> tmp = new ArrayList<Integer>();
		
		for(rt=0; rt<n; rt++){
		    if(arr[rt] == 1){
		        tmp.add(1);
		    }else if(arr[rt] == 0){
		        tmp.add(0);
		        cnt += 1;
		    }
		    
		    while(cnt > k){
		        int num = tmp.remove(0);
		        if(num == 0){
		            cnt--;
		        }
		    }
		    if(answer < tmp.size()){
		        answer = tmp.size();
		    }
        }
		
		return answer;
	}
	public static void main(String[] args){
		Main T = new Main();
		Scanner kb = new Scanner(System.in);
		int n=kb.nextInt();
		int k=kb.nextInt();
		int[] arr=new int[n];
		for(int i=0; i<n; i++){
			arr[i]=kb.nextInt();
		}
		System.out.print(T.solution(n, k, arr));
	}
}
