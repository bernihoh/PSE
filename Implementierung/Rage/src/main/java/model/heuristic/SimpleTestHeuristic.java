package model.heuristic;

import generic.heuristic.HeuristicResult;
import model.graph.SimpleUndirectedTestGraph;

public class SimpleTestHeuristic extends Heuristic{
    public HeuristicResult applyTo(SimpleUndirectedTestGraph g) {
        System.out.println("SimpletestHeuristic");
        return null;
    }
}
