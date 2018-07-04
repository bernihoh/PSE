

/**
 * Class FxHeuristicSettingsController
 * The FxController for the HeurisitcSetting-Screen.
This is a separate Window that
 * will pop up if the User wants to start a Heuristic that needs some Settings.
The
 * GUI-Elements are dynamically added using the HeuristicController to get the
 * HeuristicProperties to read the possible settings the user can/have to take.
 */
public class FxHeuristicSettingsController {

  //
  // Fields
  //
  /**

   * This is the HeuristicController of this Class.
   * It will be passed on from the FxTabController via the TabController that has the HeuristicController instance.   */

  private uCrEnQqDIUZVj heuristicController;
  
  //
  // Constructors
  //
  public FxHeuristicSettingsController () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of heuristicController
   * This is the HeuristicController of this Class.
It will be passed on from the
   * FxTabController via the TabController that has the HeuristicController instance.
   * @param newVar the new value of heuristicController
   */
  private void setHeuristicController (uCrEnQqDIUZVj newVar) {
    heuristicController = newVar;
  }

  /**
   * Get the value of heuristicController
   * This is the HeuristicController of this Class.
It will be passed on from the
   * FxTabController via the TabController that has the HeuristicController instance.
   * @return the value of heuristicController
   */
  private uCrEnQqDIUZVj getHeuristicController () {
    return heuristicController;
  }

  //
  // Other methods
  //

  /**
   * Create the Needed GUI-Components.
The Elements are created from the
   * HeuristicProperties-List that it gets from the HeuristicController of this
   * Class.
These Elements are used so that the User can Inpot his/her Properties of
   * the Heuristic.
These Values will be passed on the the HeuristicController so
   * that the DataPool can be updated and the Model calculates the correct stuff.
   */
  public void init()
  {
  }


  /**
   * This Method calls the HeuristicController and calls the addToHeuristicsMethod
   * with the set Properties, that are given by the dynamically added TextBoxes.
   */
  public void updateSettings()
  {
  }


  /**
   * Set the HeuristiCController to the given.
   * @param        heuristicController The HeuristicController to set.
   */
  public void setHeuristicController(uCrEnQqDIUZVj heuristicController)
  {
  }


  /**
   * Cancel the HeuristicSetting and close the Settings-Window.
   */
  private void cancel()
  {
  }


}
