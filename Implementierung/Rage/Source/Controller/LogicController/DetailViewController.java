package Source.Controller.LogicController;

import Source.Model.Heuristic.Heuristic;
import Source.View.Drawer.Visualization.VisualizationGraph.VisualGraph;
import java.util.List;

/**
 * Class DetailVewController Manages the chosen graph and the heuristics that
 * only apply to this graph, the so called local heuristics.
 */
public class DetailViewController {

    //
    // Fields
    //
    //
    // Constructors
    //
    public DetailViewController() {
    }

    /**
     * Creates a new Detail View Controller and creates an empty
     * localHeuristicsList.
     *
     * @param graph The graph, thatshouldbe loaded in to the
     * DetailViewController.
     */
    public DetailViewController(VisualGraph graph) {
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
     * Applies the local Heuristics to the one graph in the DetailView.
     *
     * @param graph The graph that get colloerd by the local heuristics.
     * @param localHeuristicsList The list of local heuristics, that collors the
     * one graph.
     */
    public void startCalculation(VisualGraph graph, List<Heuristic> localHeuristicsList) {
    }

    /**
     * Creates a GraphEditorController instance with the one graph.
     *
     * @param graph The graph that should be modified.
     */
    public void modifyGraph(VisualGraph graph) {
    }

    /**
     * Loads the modified graph into the DataPool and in to the
     * DetailViewController.
     *
     * @param modGraph The modified graph.
     */
    public void loadModifiedGraph(VisualGraph modGraph) {
    }

    /**
     * Adds the local heuristics chosen by the user to the localHeuristics.
     *
     * @param localHeuristics The local Heuristics.
     */
    public void addLocalHeuristics(Heuristic localHeuristics) {
    }

}
