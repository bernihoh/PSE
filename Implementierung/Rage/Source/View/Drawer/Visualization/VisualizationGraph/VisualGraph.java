

/**
 * Class VisualGraph
 * This is the VisualGraph.
It is the Graph-Construct that is used for the
 * Drawing.

Remember:
VisualGraph is Generic
VisualGaph<V extends VisualVertex, E
 * extends VisualEdge>
This is necessary so that the Graph can differentiate
 * between the uncoloured and the coloured Elements.

This separate
 * Graph-Representation for the View is necessary because the Model and the View of
 * the Rage-Program should be strictly separated and therefore the View could not
 * use the same Graph-Object.
As well this Graph-Representation uses special Nodes
 * and Edges as Elements that could be drawn.
 */
public class VisualGraph {

  //
  // Fields
  //
  /**

   * This is a List of all Vertices (=Node's) of this Graph.
   * 
   * Remenber:
   * At any further Point the "Nodes" will be named Vertex/Vertices because of the confusion with JavaFx-Nodes that would otherwise occur.   */

  private uRgKtJJdfEUIK vertices;
  /**
   * This is a List of all Edge's of this Graph.
   */
  private u8H5tTTvIJtDg edges;
  
  //
  // Constructors
  //
  public VisualGraph () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of vertices
   * This is a List of all Vertices (=Node's) of this Graph.

Remenber:
At any
   * further Point the "Nodes" will be named Vertex/Vertices because of the confusion
   * with JavaFx-Nodes that would otherwise occur.
   * @param newVar the new value of vertices
   */
  private void setVertices (uRgKtJJdfEUIK newVar) {
    vertices = newVar;
  }

  /**
   * Get the value of vertices
   * This is a List of all Vertices (=Node's) of this Graph.

Remenber:
At any
   * further Point the "Nodes" will be named Vertex/Vertices because of the confusion
   * with JavaFx-Nodes that would otherwise occur.
   * @return the value of vertices
   */
  private uRgKtJJdfEUIK getVertices () {
    return vertices;
  }

  /**
   * Set the value of edges
   * This is a List of all Edge's of this Graph.
   * @param newVar the new value of edges
   */
  private void setEdges (u8H5tTTvIJtDg newVar) {
    edges = newVar;
  }

  /**
   * Get the value of edges
   * This is a List of all Edge's of this Graph.
   * @return the value of edges
   */
  private u8H5tTTvIJtDg getEdges () {
    return edges;
  }

  //
  // Other methods
  //

  /**
   * The Empty-Constructor of this Class.
   */
  public void GraphVisual()
  {
  }


  /**
   * Checks if the Graph is made out of VisualVertexColoured and VisualEdgeColoured
   * and if so if the ColouredID's of all Objects are set.

@return
If they are set
   * it returns true, and if not false.
   * @return       uZLSB8lOho0lC
   */
  public uZLSB8lOho0lC isColoured()
  {
  }


  /**
   * Add a new Vertex to the List of Vertices of this Graph.

If the List is not
   * instanciated yet this will be done.

To add a new Vertex this Method searches
   * for the next unused Integer-ID that could be used for a new Node and created the
   * VisualVertex-Object with this Parameter.
This created Object will be added to
   * the List.
   */
  public void addVertex()
  {
  }


  /**
   * Add the given Vertice to the List of Vertices.

If the List is not instanciated
   * yet this will be done.

Also it is checked that the Vertex-ID is not already
   * used by another Vertex.
If so the given Vertex will not be added.

@return
If
   * the Vertex-ID was added this Method returns true, otherwise false.
   * @return       uZLSB8lOho0lC
   * @param        vertex The Vertex that should be added to this Graph.
   */
  public uZLSB8lOho0lC addVertex(uOceykHvWLeZp vertex)
  {
  }


  /**
   * Add a whole List of Vertices to this Graph.

This is done by calling the
   * addVertex-Method multiple times.
   * @param        vertices The List of Vertices that should be added to the List.
   */
  public void addVertices(uRgKtJJdfEUIK vertices)
  {
  }


  /**
   * Add the given amount of Vertices to the Graph.

This is done by calling the
   * addVertex-Method multiple times.
   * @param        amount The amount of Vertices the user wants to add to this Graph.
   */
  public void addVerticesAmount(uDDdo5Ay7C13h amount)
  {
  }


  /**
   * Add the given Edge to the Graph.

If the List is not instanciated yet this will
   * be done.

Also it is checked if this Edge has the exact same connected Vertices
   * as any other Edge of this Graph.
This is done by calling the connectSame-Method
   * of the given Edge.

Also it is checked that the given Edge is valid.
That means
   * that this method checks if all connected-Vertices that are given by ID are
   * Vertices of this Graph.
If there is an unexisting Vertex this Vertex will be
   * created and added to the Graph by calling the addVertex(VisualVertex)-Method.
   * @param        edge The Edge that should be added to this Graph.
   * 
   * Check if this Edge contains valid VertexID's and if it only connects Vertices
   * that are not currently connected.
   */
  public void addEdge(uAZqh3Ru7GhbV edge)
  {
  }


  /**
   * Add a whole List of Edges to this Graph.

This is done by calling the
   * addEdge-Method multiple times.
   * @param        edges A List of Edges that should be added.
   */
  public void addEdges(u8H5tTTvIJtDg edges)
  {
  }


  /**
   * Add the Edge, that is given by the List of Vertice-ID's, to the graph.

This is
   * done by creating an new VisualEdge-Object with the given List as Parameter and
   * then calling the addEdge-Method.
   * @param        vertriceIDs The List of Vertice-ID's that should be connected by
   * Edge that should be added.
   */
  public void addEdge(umgFSLDYCXrQe vertriceIDs)
  {
  }


  /**
   * Remove the given Vertex from the Graph.

If an Edge was connected to this Vertex
   * and it only contains one other Vertex after the deletion, the Edge will be
   * removed too.
   * @param        vertex The Vertex that should be removed.
   */
  public void removeVertex(uOceykHvWLeZp vertex)
  {
  }


  /**
   * Remove the Vertex, by the given ID, from the Graph.

This is done by calling the
   * removeVertex-Method.
(The Vertex that should be deleted can be found at the
   * Vertices-List by the given ID).
   * @param        vertexID The Vertex-ID from the Vertex that should be removed from
   * the Graph.
   */
  public void removeVertex(uDDdo5Ay7C13h vertexID)
  {
  }


  /**
   * Remove the given Edge from the Graph.
   * @param        edge The Edge of the VisualGraph that should be removed.
   */
  public void removeEdge(uAZqh3Ru7GhbV edge)
  {
  }


  /**
   * Remove the Edge between the given Vertrice.
   * @param        verticesIDs The List of the Vertices-ID's that the Edge is
   * between, that should be removed.
   */
  public void removeEdge(umgFSLDYCXrQe verticesIDs)
  {
  }


  /**
   * Duplicate the given Vertex so that a new Vertex is at the Graph with exactly the
   * same neighbourhood.
   * @param        vertexID The Vertex-ID of the Vertex that should be duplicated.
   */
  public void duplicateVertex(uDDdo5Ay7C13h vertexID)
  {
  }


  /**
   * Contract the given Vertices to one Vertex.

Multiple Edges between the same
   * destinations will be removed, so that only one of these Edges is in the
   * Graph.
Edge-Loops will be removed.
   * @param        verticesIDs The List of the given VertricesID's.
   */
  public void contractVertices(umgFSLDYCXrQe verticesIDs)
  {
  }


  /**
   * Set the Vertex to the given Order.

The Vertex that was at this Position of the
   * List earlier will be put behind the set Vertex.
   * @param        vertexID The ID of the Vertex that should be moved to a different
   * Order.
   * @param        order The order the Vertex should be set to.
   */
  public void setVertexOrder(uDDdo5Ay7C13h vertexID, uDDdo5Ay7C13h order)
  {
  }


}
