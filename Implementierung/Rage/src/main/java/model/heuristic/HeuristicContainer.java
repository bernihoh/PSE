package model.heuristic;


import java.util.HashMap;
import java.util.Map;

public class HeuristicContainer {
    //private final Map<String,Class<? extends SimpleUndirectedHeuristic>> undirectedContainer;
    //private final Map<String,Class<? extends SimpleHyperHeuristic>> hyperContainer;

    private final Map<String,Class<?>> heuristics = new HashMap<>();


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

    public void registerByClass(Class clazz) throws InstantiationException, IllegalAccessException  {
        Object o = clazz.newInstance();
        if (o instanceof SimpleUndirectedHeuristic) {
            heuristics.put(clazz.getName(),clazz);
            System.out.println(clazz.getName() + " of Type SimpleUndirectedHeuristic registered");
        }else if (o instanceof SimpleHyperHeuristic) {
            heuristics.put(clazz.getName(),clazz);
            System.out.println(clazz.getName() +" of Type SimpleHyperHeuristic registered");
        }else {
            System.out.println("invalid generic.heuristic type "+clazz.getName());
            //TODO: throw exception
        }
    }


    //public Heuristic<?> getHeuristicByName()

    public void registerByName(String className)
            throws ClassNotFoundException, InstantiationException, IllegalAccessException {
        Class<?> clazz = Class.forName(className);


        registerByClass(clazz);
    }

}
