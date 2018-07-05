package Source.Controller.ViewController.UIController.MouseController;

import Source.View.Drawer.Visualization.VisualizationGraph.VisualGraph;
import javafx.event.EventHandler;
import javafx.scene.input.MouseEvent;

/**
 * Class MouseControllerGraphDrawer This MouseController is used at
 * Graph-Modifying.
 *
 * For Example: It registeres when a Vertex is pressed so that it can be added
 * to the selected Vertices.
 */
public class MouseControllerGraphDrawer extends MouseController {

    //
    // Fields
    //
    /**
     * The Visual-Graph the User wants to modify by using the Mouse.
     */
    private VisualGraph visualGraph;

    //
    // Constructors
    //
    /**
     * The Empty-Constructor of this Class.
     */
    public MouseControllerGraphDrawer() {
    }

    /**
     * This is the Constructor of this Class. It uses the
     * Empty-SuperConstructor. It get's an Graph as a Parameter and sets them.
     *
     * @param vgraph The VisualGraph that should be set to modified with the
     * Mouse.
     */
    public MouseControllerGraphDrawer(VisualGraph vgraph) {
        this.visualGraph = vgraph;
    }

    /**
     * The Constructor of this Class. It gets the different EventHandlers as
     * Parameters and sets them. Also it sets the given Graph.
     *
     * @param vgraph The VisualGraph that should be set to modified with the
     * Mouse.
     * @param onMousePressedEventHandler The MouseHandler for the
     * onPressed-Action that should be set.
     * @param onMouseDraggedEventHandler The MouseHandler for the
     * onDragged-Action that should be set.
     * @param onMouseReleasedEventHandler The MouseHandler for the
     * onReleased-Action that should be set.
     */
    public MouseControllerGraphDrawer(VisualGraph vgraph,
            EventHandler<MouseEvent> onMousePressedEventHandler,
            EventHandler<MouseEvent> onMouseDraggedEventHandler,
            EventHandler<MouseEvent> onMouseReleasedEventHandler) {
        super(
                onMousePressedEventHandler,
                onMouseDraggedEventHandler,
                onMouseReleasedEventHandler
        );
        this.visualGraph = vgraph;
    }

    //
    // Methods
    //
    //
    // Accessor methods
    //
    /**
     * Get the value of graph The Graph the User wants to modify by using the
     * Mouse.
     *
     * @return the value of graph
     */
    private VisualGraph getGraph() {
        return this.visualGraph;
    }

    /**
     * Set the value of graph The Graph the User wants to modify by using the
     * Mouse.
     *
     * @param graph the new value of graph
     */
    private void setGraph(VisualGraph vg) {
        this.visualGraph = vg;
    }
}
