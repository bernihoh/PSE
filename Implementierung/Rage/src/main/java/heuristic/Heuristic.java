/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package heuristic;

import com.google.common.reflect.TypeToken;
import graph.Edge;
import graph.Graph;

/**
 *
 * @author Thomas Fischer
 * @param <G>
 */
public abstract class Heuristic<G extends Graph<E>,E extends Edge>{
     protected final TypeToken<G> graphTypeToken = new TypeToken<G>(getClass()) {};
     protected final TypeToken<E> edgeTypeToken = new TypeToken<E>(getClass()) {};
     public  abstract HeuristicResult applyTo(G g);

     public <G2 extends Graph<E>,E extends Edge> boolean applyableTo(Class<? extends G2> clazz) {
         if (graphTypeToken.getRawType().getName().equals(clazz.getName()) &&
                 edgeTypeToken.getRawType().getName().equals((clazz.getName()))) {
            return true;
         }
         return false;
     }
    public boolean isCastable(
            Class<? extends Graph> graphClazz,Class<? extends Edge> edgeClazz) {
     if (graphTypeToken.getRawType().getName().equals( graphClazz.getName()) &&
            edgeTypeToken.getRawType().getName().equals((edgeClazz.getName()))) {
        return true;
    }
         return false;
}

     public void testToke(G g)
     {
         //System.out.println(graphTypeToken.getRawType().getClass().isInstance(g));
         //System.out.println("Greedy CLAZZ2:" + graphTypeToken.getRawType().toString());
         //Class<? extends G> gg = (Class<? extends G>) r;
         System.out.println("Graph Clazz:" + graphTypeToken.getRawType().getName());
         System.out.println("Edge Clazz:" + edgeTypeToken.getRawType().getName());
         try {
             G g2 = (G) graphTypeToken.getRawType().newInstance();
             //System.out.println(g2.getClass().getName());
         } catch (InstantiationException e) {
             e.printStackTrace();
         } catch (IllegalAccessException e) {
             e.printStackTrace();
         }


     };
  
}
