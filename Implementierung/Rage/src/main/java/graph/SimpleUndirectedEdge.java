/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package graph;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 *
 * @author tfi
 */
public class SimpleUndirectedEdge extends Edge{
    private Integer vertex1;
    private Integer vertex2;
    
    public SimpleUndirectedEdge(Integer vertex1,Integer vertex2) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
    }
    
    @Override
    public List<Integer> getVertices() {
        List<Integer> l = new ArrayList<Integer>();
        l.add(vertex1);
        l.add(vertex2);
        return l;
    }  
    
    public Integer getFirstVertex() {
        return vertex1;
    }
    
    public Integer getSecondVertex() {
        return vertex2;
    }
}
