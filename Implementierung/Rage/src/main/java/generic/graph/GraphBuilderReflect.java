package generic.graph;

import com.google.common.reflect.TypeToken;

public class GraphBuilderReflect<G extends Graph<E>,E extends Edge> {
    private GraphType graphType;

    /**
     * Empty anonymous inner class:
     * The purpose of this is to allow TypeToken to find the superclass of the instance -
     * which will preserve the type argument information.
     *
     * For example, although an ArrayList<String> object doesn't know that that its element type is String,
     * due to erasure, the superclass information is not lost, so new ArrayList<String>{} knows
     * that its superclass is ArrayList<String>, not just ArrayList. TypeToken uses that technique
     * to represent a constructed generic type
     */
    final TypeToken<E> edgeTypeToken = new TypeToken<E>(getClass()) {};
    final TypeToken<G> graphTypeToke = new TypeToken<G>(getClass()) {};

    public GraphBuilderReflect() {

    }

   // public static GraphBuilderReflect getSimpleUndirectedBuilder();

     public <E extends Edge> Graph<E> generateGraph(GraphProperties properties) {
        //inspect parameter G.
         System.out.println("CLAZZ:" +edgeTypeToken.getRawType().getClass().toString());
        SimpleUndirectedGraph g = new SimpleUndirectedGraph();
        return (Graph<E>) g;
        //inspect parameter E.




        /* try {
             Edge e = (Edge) edgeTypeToken.getRawType().newInstance();
             System.out.println("CLAZZ:" +e.getClass().toString());
         } catch (InstantiationException e1) {
             e1.printStackTrace();
         } catch (IllegalAccessException e1) {
             e1.printStackTrace();
         }

         generic.model.graph.GraphType type = properties.getGraphType();
         if (type == null) return null;
        switch (type) {
             case SIMPLE_HYPER_GRAPH:
                 //SimpleUndirectedGraphBuilder builder = new  SimpleUndirectedGraphBuilder();
                 //return (Graph<E>) builder.generateGraph();

             break;
             case SIMPLE_UNDIRECTED_GRAPH:
                 break;
             default:
         }
         //generic.model.graph.GraphType type;
        return null;*/
     };

    private GraphBuilderReflect<G, E> createGraphBuilder(generic.graph.GraphType type) {
        switch (type) {
            case SIMPLE_HYPER_GRAPH:

                break;
            case SIMPLE_UNDIRECTED_GRAPH:
                break;
            default:
        }
        return null;
    }
}
