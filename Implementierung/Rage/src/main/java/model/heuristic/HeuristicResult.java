/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.heuristic;


import model.graph.Edge;
import model.graph.Graph;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author Thomas Fischer 
 */
public class HeuristicResult {
    private final Graph graph;
    private final Heuristic heuristic;
    private final boolean success;
    private final Map<String,String> resultValues = new HashMap<>();
     private final Map<Edge,Integer> edgeColors;
    private final Map<Integer,Integer> vertexColors;

    public HeuristicResult(Graph g, Heuristic h, boolean success,
                           Map<Edge,Integer> edgeColors,
                           Map<Integer,Integer> vertexColors ) {
        graph = g;
        heuristic = h;
        this.success = success;
        this.edgeColors = edgeColors;
        this.vertexColors = vertexColors;
    }
    
    public Graph getGraph() {
        return graph;
    }
    
    public Heuristic getHeuristic() {
        return heuristic;
    }
    

    public Integer getColor(Edge e) {
            if (edgeColors == null || edgeColors.get(e) == null) {
            return -1;
        }
        
        Integer color = edgeColors.get(e);
        return color; 
    }
    
    public Integer getColor(Integer v) {
        System.out.println("getting vertex color: "+v);
        System.out.println(vertexColors.toString());
        if (vertexColors == null || vertexColors.get(v) == null) {
            return -1;
        }
        System.out.println("returning "+vertexColors.get(v));
        return vertexColors.get(v);
    }
    
    public boolean success() {
        return success;
    }
    
    public String getResultValue(String key) {
        return resultValues.get(key);
    }
    
    public void setResultValue(String key,String value) {
        resultValues.put(key, value);
    }
    
    public Map<String,String> getAllResultPairs() {
        return resultValues;
    }    
}
