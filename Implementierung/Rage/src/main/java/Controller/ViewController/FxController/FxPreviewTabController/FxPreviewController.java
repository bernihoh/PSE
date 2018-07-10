package Source.Controller.ViewController.FxController.FxPreviewTabController;

import Source.Controller.LogicController.FilterController;
import Source.View.Drawer.GraphDrawer.GraphDrawer;
import javafx.scene.control.ScrollPane;

/**
 * Class FxPreviewController This is the FxController for the lower Preview-Tab,
 * where all Graphs are shown as a List of Tabs.
 */
public class FxPreviewController {

    //
    // Fields
    //
    /**
     *
     * The GraphDrawer of this Tab. The Graph of this Tab will be passed on to
     * the Drawer whenever the User opens the DropDown-Box of an Graph, so it
     * can be drawn.
     */
    private GraphDrawer graphDrawer;
    /**
     * The FilterController for the passing of the Filter, selected by the User
     * at the GUI via the FxFilterController, to the Model.
     */
    private FilterController filterController;
    /**
     * The ScrollPane where all the DropDowns of the Graphs are in.
     */
    private ScrollPane scrollPaneGraphList;

    //
    // Constructors
    //
    /**
     * The Empty-Constructor of this Class. It creates a new GraphDrawer, where
     * the needed Graph will be put in if the User opens the Tab of a Graph.
     */
    public FxPreviewController() {
    }

    //
    // Methods
    //
    /**
     * This Method will start the calculation of the GlobalHeuristics. This will
     * be done by calling the given TabController with the Method
     * "heuristicApplyToDatapool()".
     */
    public void startGlobalHeuristics() {
    }

    /**
     * This Method will start the calculation of the GlobalHeuristics. This will
     * be done by calling the given DetailViewController.
     */
    public void stopGlobalHeuristics() {
    }

    /**
     * Try to add new Plugins to the List. This Method opens an FileChooser
     * which will return a Folder that will be passed on to the IOController to
     * perform the PlugIn-Loading.
     */
    public void searchForPlugins() {
    }

    /**
     * This Method will show the Filter-Window, so that the User can select the
     * Filters. This is done by Loading the Filter-FXML-File which creates the
     * new Window. This already creates the needed FxFilterController which is
     * read out, so that the FilterController at this Class can be set. Then the
     * User-Input will be registers by this passes FxFilterController and will
     * be passed on the given FilterController via the FxFilterController
     * directly.
     */
    public void filter() {
    }

    //
    // Accessor methods
    //
    /**
     * Set the value of graphDrawer The GraphDrawer of this Tab. The Graph of
     * this Tab will be passed on to the Drawer whenever the User opens the
     * DropDown-Box of an Graph, so it can be drawn.
     *
     * @param newGraphDrawer the new value of graphDrawer
     */
    private void setGraphDrawer(GraphDrawer newGraphDrawer) {
        graphDrawer = newGraphDrawer;
    }

    /**
     * Get the value of graphDrawer The GraphDrawer of this Tab. The Graph of
     * this Tab will be passed on to the Drawer whenever the User opens the
     * DropDown-Box of an Graph, so it can be drawn.
     *
     * @return the value of graphDrawer
     */
    private GraphDrawer getGraphDrawer() {
        return graphDrawer;
    }

    /**
     * Set the value of filterController The FilterController for the passing of
     * the Filter, selected by the User at the GUI via the FxFilterController,
     * to the Model.
     *
     * @param newFilterController the new value of filterController
     */
    private void setFilterController(FilterController newFilterController) {
        filterController = newFilterController;
    }

    /**
     * Get the value of filterController The FilterController for the passing of
     * the Filter, selected by the User at the GUI via the FxFilterController,
     * to the Model.
     *
     * @return the value of filterController
     */
    private FilterController getFilterController() {
        return filterController;
    }

    /**
     * Set the value of scrollPaneGraphList The ScrollPane where all the
     * DropDowns of the Graphs are in.
     *
     * @param newVar the new value of scrollPaneGraphList
     */
    private void setScrollPaneGraphList(ScrollPane newScrollPane) {
        scrollPaneGraphList = newScrollPane;
    }

    /**
     * Get the value of scrollPaneGraphList The ScrollPane where all the
     * DropDowns of the Graphs are in.
     *
     * @return the value of scrollPaneGraphList
     */
    private ScrollPane getScrollPaneGraphList() {
        return scrollPaneGraphList;
    }

}
