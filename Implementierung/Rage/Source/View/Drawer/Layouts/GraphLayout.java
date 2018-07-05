package Source.View.Drawer.Layouts;

import Source.View.Drawer.Visualization.VisualizationGraph.VisualGraph;

/**
 * Class GraphLayout This is the Layout of the Drawing of the Graph.
 *
 * It is an abstract class so that there could be multiple Layouts for the
 * Representation that implements this.
 */
abstract public class GraphLayout {

    //
    // Fields
    //
    //
    // Constructors
    //
    /**
     * The Constructor of this abstract Class. This is used at the Childs if
     * they do not have an separate Constructor because they do not need
     * parameters to set as well.
     */
    public GraphLayout() {
    }

    ;
  
    //
    // Methods
    //
    /**
     * This is an abstract Method and has to be implemented at the Sub-Classes.
     *
     * This Method set's the given Graph to the implemented Layout of the
     * particular Child-Class. Therefore it sets the Positions of the Vertices
     * of the given Graph.
     *
     * @return The given Graph with the calculated Layout.
     * @return uf0fd9uPbY6Sl
     * @param graph The Graph that gets the layout set on it. Therfore all
     * Elements of this given Graph will be relocated to the calculated Position
     * this Method calculates.
     */
    abstract public VisualGraph executeLayout(VisualGraph graph);

    //
    // Accessor methods
    //
}
