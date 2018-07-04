

/**
 * Class VisualEdgeColoured
 * Extends the VisualEdge Class.
This Edge also contains a Colour-ID so that the
 * Edge can be coloured.
 */
public class VisualEdgeColoured {

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

  private uDDdo5Ay7C13h ColourID;
  
  //
  // Constructors
  //
  public VisualEdgeColoured () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of ColourID
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
   * @param newVar the new value of ColourID
   */
  private void setColourID (uDDdo5Ay7C13h newVar) {
    ColourID = newVar;
  }

  /**
   * Get the value of ColourID
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
   * @return the value of ColourID
   */
  private uDDdo5Ay7C13h getColourID () {
    return ColourID;
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
   * @param        colourId The ColourID that will be set to this Edge.
   * 
   * If this Edge is not coloured jet set the colour to null or use the other
   * constructor.
   */
  public void VisualEdgeColoured(uRgKtJJdfEUIK connectedVertices, uDDdo5Ay7C13h colourId)
  {
  }


  /**
   * Checks if this Edge is Coloured.

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
   * Get the ColourID of this Edge.

@return
The Integer-Value of the ColourID of
   * this Edge.
   * @return       uDDdo5Ay7C13h
   */
  public uDDdo5Ay7C13h getColourID()
  {
  }


  /**
   * Set the ColourID of this Edge.
   * @param        colourID The Colour-ID this Edge should be coloured with.
   */
  public void setColourID(uDDdo5Ay7C13h colourID)
  {
  }


  /**
   * This Method overwrites the standard toString-Method.

@return
It returns a
   * String-Representation of this VisualEdge-Coloured.
"{<VertexID1>,
   * ...}:<ColourID>"
   * @return       uRubgLa75CQhI
   */
  public uRubgLa75CQhI toString()
  {
  }


}
