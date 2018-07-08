package model.heuristic;


import model.graph.Graph;
import model.graph.util.HeuristicChecker;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class HeuristicContainer {
    //private final Map<String,Class<? extends SimpleUndirectedHeuristic>> undirectedContainer;
    //private final Map<String,Class<? extends SimpleHyperHeuristic>> hyperContainer;

    private final Map<String,Class<? extends Heuristic>> heuristics = new HashMap<>();


    /**
     * Idiom for thread save singleton. See.... Uses java static class creation contract
     * to ensure atomic creation of the instance.
     */
    public static class Holder {
        public static HeuristicContainer instance = new HeuristicContainer();
    }
    protected HeuristicContainer() {

    }

    public static HeuristicContainer getInstance() {
        return Holder.instance;
    }

    public void registerByClass(Class<? extends Heuristic> clazz) throws InstantiationException, IllegalAccessException  {
        Object o = clazz.newInstance();
        //TODO no if needed?
        if (o instanceof SimpleUndirectedHeuristic) {
            heuristics.put(clazz.getName(),clazz);
            //System.out.println(clazz.getName() + " of Type SimpleUndirectedHeuristic registered");
            System.out.println(clazz.getName()+ " registered");
        }else if (o instanceof SimpleHyperHeuristic) {
            heuristics.put(clazz.getName(),clazz);
            //System.out.println(clazz.getName() +" of Type SimpleHyperHeuristic registered");
            System.out.println(clazz.getName()+ " registered");
        }else {
            heuristics.put(clazz.getName(),clazz);
            System.out.println(clazz.getName()+ " registered");
            //TODO: throw exception
        }
    }


    //public Heuristic<?> getHeuristicByName()

    public void registerByName(String className)
            throws ClassNotFoundException, InstantiationException, IllegalAccessException {
        Class<? extends Heuristic> clazz = (Class<? extends Heuristic>) Class.forName(className);
        registerByClass(clazz);
    }

    public Heuristic getHeuristicForGraphByClass(Class<? extends Graph> graphClazz,
                                                 Class<? extends Heuristic> heuristicClazz)
            throws IllegalAccessException, InstantiationException {

        Class<? extends Heuristic> h = heuristics.get(heuristicClazz.getName());
        if (h == null) return null;
        if (HeuristicChecker.isApplicable(h,graphClazz)) {
            return h.newInstance();
        }
        return null;
    }

    public List<Class<? extends Heuristic>> getHeuristicClassesForGraph(Class<? extends Graph> graphClazz) {
        List<Class<? extends Heuristic>> list = new ArrayList();
        for (Class<? extends Heuristic> hc : heuristics.values()) {
            if (HeuristicChecker.isApplicable(hc,graphClazz)) {
            //if (graphClazz.isAssignableFrom(hc)) {
                list.add(hc);
            }
        }
        return list;

    }

}
