package src.main.java.View.Drawer.Visualization.VisualizationGraph;

import java.util.ArrayList;
import java.util.List;
import javafx.scene.shape.Polygon;

/**
 * Class VisualEdge The Edge of an Visual-Graph. It is the Child of the
 * JavaFx-Polygon Object so this Edge can be drawn.
 */
public class VisualEdge extends Polygon {

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
    /**
     * The Empty-Constructor of this Class.
     */
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
     * Remove the given VertexId of the List of connectedVerticesIDs.
     *
     * @param vertexID The Vertex-Id to remove.
     */
    public void removeVertex(Integer vertexID) {
        this.connectedVerticesID.remove(vertexID);
    }

    /**
     * Replace the given currentVertexId with the given newVertexId at the List
     * of connected Vertices.
     *
     * @param currentVertexId The VertexId that will be replaced.
     * @param newVertexId The Vertex Id that replaces.
     */
    public void replaceVertex(Integer currentVertexId, Integer newVertexId) {
        int position = this.connectedVerticesID.indexOf(currentVertexId);
        this.connectedVerticesID.set(position, newVertexId);
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
     * Check if this Edge is a Loop and therefore connects less or equal than
     * one Vertex.
     *
     * @return true if the List of connected Vertices by this Edge is less or
     * equal one, false otherwise.
     */
    public Boolean isLoop() {
        return this.connectedVerticesID.size() == 1;
    }

    /**
     * Check if this Edge is Empty and therefore connects less or equal than
     * zero Vertices.
     *
     * @return true if the List of connected Vertices by this Edge is less or
     * equal zero, false otherwise.
     */
    public Boolean isEmpty() {
        return this.connectedVerticesID.size() <= 0;
    }

    /**
     * Check if this Edge is a Loop or Empty and therefore calls the isLoop and
     * isEmpty Methods.
     *
     * @return true if the isLoop or the isEmpty Method is true, false if not.
     */
    public Boolean isLoopOrEmpty() {
        return this.isLoop() || this.isEmpty();
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
        //Check if the given List has the same Dimension as the List of this Edge.
        if (this.connectedVerticesID.size() == connectedVerticesIDs.size()) {
            //Check if they connecting the same Vertices.
            return this.connectedVerticesID.containsAll(connectedVerticesID);
        }
        return false;
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
        return this.connectsSame(compareEdge.getConnectedVerticesID());
    }

    /**
     * Checks if the given Vertex-ID is at the List of connected-Vertes-Id's of
     * this Edge.
     *
     * @param vertexId The Integer Vertex-Id that should be Checked.
     * @return true if the given vertexId is at the List of
     * connected-VerticeId's, false if not.
     */
    public Boolean connectsVertex(Integer vertexId) {
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
