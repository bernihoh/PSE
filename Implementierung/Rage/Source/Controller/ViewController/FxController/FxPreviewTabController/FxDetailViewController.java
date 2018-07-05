package Source.Controller.ViewController.FxController.FxPreviewTabController;

import Source.Controller.LogicController.DetailViewController;
import Source.View.Drawer.GraphDrawer.GraphDrawer;
import javafx.scene.control.TableView;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.Pane;
import javafx.scene.layout.VBox;

/**
 * Class FxDetailViewController The FxController for the DetailView.
 */
public class FxDetailViewController {

    //
    // Fields
    //
    /**
     *
     * The DetailViewController of this Class. It Contains the Lists of all
     * Local and Global Heuristics and the Graph of this DetailView.
     */
    private DetailViewController detailVewController;
    /**
     *
     * The FxTabController that contains this DetailView in the List of
     * DetailViews. This is passed on by the FxTabController itself.
     */

    private FxTabController fxTabController;
    /**
     *
     * The GraphDrawer of this Tab. The Graph of this Tab will be passed on so
     * it can be drawn.
     */

    private GraphDrawer graphDrawer;
    /**
     *
     * The VBox where all the Local Heuristics will be displayed in and where
     * the User could Check them if he/she wants to run them on the Displayed
     * Graph at this DetailView. This VBox will be filled in dynamically with
     * the Local Heuristic-CheckBoxes.
     */

    private VBox vBoxLocalHeuristics;
    /**
     *
     * The Grid Pane of the DetailView where the Global Heuristic-Names and
     * their result will be displayed in. This GridPane will be filled in
     * dynamically with the Heuristics.
     */

    private GridPane gridPaneGlobalHeuristics;
    /**
     *
     * The Pane-JavaFx-Node where the Graph should be drawn on. This will be
     * pased on to the Drawer so it can perform the Drawing on there.
     */

    private Pane paneDrawBoard;
    /**
     * This is the TableView where the Graph-Properties will be showed at.
     */
    private TableView tableViewGraphProperties;

    //
    // Constructors
    //
    /**
     * The Empty-Constructor of this Class.
     */
    public FxDetailViewController() {
    }

    ;

  //
  // Methods
  //
    /**
     * This method overrides the init-Method from the abstract-Class
     * FxController. It sets the FxRageController by the given Parameter. This
     * is possible because the FxRageController calls this Method and gives
     * itselv as parameter with it.
     *
     * @param fxTabController The FxTabController that will be set.
     */
    public void init(FxTabController fxTabController) {
    }

    /**
     * Try to add new Plugins to the List. This Method opens an FileCooser which
     * will return a Folder that will be passed on to the IOController to
     * perform the PlugIn-Loading.
     */
    public void searchForPlugins() {
    }

    /**
     * This Method will start the calculation of the GlobalHeuristics. This will
     * be done by calling the given DetailViewController.
     */
    public void startGlobalHeuristics() {
    }

    /**
     * This Method will stop the calculation of the GlobalHeuristics. This will
     * be done by calling the given DetailViewController.
     */
    public void stopGlobalHeuristics() {
    }

    /**
     * This Method will start the calculation of the Local Heuristics for the
     * Graph of this Detail View. This will be done by calling the given
     * DetailViewController.
     */
    public void startLocalHeuristics() {
    }

    /**
     * This Method will stop the calculation of the Local Heuristics for the
     * Graph of this Detail View. This will be done by calling the given
     * DetailViewController.
     */
    public void stopLocalHeuristics() {
    }

    /**
     * This Method will start the Step-By-Step-Mode of the Heuristic. This will
     * be done by calling the given SuperDetailViewController.
     */
    public void startStepByStepMode() {
    }

    /**
     * This Method will open a new Editor with the Graph of this DetailView.
     * Therfore it calls the DetailViewController modifyGraphMethod and the
     * FxGraphEditorController by using the superClass FxRageController.
     */
    public void startGraphEditor() {
    }

    //
    // Accessor methods
    //
    /**
     * Set the value of DetailVewController The DetailVewController of this
     * Class. It Contains the Lists of all Local and Global Heuristics and the
     * Graph of this DetailView.
     *
     * @param newDVController the new value of DetailVewController
     */
    private void setDetailVewController(DetailViewController newDVController) {
        detailVewController = newDVController;
    }

    /**
     * Get the value of DetailVewController The DetailVewController of this
     * Class. It Contains the Lists of all Local and Global Heuristics and the
     * Graph of this DetailView.
     *
     * @return the value of DetailVewController
     */
    private DetailViewController getDetailVewController() {
        return detailVewController;
    }

    /**
     * Set the value of fxTabController The FxTabController that contains this
     * DetailView in the List of DetailViews. This is passed on by the
     * FxTabController itself.
     *
     * @param newFxTabController the new value of fxTabController
     */
    private void setFxTabController(FxTabController newFxTabController) {
        fxTabController = newFxTabController;
    }

    /**
     * Get the value of fxTabController The FxTabController that contains this
     * DetailView in the List of DetailViews. This is passed on by the
     * FxTabController itself.
     *
     * @return the value of fxTabController
     */
    private FxTabController getFxTabController() {
        return fxTabController;
    }

    /**
     * Set the value of graphDrawer The GraphDrawer of this Tab. The Graph of
     * this Tab will be passed on so it can be drawn.
     *
     * @param newGraphDrawer the new value of graphDrawer
     */
    private void setGraphDrawer(GraphDrawer newGraphDrawer) {
        graphDrawer = newGraphDrawer;
    }

    /**
     * Get the value of graphDrawer The GraphDrawer of this Tab. The Graph of
     * this Tab will be passed on so it can be drawn.
     *
     * @return the value of graphDrawer
     */
    private GraphDrawer getGraphDrawer() {
        return graphDrawer;
    }

    /**
     * Set the value of vBoxLocalHeuristics The VBox where all the Local
     * Heuristics will be displayed in and where the User could Check them if
     * he/she wants to run them on the Displayed Graph at this DetailView. This
     * VBox will be filled in dynamically with the Local Heuristic-CheckBoxes.
     *
     * @param newVBox the new value of vBoxLocalHeuristics
     */
    private void setVBoxLocalHeuristics(VBox newVBox) {
        vBoxLocalHeuristics = newVBox;
    }

    /**
     * Get the value of vBoxLocalHeuristics The VBox where all the Local
     * Heuristics will be displayed in and where the User could Check them if
     * he/she wants to run them on the Displayed Graph at this DetailView. This
     * VBox will be filled in dynamically with the Local Heuristic-CheckBoxes.
     *
     * @return the value of vBoxLocalHeuristics
     */
    private VBox getVBoxLocalHeuristics() {
        return vBoxLocalHeuristics;
    }

    /**
     * Set the value of gridPaneGlobalHeuristics The Grid Pane of the DetailView
     * where the Global Heuristic-Names and their result will be displayed in.
     * This GridPane will be filled in dynamically with the Heuristics.
     *
     * @param newGridPaneGlobalHeuristics the new value of
     * gridPaneGlobalHeuristics
     */
    private void setGridPaneGlobalHeuristics(GridPane newGridPaneGlobalHeuristics) {
        gridPaneGlobalHeuristics = newGridPaneGlobalHeuristics;
    }

    /**
     * Get the value of gridPaneGlobalHeuristics The Grid Pane of the DetailView
     * where the Global Heuristic-Names and their result will be displayed in.
     * This GridPane will be filled in dynamically with the Heuristics.
     *
     * @return the value of gridPaneGlobalHeuristics
     */
    private Pane getGridPaneGlobalHeuristics() {
        return gridPaneGlobalHeuristics;
    }

    /**
     * Set the value of paneDrawBoard The Pane-JavaFx-Node where the Graph
     * should be drawn on. This will be pased on to the Drawer so it can perform
     * the Drawing on there.
     *
     * @param newDrawerPane the new value of paneDrawBoard
     */
    private void setPaneDrawBoard(Pane newDrawerPane) {
        paneDrawBoard = newDrawerPane;
    }

    /**
     * Get the value of paneDrawBoard The Pane-JavaFx-Node where the Graph
     * should be drawn on. This will be pased on to the Drawer so it can perform
     * the Drawing on there.
     *
     * @return the value of paneDrawBoard
     */
    private Pane getPaneDrawBoard() {
        return paneDrawBoard;
    }

    /**
     * Set the value of tableViewGraphProperties This is the TableView where the
     * Graph-Properties will be showed at.
     *
     * @param newTableViewGraphProperties the new value of
     * tableViewGraphProperties
     */
    private void setTableViewGraphProperties(TableView newTableViewGraphProperties) {
        tableViewGraphProperties = newTableViewGraphProperties;
    }

    /**
     * Get the value of tableViewGraphProperties This is the TableView where the
     * Graph-Properties will be showed at.
     *
     * @return the value of tableViewGraphProperties
     */
    private TableView getTableViewGraphProperties() {
        return tableViewGraphProperties;
    }

}
