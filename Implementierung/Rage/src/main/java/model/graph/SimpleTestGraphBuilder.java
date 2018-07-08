/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.graph;

import model.graph.util.RandomNumberGenerator;
import model.graph.util.SimpleUndirectedBFSImpl;

/**  Abstract Factory for building different Graph types.
 *
 * @author Thomas Fischer
 */

public class SimpleTestGraphBuilder extends SimpleUndirectedGraphBuilder {
    private RandomNumberGenerator randomGen = null;
    public SimpleTestGraphBuilder(RandomNumberGenerator randomGen) {
        super(randomGen);
    }

    @Override
    public SimpleUndirectedGraph generateGraph(GraphProperties properties) {
        return super.generateGraph(properties);
    }


    @Override
    protected SimpleUndirectedGraph transformMatrixToGraph(int[][] adjMatrix) {
        SimpleUndirectedTestGraph graph = new SimpleUndirectedTestGraph(new SimpleUndirectedBFSImpl());
        int edgeCount=0;
        for (int i = 0; i < adjMatrix.length; i++) {
            for (int j = 0; j < adjMatrix[i].length; j++) {
                if (adjMatrix[i][j] == 1) {
                    graph.createLabeledEdge(i, j,String.valueOf(edgeCount));
                    adjMatrix[j][i] = 0;
                    edgeCount++;
                }
            }
        }
        return graph;
    }
}
