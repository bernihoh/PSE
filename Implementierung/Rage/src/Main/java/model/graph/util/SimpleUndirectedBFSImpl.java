package model.graph.util;


import model.graph.SimpleUndirectedGraph;

import java.util.*;

public class SimpleUndirectedBFSImpl implements SimpleUndirectedBFS{

    @Override
    public List<Integer> getVerticesBFS(Integer startVertex,SimpleUndirectedGraph graph) {
        /**
         * standart bfs implementation
         */
        List<Integer> l = new ArrayList<>();
        Map<Integer, Boolean> visited = new HashMap<>();

        //create adjmatrix for faster child access
        int[][] adjM =graph.getAdjMatrix();

        Queue<Integer> queue = new LinkedList<>();
        List<Integer> vertices = graph.getVertices();
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
}
