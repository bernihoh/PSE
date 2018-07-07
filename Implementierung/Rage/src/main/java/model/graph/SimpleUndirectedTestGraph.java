package model.graph;

import model.graph.util.GraphBFS;
import model.heuristic.Heuristic;

public class SimpleUndirectedTestGraph extends SimpleUndirectedGraph {
    public SimpleUndirectedTestGraph(GraphBFS bfsImpl) {
        super(bfsImpl);
    }

    @Override
    public void applyHeuristic(Heuristic heuristic) {
        heuristic.applyTo(this);
    }
}
