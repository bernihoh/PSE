package model.graph;

import com.google.common.reflect.TypeToken;
import model.graph.util.HeuristicChecker;
import model.heuristic.Heuristic;
import model.heuristic.SimpleHyperHeuristic;
import model.heuristic.SimpleTestHeuristic;
import model.heuristic.SimpleUndirectedHeuristic;

import java.util.ArrayList;
import java.util.List;

public class DataPool<G extends Graph,H extends Heuristic> {

    protected final TypeToken<G> graphTypeToken = new TypeToken<G>(getClass()) {};

    private List<G> graphList = new ArrayList<>();
    private List<Heuristic> heuristicList = new ArrayList();
    private List<H> heuristicList2 = new ArrayList();

   // private DataPool() {

    //}

    public boolean addGraph(G g) {
        if (g== null) return false;
        graphList.add(g);
        return true;
    }

    public boolean addHeuristic(Heuristic h) {
        if (h == null)
            return false;
        //does the heuristic run on the graph?
        //Class<?> graphClass = graphTypeToken.getRawType().getClass();
        if (HeuristicChecker.isApplicable(h,graphTypeToken.getRawType().getTypeName())) {
            heuristicList.add(h);
            return true;
        }
        return false;
        //System.out.println(":"+HeuristicChecker.isApplicable(h,graphTypeToken.getRawType().getTypeName()));


    }

    public boolean addHeuristic2(H h) {
        heuristicList2.add(h);
        return true;
       /* if (h == null)
            return false;
        //does the heuristic run on the graph?
        //Class<?> graphClass = graphTypeToken.getRawType().getClass();
        if (HeuristicChecker.isApplicable(h,graphTypeToken.getRawType().getTypeName())) {
            heuristicList.add(h);
            return true;
        }*/

        //System.out.println(":"+HeuristicChecker.isApplicable(h,graphTypeToken.getRawType().getTypeName()));


    }


    public void runHeuristics() {
        for (G g : graphList) {
            for (Heuristic h : heuristicList) {
                g.applyHeuristic(h);
            }
        }
    }

    public static DataPool<SimpleUndirectedGraph,SimpleUndirectedHeuristic> createSimpleUndirectedDataPool() {
        //inner class needed for tokens to work
        return new DataPool<SimpleUndirectedGraph,SimpleUndirectedHeuristic>(){};
    }

    public static DataPool<SimpleHyperGraph,SimpleHyperHeuristic> createSimpleHyperDataPool() {
        //inner class needed for tokens to work
        return new DataPool<SimpleHyperGraph,SimpleHyperHeuristic>(){};
    }

    public static DataPool<SimpleUndirectedTestGraph,SimpleTestHeuristic> createTestDataPool() {
        //inner class needed for tokens to work
        return new DataPool<SimpleUndirectedTestGraph,SimpleTestHeuristic>(){};
    }


}
