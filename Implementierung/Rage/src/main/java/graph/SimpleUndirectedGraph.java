/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package graph;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.SortedSet;
import java.util.TreeSet;

/**
 *
 * @author Thomas Fischer
 */
public class SimpleUndirectedGraph extends Graph {
    private SortedSet<Integer> vertices = new TreeSet<>();
    private int[][] adjMatrix;
    private boolean adjMatrixValid = false;
    
    public SimpleUndirectedEdge createEdge(Integer vertex1,Integer vertex2) {
        adjMatrixValid = false;
        SimpleUndirectedEdge e = new SimpleUndirectedEdge(vertex1,vertex2);
        vertices.add(vertex1);
        vertices.add(vertex2);
        this.edges.add(e);
        return e;
    }
    
    public SimpleUndirectedGraph() {
        
    }
    
    @Override
    public List<Integer> getVertices() {
        List<Integer> l = new ArrayList<>(vertices);        
        return l;
    }

    @Override
    public int getNumberOfVertices() {
        return vertices.size();
    }

    private int[][] getAdjMatrix() {
        if (!adjMatrixValid) {
            adjMatrix = new int[vertices.size()][vertices.size()];
            for (int i = 0;i<vertices.size();i++) {
                for (int j=0;j<vertices.size();j++) {
                    adjMatrix[i][j] = 0;
                }
            }
            
            for (Edge e:getEdges()) {
                SimpleUndirectedEdge sue = (SimpleUndirectedEdge) e;
                adjMatrix[sue.getFirstVertex()][sue.getSecondVertex()]=1;
                adjMatrix[sue.getSecondVertex()][sue.getFirstVertex()]=1;
            }
            
            adjMatrixValid = true;
        }
        return adjMatrix;
    }
    
    @Override
    public List<Integer> getVerticesBFS(Integer startVertex) {
        List<Integer> l = new ArrayList<>();           
        HashMap<Integer,Boolean> visited = new HashMap();
        
        int[][] adjMatrix = getAdjMatrix();
        
        
        
        for (Integer v:vertices) {
            
        }
        
        Queue<Integer> queue = new LinkedList<>();
        for (Integer v:vertices) {
            visited.put(v, Boolean.FALSE);
        }
        
        visited.put(startVertex,Boolean.TRUE);
        queue.add(startVertex);
        l.add(startVertex);
        
        while (!queue.isEmpty()) {
            Integer v = queue.remove();
            
            //get all childs of v
            for (int i=0;i<vertices.size();i++) {
                if (adjMatrix[v][i] == 1) {
                    if (visited.get(i)==Boolean.FALSE) {
                        queue.add(i);
                        visited.put(i,Boolean.TRUE);
                        l.add(i);
                    }
                }
            }
        }
        
        
        
        return l;
    }
}
