

/**
 * Class FxController
 * This is the FxController.
It is the abstract Class from which every other
 * FxController of this Program get's passed on.
 */
abstract public class FxController {

  //
  // Fields
  //
  /**

   * This is the Resource-Bundle of the Object.
   * This is a kind of Key-Value storage-Unit.
   * 
   * It contains the Text, ToolTip, ... of a specific Language for every GUI-Element that is identified by its fx-id.
   * 
   * The ResourceBundle will be changed to the correct Language if needed.   */

  private uR2a2h2CcfEQl bundle;  /**

   * A List of all possible Languages.
   * This list will be dynamically filled with the correct String-ID's of the implemented Languages.
   * 
   * This is needed for every controller-Class because of the ResourceBundle switching for different Languages.
   * Every time the GUI-Language is switched a new ReourceBundle has to be loaded.
   * Therefore the Program loads a new File from the Disk where the Language-ID will be the Ending-String of the Filename by which the program identifies the correct ResourceBundle for the wished Language.   */

  private u7qkS15Xb7BMH languages;
  
  //
  // Constructors
  //
  public FxController () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of bundle
   * This is the Resource-Bundle of the Object.
This is a kind of Key-Value
   * storage-Unit.

It contains the Text, ToolTip, ... of a specific Language for
   * every GUI-Element that is identified by its fx-id.

The ResourceBundle will be
   * changed to the correct Language if needed.
   * @param newVar the new value of bundle
   */
  private void setBundle (uR2a2h2CcfEQl newVar) {
    bundle = newVar;
  }

  /**
   * Get the value of bundle
   * This is the Resource-Bundle of the Object.
This is a kind of Key-Value
   * storage-Unit.

It contains the Text, ToolTip, ... of a specific Language for
   * every GUI-Element that is identified by its fx-id.

The ResourceBundle will be
   * changed to the correct Language if needed.
   * @return the value of bundle
   */
  private uR2a2h2CcfEQl getBundle () {
    return bundle;
  }

  /**
   * Set the value of languages
   * A List of all possible Languages.
This list will be dynamically filled with the
   * correct String-ID's of the implemented Languages.

This is needed for every
   * controller-Class because of the ResourceBundle switching for different
   * Languages.
Every time the GUI-Language is switched a new ReourceBundle has to be
   * loaded.
Therefore the Program loads a new File from the Disk where the
   * Language-ID will be the Ending-String of the Filename by which the program
   * identifies the correct ResourceBundle for the wished Language.
   * @param newVar the new value of languages
   */
  private void setLanguages (u7qkS15Xb7BMH newVar) {
    languages = newVar;
  }

  /**
   * Get the value of languages
   * A List of all possible Languages.
This list will be dynamically filled with the
   * correct String-ID's of the implemented Languages.

This is needed for every
   * controller-Class because of the ResourceBundle switching for different
   * Languages.
Every time the GUI-Language is switched a new ReourceBundle has to be
   * loaded.
Therefore the Program loads a new File from the Disk where the
   * Language-ID will be the Ending-String of the Filename by which the program
   * identifies the correct ResourceBundle for the wished Language.
   * @return the value of languages
   */
  private u7qkS15Xb7BMH getLanguages () {
    return languages;
  }

  //
  // Other methods
  //

  /**
   * Initializes the whole Controller by calling all necessary Methods.

Remeber:
The
   * Constructor is called first.
Then all Fields annotated with @FXML will be
   * loaded.
After that the init-Method will run.
That means that the Constructor
   * does not have access to the FXML-GUI-Elements but the init-method does.

This is
   * an abstract Method so this will be Overwriten by the Childs.
Then the Child can
   * also overload this Method with different Parameters to give, and so on.
   */
  abstract public void init();


  /**
   * Set the currently active Language of the GUI of this Controller to the given
   * Language.
Sets the correct ResourceBundle.
   * @param        language The Language that should be set.
   */
  public void changeLanguageTo(uRubgLa75CQhI language)
  {
  }


}
