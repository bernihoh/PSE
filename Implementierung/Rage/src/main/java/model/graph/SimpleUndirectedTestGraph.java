package model.graph;

import model.graph.util.SimpleUndirectedBFS;
import model.heuristic.Heuristic;

public class SimpleUndirectedTestGraph extends SimpleUndirectedGraph {

    public SimpleUndirectedTestGraph(SimpleUndirectedBFS bfsImpl) {
        super(bfsImpl);
    }

    @Override
    public void applyHeuristic(Heuristic heuristic) {
        heuristic.applyTo(this);
    }
}
