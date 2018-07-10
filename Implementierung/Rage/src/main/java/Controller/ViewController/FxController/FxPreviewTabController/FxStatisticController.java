package Source.Controller.ViewController.FxController.FxPreviewTabController;

import Source.Controller.LogicController.StatisticController;
import javafx.scene.control.TableView;

/**
 * Class FxStatisticController The FxConntroller for the Statistic-Tab.
 *
 * Only fills in the Table with the Collected Data from the DataPool provided
 * from the Model via the given HeristicController.
 */
public class FxStatisticController {

    //
    // Fields
    //
    /**
     * This is the Controller that manages the DataPool which contains all the
     * Statistics.
     */
    private StatisticController statisticController;
    /**
     * This is the Table view where the Statistics will be showed in.
     */
    private TableView tableStatistics;

    //
    // Constructors
    //
    /**
     * The Empty-Constructor of this Class.
     */
    public FxStatisticController() {
    }

    //
    // Methods
    //
    /**
     * This Method updates the Table-View with new Statistics, that should be
     * shown to the User. It gets the Statistics from the HeuristicController.
     */
    public void updateStatistics() {
    }

    //
    // Accessor methods
    //
    /**
     * Set the value of statisticController This is the Controller that manages
     * the DataPool which contains all the Statistics.
     *
     * @param newStatisticController the new value of statisticController
     *
     *
     * This Method is called form the FxTabController which gets the
     * StatisticController via the TabController.
     *
     * @param statisticController The StatisticController to set.
     */
    private void setStatisticController(StatisticController newStatisticController) {
        statisticController = newStatisticController;
    }

    /**
     * Get the value of statisticController This is the Controller that manages
     * the DataPool which contains all the Statistics.
     *
     * @return the value of statisticController
     */
    private StatisticController getStatisticController() {
        return statisticController;
    }

    /**
     * Get the value of tableStatistics This is the Table view where the
     * Statistics will be showed in.
     *
     * @return the value of tableStatistics
     */
    private TableView getTableStatistics() {
        return tableStatistics;
    }
}
