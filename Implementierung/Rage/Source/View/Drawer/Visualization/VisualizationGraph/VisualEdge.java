package Source.View.Drawer.Visualization.VisualizationGraph;

import java.util.ArrayList;
import java.util.List;

/**
 * Class VisualEdge The Edge of an Visual-Graph. It is the Child of the
 * JavaFx-Polygon Object so this Edge can be drawn.
 */
public class VisualEdge {

    //
    // Fields
    //
    /**
     * This List contains all Vertices-ID's from the Vertices this Edge
     * connects.
     */
    private List<Integer> connectedVerticesID;

    //
    // Constructors
    //
    public VisualEdge() {
    }

    /**
     * The Constructor of this Class.
     *
     * Set's the given List of by this Edge connected Vertices to the List of
     * this Object.
     *
     * @param connectedVertices The List of by this Edge connected Vertices.
     * This given List will be set to the List of this Edge-Object.
     */
    public VisualEdge(List<Integer> connectedVertices) {
        this.setConnectedVerticesID(connectedVertices);
    }

    //
    // Methods
    //
    //
    // Accessor methods
    //
    /**
     * Set the value of connectedVerticesID This List contains all Vertices-ID's
     * from the Vertices this Edge connects.
     *
     * @param newVar the new value of connectedVerticesID
     */
    private void setConnectedVerticesID(List<Integer> newConnectedVerticesList) {
        //Check if the List is already initializes and not null.
        if (this.connectedVerticesID == null) {
            this.connectedVerticesID = new ArrayList<>();
        }
        //Clear and reset the List.
        this.connectedVerticesID.clear();
        this.connectedVerticesID.addAll(newConnectedVerticesList);
    }

    /**
     * Add the given VertexId to the List of connectedVerticesID. Before that it
     * is checked so that the Vertex is not already at the List.
     *
     * @param vertexID The Vertex-Id to add.
     */
    public void addVertex(Integer vertexID) {
        //Check if the List is null.
        if (this.connectedVerticesID == null) {
            this.connectedVerticesID = new ArrayList<>();
        }

        //Check if the given Vertex is already at the List and therefore cannot be added.
        if (this.connectedVerticesID.contains(vertexID)) {
            //Given vertex already at the List.
            System.out.println("The given Vertex is already at the Graph.");
        } else {
            this.connectedVerticesID.add(vertexID);
        }
    }

    /**
     * Get the value of connectedVerticesID This List contains all Vertices-ID's
     * from the Vertices this Edge connects.
     *
     * @return the value of connectedVerticesID
     */
    private List<Integer> getConnectedVerticesID() {
        return this.connectedVerticesID;
    }

    /**
     * Checks if the given VisualEdge is an edge between the Same Vertices as
     * this Edge.
     *
     * @return If the two Edges are conections between the same Vertices it
     * returns true, else false.
     * @param compareEdge The Edge of which the connected-Vertices should be
     * checked with.
     */
    public Boolean connectsSame(VisualEdge compareEdge) {
        return null;
    }

    /**
     * Checks if the given List of Vertex-ID's are the same as the Vertices this
     * Edge is connecting.
     *
     * @return If the given Vertice-ID's are the same as the ones of this Edge
     * returns true, else false.
     * @param connectedVerticesIDs The Edge of which the connected-Vertices
     * should be checked with.
     */
    public Boolean connectsSame(List<Integer> connectedVerticesIDs) {
        return null;
    }

    /**
     * Checks if the given Vertex-ID is at the List of connected-Vertes-Id's of
     * this Edge.
     *
     * @param vertexId The Integer Vertex-Id that should be Checked.
     * @return true if the given vertexId is at the List of
     * connected-VerticeId's, false if not.
     */
    public Boolean conectsVertex(Integer vertexId) {
        return this.connectedVerticesID.contains(vertexId);
    }

    /**
     * This Method overwrites the standard toString-Method.
     *
     * @return It returns a String-Representation of this VisualEdge.
     * "{<VertexID1>, ...}"
     */
    @Override
    public String toString() {
        return null;
    }

}
