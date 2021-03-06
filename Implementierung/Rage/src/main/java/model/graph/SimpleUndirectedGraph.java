package model.graph;

import model.graph.util.SimpleUndirectedBFS;
import model.heuristic.Heuristic;


import java.util.ArrayList;
import java.util.List;

public class SimpleUndirectedGraph extends Graph<SimpleUndirectedEdge> {
    private int[][] adjMatrix;
    private boolean adjMatrixValid = false;
    private SimpleUndirectedBFS bfsImpl = null;

    public SimpleUndirectedGraph(SimpleUndirectedBFS bfsImpl) {
        this.bfsImpl = bfsImpl;
    }

    @Override
    public void applyHeuristic(Heuristic heuristic) {
        heuristic.applyTo(this);
    }

    public List<Integer> getVerticesBFS(Integer startVertex) {
        return bfsImpl.getVerticesBFS(startVertex,this);
    }

    public int[][] getAdjMatrix() {

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


    @Override
    public int maxDegree() {
        return 0;
    }

    @Override
    public int degree(Integer vertex) {
        return 0;
    }

    public SimpleUndirectedEdge createEdge(Integer vertex1, Integer vertex2) {
       //adjMatrixValid = false;
        SimpleUndirectedEdge e = new SimpleUndirectedEdge(vertex1, vertex2);
        vertices.add(vertex1);
        vertices.add(vertex2);
        this.edges.add(e);
        return e;
    }
}
