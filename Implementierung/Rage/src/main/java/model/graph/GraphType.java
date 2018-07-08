package model.graph;

public enum GraphType {
    SIMPLE_UNDIRECTED_GRAPH("SimpleUndirectedGraph",SimpleUndirectedGraph.class),
    SIMPLE_HYPER_GRAPH("SimpleHyperGraph",SimpleHyperGraph.class),
    TEST_GRAPH("TestGraph",SimpleUndirectedTestGraph.class);

    private final String name;
    private Class clazz;

    GraphType(String name,Class clazz) {
        this.name = name;
        this.clazz = clazz;
    }

    @Override
    public String toString() {
        return name;
    }

    public Class getGraphClass() {
        return clazz;
    }

    public static GraphType findByName(String name) {
        //use map if to slow
        for (GraphType type : values()) {
            if (type.toString().equals(name)) {
                return type;
            }
        }
        return null;
    }
}
