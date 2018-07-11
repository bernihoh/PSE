package hello;

public class EdgeData {

    private String id;
    private String source;
    private String target;
    private String label;
    private String color;
    public EdgeData(String id,String source,String target,String color ,String label) {
        this.id = id;
        this.source = source;
        this.target = target;
        this.color = color;
        this.label = label;
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

    public String getColorCode() {
        return color;
    }

    public String getLabel() { return label;}
}
