package hello;

public class Node {
    private String id; 
    private String label;
    private String x;
    private String y;
    private String size;   
    public Node(String id,String x,String y,String label) {
        this.id = id;
        this.size="1";
        this.label =label;
        this.x = x;
        this.y = y;
    }

    public String getId() {
        return id;
    }

    public String getLabel() {
        return label;
    }

    public String getSize() {
        return size;
    }

    public String getX() {
        return x;
    }

    public String getY() {
        return y;
    }
}
