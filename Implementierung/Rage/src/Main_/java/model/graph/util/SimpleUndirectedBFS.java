package model.graph.util;

import model.graph.Edge;
import model.graph.Graph;
import model.graph.SimpleHyperGraph;
import model.graph.SimpleUndirectedGraph;

import java.util.List;

public interface SimpleUndirectedBFS {
    public List<Integer> getVerticesBFS(Integer startVertex,SimpleUndirectedGraph graph);

}
