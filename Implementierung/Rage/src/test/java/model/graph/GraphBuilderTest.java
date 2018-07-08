package model.graph;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.instanceOf;
import static org.junit.Assert.*;

public class GraphBuilderTest {

    @Test
    public void registerGraphBuilder() {
    }

    @Test
    public void getGraphBuilder() {
        GraphProperties prop = new GraphProperties();
        prop.setGraphType(GraphType.SIMPLE_UNDIRECTED_GRAPH);
        prop.setNumOfVertices(3);
        prop.setMaxDegree(10);
        GraphBuilder b = GraphBuilder.getGraphBuilder(prop);
        assertThat(b,instanceOf(SimpleUndirectedGraphBuilder.class));
        prop.setGraphType(GraphType.SIMPLE_HYPER_GRAPH);
        b = GraphBuilder.getGraphBuilder(prop);
        assertThat(b,instanceOf(SimpleHyperGraphBuilder.class));
    }
}