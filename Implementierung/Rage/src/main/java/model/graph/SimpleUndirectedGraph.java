package model.graph;

import generic.graph.SimpleHyperEdge;
import model.graph.util.GraphBFS;
import model.graph.util.SimpleUndirectedGraphBFS;
import model.heuristic.Heuristic;


import java.util.List;

public class SimpleUndirectedGraph extends Graph<SimpleUndirectedEdge> {
    public SimpleUndirectedGraph(GraphBFS bfsImpl) {
        super(bfsImpl);
    }

    @Override
    public void applyHeuristic(Heuristic heuristic) {
        heuristic.applyTo(this);
    }

    @Override
    public int maxDegree() {
        return 0;
    }

    @Override
    public int degree(Integer vertex) {
        return 0;
    }

    public SimpleUndirectedEdge createEdge(Integer vertex1, Integer vertex2) {
       //adjMatrixValid = false;
        SimpleUndirectedEdge e = new SimpleUndirectedEdge(vertex1, vertex2);
        vertices.add(vertex1);
        vertices.add(vertex2);
        this.edges.add(e);
        return e;
    }
}
