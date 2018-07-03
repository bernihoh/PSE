/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package heuristic.totalColoring.greedy;

import graph.Edge;
import graph.SimpleUndirectedGraph;
import heuristic.HeuristicResult;
import heuristic.HeuristicSingleStep;
import heuristic.SimpleUndirectedHeuristic;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author tfi
 */
public class TCGreedy implements SimpleUndirectedHeuristic, 
        HeuristicSingleStep<SimpleUndirectedGraph>{

    @Override
    public HeuristicResult applyTo(SimpleUndirectedGraph g) {
        
        Map<Edge,Integer> edgeColors = new HashMap<>();
        Map<Integer,Integer> vertexColors = new HashMap<>();
        HeuristicResult result = null;
        if (g == null || g.getVertices().size() < 1) {
            result = new HeuristicResult(g,this,false,edgeColors,vertexColors);
            //empty graph
            return result;
        }
        

        
        //starting at first vertex                
        Integer startVertex = g.getVertices().get(0);
        
        //breath first search ordering of vertices
        List<Integer> bfsVertices = g.getVerticesBFS(startVertex);        
        for (Integer i : bfsVertices) {
            
        }
        
        result = new HeuristicResult(g,this,true,edgeColors,vertexColors);
        System.out.println("greedy");
        return result;
        
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
