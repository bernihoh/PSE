package Source.Controller.LogicController;

import Source.Model.Heuristic.DataPool;
import Source.View.Drawer.Visualization.VisualizationGraph.VisualGraph;
import java.util.List;

/**
 * Class TabController The Controller of exactly one Preview Tab in the View,
 * that manages the DataPool of this Preview Tab.
 */
public class TabController {

    //
    // Fields
    //
    //
    // Constructors
    //
    public TabController() {
    }

    /**
     * Constructor: Creates a new TabController and connects it with an own
     * DataPool, it also creates an own StatisticController.
     *
     * @param tabName The name of this TabController.
     * @param pool DataPool, that belongs to the TabController.
     */
    public TabController(String tabName, DataPool pool) {
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
     * @return List <DetailViewController>.
     * @return uA6dEmEdJIEiM
     */
    public List<DetailViewController> getDVCList() {
        return null;
    }

    /**
     * @return DetailViewController.
     * @return usZJSLufcKCmu
     * @param name The name is the DetailViewController identifier, with it,
     * theTabController can identify the current DetailViewController, the User
     * is working on.
     */
    public DetailViewController getDVC(String name) {
        return null;
    }

    /**
     * @return DataPool
     * @return u7jmAhI0g2j1F
     */
    public DataPool getDataPool() {
        return null;
    }

    /**
     * Adds one Graph to the DataPool, that belongs to the TabController
     * instance.
     *
     * @throws EXCEPTION if the type of the Graph is not of the same graph type
     * in the DataPool.
     * @param graph The graph that should be added to the DataPool.
     */
    public void addGraphToDataPool(VisualGraph graph) {
    }

    /**
     * Merges two DataPools under one of the two TabController. The other
     * TabController with its DataPool remains untouched.
     *
     * @throws EXCEPTION if the graph type of both DataPools is not equal.
     * @param pool The DataPool, that should be copied.
     */
    public void mergeDataPool(DataPool pool) {
    }

    /**
     * @return StatisticController
     * @return uffambYhPpe1g
     */
    public StatisticController getStatisticController() {
        return null;
    }

    /**
     * @return HeuristicController
     * @return upWKysSZ7Qrue
     */
    public HeuristicController getHeuristicController() {
        return null;
    }

    /**
     * @return FilterController
     * @return uA7crnnjW6JCR
     */
    public FilterController getFilterController() {
        return null;
    }

    /**
     * Calls the HeuristicController to collor the graphs.
     */
    public void heuristicApplyToDataPool() {
    }

    /**
     * Instanciates a HeuristicController and gives him a DataPool.
     *
     * @param pool The given DataPool.
     */
    public void createHeuristicController(DataPool pool) {
    }

    /**
     * Instanciates a DetailViewController and gives him a graph to display with
     * all heuristics, that tried to collor it.
     *
     * @param graphPosition The position of the graph in the graph list in the
     * given DataPool.
     */
    public void createDetailViewController(Integer graphPosition) {
    }

    /**
     * Instanciates a FilterController and gives him a DataPool.
     *
     * @param pool The given DataPool.
     */
    public void createFilterController(DataPool pool) {
    }

}
