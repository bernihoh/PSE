package Source.Utils;

import Source.Model.Graph.Graph;
import Source.View.Drawer.Visualization.VisualizationGraph.VisualGraph;

/**
 * Class GraphAdapter
 */
public class GraphAdapter {

    //
    // Fields
    //
    //
    // Constructors
    //
    public GraphAdapter() {
    }

    ;

  //
  // Methods
  //

  /**
   * Converts the given Graph to the VisualGraph Representation so that it can be
   * drawn by the Drawer.
   * @return
   * Rage.Source.View.Drawer.Visualization.VisualizationGraph.VisualGraph
   * @param        graph The Graph to convert.
   * @param        type
   */
  public VisualGraph adaptGraphToVisualGraph(Graph graph, int type) {
        return null;
    }

    /**
     * Converts the given VisualGraph to the Graph Representation.
     *
     * @return Rage.Source.Model.Graph.Graph
     * @param visualGraph The VisualGraph to convert.
     * @param type
     */
    public Graph adaptVisualGraphToGraph(VisualGraph visualGraph, int type) {
        return null;
    }

}
