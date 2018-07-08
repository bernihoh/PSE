package model.graph;

public class SimpleUndirectedLabeledEdge extends SimpleUndirectedEdge {
    private String label;
    SimpleUndirectedLabeledEdge(Integer v1,Integer v2,String label) {
        super(v1,v2);
        this.label = label;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }
}
