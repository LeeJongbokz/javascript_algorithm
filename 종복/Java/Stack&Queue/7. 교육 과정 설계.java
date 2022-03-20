public String solution(String need, String plan){
		String answer="YES";
	    	
	    ArrayList<Integer> tmp = new ArrayList<>(); 	
        
        for(char x: need.toCharArray()){
            int pos = plan.indexOf(x);
            tmp.add(pos);
        }
        
        System.out.println(tmp);
        for(int i=0; i<tmp.size()-1; i++){
            if(tmp.get(i) > tmp.get(i+1)){
                return "NO";
            }
        }
        
      
		return answer;
	}
