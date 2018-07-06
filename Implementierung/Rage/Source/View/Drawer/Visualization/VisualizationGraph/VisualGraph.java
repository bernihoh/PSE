package Source.View.Drawer.Visualization.VisualizationGraph;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * Class VisualGraph This is the VisualGraph. It is the Graph-Construct that is
 * used for the Drawing.
 *
 * Remember: VisualGraph is Generic null VisualGaph<V extends VisualVertex, E
 * extends VisualEdge>
 * This is necessary so that the Graph can differentiate between the uncoloured
 * and the coloured Elements.
 *
 * This separate Graph-Representation for the View is necessary because the
 * Model and the View of the Rage-Program should be strictly separated and
 * therefore the View could not use the same Graph-Object. As well this
 * Graph-Representation uses special Nodes and Edges as Elements that could be
 * drawn.
 *
 * @param <V> The Vertex-Class that this Graph is made out of. It extends the
 * VisualVertex-Class, so that it can be drawn easily.
 * @param <E> The Edge-Class that this Graph is made out of. It extends the
 * VisualEdge-Class, so that it can be drawn easily.
 */
public class VisualGraph<V extends VisualVertex, E extends VisualEdge> {

    //
    // Fields
    //
    /**
     *
     * This is a List of all Vertices (=Node's) of this Graph.
     *
     * Remenber: At any further Point the "Nodes" will be named Vertex/Vertices
     * because of the confusion with JavaFx-Nodes that would otherwise occur.
     */
    private List<V> vertices;
    /**
     * This is a List of all Edge's of this Graph.
     */
    private List<E> edges;

    //
    // Constructors
    //
    /**
     * The Empty-Constructor of this Class.
     */
    public VisualGraph() {
    }

    //
    // Methods
    //
    /**
     * Checks if the Graph is made out of VisualVertexColoured and
     * VisualEdgeColoured and if so if the ColouredID's of all Objects are set.
     *
     * @return If they are set it returns true, and if not false.
     */
    public Boolean isColoured() {
        return null;
    }

    /**
     * Add the given Vertice to the List of Vertices.
     *
     * If the List is not instanciated yet this will be done.
     *
     * Also it is checked that the Vertex is not already used by another Vertex.
     * If so the given Vertex will not be added.
     *
     * @return If the Vertex-ID was added this Method returns true, otherwise
     * false.
     * @param vertex The Vertex that should be added to this Graph.
     */
    public Boolean addVertex(V vertex) {
        //Check if the List is null.
        if (this.vertices == null) {
            this.vertices = new ArrayList<>();
        }

        //Check if the given Vertex is already at the List and therefore cannot be added.
        if (this.vertices.contains(vertex)) {
            //Given vertex already at the List.
            System.out.println("The given Vertex is already at the Graph.");
            return false;
        } else {
            this.vertices.add(vertex);
            return true;
        }
    }

    /**
     * Add a whole List of Vertices to this Graph.
     *
     * This is done by calling the addVertex-Method multiple times.
     *
     * @param vertices The List of Vertices that should be added to the List.
     */
    public void addVertices(List<V> vertices) {
        for (V vertex : vertices) {
            this.addVertex(vertex);
        }
    }

    /**
     * Add a new Vertex to the List of Vertices of this graph. The Vertex will
     * be generated automatically by searching for the next unused Vertex-ID.
     */
    public void addVertex() {
        //Sort the List of VisualVertices after their ID.
        ArrayList<V> sortedList = new ArrayList<>();
        sortedList.addAll(this.vertices);
        sortedList.sort((V v1, V v2) -> v1.getID() - v2.getID());

        //Get the highest Numbered ID and get the next higher int as the ID of the Vertex that will be added.
        Integer highestID = sortedList.get(sortedList.size() - 1).getID();

        VisualVertex newVisualVertex = new VisualVertex(highestID + 1);

        this.addVertex((V) newVisualVertex);
    }

    /**
     * Add the given amount of Vertices to the Graph.
     *
     * This is done by calling the addVertex-Method multiple times.
     *
     * @param amount The amount of Vertices the user wants to add to this Graph.
     */
    public void addVerticesAmount(Integer amount) {
        for (int a = 0; a < amount; a++) {
            this.addVertex();
        }
    }

    /**
     * Add the given Edge to the Graph.
     *
     * If the List is not instanciated yet this will be done.
     *
     * Also it is checked if this Edge has the exact same connected Vertices as
     * any other Edge of this Graph. This is done by calling the
     * connectSame-Method of the given Edge.
     *
     * Also it is checked that the given Edge is valid. That means that this
     * method checks if all connected-Vertices that are given by ID are Vertices
     * of this Graph. If there is an unexisting Vertex this Vertex will be
     * created and added to the Graph by calling the
     * addVertex(VisualVertex)-Method.
     *
     * @param edge The Edge that should be added to this Graph.
     *
     * Check if this Edge contains valid VertexID's and if it only connects
     * Vertices that are not currently connected.
     */
    public void addEdge(E edge) {
        //Check if the List is null.
        if (this.edges == null) {
            this.edges = new ArrayList<>();
        }

        //Check if the given Edge is already at the List and therefore cannot be added.
        if (this.edges.contains(edge)) {
            //Given vertex already at the List.
            System.out.println("The given Edge is already at the Graph.");
        } else {
            this.edges.add(edge);
        }
    }

    /**
     * Add a whole List of Edges to this Graph.
     *
     * This is done by calling the addEdge-Method multiple times.
     *
     * @param edges A List of Edges that should be added.
     */
    public void addEdges(List<E> edges) {
        for (E edge : edges) {
            this.addEdge(edge);
        }
    }

    /**
     * Add the Edge, that is given by the List of Vertice-ID's, to the graph.
     *
     * This is done by creating an new VisualEdge-Object with the given List as
     * Parameter and then calling the addEdge-Method.
     *
     * @param verticeIDs The List of Vertice-ID's that should be connected by
     * Edge that should be added.
     */
    public void addEdge(List<Integer> verticeIDs) {
        VisualEdge newEdge = new VisualEdge(verticeIDs);
        this.edges.add((E) newEdge);
    }

    /**
     * Remove the given Vertex from the Graph.
     *
     * If an Edge was connected to this Vertex and it only contains one other
     * Vertex after the deletion, the Edge will be removed too.
     *
     * @param vertex The Vertex that should be removed.
     */
    public void removeVertex(VisualVertex vertex) {
        this.vertices.remove(vertex);
    }

    /**
     * Remove the Vertex, by the given ID, from the Graph.
     *
     * This is done by calling the removeVertex-Method. (The Vertex that should
     * be deleted can be found at the Vertices-List by the given ID).
     *
     * @param vertexID The Vertex-ID from the Vertex that should be removed from
     * the Graph.
     */
    public void removeVertex(Integer vertexID) {
        for (V vertex : this.vertices) {
            if (Objects.equals(vertex.getID(), vertexID)) {
                this.removeVertex(vertex);
            }
        }
    }

    /**
     * Remove the given Edge from the Graph.
     *
     * @param edge The Edge of the VisualGraph that should be removed.
     */
    public void removeEdge(E edge) {
        this.edges.remove(edge);
    }

    /**
     * Remove the Edge between the given Vertrice.
     *
     * @param verticesIDs The List of the Vertices-ID's that the Edge is
     * between, that should be removed.
     */
    public void removeEdge(List<Integer> verticesIDs) {
        for (E edge : this.edges) {
            if (edge.connectsSame(verticesIDs)) {
                this.removeEdge(edge);
            }
        }
    }

    /**
     * Duplicate the given Vertex so that a new Vertex is at the Graph with
     * exactly the same neighbourhood.
     *
     * @param vertexID The Vertex-ID of the Vertex that should be duplicated.
     */
    public void duplicateVertex(Integer vertexID) {
    }

    /**
     * Contract the given Vertices to one Vertex.
     *
     * Multiple Edges between the same destinations will be removed, so that
     * only one of these Edges is in the Graph. Edge-Loops will be removed.
     *
     * @param verticesIDs The List of the given VertricesID's.
     */
    public void contractVertices(List<Integer> verticesIDs) {
    }

    /**
     * Set the Vertex to the given Order.
     *
     * The Vertex that was at this Position of the List earlier will be put
     * behind the set Vertex.
     *
     * @param vertexID The ID of the Vertex that should be moved to a different
     * Order.
     * @param order The order the Vertex should be set to.
     */
    public void setVertexOrder(Integer vertexID, Integer order) {
        //Go through all Vertices and look for the given VertexID at the List.
        for (V vertex : this.vertices) {
            if (Objects.equals(vertex.getID(), vertexID)) {
                //Found the given VertexID.
                //Get the Position of the Vertex.
                int currentVertexPosition = this.vertices.indexOf(vertex);
                //Check if the current-Position is already the position that should be set.
                if (currentVertexPosition != order) {
                    //Delete the Vertex at the Old Position.
                    this.vertices.remove(currentVertexPosition);
                    //Change the Position to the given Order.
                    this.vertices.add(order, vertex);
                }
            }
        }
    }

    //
    // Accessor methods
    //
    /**
     * Set the value of vertices This is a List of all Vertices (=Node's) of
     * this Graph.
     *
     * Remenber: At any further Point the "Nodes" will be named Vertex/Vertices
     * because of the confusion with JavaFx-Nodes that would otherwise occur.
     *
     * @param newVerticesList the new value of vertices
     */
    public void setVertices(List<V> newVerticesList) {
        this.vertices.clear();
        this.vertices.addAll(newVerticesList);
    }

    /**
     * Get the value of vertices This is a List of all Vertices (=Node's) of
     * this Graph.
     *
     * Remenber: At any further Point the "Nodes" will be named Vertex/Vertices
     * because of the confusion with JavaFx-Nodes that would otherwise occur.
     *
     * @return the value of vertices
     */
    public List<V> getVertices() {
        return this.vertices;
    }

    /**
     * Set the value of edges This is a List of all Edge's of this Graph.
     *
     * @param newEdgesList the new value of edges
     */
    public void setEdges(List<E> newEdgesList) {
        this.edges.clear();
        this.edges.addAll(newEdgesList);
    }

    /**
     * Get the value of edges This is a List of all Edge's of this Graph.
     *
     * @return the value of edges
     */
    public List<E> getEdges() {
        return this.edges;
    }

}
