

/**
 * Class FxFilterController
 * This is the FxController for the Filter-Window.
This is a separate Window that
 * will pop up if the User wants to Filter the shown Graphs at the Preview-Tab.
 */
public class FxFilterController {

  //
  // Fields
  //

  /**
   * The FilterController for the passing of the User-Filter to the Model.
   */
  private uCrEnQqDIUZVj filterController;
  
  //
  // Constructors
  //
  public FxFilterController () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of filterController
   * The FilterController for the passing of the User-Filter to the Model.
   * @param newVar the new value of filterController
   */
  private void setFilterController (uCrEnQqDIUZVj newVar) {
    filterController = newVar;
  }

  /**
   * Get the value of filterController
   * The FilterController for the passing of the User-Filter to the Model.
   * @return the value of filterController
   */
  private uCrEnQqDIUZVj getFilterController () {
    return filterController;
  }

  //
  // Other methods
  //

  /**
   * Create the Needed GUI-Components.
Therefore the FilterController is called to
   * get the List of all Heuristics.
Then for every Heuristic the ToggleButtonGroup
   * to let the User select if the Heuristic should be correctly or not or if it does
   * not matter will be added.
   */
  public void init()
  {
  }


  /**
   * Set the FilterController of this Class.
   * @param        filterController The FilterController to set the attribute of this
   * Class to.
   */
  public void setFilterController(uCrEnQqDIUZVj filterController)
  {
  }


  /**
   * Parse the selected Filter into the correct form and give them to the
   * FilterController by calling the corresponding Method.
Everything further will be
   * done by the FilterController.
   */
  private void filter()
  {
  }


  /**
   * Cancel the Filtration and close the Filter-Window.
   */
  private void cancel()
  {
  }


}
