/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package heuristic;

import graph.SimpleHyperGraph;
import graph.SimpleUndirectedGraph;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author Thomas Fischer
 */
public class HeuristicContainer {
    private final Map<String,Class<? extends SimpleUndirectedGraph >> undirectedContainer;
    private final Map<String,Class<? extends SimpleHyperGraph >> hyperContainer;
    

    public HeuristicContainer() {
        this.undirectedContainer = new HashMap<>();
        this.hyperContainer = new HashMap<>();
    }
    
    public void registerByClass(Class clazz) throws InstantiationException, IllegalAccessException  {
        Object o = clazz.newInstance();
        if (o instanceof  SimpleUndirectedHeuristic) {
            undirectedContainer.put(clazz.toString(),clazz);
            System.out.println("SimpleUndirectedHeuristic registered");
        }else if (o instanceof SimpleHyperHeuristic) {
            hyperContainer.put(clazz.toString(),clazz);
            System.out.println("SimpleHyperHeuristic registered");
        }else {
            System.out.println("invalid heuristic type");
            //TODO: throw exception
        }
    }
    
    public void registerByName(String className) 
            throws ClassNotFoundException, InstantiationException, IllegalAccessException {
        Class<?> clazz = Class.forName(className);
        
        
        registerByClass(clazz);
    }
    
    //public Heuristic<SimpleUndirectedGraph> createHeuristic
    
    
    
}
