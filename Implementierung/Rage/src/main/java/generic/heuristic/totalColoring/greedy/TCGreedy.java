/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package generic.heuristic.totalColoring.greedy;

import generic.graph.Edge;
import generic.graph.SimpleUndirectedEdge;
import generic.graph.SimpleUndirectedGraph;
import generic.heuristic.HeuristicResult;
import generic.heuristic.SimpleUndirectedHeuristic;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author tfi
 */
//public class TCGreedy<G extends SimpleUndirectedGraph<? extends SimpleUndirectedEdge>> extends SimpleUndirectedHeuristic<G> {
public class TCGreedy<G extends SimpleUndirectedGraph<E>,E extends SimpleUndirectedEdge> extends SimpleUndirectedHeuristic<G,E> {


    public TCGreedy() {
        super(null);
    }

    @Override
    public HeuristicResult applyTo(G g) {
        //super.applyTo(g);
        //System.out.println("CLAZZ:" + graphTypeToken.getRawType().getClass().toString());
        System.out.println("Greedy CLAZZ2:" + graphTypeToken.getRawType().toString());
        testToke(g);
        try {
            Object o = graphTypeToken.getRawType().newInstance();
            System.out.println(o.getClass().getName());
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        boolean success = false;

        Map<Edge, Integer> edgeColors = new HashMap<>();
        Map<Integer, Integer> vertexColors = new HashMap<>();
        HeuristicResult result;
        if (g == null || g.getVertices().size() < 1) {
            result = new HeuristicResult(g, this, false, edgeColors, vertexColors);

            //empty generic.model.graph
            return result;
        }

        //How often a color is already used
        int[] colorsNUsed = new int[g.maxDegree() + 2];
        for (int i = 0; i < colorsNUsed.length; i++) {
            colorsNUsed[i] = 0;
        }

        //number of total colors used
        int totalColorsUsed = 0;

        //starting at first vertex                
        Integer startVertex = (Integer) g.getVertices().get(0);
        //breath first search ordering of vertices
        List<Integer> bfsVertices = g.getVerticesBFS(startVertex);
        for (Integer v : bfsVertices) {
            //System.out.println("Coloring vertex " + v);
            //get minimal free used color
            if (totalColorsUsed < colorsNUsed.length) {
                //System.out.println(colorsNUsed.length - totalColorsUsed + "free colors left");
                //still a free color available->use it
                colorsNUsed[totalColorsUsed] = colorsNUsed[totalColorsUsed] + 1;

                vertexColors.put(v, totalColorsUsed);
                totalColorsUsed++;
            } else {
                //System.out.println("no free color left");
                //are there usable colors?->get minimal used
                //TODO:=>put in method?
                int minColor = -1;
                for (int colorToCheck = 0; colorToCheck < colorsNUsed.length; colorToCheck++) {
                    boolean skip = false;
                    //color used by neighbors?
                    //TODO: put in method=>colorUsedByNeighbors()
                    List<Integer> adjVertices = g.getAdjazentVertices(v);
                    for (Integer nv : adjVertices) {
                        //neighbor colored?
                        if (vertexColors.get(nv) != null) {
                            if (colorToCheck == vertexColors.get(nv)) {
                                //color already used by neighbor.
                                //continue with next color
                                skip = true;
                                break;
                            }
                        }
                        //color not used by neighbor
                        //get how often already used

                    }
                    int used = colorsNUsed[colorToCheck];
                    if (skip) {
                        continue;
                    }
                    if (minColor == -1 || colorsNUsed[minColor] > used) {
                        minColor = colorToCheck;
                    }

                }
                if (minColor == -1) {
                    //cant color
                    result = new HeuristicResult(g, this, false, edgeColors, vertexColors);
                    System.out.println("greedy=>cant color vertex");
                    return result;
                    //free minimal color found

                } else {
                    vertexColors.put(v, minColor);
                    colorsNUsed[minColor]++;

                }
            }

        }
        //----------------------------------------------
        /*
        //color edges
        //vertices ordered by bfs
        for (Integer v : bfsVertices) {
            //get neighbors
            List<SimpleUndirectedEdge> adjEdges = g.getIncidentEdges(v);
            for (SimpleUndirectedEdge e : adjEdges) {
                //neighbor colored?
                if (edgeColors.get(e) == null) {
                    //get minimal color TODO: refactor into method                
                    if (totalColorsUsed < colorsNUsed.length) {
                        System.out.println(colorsNUsed.length - totalColorsUsed + "free colors left");
                        //still a free color available->use it
                        colorsNUsed[totalColorsUsed] = colorsNUsed[totalColorsUsed] + 1;

                        edgeColors.put(e, totalColorsUsed);
                        totalColorsUsed++;
                    } else {
                        int minColor = -1;
                        for (int colorToCheck = 0; colorToCheck < colorsNUsed.length; colorToCheck++) {
                            boolean skip = false;
                            //color used by neighbors?
                            //TODO: put in method=>colorUsedByNeighbors()
                            //neighbors are adjazent edges and own vertices.
                            //1.get both endvertices of this edge
                            //2 get all neighbor vertices of both edges
                            Integer v1 =
                            
                            for (Integer nv : adjVertices) {
                                //neighbor colored?
                                if (vertexColors.get(nv) != null) {
                                    if (colorToCheck == vertexColors.get(nv)) {
                                        //color already used by neighbor.
                                        //continue with next color
                                        skip = true;
                                        break;
                                    }
                                }
                                //color not used by neighbor
                                //get how often already used

                            }
                        }

                    }
                }
            }
        } */
        //-----------------------------------------------------------------
            /*   for (Integer i : bfsVertices) {
            vColor++;
            vertexColors.put(i, vColor);
            System.out.println("Vertex" + i +"color: "+vColor);
        }
        
        for (Edge e:g.getEdges()) {
            eColor++;
            edgeColors.put(e,eColor);
        }*/
        result = new HeuristicResult(g, this, true, edgeColors, vertexColors);
        System.out.println("greedy succesfully finished");
        return result;

    }
}
