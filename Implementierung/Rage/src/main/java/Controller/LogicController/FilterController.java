package Source.Controller.LogicController;

import Source.Model.Heuristic.HeuristicProperties;
import java.util.List;

/**
 * Class FilterController Controlls the filter set by the user and manages the
 * filtered graph pool and the graph pool in the DataPool.
 */
public class FilterController {

    //
    // Fields
    //
    //
    // Constructors
    //
    public FilterController() {
    }

    ;

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
   * Constructor: Creates a FilterrController and it will get a DataPool instance.
   */
  public void FilterController() {
    }

    /**
     * Filters the graph list from the DataPool.
     *
     * @param List <Heuristic, value: int> It determines how the list will be
     * filtered.
     * @param sort It determines how list will be sorted (decending, ascending
     * ...).
     * @return returns List <VisualGraph>, the DataPool remains untouched.
     * @throws EXCEPTION if filter and sort are contradictory.
     */
    public void filter() {
    }

    /**
     * Returns all properties of the used heuristics and the heuristic name is
     * also a heuristic property.
     *
     * @return returns List<HeuristicProperties>
     */
    public List<HeuristicProperties> getAllHeuristics() {
        return null;
    }

}
