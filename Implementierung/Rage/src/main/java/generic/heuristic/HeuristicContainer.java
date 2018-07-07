/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package generic.heuristic;

import generic.graph.Edge;
import generic.graph.Graph;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author Thomas Fischer
 */
public class HeuristicContainer {
    private final Map<String,Class<? extends SimpleUndirectedHeuristic>> undirectedContainer;
    private final Map<String,Class<? extends SimpleHyperHeuristic>> hyperContainer;

    private final Map<String,Class<? extends Heuristic<?,?>>> heuristics;
    
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
        this.heuristics = new HashMap<>();
    }
    
    public static HeuristicContainer getInstance() {
        return Holder.instance;
    }
    
    public void registerByClass(Class clazz) throws InstantiationException, IllegalAccessException  {
        Object o = clazz.newInstance();
        if (o instanceof SimpleUndirectedHeuristic) {
            undirectedContainer.put(clazz.getName(),clazz);
            System.out.println(clazz.getName() + " of Type SimpleUndirectedHeuristic registered");
        }else if (o instanceof SimpleHyperHeuristic) {
            hyperContainer.put(clazz.getName(),clazz);
            System.out.println(clazz.getName() +" of Type SimpleHyperHeuristic registered");
        }else {
            System.out.println("invalid generic.heuristic type "+clazz.getName());
            //TODO: throw exception
        }
    }

    public void registerByClass2(Class<? extends Heuristic<?,?>> clazz) {
        heuristics.put(clazz.getName(),clazz);
    }

    public <G extends Graph<E>,E extends Edge> void listHeuristicsForGraphType(Class<G> clazz) {
        //Class<? extends Heuristic<?>> h = heuristics.get(null);
      for ( Class<? extends Heuristic<?,?>> h: heuristics.values()) {
          try {
              Heuristic<?,?> o = h.newInstance();
              o.testToke(null);

          } catch (InstantiationException e) {
              e.printStackTrace();
          } catch (IllegalAccessException e) {
              e.printStackTrace();
          }
      }
    }

    public  Heuristic<? extends Graph,? extends Edge>
        getHeuristicByClass(Class<? extends Heuristic> clazz,
                            Class<? extends Graph> graphClazz,
                            Class<? extends Edge> edgeClazz) {
        Class<? extends Heuristic<?,?>> h = heuristics.get(clazz.getName());
        try {
            Heuristic<?,?> o = h.newInstance();

            if (o.isCastable(graphClazz,edgeClazz)) {
                System.out.println("Applyable");
                Heuristic<?,?> retH = (Heuristic<?, ?>) o;
                return retH;
            }

        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        return null;
    }

    //public Heuristic<?> getHeuristicByName()
    
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
            if (o instanceof SimpleHyperHeuristic) {
                return (SimpleHyperHeuristic) o;
            }else {
                return null;
            }            
        }
        return null;
    }
    
    //public Heuristic<SimpleUndirectedGraph> createHeuristic
    
    
    
}
