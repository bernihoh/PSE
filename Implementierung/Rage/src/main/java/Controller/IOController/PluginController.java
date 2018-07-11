package src.main.java.Controller.IOController;

import src.main.java.Model.Heuristic.Heuristic;
import src.main.java.Model.Heuristic.HeuristicProperties;
import src.main.java.Model.Heuristic.HeuristicResult;
import java.util.List;
import java.util.ServiceLoader;

/**
 * Class PluginController Loads all Heuristic, HeuristicResult and
 * HeuristicProperties classes using the ServiceLoader class. It uses the
 * singelton design pattern.
 */
public class PluginController {

    //
    // Fields
    //
    static private PluginController service;
    private ServiceLoader<Heuristic> heuristicLoader;
    private ServiceLoader<HeuristicResult> heuristicResultLoader;
    private ServiceLoader<HeuristicProperties> heuristicPropertiesLoader;
    private List<Heuristic> heuristics;
    private List<HeuristicResult> heuristicsResults;
    private List<HeuristicProperties> heuristicsProperties;

    //
    // Constructors
    //
    private PluginController() {
    }

    //
    // Methods
    //
    /**
     * This method is the only way to access the PluginController. Creates a new
     * PluginController if it does not exist.
     *
     * @return returns the PluginController itself.
     * @return u7NlwHaIHOMIn
     */
    public PluginController getInstance() {
        return null;
    }

    /**
     * Loads all Heuristic classes if they are not already loaded.
     *
     * @return returns a list with all Heuristics.
     * @return u65ORQEVVZe2j
     */
    public synchronized List<Heuristic> getHeuristics() {
        return null;
    }

    /**
     * Loads all HeuristicResult classes if they are not already loaded.
     *
     * @return returns a list with all HeuristicResult classes.
     * @return ugysYugrmkMFH
     */
    public synchronized List<HeuristicResult> getHeuristicResults() {
        return null;
    }

    /**
     * Loads all HeuristicProperties classes if they are not already loaded.
     *
     * @return returns a list with all HeuristicProperties classes.
     * @return uvgHMnkt8uLJ8
     */
    public synchronized List<HeuristicProperties> getHeuristicProperties() {
        return null;
    }

    /**
     * Clears the pluginlists and then loads all plugins.
     */
    public synchronized void reloadPlugins() {
    }

}
