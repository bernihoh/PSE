package hello;

import java.io.Serializable;

public class Edge implements Serializable {
	private static final long serialVersionUID = -7788619177798333712L;
    private String id;
    private String source;
    private String target;   
    private String label; 
    private String color;
    public Edge(String id,String source,String target,String color ) {
        this.id = id;
        this.source = source;
        this.target = target;
        this.color = color;
    }

    public String getId() {
    	return id;
    }

    public String getSource() {
    	return source;
    }

    public String getTarget() {
    	return target;
    }

    public String getColor() {
        return color;
    }
}
