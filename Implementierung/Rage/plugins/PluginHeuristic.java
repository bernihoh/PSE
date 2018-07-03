/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package plugins;

import graph.SimpleUndirectedGraph;
import heuristic.SimpleUndirectedHeuristic;

/**
 *
 * @author tfi
 */
public class TCPluginHeuristic implements SimpleUndirectedHeuristic{

    @Override
    public void applyTo(SimpleUndirectedGraph g) {
        System.out.println("plugin heuristic");
    }
    
  
    
}