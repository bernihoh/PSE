

/**
 * Class FxPreviewController
 * This is the FxController for the lower Preview-Tab, where all Graphs are shown
 * as a List of Tabs.
 */
public class FxPreviewController {

  //
  // Fields
  //
  /**

   * The GraphDrawer of this Tab.
   * The Graph of this Tab will be passed on to the Drawer whenever the User opens the DropDown-Box of an Graph, so it can be drawn.   */

  private uU544nLuB5BAd graphDrawer;
  /**
   * The FilterController for the passing of the Filter, selected by the User at the GUI via the FxFilterController, to the Model.
   */
  private uCrEnQqDIUZVj filterController;
  /**
   * The ScrollPane where all the DropDowns of the Graphs are in.
   */
  private uCrEnQqDIUZVj scrollPaneGraphList;
  
  //
  // Constructors
  //
  public FxPreviewController () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of graphDrawer
   * The GraphDrawer of this Tab.
The Graph of this Tab will be passed on to the
   * Drawer whenever the User opens the DropDown-Box of an Graph, so it can be drawn.
   * @param newVar the new value of graphDrawer
   */
  private void setGraphDrawer (uU544nLuB5BAd newVar) {
    graphDrawer = newVar;
  }

  /**
   * Get the value of graphDrawer
   * The GraphDrawer of this Tab.
The Graph of this Tab will be passed on to the
   * Drawer whenever the User opens the DropDown-Box of an Graph, so it can be drawn.
   * @return the value of graphDrawer
   */
  private uU544nLuB5BAd getGraphDrawer () {
    return graphDrawer;
  }

  /**
   * Set the value of filterController
   * The FilterController for the passing of the Filter, selected by the User at the
   * GUI via the FxFilterController, to the Model.
   * @param newVar the new value of filterController
   */
  private void setFilterController (uCrEnQqDIUZVj newVar) {
    filterController = newVar;
  }

  /**
   * Get the value of filterController
   * The FilterController for the passing of the Filter, selected by the User at the
   * GUI via the FxFilterController, to the Model.
   * @return the value of filterController
   */
  private uCrEnQqDIUZVj getFilterController () {
    return filterController;
  }

  /**
   * Set the value of scrollPaneGraphList
   * The ScrollPane where all the DropDowns of the Graphs are in.
   * @param newVar the new value of scrollPaneGraphList
   */
  private void setScrollPaneGraphList (uCrEnQqDIUZVj newVar) {
    scrollPaneGraphList = newVar;
  }

  /**
   * Get the value of scrollPaneGraphList
   * The ScrollPane where all the DropDowns of the Graphs are in.
   * @return the value of scrollPaneGraphList
   */
  private uCrEnQqDIUZVj getScrollPaneGraphList () {
    return scrollPaneGraphList;
  }

  //
  // Other methods
  //

  /**
   * The Empty-Constructor of this Class.
It creates a new GraphDrawer, where the
   * needed Graph will be put in if the User opens the Tab of a Graph.
   */
  public void FxPreviewController()
  {
  }


  /**
   * This Method will start the calculation of the GlobalHeuristics.
This will be
   * done by calling the given TabController with the Method
   * "heuristicApplyToDatapool()".
   */
  public void startGlobalHeuristics()
  {
  }


  /**
   * This Method will start the calculation of the GlobalHeuristics.
This will be
   * done by calling the given DetailViewController.
   */
  public void stopGlobalHeuristics()
  {
  }


  /**
   * Try to add new Plugins to the List.
This Method opens an FileChooser which will
   * return a Folder that will be passed on to the IOController to perform the
   * PlugIn-Loading.
   */
  public void searchForPlugins()
  {
  }


  /**
   * This Method will show the Filter-Window, so that the User can select the
   * Filters.
This is done by Loading the Filter-FXML-File which creates the new
   * Window.
This already creates the needed FxFilterController which is read out, so
   * that the FilterController at this Class can be set.
Then the User-Input will be
   * registers by this passes FxFilterController and will be passed on the given
   * FilterController via the FxFilterController directly.
   */
  public void filter()
  {
  }


  /**
   * Set the Graph Drawer of this Class.
   * @param        graphDrawer The GraphDrawer to set.
   */
  public void setGraphDrawer(uU544nLuB5BAd graphDrawer)
  {
  }


  /**
   * Set the FilterController of this Class.
   * @param        filterController The FilterController to set the attribut of this
   * Class to.
   */
  public void setFilterController(uCrEnQqDIUZVj filterController)
  {
  }


}
