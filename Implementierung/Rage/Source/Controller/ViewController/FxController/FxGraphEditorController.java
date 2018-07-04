

/**
 * Class FxGraphEditorController
 * The FxController of the GraphEditor Window.
 */
public class FxGraphEditorController {

  //
  // Fields
  //

  /**
   * This is the GraphEditorController of this Class.
   */
  private uCrEnQqDIUZVj graphEditorController;  /**

   * The GraphDrawer of this Editor.
   * This contains the Graph that will be modified and drawn.   */

  private uU544nLuB5BAd graphDrawer;  /**

   * This is the MouseController for this Editor.
   * It will be created dynamically whenever the graph is changed and it was not jet created, so that an simple update of the graph via the Setter would be enough.
   * So there is no need for a Setter-Method.
   * 
   * The Graph of the Drawer of this Class will be passed on as the Graph of this MouseController.
   * Then the MouseEvent's can be managed as needed and the Vertices can be draged.
   * 
   * The MouseHandler does not need to be accessed by any other Object so there is no need of Getter Methods.   */

  private uCrEnQqDIUZVj mouseController;  /**

   * This is the ComboBox where the GraphType will be set.
   * 
   * The Value of this Box will be read-out and then the function of the Editor will be adapted to the Graph-Type.
   * 
   * If the Editor is opened for an already exising Graph the ComboBox will be set to the type of the given Graph.
   * If the Editor is opened for creating a new Graph the User has to set this ComboBox to the wished Type.   */

  private uCrEnQqDIUZVj cbGraphType;  /**

   * The Button for the AddCircle-Operation.
   * This Buttons is needed because this Function has to be hidden if the Editor works on an VisualGraph of an SimpleHyperGraph.   */

  private uCrEnQqDIUZVj cmdCirlce;  /**

   * The Button for the addClique-Operation.
   * This Buttons is needed because this Function has to be hidden if the Editor works on an VisualGraph of an SimpleHyperGraph.   */

  private uCrEnQqDIUZVj cmdClique;  /**

   * The Button for the Merge-Vertices-Operation.
   * This Buttons is needed because this Function has to be hidden if the Editor works on an VisualGraph of an SimpleHyperGraph.   */

  private uCrEnQqDIUZVj cmdMergeVertices;  /**

   * The Button for the Duplicate-Vertices-Operation.
   * This Buttons is needed because this Function has to be hidden if the Editor works on an VisualGraph of an SimpleHyperGraph.   */

  private uCrEnQqDIUZVj cmdDuplicateVertices;
  
  //
  // Constructors
  //
  public FxGraphEditorController () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of graphEditorController
   * This is the GraphEditorController of this Class.
   * @param newVar the new value of graphEditorController
   */
  private void setGraphEditorController (uCrEnQqDIUZVj newVar) {
    graphEditorController = newVar;
  }

  /**
   * Get the value of graphEditorController
   * This is the GraphEditorController of this Class.
   * @return the value of graphEditorController
   */
  private uCrEnQqDIUZVj getGraphEditorController () {
    return graphEditorController;
  }

  /**
   * Set the value of graphDrawer
   * The GraphDrawer of this Editor.
This contains the Graph that will be modified
   * and drawn.
   * @param newVar the new value of graphDrawer
   */
  private void setGraphDrawer (uU544nLuB5BAd newVar) {
    graphDrawer = newVar;
  }

  /**
   * Get the value of graphDrawer
   * The GraphDrawer of this Editor.
This contains the Graph that will be modified
   * and drawn.
   * @return the value of graphDrawer
   */
  private uU544nLuB5BAd getGraphDrawer () {
    return graphDrawer;
  }

  /**
   * Set the value of mouseController
   * This is the MouseController for this Editor.
It will be created dynamically
   * whenever the graph is changed and it was not jet created, so that an simple
   * update of the graph via the Setter would be enough.
So there is no need for a
   * Setter-Method.

The Graph of the Drawer of this Class will be passed on as the
   * Graph of this MouseController.
Then the MouseEvent's can be managed as needed
   * and the Vertices can be draged.

The MouseHandler does not need to be accessed
   * by any other Object so there is no need of Getter Methods.
   * @param newVar the new value of mouseController
   */
  private void setMouseController (uCrEnQqDIUZVj newVar) {
    mouseController = newVar;
  }

  /**
   * Get the value of mouseController
   * This is the MouseController for this Editor.
It will be created dynamically
   * whenever the graph is changed and it was not jet created, so that an simple
   * update of the graph via the Setter would be enough.
So there is no need for a
   * Setter-Method.

The Graph of the Drawer of this Class will be passed on as the
   * Graph of this MouseController.
Then the MouseEvent's can be managed as needed
   * and the Vertices can be draged.

The MouseHandler does not need to be accessed
   * by any other Object so there is no need of Getter Methods.
   * @return the value of mouseController
   */
  private uCrEnQqDIUZVj getMouseController () {
    return mouseController;
  }

  /**
   * Set the value of cbGraphType
   * This is the ComboBox where the GraphType will be set.

The Value of this Box
   * will be read-out and then the function of the Editor will be adapted to the
   * Graph-Type.

If the Editor is opened for an already exising Graph the ComboBox
   * will be set to the type of the given Graph.
If the Editor is opened for creating
   * a new Graph the User has to set this ComboBox to the wished Type.
   * @param newVar the new value of cbGraphType
   */
  private void setCbGraphType (uCrEnQqDIUZVj newVar) {
    cbGraphType = newVar;
  }

  /**
   * Get the value of cbGraphType
   * This is the ComboBox where the GraphType will be set.

The Value of this Box
   * will be read-out and then the function of the Editor will be adapted to the
   * Graph-Type.

If the Editor is opened for an already exising Graph the ComboBox
   * will be set to the type of the given Graph.
If the Editor is opened for creating
   * a new Graph the User has to set this ComboBox to the wished Type.
   * @return the value of cbGraphType
   */
  private uCrEnQqDIUZVj getCbGraphType () {
    return cbGraphType;
  }

  /**
   * Set the value of cmdCirlce
   * The Button for the AddCircle-Operation.
This Buttons is needed because this
   * Function has to be hidden if the Editor works on an VisualGraph of an
   * SimpleHyperGraph.
   * @param newVar the new value of cmdCirlce
   */
  private void setCmdCirlce (uCrEnQqDIUZVj newVar) {
    cmdCirlce = newVar;
  }

  /**
   * Get the value of cmdCirlce
   * The Button for the AddCircle-Operation.
This Buttons is needed because this
   * Function has to be hidden if the Editor works on an VisualGraph of an
   * SimpleHyperGraph.
   * @return the value of cmdCirlce
   */
  private uCrEnQqDIUZVj getCmdCirlce () {
    return cmdCirlce;
  }

  /**
   * Set the value of cmdClique
   * The Button for the addClique-Operation.
This Buttons is needed because this
   * Function has to be hidden if the Editor works on an VisualGraph of an
   * SimpleHyperGraph.
   * @param newVar the new value of cmdClique
   */
  private void setCmdClique (uCrEnQqDIUZVj newVar) {
    cmdClique = newVar;
  }

  /**
   * Get the value of cmdClique
   * The Button for the addClique-Operation.
This Buttons is needed because this
   * Function has to be hidden if the Editor works on an VisualGraph of an
   * SimpleHyperGraph.
   * @return the value of cmdClique
   */
  private uCrEnQqDIUZVj getCmdClique () {
    return cmdClique;
  }

  /**
   * Set the value of cmdMergeVertices
   * The Button for the Merge-Vertices-Operation.
This Buttons is needed because this
   * Function has to be hidden if the Editor works on an VisualGraph of an
   * SimpleHyperGraph.
   * @param newVar the new value of cmdMergeVertices
   */
  private void setCmdMergeVertices (uCrEnQqDIUZVj newVar) {
    cmdMergeVertices = newVar;
  }

  /**
   * Get the value of cmdMergeVertices
   * The Button for the Merge-Vertices-Operation.
This Buttons is needed because this
   * Function has to be hidden if the Editor works on an VisualGraph of an
   * SimpleHyperGraph.
   * @return the value of cmdMergeVertices
   */
  private uCrEnQqDIUZVj getCmdMergeVertices () {
    return cmdMergeVertices;
  }

  /**
   * Set the value of cmdDuplicateVertices
   * The Button for the Duplicate-Vertices-Operation.
This Buttons is needed because
   * this Function has to be hidden if the Editor works on an VisualGraph of an
   * SimpleHyperGraph.
   * @param newVar the new value of cmdDuplicateVertices
   */
  private void setCmdDuplicateVertices (uCrEnQqDIUZVj newVar) {
    cmdDuplicateVertices = newVar;
  }

  /**
   * Get the value of cmdDuplicateVertices
   * The Button for the Duplicate-Vertices-Operation.
This Buttons is needed because
   * this Function has to be hidden if the Editor works on an VisualGraph of an
   * SimpleHyperGraph.
   * @return the value of cmdDuplicateVertices
   */
  private uCrEnQqDIUZVj getCmdDuplicateVertices () {
    return cmdDuplicateVertices;
  }

  //
  // Other methods
  //

  /**
   * This is the Empty-Constructor of this Class.
   */
  public void FxGraphEditorController()
  {
  }


  /**
   * Set the GraphEditorController.
   * @param        graphEditorController The GraphEditorController so set.
   */
  public void setGraphEditorController(uCrEnQqDIUZVj graphEditorController)
  {
  }


  /**
   * Set the GraphDrawer of this Class.
Also calls the checkGraphType-Method.
   * @param        graphDrawer The GraphDrawer to set.
   */
  public void setGraphDrawer(uU544nLuB5BAd graphDrawer)
  {
  }


  /**
   * This Method is called at the init-Method and whenever a new GraphDrawer is
   * set.

Checks the Properties of the currently edited Graph and checks the
   * Type.

Then the corresponding ComboBox for the Graph-Type will be set to the
   * correct Value.

If the Editor works on an SimpleHyperGraph some Buttons will be
   * hidden.
   */
  private void checkGraphType()
  {
  }


  /**
   * This Method is accessed if the cmdDrag-Button is pressed.

Therefore the user
   * wants to relocate an selected Node.
Then this Method calls the corresponding
   * Method at the GraphDrawer.
   */
  private void drag()
  {
  }


  /**
   * This Method is accessed if the cmdAddEdge-Button is pressed.

Therefore the user
   * wants to add an Edge between the selected Vertices.
It checks the graph Type of
   * the given Graph and if the Edge is between only two Vertices for an
   * SimpleGraph.
Then this Method calls the corresponding Method at the GraphDrawer.
   */
  private void addEdge()
  {
  }


  /**
   * This Method is accessed if the VerticesAmount-Spinner changes it's Value.

If
   * this happens this can mean one of two different things the User wants to Delete
   * or Add Vertices from the Graph.
Therefore check if the Amount was changed to a
   * smaller or bigger Value and then call the corresponding Method at the Graph from
   * the GraphDrawer.
In case the User wants to delete Vertices this is only possible
   * while there are unconnected Nodes at the End of the List. If there are none
   * left, the User has to delete the Vertices manually.
   */
  private void vertriceAmountChange()
  {
  }


  /**
   * This Method is accessed if the cmdEraser-Button is pressed.

Therefore the user
   * wants to delete the selected Vertex.
Then this Method calls the corresponding
   * Method at the GraphDrawer.
   */
  private void removeVertex()
  {
  }


  /**
   * This Method is accessed if the cmdMergeVertices-Button is pressed.

Therefore
   * the user wants to merge the selected Vertices.
Then this Method calls the
   * corresponding Method at the GraphDrawer.
   */
  private void mergeVertices()
  {
  }


  /**
   * This Method is accessed if the cmdDuplicateVertices-Button is
   * pressed.

Therefore the user wants to duplicate the selected Vertices.
Then this
   * Method calls the corresponding Method at the GraphDrawer.
   */
  private void duplicateVertices()
  {
  }


  /**
   * This Method is accessed if the cmdDeleteEdgesBetweenSelectedVertrices-Button is
   * pressed.

Therefore the user wants to delete the Edge between the selected
   * Vertices.
Then this Method calls the corresponding Method at the GraphDrawer.
   */
  private void deleteEdgesBetweenSelectedVertrices()
  {
  }


  /**
   * This Method is accessed if the cmdAddPath-Button is pressed.

Therefore the user
   * wants to add an Path between the selected Vertices.
Then this Method calls the
   * corresponding Method at the GraphDrawer.
   */
  private void addPath()
  {
  }


  /**
   * This Method is accessed if the cmdAddCircle-Button is pressed.

Therefore the
   * user wants to add an Circle between the selected Vertices.
Then this Method
   * calls the corresponding Method at the GraphDrawer.
   */
  private void addCircle()
  {
  }


  /**
   * This Method is accessed if the cmdAddClique-Button is pressed.

Therefore the
   * user wants to add an Clique.
Then this Method calls the corresponding Method at
   * the GraphDrawer.
   */
  private void addClique()
  {
  }


  /**
   * This Method is accessed if the cmdUndo-Button is pressed.

Therefore the user
   * wants to revert the last done Change.
Then this Method calls the corresponding
   * Method at the GraphDrawer.
   */
  private void undo()
  {
  }


  /**
   * This Method is accessed if the cmdSave-Button is pressed.

Therefore the user
   * wants to save the modified Graph.
Then this Method calls the corresponding
   * Method so that the VisualGraph of the Drawer can be converted to an Graph of the
   * Model-Structure by the Adapter Class and be passed on to the Model by the
   * general Controller.
   */
  private void save()
  {
  }


  /**
   * This Method is accessed if the cmdCancel-Button is pressed.

Therefore the user
   * wants to cancel the Modification of the Graph.
So the Editor closes and the
   * Modifications are deleted.
   */
  private void cancel()
  {
  }


  /**
   * This Method is accessed if the cmdOk-Button is pressed.

Therefore the user
   * wants to save the modified Graph and go on.
   */
  private void ok()
  {
  }


}
