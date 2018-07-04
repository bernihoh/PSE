

/**
 * Class FxStatisticController
 * The FxConntroller for the Statistic-Tab.

Only fills in the Table with the
 * Collected Data from the DataPool provided from the Model via the given
 * HeristicController.
 */
public class FxStatisticController {

  //
  // Fields
  //

  /**
   * This is the Controller that manages the DataPool which contains all the Statistics.
   */
  private uCrEnQqDIUZVj statisticController;
  /**
   * This is the Table view where the Statistics will be showed in.
   */
  private uCrEnQqDIUZVj tableStatistics;
  
  //
  // Constructors
  //
  public FxStatisticController () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of statisticController
   * This is the Controller that manages the DataPool which contains all the
   * Statistics.
   * @param newVar the new value of statisticController
   */
  private void setStatisticController (uCrEnQqDIUZVj newVar) {
    statisticController = newVar;
  }

  /**
   * Get the value of statisticController
   * This is the Controller that manages the DataPool which contains all the
   * Statistics.
   * @return the value of statisticController
   */
  private uCrEnQqDIUZVj getStatisticController () {
    return statisticController;
  }

  /**
   * Set the value of tableStatistics
   * This is the Table view where the Statistics will be showed in.
   * @param newVar the new value of tableStatistics
   */
  private void setTableStatistics (uCrEnQqDIUZVj newVar) {
    tableStatistics = newVar;
  }

  /**
   * Get the value of tableStatistics
   * This is the Table view where the Statistics will be showed in.
   * @return the value of tableStatistics
   */
  private uCrEnQqDIUZVj getTableStatistics () {
    return tableStatistics;
  }

  //
  // Other methods
  //

  /**
   * The Empty-Constructor of this Class.
   */
  public void FxStatisticController()
  {
  }


  /**
   * This Method updates the Table-View with new Statistics, that should be shown to
   * the User.
It gets the Statistics from the HeuristicController.
   */
  public void updateStatistics()
  {
  }


  /**
   * This is the setter-Method for the StatisticController.
It only sets the
   * StatisticCotroller of this Class to the given Controller.

This Method is called
   * form the FxTabController which gets  the StatisticController via the
   * TabController.
   * @param        statisticController The StatisticController to set.
   */
  public void setStatisticController(uCrEnQqDIUZVj statisticController)
  {
  }


}
