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
 * @param <E>

 */
public abstract class Graph<E extends Edge> {    
    protected List<E> edges = new ArrayList<>();   
    
    /**
     *
     * @return
     */
    public List<E> getEdges() {
        return edges;
    }
    
    public abstract List<Integer> getVertices();
    
    public abstract int getNumberOfVertices();
    
    public abstract List<Integer> getVerticesBFS(Integer startVertex);
    
    public abstract int maxDegree();
    public abstract int degree(Integer vertex);
            
  /*  public static Graph create(List edges) {
        Graph g = new Graph(edges);         
        return g;
    }
    
    private Graph(List edges) {
        
    }*/
       
    
    
}
