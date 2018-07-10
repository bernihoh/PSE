package src.main.java.Model.Heuristic;

import src.main.java.Model.Graph.Graph;
import java.util.List;

/**
 * Class HeuristicResult This class is the abstract interface of the result of a
 * specific calculation of an heuristic H on a specific graph of type G.
 */
public class HeuristicResult<G extends Graph, H extends Heuristic> {

    //
    // Fields
    //
    //
    // Constructors
    //
    public HeuristicResult() {
    }

    /**
     * The constructor of this class
     *
     * @param graph graph the graph this heuristic was calculated upon
     * @param heuristic heuristic the heuristic by which the result was
     * calculated
     */
    public HeuristicResult(G graph, H heuristic) {
    }
    //
    // Methods
    //

    //
    // Accessor methods
    //
    //
    // Other methods
    //
    /**
     * @return returns the graph this result was calculated upon
     * @return uCrEnQqDIUZVj
     */
    public G getGraph() {
        return null;
    }

    /**
     * @return returns the heuristic by which this result was calculated
     * @return uCrEnQqDIUZVj
     */
    public H getHeuristic() {
        return null;
    }

    /**
     * @return returns the line-by-line representation of this heuristic result
     * as specified in the RAGE data format
     * @return u7qkS15Xb7BMH
     */
    public List<String> toRAGE() {
        return null;
    }

}
