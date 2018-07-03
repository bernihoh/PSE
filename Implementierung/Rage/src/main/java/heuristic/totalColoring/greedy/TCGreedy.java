/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package heuristic.totalColoring.greedy;

import graph.SimpleUndirectedGraph;
import heuristic.HeuristicSingleStep;
import heuristic.SimpleUndirectedHeuristic;
import java.util.List;

/**
 *
 * @author tfi
 */
public class TCGreedy implements SimpleUndirectedHeuristic, 
        HeuristicSingleStep<SimpleUndirectedGraph>{

    @Override
    public void applyTo(SimpleUndirectedGraph g) {
        if (g.getVertices().size() < 1) {
            //empty graph
            return;
        }
        
        
        
        //starting at first vertex                
        Integer startVertex = g.getVertices().get(0);
        
        //breath first search ordering of vertices
        List<Integer> bfsVertices = g.getVerticesBFS(startVertex);        
        
        
        System.out.println("greedy");
    }

    @Override
    public boolean applyToSingleStep(SimpleUndirectedGraph g) {
        throw new UnsupportedOperationException("Not supported yet."); 
    }

    @Override
    public void restart() {
        throw new UnsupportedOperationException("Not supported yet."); 
    }

    @Override
    public boolean finished() {
        throw new UnsupportedOperationException("Not supported yet."); 
    }
    
  
    
}
