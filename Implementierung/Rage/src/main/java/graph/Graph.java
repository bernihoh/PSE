/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package graph;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Thomas Fischer

 */
public abstract class Graph {    
    protected List<Edge> edges = new ArrayList<>();   
    
    public List<Edge> getEdges() {
        return edges;
    }
    
    public abstract List<Integer> getVertices();
    
    public abstract int getNumberOfVertices();
    
    public abstract List<Integer> getVerticesBFS(Integer startVertex);
            
  /*  public static Graph create(List edges) {
        Graph g = new Graph(edges);         
        return g;
    }
    
    private Graph(List edges) {
        
    }*/
       
    
    
}
