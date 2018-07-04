

/**
 * Class FxTabController
 * This is the FxControler for the upper Preview-Tab.
It manages the whole thing
 * including the Sub Tabs like:
Preview, DetailView and Statistics
 */
public class FxTabController {

  //
  // Fields
  //

  /**
   * This is the TabController which Contains the DataPool of this Tab as well as the other sub-Controller like Statistic, Heuristic and DetailView.
   */
  private uCrEnQqDIUZVj tabController;
  /**
   * The FxController for this Preview-Tab.
   */
  private ueB4mZG9mBvoL fxPreviewController;
  /**
   * A List of all FxDetailViews that are currently needed because these DetailViews are opened.
   */
  private uUL1dtKsofmHu detailViewList;
  /**
   * The FxStatisticController for this whole Preview-Tab.
   */
  private uPtuJbmn5eqmR fxStatisticController;  /**

   * This is the Upper-Controller.
   * It is needed in this Class so that this Controller can access the needed Super-Controller parts.
   * (Because the FxRageController is the only direct connecton between the ViewController and the SuperController)   */

  private uPH4TU4gQx99I fxRageController;
  
  //
  // Constructors
  //
  public FxTabController () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of tabController
   * This is the TabController which Contains the DataPool of this Tab as well as the
   * other sub-Controller like Statistic, Heuristic and DetailView.
   * @param newVar the new value of tabController
   */
  private void setTabController (uCrEnQqDIUZVj newVar) {
    tabController = newVar;
  }

  /**
   * Get the value of tabController
   * This is the TabController which Contains the DataPool of this Tab as well as the
   * other sub-Controller like Statistic, Heuristic and DetailView.
   * @return the value of tabController
   */
  private uCrEnQqDIUZVj getTabController () {
    return tabController;
  }

  /**
   * Set the value of fxPreviewController
   * The FxController for this Preview-Tab.
   * @param newVar the new value of fxPreviewController
   */
  private void setFxPreviewController (ueB4mZG9mBvoL newVar) {
    fxPreviewController = newVar;
  }

  /**
   * Get the value of fxPreviewController
   * The FxController for this Preview-Tab.
   * @return the value of fxPreviewController
   */
  private ueB4mZG9mBvoL getFxPreviewController () {
    return fxPreviewController;
  }

  /**
   * Set the value of detailViewList
   * A List of all FxDetailViews that are currently needed because these DetailViews
   * are opened.
   * @param newVar the new value of detailViewList
   */
  private void setDetailViewList (uUL1dtKsofmHu newVar) {
    detailViewList = newVar;
  }

  /**
   * Get the value of detailViewList
   * A List of all FxDetailViews that are currently needed because these DetailViews
   * are opened.
   * @return the value of detailViewList
   */
  private uUL1dtKsofmHu getDetailViewList () {
    return detailViewList;
  }

  /**
   * Set the value of fxStatisticController
   * The FxStatisticController for this whole Preview-Tab.
   * @param newVar the new value of fxStatisticController
   */
  private void setFxStatisticController (uPtuJbmn5eqmR newVar) {
    fxStatisticController = newVar;
  }

  /**
   * Get the value of fxStatisticController
   * The FxStatisticController for this whole Preview-Tab.
   * @return the value of fxStatisticController
   */
  private uPtuJbmn5eqmR getFxStatisticController () {
    return fxStatisticController;
  }

  /**
   * Set the value of fxRageController
   * This is the Upper-Controller.
It is needed in this Class so that this Controller
   * can access the needed Super-Controller parts.
(Because the FxRageController is
   * the only direct connecton between the ViewController and the SuperController)
   * @param newVar the new value of fxRageController
   */
  private void setFxRageController (uPH4TU4gQx99I newVar) {
    fxRageController = newVar;
  }

  /**
   * Get the value of fxRageController
   * This is the Upper-Controller.
It is needed in this Class so that this Controller
   * can access the needed Super-Controller parts.
(Because the FxRageController is
   * the only direct connecton between the ViewController and the SuperController)
   * @return the value of fxRageController
   */
  private uPH4TU4gQx99I getFxRageController () {
    return fxRageController;
  }

  //
  // Other methods
  //

  /**
   * The Empty-Constructor of this Class.
   */
  public void FxTabController()
  {
  }


  /**
   * This Method sets the TabController of this Class.
It is called from
   * FxRageController that gets the needed TabController from the SuperController.
   * @param        tabController The given TabController to set the Attribute to.
   */
  public void setTabController(uCrEnQqDIUZVj tabController)
  {
  }


  /**
   * Get the FxRageController.
This Method is protected.
This is used so that the
   * startEditor-Method can do what it should and starts the Editor.

@return
The
   * FxRageController of this Class.
   * @return       uPH4TU4gQx99I
   */
  protected uPH4TU4gQx99I getFxRageController()
  {
  }


}
