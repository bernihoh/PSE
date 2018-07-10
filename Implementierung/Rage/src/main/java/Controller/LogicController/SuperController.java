package src.main.java.Controller.LogicController;

import src.main.java.Model.Graph.GraphProperties;
import src.main.java.Model.Heuristic.DataPool;
import src.main.java.Model.Heuristic.Heuristic;
import src.main.java.View.Drawer.Visualization.VisualizationGraph.VisualGraph;
import java.util.List;

/**
 * Class SuperController The SuperController has one or more instances of
 * theGrapgGeneratorController, List of TabController, GraphEditorController.
 */
public class SuperController {

    //
    // Fields
    //
    private GraphGeneratorController ggc;
    private List<TabController> tabList;
    private FilterController fc;
    private GraphEditorController gec;

    //
    // Constructors
    //
    public SuperController() {
    }

    /**
     * Constructor: Creates a SuperController and gives him immedeately a
     * GraphGeneratorController instance.
     *
     * @param ggc The Param GGC is the instance of a GraphGeneratorController
     */
    public SuperController(GraphGeneratorController ggc) {
    }

    //
    // Methods
    //
    //
    // Accessor methods
    //
    /**
     * Set the value of ggc
     *
     * @param newGGC the new value of ggc
     */
    private void setGgc(GraphGeneratorController newGGC) {
        ggc = newGGC;
    }

    /**
     * Get the value of ggc
     *
     * @return the value of ggc
     */
    private GraphGeneratorController getGgc() {
        return ggc;
    }

    /**
     * Set the value of tabList
     *
     * @param newVar the new value of tabList
     */
    private void setTabList(List<TabController> newVar) {
        tabList = newVar;
    }

    /**
     * Get the value of tabList
     *
     * @return the value of tabList
     */
    private List<TabController> getTabList() {
        return tabList;
    }

    /**
     * @return TabController.
     * @param name name is the PreviewTab identifier, with it, the
     * SuperController can identify the current TabController, the User is
     * working on.
     */
    public TabController getTabController(String name) {
        return null;
    }

    /**
     * Set the value of fc
     *
     * @param newFC the new value of fc
     */
    private void setFc(FilterController newFC) {
        fc = newFC;
    }

    /**
     * Get the value of fc
     *
     * @return the value of fc
     */
    private FilterController getFc() {
        return fc;
    }

    /**
     * Set the value of gec
     *
     * @param newGEC the new value of gec
     */
    private void setGec(GraphEditorController newGEC) {
        gec = newGEC;
    }

    /**
     * Get the value of gec
     *
     * @return the value of gec
     */
    private GraphEditorController getGec() {
        return gec;
    }

    //
    // Other methods
    //
    /**
     * Creates a new GraphEditorController with(out) a graph to display.
     *
     * @param pool The DataPool, where the created graph from the user will be
     * added.
     * @param graph The Graphl, that should be modified.
     */
    public void createGEC(DataPool pool, VisualGraph graph) {
    }

    /**
     * Creates a new preview tab with its own DataPool, and calls the
     * GrapgGeneratorController to generate graphs for the DataPool and it will
     * show the graphs in the preview Tab.
     *
     * @return TabController.
     * @param genProperties The properties, that dictates how the random graph
     * generation generates graphs.
     */
    public TabController createTabController(GraphProperties genProperties) {
        return null;
    }

    /**
     * Creates a new preview tab, with a graph liast and a heuristics list.
     *
     * @return TabController.
     * @param graphList List of graphs that should be taken to the new tab.
     * @param heurList List of heuristics that should be taken to the new tab.
     */
    private TabController createTabController(List<VisualGraph> graphList, List<Heuristic> heurList) {
        return null;
    }

}
