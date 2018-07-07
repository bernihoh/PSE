package model.graph;

import model.graph.util.GraphBFS;
import model.heuristic.Heuristic;

import java.util.List;

public class SimpleHyperGraph extends Graph<SimpleHyperEdge> {
    public SimpleHyperGraph(GraphBFS bfsImpl) {
        super(bfsImpl);
    }

    @Override
    public void applyHeuristic(Heuristic heuristic) {
        heuristic.applyTo(this);
    }

    @Override
    public List<Integer> getVertices() {
        return null;
    }

    @Override
    public int getNumberOfVertices() {
        return 0;
    }

    @Override
    public List<Integer> getVerticesBFS(Integer startVertex) {
        return null;
    }

    @Override
    public int maxDegree() {
        return 0;
    }

    @Override
    public int degree(Integer vertex) {
        return 0;
    }
}
