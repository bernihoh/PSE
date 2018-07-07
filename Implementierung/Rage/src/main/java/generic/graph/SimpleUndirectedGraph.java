/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package generic.graph;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Queue;
import java.util.SortedSet;
import java.util.TreeSet;

/**
 *
 * @author Thomas Fischer
 */
public class SimpleUndirectedGraph<E extends SimpleUndirectedEdge> extends Graph<E> {

    private final SortedSet<Integer> vertices = new TreeSet<>();
    private int[][] adjMatrix;
    private boolean adjMatrixValid = false;

    public SimpleUndirectedEdge createEdge(Integer vertex1, Integer vertex2) {
        adjMatrixValid = false;
        SimpleUndirectedEdge e = new SimpleUndirectedEdge(vertex1, vertex2);
        vertices.add(vertex1);
        vertices.add(vertex2);
        this.edges.add((E) e);
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
    
    /**
     * Creates a adjacenzmatrix and stores it. When the generic.model.graph is changed
     * the matrix is invalidad in will be created again.
     * Element is -1 if not connect, else the position of the edge connecting
     * the verices in the internal array list.
     * @return The adjazenzmatrix of the generic.model.graph.
     */
    private int[][] getAdjMatrix() {
        
        if (!adjMatrixValid) {
            adjMatrix = new int[vertices.size()][vertices.size()];
            for (int i = 0; i < vertices.size(); i++) {
                for (int j = 0; j < vertices.size(); j++) {
                    adjMatrix[i][j] = -1;
                }
            }
            int pos = 0;
            for (Edge e : getEdges()) {
                try {
                    SimpleUndirectedEdge sue = (SimpleUndirectedEdge) e;
                    adjMatrix[sue.getFirstVertex()][sue.getSecondVertex()] = pos;
                    adjMatrix[sue.getSecondVertex()][sue.getFirstVertex()] = pos;
                } catch (ClassCastException ex) {
                    ex.printStackTrace();
                }
                pos++;

            }

            adjMatrixValid = true;
        }
        return adjMatrix;
    }

    @Override
    public List<Integer> getVerticesBFS(Integer startVertex) {
        /**
         * standart bfs implementation
         */
        List<Integer> l = new ArrayList<>();
        Map<Integer, Boolean> visited = new HashMap<>();

        //create adjmatrix for faster child access
        int[][] adjM = getAdjMatrix();        

        Queue<Integer> queue = new LinkedList<>();
        for (Integer v : vertices) {
            visited.put(v, Boolean.FALSE);
        }

        visited.put(startVertex, Boolean.TRUE);
        queue.add(startVertex);
        l.add(startVertex);

        while (!queue.isEmpty()) {
            Integer v = queue.remove();

            //get all childs of v
            for (int i = 0; i < vertices.size(); i++) {                
                if (adjM[v][i] > -1) {
                    //not visited
                    if (Objects.equals(visited.get(i), Boolean.FALSE)) {
                        queue.add(i);
                        visited.put(i, Boolean.TRUE);
                        l.add(i);
                    }
                }
            }
        }

        return l;
    }

    @Override
    public int maxDegree() {
        List<Integer> vertices = getVertices();
        int maxDegree = 0;
        for (Integer v : vertices) {
            int degree = this.degree(v);
            if (degree > maxDegree) maxDegree = degree;
        }
        return maxDegree;
    }

    @Override
    public int degree(Integer vertex) {
        int[][] adjM = getAdjMatrix(); 
        int degree=0;
        if (vertex >= adjM.length) {
            return 0;
        }
        for (int i = 0;i<adjM.length;i++) {
            if (adjM[vertex][i] > -1) {
                degree++;
            }
        }
        return degree;
    }
    
    public List<Integer> getAdjazentVertices(Integer vertex) {
        int[][] adjMatrix = getAdjMatrix();
        List<Integer> l = new ArrayList<>();
        if (vertex <= adjMatrix.length) {
            for (int i=0;i<adjMatrix.length;i++) {
                if (adjMatrix[vertex][i] > -1) {
                    l.add(i);
                }
            }
            return l;
        }else {
            //TODO: exception?
            return l;
        }
    }
    
    public List<SimpleUndirectedEdge> getIncidentEdges(Integer vertex) {
        List<SimpleUndirectedEdge> l = new ArrayList<>();
        int[][] adjMatrix = getAdjMatrix();
        if (vertex < adjMatrix.length) {
            for (int i=0;i<adjMatrix.length;i++) {
                if (adjMatrix[vertex][i] >=0) {
                    SimpleUndirectedEdge e = this.edges.get(i);
                    l.add(e);
                }
            }
        }
        
        return l;
    }
    
    public List<SimpleUndirectedEdge> getIncidentEdges(SimpleUndirectedEdge edge) {
        List<SimpleUndirectedEdge> l1 = getIncidentEdges(edge.getFirstVertex());
        List<SimpleUndirectedEdge> l2 = getIncidentEdges(edge.getSecondVertex());
        
        l1.addAll(l2);
        l1.remove(edge);
        
        return l1;
    }
}
