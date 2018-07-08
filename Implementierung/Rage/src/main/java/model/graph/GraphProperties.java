package model.graph;

import model.graph.util.Properties;

public class GraphProperties extends Properties {
    public enum PropertyKey {
        GRAPH_TYPE("GraphType"),
        NUMBER_OF_VERTICES("NumOfVertices"),
        MAX_DEGREE("MaxDegree"),
        MIN_DEGREE("MinDegree");

        private final String keyString;

        PropertyKey(String keyString) {
            this.keyString = keyString;
        }

        @Override
        public String toString() {
            return keyString;
        }
    }

    public void setGraphType(GraphType type) {
        this.setProperty(PropertyKey.GRAPH_TYPE.toString(),type.toString());
    }

    public void setGraphType(String typeName) {
        this.setProperty(PropertyKey.GRAPH_TYPE.toString(),typeName);
    }

    public GraphType getGraphType() {
        String type = this.getProperty(PropertyKey.GRAPH_TYPE.toString());
        return GraphType.findByName(type);
    }

    public String getGraphTypeName() {
        String type = this.getProperty(PropertyKey.GRAPH_TYPE.toString());
        return type;
    }

    public void setNumOfVertices(int num) {
        this.setProperty(PropertyKey.NUMBER_OF_VERTICES.toString(),String.valueOf(num));

    }

    public int getNumOfVertices() {
        String numString = this.getProperty(PropertyKey.NUMBER_OF_VERTICES.toString());
        if (numString != null) {
            try {
                final Integer num = Integer.valueOf(numString);
                return num;
            } catch (NumberFormatException e) {
                return 0;
            }

        }
        return 0;
    }

    public void setMaxDegree(int maxDegree) {
        this.setProperty(PropertyKey.MAX_DEGREE.toString(),String.valueOf(maxDegree));
    }

    public int getMaxDegree() {
        String degreeString = this.getProperty(PropertyKey.MAX_DEGREE.toString());
        if (degreeString != null) {
            try {
                final Integer num = Integer.valueOf(degreeString);
                return num;
            } catch (NumberFormatException e) {
                return 0;
            }

        }
        return 0;
    }
}
