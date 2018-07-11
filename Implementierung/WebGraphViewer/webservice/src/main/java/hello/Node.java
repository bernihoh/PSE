package hello;

public class Node {
    private NodeData data;
    public Node(String id, String x, String y, String label, String color) {
        this.data=new NodeData(id,x,y,label,color);
    }

    public NodeData getData() {
        return data;
    }
}
