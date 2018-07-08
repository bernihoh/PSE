package model.graph;

import model.graph.util.DefaultRandomGenerator;
import org.junit.Test;

import static org.junit.Assert.*;

public class SimpleUndirectedGraphBuilderTest {

    @Test
    public void generateGraph() {
        //TODO mock random generator?
        SimpleUndirectedGraphBuilder builder = new SimpleUndirectedGraphBuilder(new DefaultRandomGenerator());
        //Todo mock graph properties
        GraphProperties prop = new GraphProperties();
        prop.setMaxDegree(3);
        prop.setNumOfVertices(10);
        prop.setGraphType(GraphType.SIMPLE_UNDIRECTED_GRAPH.toString());
        SimpleUndirectedGraph g = builder.generateGraph(prop);
        assertNotEquals(g,null);
        assertEquals(g.getNumberOfVertices(),10);
        assertEquals(g.maxDegree(),3);
    }
}