import java.util.*;

class Node{ 
    int data; 
    Node lt, rt; 
    public Node(int val) { 
        data=val; 
        lt=rt=null; 
    } 
} 
  
public class Main{ 
    Node root; 
    public void BFS(Node root){ 
	   Queue<Node> q = new LinkedList<>();
	   q.add(root);
	   int L = 0; 
	   
	   while(!q.isEmpty()){
	       int len = q.size();
	       System.out.print(L + ": " );
	       
	       for(int i=0; i<len; i++){
	           Node node = q.poll();
	           System.out.print(node.data + " ");
	           if(node.lt != null) q.add(node.lt);
	           if(node.rt != null) q.add(node.rt);
	       }
	       L++;
	       System.out.println();
	   }
	
    } 
  
    public static void main(String args[]) { 
        Main tree=new Main(); 
        tree.root=new Node(1); 
        tree.root.lt=new Node(2); 
        tree.root.rt=new Node(3); 
        tree.root.lt.lt=new Node(4); 
        tree.root.lt.rt=new Node(5); 
        tree.root.rt.lt=new Node(6); 
        tree.root.rt.rt=new Node(7);
        tree.BFS(tree.root); 
    } 
}
