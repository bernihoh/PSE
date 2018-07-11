package src.main.java.Model.Heuristic;

import src.main.java.Model.Graph.Graph;

/**
 * Class Heuristic The class is the abstract interface of a heuristic which is
 * applied to a graph of typ G which has a result of type R.
 */
abstract public class Heuristic<G extends Graph> {

    //
    // Fields
    //
    //
    // Constructors
    //
    public Heuristic() {
    }

    /**
     * Heuristic(properties: HeuristicProperties) A constructor for this class
     *
     * @param properties properties the properties defining this heuristic
     */
    public Heuristic(HeuristicProperties properties) {
    }
    //
    // Methods
    //

    /**
     * @return returns the result of the heuristic application
     * @param graph graph the graph of type G on which the heuristic will be
     * applied
     */
    public void applyTo(G graph) {
    }

    //
    // Accessor methods
    //
    /**
     * @return returns the properties of this heuristic
     * @return uG7mVc1g1V1Hm
     */
    public HeuristicProperties getProperties() {
        return null;
    }

}
