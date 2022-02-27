public ArrayList<Integer> solution(String s, char t){
	    
	  ArrayList<Integer> answer = new ArrayList<>();
	  ArrayList<Integer> arr = new ArrayList<>();
      
      for(int i=0; i<s.length(); i++){
           if(s.charAt(i) == t){
              arr.add(i);
           }
      }
      
      for(int i=0; i<s.length(); i++){
          int pos = i;
          int minDistance = Integer.MAX_VALUE;
          
          for(int j=0; j<arr.size(); j++){
              minDistance = Math.min(minDistance, Math.abs(arr.get(j)-pos));
          }
          answer.add(minDistance);
          
      }
      
	
      return answer;
	}
