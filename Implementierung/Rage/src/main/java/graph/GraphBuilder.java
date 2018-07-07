package graph;

import java.util.HashMap;
import java.util.Map;

public class GraphBuilder {
    private Map<String,Class<?>> builderContainer = new HashMap<>();

    protected GraphBuilder() {

    }

    private static class Holder {
        public static GraphBuilder instance = new GraphBuilder();
    }

    protected void registerGraphBuilder(String type,Class<?> builder){
        builderContainer.put(type.toString(),builder);
    }

    public static SimpleUndirectedGraphBuilder simpleUndirectedGraphBuilder() {
        return new SimpleUndirectedGraphBuilder();
    }

    public static GraphBuilder getInstance() {
        return Holder.instance;
    }

    public Graph generateGraph(GraphProperties properties) {
        GraphType type = properties.getGraphType();
        if (type == null) {
            //TODO: throw exception?
            return null;
        }
        Class<?> clazz = builderContainer.get(type.toString());
        //GraphBuilder builder = builderContainer.get(type);
        if (clazz == null) {
            //TODO: throw exception?
            return null;
        }

        GraphBuilder builder = null;
        //TODO: handle exceptions
        try {
            Object o = clazz.newInstance();
            if (o instanceof  GraphBuilder) {
                builder = (GraphBuilder) o;
            }else {
                //TODO: exception
            }
            return builder.generateGraph(properties);
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        return null;
    };
}
