package Source.Controller.IOController;

/**
 * Class PluginController Loads all Heuristic, HeuristicResult and
 * HeuristicProperties classes using the ServiceLoader class. It uses the
 * singelton design pattern.
 */
public class PluginController {

    //
    // Fields
    //
    static private u7NlwHaIHOMIn service;
    private uPM7li6vHhKny heuristicLoader;
    private uMLKqNGRUu57V heuristicResultLoader;
    private uHk7vZj7n33N0 heuristicPropertiesLoader;
    private u65ORQEVVZe2j heuristics;
    private ugysYugrmkMFH heuristicsResults;
    private uvgHMnkt8uLJ8 heuristicsProperties;

    //
    // Constructors
    //
    public PluginController() {
    }

    //
    // Methods
    //
    //
    // Accessor methods
    //
    /**
     * Get the value of service
     *
     * @return the value of service
     */
    private u7NlwHaIHOMIn getService() {
        return service;
    }

    /**
     * Set the value of heuristicLoader
     *
     * @param newVar the new value of heuristicLoader
     */
    private void setHeuristicLoader(uPM7li6vHhKny newVar) {
        heuristicLoader = newVar;
    }

    /**
     * Get the value of heuristicLoader
     *
     * @return the value of heuristicLoader
     */
    private uPM7li6vHhKny getHeuristicLoader() {
        return heuristicLoader;
    }

    /**
     * Set the value of heuristicResultLoader
     *
     * @param newVar the new value of heuristicResultLoader
     */
    private void setHeuristicResultLoader(uMLKqNGRUu57V newVar) {
        heuristicResultLoader = newVar;
    }

    /**
     * Get the value of heuristicResultLoader
     *
     * @return the value of heuristicResultLoader
     */
    private uMLKqNGRUu57V getHeuristicResultLoader() {
        return heuristicResultLoader;
    }

    /**
     * Set the value of heuristicPropertiesLoader
     *
     * @param newVar the new value of heuristicPropertiesLoader
     */
    private void setHeuristicPropertiesLoader(uHk7vZj7n33N0 newVar) {
        heuristicPropertiesLoader = newVar;
    }

    /**
     * Get the value of heuristicPropertiesLoader
     *
     * @return the value of heuristicPropertiesLoader
     */
    private uHk7vZj7n33N0 getHeuristicPropertiesLoader() {
        return heuristicPropertiesLoader;
    }

    /**
     * Set the value of heuristics
     *
     * @param newVar the new value of heuristics
     */
    private void setHeuristics(u65ORQEVVZe2j newVar) {
        heuristics = newVar;
    }

    /**
     * Get the value of heuristics
     *
     * @return the value of heuristics
     */
    private u65ORQEVVZe2j getHeuristics() {
        return heuristics;
    }

    /**
     * Set the value of heuristicsResults
     *
     * @param newVar the new value of heuristicsResults
     */
    private void setHeuristicsResults(ugysYugrmkMFH newVar) {
        heuristicsResults = newVar;
    }

    /**
     * Get the value of heuristicsResults
     *
     * @return the value of heuristicsResults
     */
    private ugysYugrmkMFH getHeuristicsResults() {
        return heuristicsResults;
    }

    /**
     * Set the value of heuristicsProperties
     *
     * @param newVar the new value of heuristicsProperties
     */
    private void setHeuristicsProperties(uvgHMnkt8uLJ8 newVar) {
        heuristicsProperties = newVar;
    }

    /**
     * Get the value of heuristicsProperties
     *
     * @return the value of heuristicsProperties
     */
    private uvgHMnkt8uLJ8 getHeuristicsProperties() {
        return heuristicsProperties;
    }

    //
    // Other methods
    //
    /**
     * This method is the only way to access the PluginController. Creates a new
     * PluginController if it does not exist.
     *
     * @return returns the PluginController itself.
     * @return u7NlwHaIHOMIn
     */
    public u7NlwHaIHOMIn getInstance() {
    }

    /**
     * Loads all Heuristic classes if they are not already loaded.
     *
     * @return returns a list with all Heuristics.
     * @return u65ORQEVVZe2j
     */
    public u65ORQEVVZe2j getHeuristics() {
    }

    /**
     * Loads all HeuristicResult classes if they are not already loaded.
     *
     * @return returns a list with all HeuristicResult classes.
     * @return ugysYugrmkMFH
     */
    public ugysYugrmkMFH getHeuristicResults() {
    }

    /**
     * Loads all HeuristicProperties classes if they are not already loaded.
     *
     * @return returns a list with all HeuristicProperties classes.
     * @return uvgHMnkt8uLJ8
     */
    public uvgHMnkt8uLJ8 getHeuristicProperties() {
    }

    /**
     * Clears the pluginlists and then loads all plugins.
     */
    public void reloadPlugins() {
    }

    /**
     */
    private void PluginController() {
    }

}
