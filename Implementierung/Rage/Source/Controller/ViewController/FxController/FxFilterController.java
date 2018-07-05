package Source.Controller.ViewController.FxController;

import Source.Controller.LogicController.FilterController;

/**
 * Class FxFilterController This is the FxController for the Filter-Window. This
 * is a separate Window that will pop up if the User wants to Filter the shown
 * Graphs at the Preview-Tab.
 */
public class FxFilterController {

    //
    // Fields
    //
    /**
     * The FilterController for the passing of the User-Filter to the Model.
     */
    private FilterController filterController;

    //
    // Constructors
    //
    public FxFilterController() {
    }

    /**
     * Create the Needed GUI-Components. Therefore the FilterController is
     * called to get the List of all Heuristics. Then for every Heuristic the
     * ToggleButtonGroup to let the User select if the Heuristic should be
     * correctly or not or if it does not matter will be added.
     */
    public void init() {
    }
    //
    // Methods
    //

    /**
     * Parse the selected Filter into the correct form and give them to the
     * FilterController by calling the corresponding Method. Everything further
     * will be done by the FilterController.
     */
    private void filter() {
    }

    /**
     * Cancel the Filtration and close the Filter-Window.
     */
    private void cancel() {
    }

    //
    // Accessor methods
    //
    /**
     * Set the value of filterController The FilterController for the passing of
     * the User-Filter to the Model.
     *
     * @param newFilterController the new value of filterController
     */
    private void setFilterController(FilterController newFilterController) {
        filterController = newFilterController;
    }

    /**
     * Get the value of filterController The FilterController for the passing of
     * the User-Filter to the Model.
     *
     * @return the value of filterController
     */
    private FilterController getFilterController() {
        return filterController;
    }
}
