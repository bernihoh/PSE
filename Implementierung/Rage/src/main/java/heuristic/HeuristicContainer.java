/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package heuristic;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author Thomas Fischer
 */
public class HeuristicContainer {
    private final Map<String,Class<? extends SimpleUndirectedHeuristic >> undirectedContainer;
    private final Map<String,Class<? extends SimpleHyperHeuristic >> hyperContainer;
    
    /**
     * Idiom for thread save singleton. See.... Uses java static class creation contract
     * to ensure atomic creation of the instance.
     */
    public static class Holder {
        public static HeuristicContainer instance = new HeuristicContainer();
    }
    protected HeuristicContainer() {
        this.undirectedContainer = new HashMap<>();
        this.hyperContainer = new HashMap<>();
    }
    
    public static HeuristicContainer getInstance() {
        return Holder.instance;
    }
    
    public void registerByClass(Class clazz) throws InstantiationException, IllegalAccessException  {
        Object o = clazz.newInstance();
        if (o instanceof  SimpleUndirectedHeuristic) {
            undirectedContainer.put(clazz.getName(),clazz);
            System.out.println(clazz.getName() + " of Type SimpleUndirectedHeuristic registered");
        }else if (o instanceof SimpleHyperHeuristic) {
            hyperContainer.put(clazz.getName(),clazz);
            System.out.println(clazz.getName() +" of Type SimpleHyperHeuristic registered");
        }else {
            System.out.println("invalid heuristic type "+clazz.getName());
            //TODO: throw exception
        }
    }
    
    public void registerByName(String className) 
            throws ClassNotFoundException, InstantiationException, IllegalAccessException {
        Class<?> clazz = Class.forName(className);
        
        
        registerByClass(clazz);
    }
    
    public SimpleUndirectedHeuristic createSimpleUndirectedHeuristicByClass(Class clazz) 
            throws InstantiationException, IllegalAccessException {
        
        return createSimpleUndirectedHeuristicByName(clazz.getName());
    }
    
    public SimpleHyperHeuristic createSimpleHyperHeuristicByClass(Class clazz) throws InstantiationException, IllegalAccessException {
        return createSimpleHyperHeuristicByName(clazz.getName());        
        
    }
    
    public SimpleUndirectedHeuristic createSimpleUndirectedHeuristicByName(String name) throws InstantiationException, IllegalAccessException {
        Class clazz;
        if ((clazz = undirectedContainer.get(name))!=null) {
            Object o = clazz.newInstance();
            
            if (o instanceof SimpleUndirectedHeuristic) {
                return (SimpleUndirectedHeuristic) o;
            }else {
                return null;
            }
        }
        return null;
    }
    
    public SimpleHyperHeuristic createSimpleHyperHeuristicByName(String name) throws InstantiationException, IllegalAccessException {
        Class clazz;
        if ((clazz = hyperContainer.get(name)) != null) {
            Object o = clazz.newInstance();
            if (o instanceof SimpleUndirectedHeuristic) {
                return (SimpleHyperHeuristic) o;
            }else {
                return null;
            }            
        }
        return null;
    }
    
    //public Heuristic<SimpleUndirectedGraph> createHeuristic
    
    
    
}
