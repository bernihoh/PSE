/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.heuristic;

import com.google.common.reflect.TypeToken;
import generic.graph.Edge;
import generic.heuristic.HeuristicResult;
import model.graph.Graph;
import model.graph.SimpleHyperGraph;
import model.graph.SimpleUndirectedGraph;
import model.graph.SimpleUndirectedTestGraph;

/**
 *
 * @author Thomas Fischer
 */
public abstract class Heuristic{

     public  HeuristicResult applyTo(Graph g) {
         //TODO: throw exception
         System.out.println("Unsupported Graph Type");
         return null;
     };


     public  HeuristicResult applyTo(SimpleUndirectedGraph g) {
         //TODO: throw exception
         System.out.println("Unsupported Graph Type:simpleUndirectedGraph");
         return null;

     }

    public  HeuristicResult applyTo(SimpleHyperGraph g) {
        //TODO: throw exception
        System.out.println("Unsupported Graph Type:simpleHyperGraph");
        return null;

    }


    public HeuristicResult applyTo(SimpleUndirectedTestGraph g) {
         return applyTo( (SimpleUndirectedGraph) g);
     }
}
