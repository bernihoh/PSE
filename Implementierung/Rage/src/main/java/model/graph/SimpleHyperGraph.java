package model.graph;

import model.heuristic.Heuristic;
import model.heuristic.HeuristicResult;

import java.util.List;

public class SimpleHyperGraph extends Graph<SimpleHyperEdge> {
    public SimpleHyperGraph() {

    }

    @Override
    public HeuristicResult applyHeuristic(Heuristic heuristic) {
        return heuristic.applyTo(this);

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
