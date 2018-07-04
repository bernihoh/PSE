

/**
 * Class FxDetailViewController
 * The FxController for the DetailView.
 */
public class FxDetailViewController {

  //
  // Fields
  //
  /**

   * The DetailVewController of this Class.
   * It Contains the Lists of all Local and Global Heuristics and the Graph of this DetailView.   */

  private uCrEnQqDIUZVj DetailVewController;  /**

   * The FxTabController that contains this DetailView in the List of DetailViews.
   * This is passed on by the FxTabController itself.   */

  private ullU3lHfm9ErR fxTabController;  /**

   * The GraphDrawer of this Tab.
   * The Graph of this Tab will be passed on so it can be drawn.   */

  private uU544nLuB5BAd graphDrawer;  /**

   * The VBox where all the Local Heuristics will be displayed in and where the User could Check them if he/she wants to run them on the Displayed Graph at this DetailView.
   * This VBox will be filled in dynamically with the Local Heuristic-CheckBoxes.   */

  private uCrEnQqDIUZVj vBoxLocalHeuristics;  /**

   * The Grid Pane of the DetailView where the Global Heuristic-Names and their result will be displayed in.
   * This GridPane will be filled in dynamically with the Heuristics.   */

  private uCrEnQqDIUZVj gridPaneGlobalHeuristics;  /**

   * The Pane-JavaFx-Node where the Graph should be drawn on.
   * This will be pased on to the Drawer so it can perform the Drawing on there.   */

  private uCrEnQqDIUZVj paneDrawBoard;
  /**
   * This is the TableView where the Graph-Properties will be showed at.
   */
  private uCrEnQqDIUZVj tableViewGraphProperties;
  
  //
  // Constructors
  //
  public FxDetailViewController () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of DetailVewController
   * The DetailVewController of this Class.
It Contains the Lists of all Local and
   * Global Heuristics and the Graph of this DetailView.
   * @param newVar the new value of DetailVewController
   */
  private void setDetailVewController (uCrEnQqDIUZVj newVar) {
    DetailVewController = newVar;
  }

  /**
   * Get the value of DetailVewController
   * The DetailVewController of this Class.
It Contains the Lists of all Local and
   * Global Heuristics and the Graph of this DetailView.
   * @return the value of DetailVewController
   */
  private uCrEnQqDIUZVj getDetailVewController () {
    return DetailVewController;
  }

  /**
   * Set the value of fxTabController
   * The FxTabController that contains this DetailView in the List of
   * DetailViews.
This is passed on by the FxTabController itself.
   * @param newVar the new value of fxTabController
   */
  private void setFxTabController (ullU3lHfm9ErR newVar) {
    fxTabController = newVar;
  }

  /**
   * Get the value of fxTabController
   * The FxTabController that contains this DetailView in the List of
   * DetailViews.
This is passed on by the FxTabController itself.
   * @return the value of fxTabController
   */
  private ullU3lHfm9ErR getFxTabController () {
    return fxTabController;
  }

  /**
   * Set the value of graphDrawer
   * The GraphDrawer of this Tab.
The Graph of this Tab will be passed on so it can
   * be drawn.
   * @param newVar the new value of graphDrawer
   */
  private void setGraphDrawer (uU544nLuB5BAd newVar) {
    graphDrawer = newVar;
  }

  /**
   * Get the value of graphDrawer
   * The GraphDrawer of this Tab.
The Graph of this Tab will be passed on so it can
   * be drawn.
   * @return the value of graphDrawer
   */
  private uU544nLuB5BAd getGraphDrawer () {
    return graphDrawer;
  }

  /**
   * Set the value of vBoxLocalHeuristics
   * The VBox where all the Local Heuristics will be displayed in and where the User
   * could Check them if he/she wants to run them on the Displayed Graph at this
   * DetailView.
This VBox will be filled in dynamically with the Local
   * Heuristic-CheckBoxes.
   * @param newVar the new value of vBoxLocalHeuristics
   */
  private void setVBoxLocalHeuristics (uCrEnQqDIUZVj newVar) {
    vBoxLocalHeuristics = newVar;
  }

  /**
   * Get the value of vBoxLocalHeuristics
   * The VBox where all the Local Heuristics will be displayed in and where the User
   * could Check them if he/she wants to run them on the Displayed Graph at this
   * DetailView.
This VBox will be filled in dynamically with the Local
   * Heuristic-CheckBoxes.
   * @return the value of vBoxLocalHeuristics
   */
  private uCrEnQqDIUZVj getVBoxLocalHeuristics () {
    return vBoxLocalHeuristics;
  }

  /**
   * Set the value of gridPaneGlobalHeuristics
   * The Grid Pane of the DetailView where the Global Heuristic-Names and their
   * result will be displayed in.
This GridPane will be filled in dynamically with
   * the Heuristics.
   * @param newVar the new value of gridPaneGlobalHeuristics
   */
  private void setGridPaneGlobalHeuristics (uCrEnQqDIUZVj newVar) {
    gridPaneGlobalHeuristics = newVar;
  }

  /**
   * Get the value of gridPaneGlobalHeuristics
   * The Grid Pane of the DetailView where the Global Heuristic-Names and their
   * result will be displayed in.
This GridPane will be filled in dynamically with
   * the Heuristics.
   * @return the value of gridPaneGlobalHeuristics
   */
  private uCrEnQqDIUZVj getGridPaneGlobalHeuristics () {
    return gridPaneGlobalHeuristics;
  }

  /**
   * Set the value of paneDrawBoard
   * The Pane-JavaFx-Node where the Graph should be drawn on.
This will be pased on
   * to the Drawer so it can perform the Drawing on there.
   * @param newVar the new value of paneDrawBoard
   */
  private void setPaneDrawBoard (uCrEnQqDIUZVj newVar) {
    paneDrawBoard = newVar;
  }

  /**
   * Get the value of paneDrawBoard
   * The Pane-JavaFx-Node where the Graph should be drawn on.
This will be pased on
   * to the Drawer so it can perform the Drawing on there.
   * @return the value of paneDrawBoard
   */
  private uCrEnQqDIUZVj getPaneDrawBoard () {
    return paneDrawBoard;
  }

  /**
   * Set the value of tableViewGraphProperties
   * This is the TableView where the Graph-Properties will be showed at.
   * @param newVar the new value of tableViewGraphProperties
   */
  private void setTableViewGraphProperties (uCrEnQqDIUZVj newVar) {
    tableViewGraphProperties = newVar;
  }

  /**
   * Get the value of tableViewGraphProperties
   * This is the TableView where the Graph-Properties will be showed at.
   * @return the value of tableViewGraphProperties
   */
  private uCrEnQqDIUZVj getTableViewGraphProperties () {
    return tableViewGraphProperties;
  }

  //
  // Other methods
  //

  /**
   * The Empty-Constructor of this Class.
   */
  public void FxDetailViewController()
  {
  }


  /**
   * This method overrides the init-Method from the abstract-Class FxController.
It
   * sets the FxRageController by the given Parameter.
This is possible because the
   * FxRageController calls this Method and gives itselv as parameter with it.
   * @param        fxTabController The FxTabController that will be set.
   */
  public void init(ullU3lHfm9ErR fxTabController)
  {
  }


  /**
   * Try to add new Plugins to the List.
This Method opens an FileCooser which will
   * return a Folder that will be passed on to the IOController to perform the
   * PlugIn-Loading.
   */
  public void searchForPlugins()
  {
  }


  /**
   * This Method will start the calculation of the GlobalHeuristics.
This will be
   * done by calling the given DetailViewController.
   */
  public void startGlobalHeuristics()
  {
  }


  /**
   * This Method will stop the calculation of the GlobalHeuristics.
This will be done
   * by calling the given DetailViewController.
   */
  public void stopGlobalHeuristics()
  {
  }


  /**
   * This Method will start the calculation of the Local Heuristics for the Graph of
   * this Detail View.
This will be done by calling the given DetailViewController.
   */
  public void startLocalHeuristics()
  {
  }


  /**
   * This Method will stop the calculation of the Local Heuristics for the Graph of
   * this Detail View.
This will be done by calling the given DetailViewController.
   */
  public void stopLocalHeuristics()
  {
  }


  /**
   * This Method will start the Step-By-Step-Mode of the Heuristic.
This will be done
   * by calling the given SuperDetailViewController.
   */
  public void startStepByStepMode()
  {
  }


  /**
   * This Method will open a new Editor with the Graph of this DetailView.
Therfore
   * it calls the DetailViewController modifyGraphMethod and the
   * FxGraphEditorController by using the superClass FxRageController.
   */
  public void startGraphEditor()
  {
  }


  /**
   * Set the DetailViewController of this Class.
   * @param        detailViewController The DetailViewController to set.
   */
  public void setDetailViewController(uCrEnQqDIUZVj detailViewController)
  {
  }


  /**
   * Set the Graph Drawer of this Class.
   * @param        graphDrawer The GraphDrawer to set.
   */
  public void setGraphDrawer(uU544nLuB5BAd graphDrawer)
  {
  }


}
