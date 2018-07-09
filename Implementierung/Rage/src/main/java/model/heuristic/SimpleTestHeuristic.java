package model.heuristic;

import model.graph.Edge;
import model.graph.SimpleUndirectedLabeledEdge;
import model.graph.SimpleUndirectedTestGraph;
import model.graph.util.SimpleUndirectedBFSImpl;

import java.util.HashMap;
import java.util.Map;

public class SimpleTestHeuristic extends Heuristic {

    public HeuristicResult applyTo(SimpleUndirectedTestGraph g) {
        System.out.println("SimpletestHeuristic");
        Map<Edge, Integer> edgeColors = new HashMap<>();
        Map<Integer, Integer> vertexColors = new HashMap<>();
        HeuristicResult result=null;
        //TODO make copy constructor?
        //TODO or make getBFSImpl
        SimpleUndirectedTestGraph newgraph = new SimpleUndirectedTestGraph(new SimpleUndirectedBFSImpl());

        if (g == null || g.getVertices().size() < 1) {
            result = new HeuristicResult(g, this, false, edgeColors, vertexColors);

            //empty generic.model.graph
            return result;
        }

        for (Edge e: g.getEdges()) {
            SimpleUndirectedLabeledEdge labeledEdge = (SimpleUndirectedLabeledEdge) e;
            newgraph.createLabeledEdge(((SimpleUndirectedLabeledEdge) e).getFirstVertex(),((SimpleUndirectedLabeledEdge) e).getSecondVertex(),"-");
        }
        result = new HeuristicResult(newgraph,this,false,edgeColors,vertexColors);

        return result;
    }


}
