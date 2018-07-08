package model.graph;

import com.google.common.reflect.TypeToken;
import model.graph.util.HeuristicChecker;
import model.heuristic.Heuristic;

import java.util.ArrayList;
import java.util.List;

public class DataPool<G extends Graph> {

    protected final TypeToken<G> graphTypeToken = new TypeToken<G>(getClass()) {};

    private List<G> graphList = new ArrayList<>();
    private List<Heuristic> heuristicList = new ArrayList();

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

    public void runHeuristics() {
        for (G g : graphList) {
            for (Heuristic h : heuristicList) {
                g.applyHeuristic(h);
            }
        }
    }

    public static DataPool<SimpleUndirectedGraph> createSimpleUndirectedDataPool() {
        //inner class needed for tokens to work
        return new DataPool<SimpleUndirectedGraph>(){};
    }

    public static DataPool<SimpleHyperGraph> createSimpleHyperDataPool() {
        //inner class needed for tokens to work
        return new DataPool<SimpleHyperGraph>(){};
    }

    public static DataPool<SimpleUndirectedTestGraph> createTestDataPool() {
        //inner class needed for tokens to work
        return new DataPool<SimpleUndirectedTestGraph>(){};
    }


}
