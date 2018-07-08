/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.graph;

import com.google.common.reflect.TypeToken;
import model.heuristic.Heuristic;
import model.heuristic.HeuristicResult;

import java.util.ArrayList;
import java.util.List;
import java.util.SortedSet;
import java.util.TreeSet;

/**
 *
 * @author Thomas Fischer

 */
public abstract class Graph<E extends Edge> {
    protected List<E> edges = new ArrayList<>();
    protected SortedSet<Integer> vertices = new TreeSet<>();
    //protected GraphBFS bfsImpl;

    protected final TypeToken<E> edgeTypeToken = new TypeToken<E>(getClass()) {};

    //public Graph(GraphBFS bfsImpl) {
       // this.bfsImpl = bfsImpl;
    //}

    public abstract HeuristicResult applyHeuristic(Heuristic heuristic);

    public List<E> getEdges() {
        return edges;
    }

    public List<Integer> getVertices() {
        List<Integer> l = new ArrayList<>(vertices);
        return l;
    }

    public void addEdge(E e) {
        edges.add(e);
    }
    
    public int getNumberOfVertices() {
        return vertices.size();
    };

    public List<Integer> getVerticesBFS(Integer startVertex) {
        return new ArrayList<>();
    }
    
    //public List<Integer> getVerticesBFS(Integer startVertex) {
      //  return bfsImpl.getBFSVertices();
    //};
    
    public abstract int maxDegree();

    public abstract int degree(Integer vertex);
    
}
