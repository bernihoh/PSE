

/**
 * Class VisualVertexColoured
 * Extends the VisualVertex Class.

This Vertex also contains a Colour-ID so that
 * the Vertex can be coloured.
 */
public class VisualVertexColoured {

  //
  // Fields
  //
  /**

   * The ID of the Colour used by the Heuristic.
   * This is like a Foreign-Key of the Colour.
   * 
   * Remember:
   * The actual colour of the specific Elements are not important because the User wants to see if the calculation of the Heuristic found a solution not what colour the Elements have.
   * The Colour-ID can be associated with different drawing-colours for different draws without changing the statement of the Program.   */

  private uDDdo5Ay7C13h colourID;
  
  //
  // Constructors
  //
  public VisualVertexColoured () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of colourID
   * The ID of the Colour used by the Heuristic.
This is like a Foreign-Key of the
   * Colour.

Remember:
The actual colour of the specific Elements are not important
   * because the User wants to see if the calculation of the Heuristic found a
   * solution not what colour the Elements have.
The Colour-ID can be associated with
   * different drawing-colours for different draws without changing the statement of
   * the Program.
   * @param newVar the new value of colourID
   */
  private void setColourID (uDDdo5Ay7C13h newVar) {
    colourID = newVar;
  }

  /**
   * Get the value of colourID
   * The ID of the Colour used by the Heuristic.
This is like a Foreign-Key of the
   * Colour.

Remember:
The actual colour of the specific Elements are not important
   * because the User wants to see if the calculation of the Heuristic found a
   * solution not what colour the Elements have.
The Colour-ID can be associated with
   * different drawing-colours for different draws without changing the statement of
   * the Program.
   * @return the value of colourID
   */
  private uDDdo5Ay7C13h getColourID () {
    return colourID;
  }

  //
  // Other methods
  //

  /**
   * The Contstructor of this Class.

It contains the final-ID and the Colour-ID as
   * Parameter to set.
The Parameters of the JavaFx-Node will be set by the Layout if
   * it calculates the Position of this Vertix.
   * @param        id The ID that will be set to this Vertex.
   * @param        colourId The ID that will be set to this Vertex.
   * 
   * If this Vertex is not coloured jet set the colour to null or use the other
   * constructor.
   */
  public void VisualVertexColoured(uDDdo5Ay7C13h id, uDDdo5Ay7C13h colourId)
  {
  }


  /**
   * Checks if this Vertex is Coloured.

Therefore this Method checks if the ColourID
   * is null or an actual Integer-Value.

@return
true if the ColourID-Varialbe is
   * set and false if not.
   * @return       uZLSB8lOho0lC
   */
  public uZLSB8lOho0lC isColoured()
  {
  }


  /**
   * Get the ColourID of this Vertex.

@return
The Integer-Value of the ColourID of
   * this Vertex.
   * @return       uDDdo5Ay7C13h
   */
  public uDDdo5Ay7C13h getColourID()
  {
  }


  /**
   * Set the ColourID of this Vertex.
   * @param        colourID The Colour-ID this Vertex should be coloured with.
   */
  public void setColourID(uDDdo5Ay7C13h colourID)
  {
  }


  /**
   * This Method overwrites the standard toString-Method.

@return
It returns a
   * String-Representation of this VisualVertex_Coloured.
"<ID>:<ColourID>"
   * @return       uRubgLa75CQhI
   */
  public uRubgLa75CQhI toString()
  {
  }


}
