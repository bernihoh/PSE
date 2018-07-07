/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package generic.heuristic;

import generic.graph.Edge;
import generic.graph.Graph;

import java.util.Map;

/**
 *
 * @author tfi
 */
public class SimpleUndirectedResult extends HeuristicResult{
    private final Map<Edge,Integer> edgeColors;
    private final Map<Integer, Integer> vertexColors;
    public SimpleUndirectedResult(Graph g, Heuristic h,boolean success,
            Map<Edge,Integer> edgeColors,
            Map<Integer,Integer> vertexColors) {
        super(g, h,success,edgeColors,vertexColors);
        this.edgeColors = edgeColors;
        this.vertexColors = vertexColors;

    }
 

    @Override
    public Integer getColor(Integer v) {
        throw new UnsupportedOperationException("Not supported yet."); 
    }
    

    @Override
    public Integer getColor(Edge e) {
         if (edgeColors == null || edgeColors.get(e) == null) {
            return -1;
        }
        
        Integer color = edgeColors.get(e);
        return color;        
    }
    
}
