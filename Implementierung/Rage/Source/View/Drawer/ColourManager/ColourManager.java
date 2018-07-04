

/**
 * Class ColourManager
 * The ColourManager manages the different Colours by Mapping the ColourID's to an
 * actual Colour, so that the Drawer can draw the coloured Graph by these
 * ColourID's.
 */
public class ColourManager {

  //
  // Fields
  //

  /**
   * The HashMap of every ColourID to the actual Colour-Value that is represented as a String.
   */
  private uAIXKC97cuwoq colourMap;
  
  //
  // Constructors
  //
  public ColourManager () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of colourMap
   * The HashMap of every ColourID to the actual Colour-Value that is represented as
   * a String.
   * @param newVar the new value of colourMap
   */
  private void setColourMap (uAIXKC97cuwoq newVar) {
    colourMap = newVar;
  }

  /**
   * Get the value of colourMap
   * The HashMap of every ColourID to the actual Colour-Value that is represented as
   * a String.
   * @return the value of colourMap
   */
  private uAIXKC97cuwoq getColourMap () {
    return colourMap;
  }

  //
  // Other methods
  //

  /**
   * The Empty-Constructor of this Class.
The Colours are added step by step at a
   * later point.
   */
  public void ColourManager()
  {
  }


  /**
   * The Constructor of this Class.
It adds the given ColourID's of the List and puts
   * them into the Hashmap.
Then the initColours-Method is called so that the maping
   * is completed for the given ColourId's.
   * @param        colourIDs The List of colourID's that should be mapped to real
   * Colour-Values.
   */
  public void ColourManager(umgFSLDYCXrQe colourIDs)
  {
  }


  /**
   * This Method has to be called when every ColourID is put into the HashMap.
Then
   * this Method calculates a Assignment of real Colours to the ColourID's and writes
   * them into the HashMap, where it can be read out at a later Time.
   */
  public void initColours()
  {
  }


  /**
   * Add a new ColourID to the HashMap, where later the real Colour is mapped to.

It
   * is checked if the given ColourID is already at the HashMap.
   * @param        colourID The ColourID that should be added.
   */
  public void addColourID(uDDdo5Ay7C13h colourID)
  {
  }


  /**
   * Get the real Colour-Object from the given ColourID.
This Colour is then used to
   * draw the Vertex/Edge to the screen to represent the Colouring-Solution.

The
   * initColour-Method has to be called first so that the ColourManager has already
   * mapped the Colour-Values at the Hashmap.

@return
Returns the actual Colour of
   * the Object.
   * @return       uCrEnQqDIUZVj
   * @param        colourID The colourID from what the colour should be.
   */
  public uCrEnQqDIUZVj getColourFromID(uDDdo5Ay7C13h colourID)
  {
  }


}
