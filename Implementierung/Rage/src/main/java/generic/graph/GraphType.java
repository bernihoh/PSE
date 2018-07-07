package generic.graph;

public enum GraphType {
    SIMPLE_UNDIRECTED_GRAPH("SimpleUndirectedGraph"),
    SIMPLE_HYPER_GRAPH("SimpleHyperGraph");

    private final String name;

    GraphType(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return name;
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
