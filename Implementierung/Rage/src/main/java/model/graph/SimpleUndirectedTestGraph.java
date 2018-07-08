package model.graph;

import model.graph.util.SimpleUndirectedBFS;
import model.heuristic.Heuristic;
import model.heuristic.HeuristicResult;

public class SimpleUndirectedTestGraph extends SimpleUndirectedGraph {

    public SimpleUndirectedTestGraph(SimpleUndirectedBFS bfsImpl) {
        super(bfsImpl);
    }

    @Override
    public HeuristicResult applyHeuristic(Heuristic heuristic) {
        return heuristic.applyTo(this);

    }
}
