package hello;

import java.util.ArrayList;
import java.util.List;

public class GraphData {
   private List<Edge> edges = new ArrayList<Edge>();
    private List<Node> nodes = new ArrayList<Node>();
    public GraphData() {
        
        /*Node node = new Node("n1","0.1","0.1");            
        nodes.add(node);
        node = new Node("n2","0.9","0.9");
        Edge edge = new Edge("e1","n1","n2");
        edges.add(edge);
        nodes.add(node);*/
    };
	
	public void addEdge(Edge e) {
		edges.add(e);
	}
	
	public void addNode(Node n) {
		nodes.add(n);
	}

    public List<Edge> getEdges() {
        return edges;
    }
    public List<Node> getNodes() {
        return nodes;
    }

}
