package model.graph;

import model.heuristic.HeuristicContainer;
import model.heuristic.SimpleHyperHeuristic;
import model.heuristic.SimpleTestHeuristic;
import model.heuristic.greedy.TCGreedy;

public class RageGraph {
    private static class Holder {
        public static RageGraph ourInstance = new RageGraph();
    }



    public static RageGraph getInstance() {
        return Holder.ourInstance;
    }

    public void init() {
        //register default heuristics
        try {
            HeuristicContainer.getInstance().registerByClass(TCGreedy.class);
            HeuristicContainer.getInstance().registerByClass(SimpleTestHeuristic.class);
            HeuristicContainer.getInstance().registerByClass(SimpleHyperHeuristic.class);
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
    }

    private RageGraph() {
    }
}
