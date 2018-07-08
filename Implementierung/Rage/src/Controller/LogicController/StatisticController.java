package Source.Controller.LogicController;

import Source.Model.Heuristic.DataPool;
import Source.Model.Statistic;
import java.util.List;

/**
 * Class StatisticController Reads the statistics for a heuristic out of the
 * Model and collects them to show it to the View.
 */
public class StatisticController {

    //
    // Fields
    //
    //
    // Constructors
    //
    public StatisticController() {
    }

    /**
     * Constructor: Creates a StatisticController and gets himself a DataPool.
     *
     * @param pool The DataPool,that the StatisticController belongs to.
     */
    public StatisticController(DataPool pool) {
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
     * @return List<Statistic>.
     */
    public List<Statistic> getAllStatistics() {
        return null;
    }

    /**
     * @return Statistic.
     * @param heuristicName is the Name of the Heuristic, that you want the
     * statistics from.
     */
    public Statistic getStatistic(String heuristicName) {
        return null;
    }

}
