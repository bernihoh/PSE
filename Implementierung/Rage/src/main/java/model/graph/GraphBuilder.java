package model.graph;


import model.graph.util.XoRoShiRandomGenerator;

import java.util.HashMap;
import java.util.Map;

public abstract class GraphBuilder {
    private Map<String,Class<?>> builderContainer = new HashMap<>();

    protected GraphBuilder() {

    }

    private static class Holder {
        public static GraphBuilder simpleUndirectedInstance = new SimpleUndirectedGraphBuilder(new XoRoShiRandomGenerator());
        public static GraphBuilder simpleTestInstance = new SimpleTestGraphBuilder(new XoRoShiRandomGenerator());
        public static GraphBuilder simpleHyperInstance = new SimpleHyperGraphBuilder();
      //  public static GraphBuilder simpleHyperInstance = new GraphBuilder();
    }

    protected void registerGraphBuilder(String type,Class<?> builder){
        builderContainer.put(type.toString(),builder);
    }

    public static GraphBuilder getGraphBuilder(GraphProperties properties) {
        GraphType type = properties.getGraphType();
        switch( type) {
            case SIMPLE_UNDIRECTED_GRAPH:
                return Holder.simpleUndirectedInstance;
            case SIMPLE_HYPER_GRAPH:
                return Holder.simpleHyperInstance;
            case TEST_GRAPH:
                return Holder.simpleTestInstance;
            default:
                //TODO: exception
        }
        return null;
    }

    public abstract Graph generateGraph(GraphProperties properties);
}
