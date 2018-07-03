/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package heuristic;

import graph.Edge;
import graph.Graph;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author Thomas Fischer
 * @param <E>
 */
public abstract class HeuristicResult<E extends Edge> {
    private final Graph graph;
    private final Heuristic heuristic;
    private final boolean success;
    private final Map<String,String> resultValues = new HashMap<>();
    
    HeuristicResult(Graph g, Heuristic h,boolean success) {
        graph = g;
        heuristic = h;
        this.success = success;
    }

    public abstract Integer getColor(E e);
    
    public abstract Integer getColor(Integer v);
    
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
