package Source.View.Drawer.GraphDrawer;

import Source.View.Drawer.ColourManager.ColourManager;
import Source.View.Drawer.Layouts.EnumGraphLayout;
import Source.View.Drawer.Visualization.VisualizationGraph.VisualGraph;
import java.util.List;
import javafx.scene.Node;

/**
 * Class GraphDrawer The Drawer that draws the given Graph to the given
 * JavaFx-Node.
 */
public class GraphDrawer {

    //
    // Fields
    //
    /**
     * The Graph that should be drawn.
     */
    private VisualGraph vGraph;
    /**
     * The JavaFx-Node where the Graph should be drawn on.
     */
    private Node fxNode;
    /**
     *
     * The ColourManager of this Drawer to Map the ColourID's to the actual
     * Colours of the to drawn Objects.
     *
     * This Object is created at the Constructor as new ColourManager and before
     * the Drawing the ColourID's are added.
     */

    private ColourManager colourManager;
    /**
     * The List of Vertices-ID's that the user selected the Vertices at the GUI.
     */
    private List<Integer> selectedVerticesIds;

    //
    // Constructors
    //
    /**
     * The Empty-Constructor of this Class.
     */
    public GraphDrawer() {
    }

    /**
     * The Constructor of this Class.
     *
     * Sets the given Graph and fxNode. Also initializes the ColourManager.
     *
     * @param graph The Graph that should be set as the Graph of this Drawer.
     * @param fxNode The JavaFx-Node that should be set as the fxNode of this
     * Class.
     */
    public GraphDrawer(VisualGraph graph, Node fxNode) {
        this.setGraph(vGraph);
        this.setFxNode(fxNode);
    }

    //
    // Methods
    //
    /**
     * Draw the given Vertex.
     *
     * Get the Vertex by searching for the given VertexID at the vertices-List
     * of the given Graph. Use the GraphicLayout to get the correct Position of
     * this Vertex.
     *
     * @param vertexID The ID of the to drawn Vertex.
     */
    private void drawVertex(Integer vertexID) {
    }

    /**
     * Draw the given Vertex as a selected Vertex.
     *
     * This Method is called if the to drawn Vertex of the drawVertex-Method is
     * in the selectedVerticesIds-List.
     *
     * The Vertex is drawn as selected by adding the corresponding Picture into
     * the Vertex-JavaFx-Shape. Then the standard draw-Method is used to do the
     * rest.
     *
     * @param vertexID The ID of the Vertex that should be drawn as a selected
     * Vertex.
     */
    private void drawVertexSelected(Integer vertexID) {
    }

    /**
     * Draw the Edge that is on the given Position at the Edge-List of the Graph
     * of this Drawer.
     *
     * This Method only draws one Edge so that the Editor can show specific
     * Edges. This Method is also called multiple times to draw all Edges.
     *
     * @param edgePosition The Position of the to drawn Edge at the List of
     * Edges of the Graph.
     */
    private void drawEdge(Integer edgePosition) {
    }

    /**
     * This Method prints the textual Representation onto the given JavaFx-Node.
     */
    public void printGraphTextual() {
        this.vGraph.toString();
    }

    /**
     * This Method draws the Graph to the given JavaFx-Node by using the given
     * Layout to position it's Vertices.
     *
     * @param layout The Enum that indicates which Layout the Drawer should use.
     * If it is null the Drawer will use the Circle Layout.
     */
    public void drawGraph(EnumGraphLayout layout) {
    }

    /**
     * Add the given VertexID to the List of selected ones.
     *
     * @param vertexID The Vertex-ID that should be added to the List of
     * selected Vertices.
     */
    public void addToSelectedVertices(Integer vertexID) {
    }

    /**
     * Clear the List of selected Vertices-ID's.
     */
    public void clearSelectedVerticesList() {
    }

    //
    // Accessor methods
    //
    /**
     * Set the value of vGraph The Graph that should be drawn.
     *
     * @param newVGraph the new value of vGraph
     */
    private void setGraph(VisualGraph newVGraph) {
        this.vGraph = newVGraph;
    }

    /**
     * Get the value of vGraph The Graph that should be drawn.
     *
     * @return the value of vGraph
     */
    private VisualGraph getGraph() {
        return this.vGraph;
    }

    /**
     * Set the value of fxNode The JavaFx-Node where the Graph should be drawn
     * on.
     *
     * @param newFxNode the new value of fxNode
     */
    private void setFxNode(Node newFxNode) {
        this.fxNode = newFxNode;
    }

    /**
     * Get the value of fxNode The JavaFx-Node where the Graph should be drawn
     * on.
     *
     * @return the value of fxNode
     */
    private Node getFxNode() {
        return this.fxNode;
    }

    /**
     * Set the value of colourManager The ColourManager of this Drawer to Map
     * the ColourID's to the actual Colours of the to drawn Objects.
     *
     * This Object is created at the Constructor as new ColourManager and before
     * the Drawing the ColourID's are added.
     *
     * @param newColourManager the new value of colourManager
     */
    private void setColourManager(ColourManager newColourManager) {
        this.colourManager = newColourManager;
    }

    /**
     * Get the value of colourManager The ColourManager of this Drawer to Map
     * the ColourID's to the actual Colours of the to drawn Objects.
     *
     * This Object is created at the Constructor as new ColourManager and before
     * the Drawing the ColourID's are added.
     *
     * @return the value of colourManager
     */
    private ColourManager getColourManager() {
        return this.colourManager;
    }

    /**
     * Set the value of selectedVerticesIds The List of Vertices-ID's that the
     * user selected the Vertices at the GUI.
     *
     * @param newSelectedVerticesIds the new value of selectedVerticesIds
     */
    private void setSelectedVertices(List<Integer> newSelectedVerticesIds) {
        this.selectedVerticesIds.clear();
        this.selectedVerticesIds.addAll(newSelectedVerticesIds);
    }

    /**
     * Get the value of selectedVerticesIds The List of Vertices-ID's that the
     * user selected the Vertices at the GUI.
     *
     * @return the value of selectedVerticesIds
     */
    private List<Integer> getSelectedVertices() {
        return this.selectedVerticesIds;
    }

}
