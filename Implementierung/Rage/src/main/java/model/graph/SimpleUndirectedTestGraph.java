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

    @Override
    public SimpleUndirectedEdge createEdge(Integer vertex1, Integer vertex2) {
         return createLabeledEdge(vertex1, vertex2,"");
    }
    public SimpleUndirectedLabeledEdge createLabeledEdge(Integer vertex1, Integer vertex2,String label) {
        //adjMatrixValid = false;
        SimpleUndirectedLabeledEdge e = new SimpleUndirectedLabeledEdge(vertex1, vertex2,label);
        vertices.add(vertex1);
        vertices.add(vertex2);
        this.edges.add(e);
        return e;
    }
}
