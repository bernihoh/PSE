

/**
 * Class FxRageController
 * This is the FxController for the general Program-Window.
It functions as the
 * Manager of the calls of the other FxController.
It is the only FxController that
 * communicates with any SuperController and passes on the needed Values to the
 * other FxController.
 */
public class FxRageController {

  //
  // Fields
  //

  /**
   * The Main-TabPane of the Program.
   */
  private uCrEnQqDIUZVj tpRage;  /**

   * The FxGraphEditorController of this Class.
   * There should be only one active Editor at a time.   */

  private uVUTWexLJnTTa fxGraphEditorController;  /**

   * The GraphGenerationController of this Class.
   * It is no list because there can only be one Generation-Tab per Rage-Program.   */

  private udLvg3OWts73z fxGraphGenerationController;  /**

   * The List of all FxTabController that are needed.
   * Remember:
   * Every Super-Preview-Tab needs it's own FxTabController.
   * Therefore there are multiple FxTabController possible.   */

  private u0Wqvltf6q2u6 fxTabControllerList;  /**

   * The FxController for the MenuBar.
   * This Attribut will be set at this Main-Controller and passed on to the other Tab-Controller where the MenuBar is needed as well.   */

  private ucNLy6C9tSYap fxMenuBarController;  /**

   * This is the SuperController of the Programm.
   * It contains all other Controller.
   * These other Controllers will be read out by this Class (the FxRageController) and then passed on to the Sup-FxController so that the whole Programm can oerate like it should.   */

  private uCrEnQqDIUZVj superController;
  
  //
  // Constructors
  //
  public FxRageController () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of tpRage
   * The Main-TabPane of the Program.
   * @param newVar the new value of tpRage
   */
  private void setTpRage (uCrEnQqDIUZVj newVar) {
    tpRage = newVar;
  }

  /**
   * Get the value of tpRage
   * The Main-TabPane of the Program.
   * @return the value of tpRage
   */
  private uCrEnQqDIUZVj getTpRage () {
    return tpRage;
  }

  /**
   * Set the value of fxGraphEditorController
   * The FxGraphEditorController of this Class.
There should be only one active
   * Editor at a time.
   * @param newVar the new value of fxGraphEditorController
   */
  private void setFxGraphEditorController (uVUTWexLJnTTa newVar) {
    fxGraphEditorController = newVar;
  }

  /**
   * Get the value of fxGraphEditorController
   * The FxGraphEditorController of this Class.
There should be only one active
   * Editor at a time.
   * @return the value of fxGraphEditorController
   */
  private uVUTWexLJnTTa getFxGraphEditorController () {
    return fxGraphEditorController;
  }

  /**
   * Set the value of fxGraphGenerationController
   * The GraphGenerationController of this Class.
It is no list because there can
   * only be one Generation-Tab per Rage-Program.
   * @param newVar the new value of fxGraphGenerationController
   */
  private void setFxGraphGenerationController (udLvg3OWts73z newVar) {
    fxGraphGenerationController = newVar;
  }

  /**
   * Get the value of fxGraphGenerationController
   * The GraphGenerationController of this Class.
It is no list because there can
   * only be one Generation-Tab per Rage-Program.
   * @return the value of fxGraphGenerationController
   */
  private udLvg3OWts73z getFxGraphGenerationController () {
    return fxGraphGenerationController;
  }

  /**
   * Set the value of fxTabControllerList
   * The List of all FxTabController that are needed.
Remember:
Every
   * Super-Preview-Tab needs it's own FxTabController.
Therefore there are multiple
   * FxTabController possible.
   * @param newVar the new value of fxTabControllerList
   */
  private void setFxTabControllerList (u0Wqvltf6q2u6 newVar) {
    fxTabControllerList = newVar;
  }

  /**
   * Get the value of fxTabControllerList
   * The List of all FxTabController that are needed.
Remember:
Every
   * Super-Preview-Tab needs it's own FxTabController.
Therefore there are multiple
   * FxTabController possible.
   * @return the value of fxTabControllerList
   */
  private u0Wqvltf6q2u6 getFxTabControllerList () {
    return fxTabControllerList;
  }

  /**
   * Set the value of fxMenuBarController
   * The FxController for the MenuBar.
This Attribut will be set at this
   * Main-Controller and passed on to the other Tab-Controller where the MenuBar is
   * needed as well.
   * @param newVar the new value of fxMenuBarController
   */
  private void setFxMenuBarController (ucNLy6C9tSYap newVar) {
    fxMenuBarController = newVar;
  }

  /**
   * Get the value of fxMenuBarController
   * The FxController for the MenuBar.
This Attribut will be set at this
   * Main-Controller and passed on to the other Tab-Controller where the MenuBar is
   * needed as well.
   * @return the value of fxMenuBarController
   */
  private ucNLy6C9tSYap getFxMenuBarController () {
    return fxMenuBarController;
  }

  /**
   * Set the value of superController
   * This is the SuperController of the Programm.
It contains all other
   * Controller.
These other Controllers will be read out by this Class (the
   * FxRageController) and then passed on to the Sup-FxController so that the whole
   * Programm can oerate like it should.
   * @param newVar the new value of superController
   */
  private void setSuperController (uCrEnQqDIUZVj newVar) {
    superController = newVar;
  }

  /**
   * Get the value of superController
   * This is the SuperController of the Programm.
It contains all other
   * Controller.
These other Controllers will be read out by this Class (the
   * FxRageController) and then passed on to the Sup-FxController so that the whole
   * Programm can oerate like it should.
   * @return the value of superController
   */
  private uCrEnQqDIUZVj getSuperController () {
    return superController;
  }

  //
  // Other methods
  //

  /**
   * Show a MessageBox at the Screen.
This Method is Used at the ExceptionHandler to
   * show the Error Log.
   * @param        messageText The text that should be shown at the MessageBox.
   * @param        messageType The Type of Message you want to Show.
   * (Information, Warning, Error, ...)
   */
  public void showMessage(uRubgLa75CQhI messageText, uCrEnQqDIUZVj messageType)
  {
  }


  /**
   * This Method starts the GraphEditor by calling the FXMLLoader and passing the
   * correct FxGraphEditorController.
   */
  public void initFxGraphEditor()
  {
  }


  /**
   * This Method adds a new FxTabController to the List and by calling the FXMLLoader
   * and then passing it to the FXML.
This Tab will be added to the GUI.

Also it
   * calls the SuperController so that it can a new Tab for its own.
   */
  public void initNewTab()
  {
  }


  /**
   * Is called at the init-Method.

Calls the IOHandler to search for
   * ResourceBundles.
Adds all found Languages to the List so that the user can
   * select them.
   */
  private void initLanguages()
  {
  }


}
