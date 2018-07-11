package src.main.java.Controller.ViewController.FxController;

import src.main.java.Controller.LogicController.GraphEditorController;
import src.main.java.Controller.ViewController.UIController.MouseController.MouseController;
import src.main.java.View.Drawer.GraphDrawer.GraphDrawer;
import javafx.scene.control.Button;
import javafx.scene.control.ComboBox;

/**
 * Class FxGraphEditorController The FxController of the GraphEditor Window.
 */
public class FxGraphEditorController {

    //
    // Fields
    //
    /**
     * This is the GraphEditorController of this Class.
     */
    private GraphEditorController graphEditorController;
    /**
     *
     * The GraphDrawer of this Editor. This contains the Graph that will be
     * modified and drawn.
     */

    private GraphDrawer graphDrawer;
    /**
     *
     * This is the MouseController for this Editor. It will be created
     * dynamically whenever the graph is changed and it was not jet created, so
     * that an simple update of the graph via the Setter would be enough. So
     * there is no need for a Setter-Method.
     *
     * The Graph of the Drawer of this Class will be passed on as the Graph of
     * this MouseController. Then the MouseEvent's can be managed as needed and
     * the Vertices can be draged.
     *
     * The MouseHandler does not need to be accessed by any other Object so
     * there is no need of Getter Methods.
     */

    private MouseController mouseController;
    /**
     *
     * This is the ComboBox where the GraphType will be set.
     *
     * The Value of this Box will be read-out and then the function of the
     * Editor will be adapted to the Graph-Type.
     *
     * If the Editor is opened for an already exising Graph the ComboBox will be
     * set to the type of the given Graph. If the Editor is opened for creating
     * a new Graph the User has to set this ComboBox to the wished Type.
     */

    private ComboBox cbGraphType;
    /**
     *
     * The Button for the AddCircle-Operation. This Buttons is needed because
     * this Function has to be hidden if the Editor works on an VisualGraph of
     * an SimpleHyperGraph.
     */

    private Button cmdCirlce;
    /**
     *
     * The Button for the addClique-Operation. This Buttons is needed because
     * this Function has to be hidden if the Editor works on an VisualGraph of
     * an SimpleHyperGraph.
     */

    private Button cmdClique;
    /**
     *
     * The Button for the Merge-Vertices-Operation. This Buttons is needed
     * because this Function has to be hidden if the Editor works on an
     * VisualGraph of an SimpleHyperGraph.
     */

    private Button cmdMergeVertices;
    /**
     *
     * The Button for the Duplicate-Vertices-Operation. This Buttons is needed
     * because this Function has to be hidden if the Editor works on an
     * VisualGraph of an SimpleHyperGraph.
     */

    private Button cmdDuplicateVertices;

    //
    // Constructors
    //
    /**
     * This is the Empty-Constructor of this Class.
     */
    public FxGraphEditorController() {
    }

    //
    // Methods
    //
    /**
     * This Method is called at the init-Method and whenever a new GraphDrawer
     * is set.
     *
     * Checks the Properties of the currently edited Graph and checks the Type.
     *
     * Then the corresponding ComboBox for the Graph-Type will be set to the
     * correct Value.
     *
     * If the Editor works on an SimpleHyperGraph some Buttons will be hidden.
     */
    private void checkGraphType() {
    }

    /**
     * This Method is accessed if the cmdDrag-Button is pressed.
     *
     * Therefore the user wants to relocate an selected Node. Then this Method
     * calls the corresponding Method at the GraphDrawer.
     */
    private void drag() {
    }

    /**
     * This Method is accessed if the cmdAddEdge-Button is pressed.
     *
     * Therefore the user wants to add an Edge between the selected Vertices. It
     * checks the graph Type of the given Graph and if the Edge is between only
     * two Vertices for an SimpleGraph. Then this Method calls the corresponding
     * Method at the GraphDrawer.
     */
    private void addEdge() {
    }

    /**
     * This Method is accessed if the VerticesAmount-Spinner changes it's Value.
     *
     * If this happens this can mean one of two different things the User wants
     * to Delete or Add Vertices from the Graph. Therefore check if the Amount
     * was changed to a smaller or bigger Value and then call the corresponding
     * Method at the Graph from the GraphDrawer. In case the User wants to
     * delete Vertices this is only possible while there are unconnected Nodes
     * at the End of the List. If there are none left, the User has to delete
     * the Vertices manually.
     */
    private void vertriceAmountChange() {
    }

    /**
     * This Method is accessed if the cmdEraser-Button is pressed.
     *
     * Therefore the user wants to delete the selected Vertex. Then this Method
     * calls the corresponding Method at the GraphDrawer.
     */
    private void removeVertex() {
    }

    /**
     * This Method is accessed if the cmdMergeVertices-Button is pressed.
     *
     * Therefore the user wants to merge the selected Vertices. Then this Method
     * calls the corresponding Method at the GraphDrawer.
     */
    private void mergeVertices() {
    }

    /**
     * This Method is accessed if the cmdDuplicateVertices-Button is pressed.
     *
     * Therefore the user wants to duplicate the selected Vertices. Then this
     * Method calls the corresponding Method at the GraphDrawer.
     */
    private void duplicateVertices() {
    }

    /**
     * This Method is accessed if the
     * cmdDeleteEdgesBetweenSelectedVertrices-Button is pressed.
     *
     * Therefore the user wants to delete the Edge between the selected
     * Vertices. Then this Method calls the corresponding Method at the
     * GraphDrawer.
     */
    private void deleteEdgesBetweenSelectedVertrices() {
    }

    /**
     * This Method is accessed if the cmdAddPath-Button is pressed.
     *
     * Therefore the user wants to add an Path between the selected Vertices.
     * Then this Method calls the corresponding Method at the GraphDrawer.
     */
    private void addPath() {
    }

    /**
     * This Method is accessed if the cmdAddCircle-Button is pressed.
     *
     * Therefore the user wants to add an Circle between the selected Vertices.
     * Then this Method calls the corresponding Method at the GraphDrawer.
     */
    private void addCircle() {
    }

    /**
     * This Method is accessed if the cmdAddClique-Button is pressed.
     *
     * Therefore the user wants to add an Clique. Then this Method calls the
     * corresponding Method at the GraphDrawer.
     */
    private void addClique() {
    }

    /**
     * This Method is accessed if the cmdUndo-Button is pressed.
     *
     * Therefore the user wants to revert the last done Change. Then this Method
     * calls the corresponding Method at the GraphDrawer.
     */
    private void undo() {
    }

    /**
     * This Method is accessed if the cmdSave-Button is pressed.
     *
     * Therefore the user wants to save the modified Graph. Then this Method
     * calls the corresponding Method so that the VisualGraph of the Drawer can
     * be converted to an Graph of the Model-Structure by the Adapter Class and
     * be passed on to the Model by the general Controller.
     */
    private void save() {
    }

    /**
     * This Method is accessed if the cmdCancel-Button is pressed.
     *
     * Therefore the user wants to cancel the Modification of the Graph. So the
     * Editor closes and the Modifications are deleted.
     */
    private void cancel() {
    }

    /**
     * This Method is accessed if the cmdOk-Button is pressed.
     *
     * Therefore the user wants to save the modified Graph and go on.
     */
    private void ok() {
    }

    //
    // Accessor methods
    //
    /**
     * Set the value of graphEditorController This is the GraphEditorController
     * of this Class.
     *
     * @param newGraphEditorController the new value of graphEditorController
     */
    private void setGraphEditorController(GraphEditorController newGraphEditorController) {
        graphEditorController = newGraphEditorController;
    }

    /**
     * Get the value of graphEditorController This is the GraphEditorController
     * of this Class.
     *
     * @return the value of graphEditorController
     */
    private GraphEditorController getGraphEditorController() {
        return graphEditorController;
    }

    /**
     * Set the value of graphDrawer The GraphDrawer of this Editor. This
     * contains the Graph that will be modified and drawn.
     *
     * @param newGraphDrawer the new value of graphDrawer
     */
    private void setGraphDrawer(GraphDrawer newGraphDrawer) {
        graphDrawer = newGraphDrawer;
    }

    /**
     * Get the value of graphDrawer The GraphDrawer of this Editor. This
     * contains the Graph that will be modified and drawn.
     *
     * @return the value of graphDrawer
     */
    private GraphDrawer getGraphDrawer() {
        return graphDrawer;
    }

    /**
     * Set the value of mouseController This is the MouseController for this
     * Editor. It will be created dynamically whenever the graph is changed and
     * it was not jet created, so that an simple update of the graph via the
     * Setter would be enough. So there is no need for a Setter-Method.
     *
     * The Graph of the Drawer of this Class will be passed on as the Graph of
     * this MouseController. Then the MouseEvent's can be managed as needed and
     * the Vertices can be draged.
     *
     * The MouseHandler does not need to be accessed by any other Object so
     * there is no need of Getter Methods.
     *
     * @param newMouseController the new value of mouseController
     */
    private void setMouseController(MouseController newMouseController) {
        mouseController = newMouseController;
    }

    /**
     * Get the value of mouseController This is the MouseController for this
     * Editor. It will be created dynamically whenever the graph is changed and
     * it was not jet created, so that an simple update of the graph via the
     * Setter would be enough. So there is no need for a Setter-Method.
     *
     * The Graph of the Drawer of this Class will be passed on as the Graph of
     * this MouseController. Then the MouseEvent's can be managed as needed and
     * the Vertices can be draged.
     *
     * The MouseHandler does not need to be accessed by any other Object so
     * there is no need of Getter Methods.
     *
     * @return the value of mouseController
     */
    private MouseController getMouseController() {
        return mouseController;
    }

    /**
     * Set the value of cbGraphType This is the ComboBox where the GraphType
     * will be set.
     *
     * The Value of this Box will be read-out and then the function of the
     * Editor will be adapted to the Graph-Type.
     *
     * If the Editor is opened for an already exising Graph the ComboBox will be
     * set to the type of the given Graph. If the Editor is opened for creating
     * a new Graph the User has to set this ComboBox to the wished Type.
     *
     * @param newVar the new value of cbGraphType
     */
    private void setCbGraphType(ComboBox newVar) {
        cbGraphType = newVar;
    }

    /**
     * Get the value of cbGraphType This is the ComboBox where the GraphType
     * will be set.
     *
     * The Value of this Box will be read-out and then the function of the
     * Editor will be adapted to the Graph-Type.
     *
     * If the Editor is opened for an already exising Graph the ComboBox will be
     * set to the type of the given Graph. If the Editor is opened for creating
     * a new Graph the User has to set this ComboBox to the wished Type.
     *
     * @return the value of cbGraphType
     */
    private ComboBox getCbGraphType() {
        return cbGraphType;
    }
}
