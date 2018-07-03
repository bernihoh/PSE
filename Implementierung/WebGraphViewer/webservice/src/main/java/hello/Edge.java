package hello;

import java.io.Serializable;

public class Edge implements Serializable {
	private static final long serialVersionUID = -7788619177798333712L;
    private String id;
    private String source;
    private String target;   
    private String label; 
    public Edge(String id,String source,String target) {
        this.id = id;
        this.source = source;
        this.target = target;
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
}
