/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.heuristic;

import model.graph.*;

/**
 *
 * @author Thomas Fischer
 */
public abstract class Heuristic{
     public  HeuristicResult applyTo(Graph g) {
         //TODO: throw exception
         System.out.println("Unsupported TGraph Type");
         return null;
     };


     public  HeuristicResult applyTo(SimpleUndirectedGraph g) {
         //TODO: throw exception
         System.out.println("Unsupported TGraph Type:simpleUndirectedGraph");
         return null;

     }

    public  HeuristicResult applyTo(SimpleHyperGraph g) {
        //TODO: throw exception
        System.out.println("Unsupported TGraph Type:simpleHyperGraph");
        return null;

    }


    public HeuristicResult applyTo(SimpleUndirectedTestGraph g) {
         return applyTo( (SimpleUndirectedGraph) g);
     }
}
