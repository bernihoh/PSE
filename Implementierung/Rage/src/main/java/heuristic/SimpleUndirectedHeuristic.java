/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package heuristic;

import graph.SimpleUndirectedEdge;
import graph.SimpleUndirectedGraph;

import java.util.List;

/**
 *
 * @author tfi
 */
public abstract class SimpleUndirectedHeuristic<G extends SimpleUndirectedGraph<E>,E extends SimpleUndirectedEdge>
        extends Heuristic<G,E> {
    private G g;

    public SimpleUndirectedHeuristic(G g) {
        this.g = g;
    }

   // @Override
   // public HeuristicResult applyTo(G g) {
     //   List<Integer> a = g.getVertices();
     //   Integer i = g.getVertices().get(1);
      //  return null;
   // }

    //@Override
    //public HeuristicResult applyTo(G g) {
     //   this.g = g;
     //   return null;
   // }

    //public abstract void appTo(G g);
}
