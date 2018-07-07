package generic.graph;

public class RageGraphLibrary {
    private RageGraphLibrary() {

    }

    private static class Holder {
        public static RageGraphLibrary instance = new RageGraphLibrary();
    }

    public static RageGraphLibrary getInstance() {
        return Holder.instance;
    }

    public void init() {
        GraphBuilder.getInstance().registerGraphBuilder(
                GraphType.SIMPLE_UNDIRECTED_GRAPH.toString(),SimpleUndirectedGraphBuilder.class);
    }

    public DataPoolFactory getDataPoolFactory() {
        return null;
    }

    public SimpleUndirectedGraphBuilder getSimpleUndirectedGraphBuilder() {
        return new SimpleUndirectedGraphBuilder();
    }

    public GraphBuilder getGraphBuilder() {
        return GraphBuilder.getInstance();
    }



    public HeuristicFactory getHeuristicFactory() {
        return null;
    }
}
