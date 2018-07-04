

/**
 * Class VisualEdge
 * The Edge of an Visual-Graph.
It is the Child of the JavaFx-Polygon Object so
 * this Edge can be drawn.
 */
public class VisualEdge {

  //
  // Fields
  //

  /**
   * This List contains all Vertices-ID's from the Vertices this Edge connects.
   */
  private umgFSLDYCXrQe connectedVerticesID;
  
  //
  // Constructors
  //
  public VisualEdge () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of connectedVerticesID
   * This List contains all Vertices-ID's from the Vertices this Edge connects.
   * @param newVar the new value of connectedVerticesID
   */
  private void setConnectedVerticesID (umgFSLDYCXrQe newVar) {
    connectedVerticesID = newVar;
  }

  /**
   * Get the value of connectedVerticesID
   * This List contains all Vertices-ID's from the Vertices this Edge connects.
   * @return the value of connectedVerticesID
   */
  private umgFSLDYCXrQe getConnectedVerticesID () {
    return connectedVerticesID;
  }

  //
  // Other methods
  //

  /**
   * The Constructor of this Class.

Set's the given List of by this Edge connected
   * Vertices to the List of this Object.
   * @param        connectedVertices The List of by this Edge connected Vertices.
   * This given List will be set to the List of this Edge-Object.
   */
  public void VisualEdge(uRgKtJJdfEUIK connectedVertices)
  {
  }


  /**
   * Checks if the given VisualEdge is an edge between the Same Vertices as this
   * Edge.

@return
If the two Edges are conections between the same Vertices it
   * returns true, else false.
   * @return       uZLSB8lOho0lC
   * @param        compareEdge The Edge of which the connected-Vertices should be
   * checked with.
   */
  public uZLSB8lOho0lC connectsSame(uAZqh3Ru7GhbV compareEdge)
  {
  }


  /**
   * Get the List of the connected VerticesIDs.

@return
The List of the
   * Vertices-ID's that this Edge connects.
   * @return       umgFSLDYCXrQe
   */
  public umgFSLDYCXrQe getConnectedVertricesIDList()
  {
  }


  /**
   * This Method overwrites the standard toString-Method.

@return
It returns a
   * String-Representation of this VisualEdge.
"{<VertexID1>, ...}"
   * @return       uRubgLa75CQhI
   */
  public uRubgLa75CQhI toString()
  {
  }


}
