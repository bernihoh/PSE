package hello;



public class Edge {
	private EdgeData data;
	Edge(String id,String source,String target,String color ,String label){
	    this.data = new EdgeData(id,source,target,color,label);
    }

    public EdgeData getData() {
	    return data;
    }

}
