

/**
 * Class FxGraphGenerationController
 * The FxController for the Graph-Generation-Tab.
 */
public class FxGraphGenerationController {

  //
  // Fields
  //
  /**

   * This is the FxRageController.
   * This is needed so that the GraphGenerationTab can start an Editor by calling this Super-Class.
   * It is passed on by the init-Method.   */

  private uPH4TU4gQx99I fxRageController;
  /**
   * The GraphGeneratorController for this Class.
   */
  private uCrEnQqDIUZVj graphGeneratorController;  /**

   * The GraphProperties of this Class.
   * It among other things contains the differentGraphTypes that are implemented in this Program and the User can choose.
   * 
   * This is only a copy that is get via the GeneratorController, so that the access to this Object is easier for the FxGraphGeneratorController and the GraphGenerationController is not flooded with requests.
   * Therefore there is no need for a getter-Method.   */

  private uCrEnQqDIUZVj graphProperties;  /**

   * The Combobox where the User can choose the Type of the generated Graph.
   * 
   * The Possible Choices are given via the given graphProperties.
   * 
   * The other Settings will be based on this Choice, to provide the user with the correct Settings for the different Graph-Types.   */

  private uCrEnQqDIUZVj cbGraphType;
  
  //
  // Constructors
  //
  public FxGraphGenerationController () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of fxRageController
   * This is the FxRageController.
This is needed so that the GraphGenerationTab can
   * start an Editor by calling this Super-Class.
It is passed on by the init-Method.
   * @param newVar the new value of fxRageController
   */
  private void setFxRageController (uPH4TU4gQx99I newVar) {
    fxRageController = newVar;
  }

  /**
   * Get the value of fxRageController
   * This is the FxRageController.
This is needed so that the GraphGenerationTab can
   * start an Editor by calling this Super-Class.
It is passed on by the init-Method.
   * @return the value of fxRageController
   */
  private uPH4TU4gQx99I getFxRageController () {
    return fxRageController;
  }

  /**
   * Set the value of graphGeneratorController
   * The GraphGeneratorController for this Class.
   * @param newVar the new value of graphGeneratorController
   */
  private void setGraphGeneratorController (uCrEnQqDIUZVj newVar) {
    graphGeneratorController = newVar;
  }

  /**
   * Get the value of graphGeneratorController
   * The GraphGeneratorController for this Class.
   * @return the value of graphGeneratorController
   */
  private uCrEnQqDIUZVj getGraphGeneratorController () {
    return graphGeneratorController;
  }

  /**
   * Set the value of graphProperties
   * The GraphProperties of this Class.
It among other things contains the
   * differentGraphTypes that are implemented in this Program and the User can
   * choose.

This is only a copy that is get via the GeneratorController, so that
   * the access to this Object is easier for the FxGraphGeneratorController and the
   * GraphGenerationController is not flooded with requests.
Therefore there is no
   * need for a getter-Method.
   * @param newVar the new value of graphProperties
   */
  private void setGraphProperties (uCrEnQqDIUZVj newVar) {
    graphProperties = newVar;
  }

  /**
   * Get the value of graphProperties
   * The GraphProperties of this Class.
It among other things contains the
   * differentGraphTypes that are implemented in this Program and the User can
   * choose.

This is only a copy that is get via the GeneratorController, so that
   * the access to this Object is easier for the FxGraphGeneratorController and the
   * GraphGenerationController is not flooded with requests.
Therefore there is no
   * need for a getter-Method.
   * @return the value of graphProperties
   */
  private uCrEnQqDIUZVj getGraphProperties () {
    return graphProperties;
  }

  /**
   * Set the value of cbGraphType
   * The Combobox where the User can choose the Type of the generated Graph.

The
   * Possible Choices are given via the given graphProperties.

The other Settings
   * will be based on this Choice, to provide the user with the correct Settings for
   * the different Graph-Types.
   * @param newVar the new value of cbGraphType
   */
  private void setCbGraphType (uCrEnQqDIUZVj newVar) {
    cbGraphType = newVar;
  }

  /**
   * Get the value of cbGraphType
   * The Combobox where the User can choose the Type of the generated Graph.

The
   * Possible Choices are given via the given graphProperties.

The other Settings
   * will be based on this Choice, to provide the user with the correct Settings for
   * the different Graph-Types.
   * @return the value of cbGraphType
   */
  private uCrEnQqDIUZVj getCbGraphType () {
    return cbGraphType;
  }

  //
  // Other methods
  //

  /**
   * This method overrides the init-Method from the abstract-Class FxController.
It
   * sets the FxRageController by the given Parameter.
This is possible because the
   * FxRageController calls this Method and gives itself as parameter with it.
   * @param        fxRageController The FxRageController that will be set.
   */
  public void init(uPH4TU4gQx99I fxRageController)
  {
  }


  /**
   * Set the GraphGeneratorController of this Class.
Then set the graphProperties of
   * this Class from the Value out of the GraphGenerationController.
Then call the
   * updateGUIElementFromProperties-Method to update the GUI to the given Properties.
   * @param        graphGeneratorController The GraphGeneratorController to set.
   */
  public void setGraphGeneratorController(uCrEnQqDIUZVj graphGeneratorController)
  {
  }


  /**
   * The Setter for the GraphProperties of this Class.
It also calls the
   * updateGUIElement-Method.
   * @param        graphProperties The GraphProperties to set.
   */
  public void setGraphProperties(uCrEnQqDIUZVj graphProperties)
  {
  }


  /**
   * This Method is called by the GraphProperties-Setter.
It changes the GUI-Elements
   * to the needed ones.
They will be dynamically created.
   */
  private void updateGUIElementFromProperties()
  {
  }


  /**
   * This Method starts the generation by calling the correct Method at the
   * GraphGenerationController.
   */
  private void startGeneration()
  {
  }


  /**
   * This Method starts the import of an previously saved Tab by calling the correct
   * Method at the GraphGenerationController.
   */
  private void startImport()
  {
  }


  /**
   * This Method starts the GraphEditor by calling the correct Method at the
   * GraphGenerationController.
Also it init's the GraphEditor by calling the
   * FxRageController.
   */
  private void startEditor()
  {
  }


}
