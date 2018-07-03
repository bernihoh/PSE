/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package graph;

/**
 *
 * @author Thomas Fischer
 */
public abstract class GraphBuilder {
    public static SimpleUndirectedGraph generateSimpleUndirectedGraph() {
        SimpleUndirectedGraph g = new SimpleUndirectedGraph();
        g.createEdge(0, 1);
        g.createEdge(1, 2);
        g.createEdge(2, 3);
        g.createEdge(3, 4);
        g.createEdge(4, 0);
        g.createEdge(0, 3);        
        g.createEdge(4, 2);        
        g.createEdge(1, 4);        
        return g;   
    }
}
