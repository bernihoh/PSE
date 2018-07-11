package src.main.java.Controller.LogicController;

import src.main.java.Model.Heuristic.DataPool;
import src.main.java.Model.Heuristic.HeuristicProperties;
import java.util.List;

/**
 * Class HeuristicController Manages the chosen graph and the heuristics that
 * only apply to this graph, the so called local heuristics.
 */
public class HeuristicController {

    //
    // Fields
    //
    //
    // Constructors
    //
    public HeuristicController() {
    }

    /**
     * Creates a HeuristicController and gives him a DataPool.
     *
     * @param pool The DataPool to give.
     */
    public HeuristicController(DataPool pool) {
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
     * Applies the chosen heuristics to the heuristic pool in the DataPool.
     * Calls the createHeuristics method.
     *
     * @param hName The name of the heuristic.
     * @param hProp The properties of the heuristic.
     * @param pool The DataPool, where the heuristics belong.
     */
    public void addToHeuristics(String hName, HeuristicProperties hProp, DataPool pool) {
    }

    /**
     * Commands the Heuristics to calculate their results on the graph pool.
     *
     * @param pool The graph list.
     * @param hpool The heuristicList of the DataPool, that should calculate the
     * result on the graph list.
     */
    public void startCalculation() {
    }

    /**
     * Returns all possible Heuristics.
     *
     * @return returns List<HeuristicProperties>.
     */
    public List<HeuristicProperties> getAllHeuristics() {
        return null;
    }

    /**
     * Get invoked by addToHeuristics and commands the model to create a new
     * heuristic.
     *
     * @param hName The heuristic name.
     * @param hProp The heuristic properties.
     */
    protected void createHeuristics(String hName, HeuristicProperties hProp) {
    }

}
