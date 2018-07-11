package src.main.java.Controller.ViewController.FxController;

import src.main.java.Controller.LogicController.SuperController;
import src.main.java.Controller.ViewController.FxController.FxGraphGenerationTabController.FxGraphGenerationController;
import src.main.java.Controller.ViewController.FxController.FxMenuBarController.FxMenuBarController;
import src.main.java.Controller.ViewController.FxController.FxPreviewTabController.FxTabController;
import java.util.List;
import javafx.scene.control.TabPane;

/**
 * Class FxRageController This is the FxController for the general
 * Program-Window. It functions as the Manager of the calls of the other
 * FxController. It is the only FxController that communicates with any
 * SuperController and passes on the needed Values to the other FxController.
 */
public class FxRageController extends FxController {

    //
    // Fields
    //
    /**
     * The Main-TabPane of the Program.
     */
    private TabPane tpRage;
    /**
     *
     * The FxGraphEditorController of this Class. There should be only one
     * active Editor at a time.
     */

    private FxGraphEditorController fxGraphEditorController;
    /**
     *
     * The GraphGenerationController of this Class. It is no list because there
     * can only be one Generation-Tab per Rage-Program.
     */

    private FxGraphGenerationController fxGraphGenerationController;
    /**
     *
     * The List of all FxTabController that are needed. Remember: Every
     * Super-Preview-Tab needs it's own FxTabController. Therefore there are
     * multiple FxTabController possible.
     */

    private List<FxTabController> fxTabControllerList;
    /**
     *
     * The FxController for the MenuBar. This Attribut will be set at this
     * Main-Controller and passed on to the other Tab-Controller where the
     * MenuBar is needed as well.
     */

    private FxMenuBarController fxMenuBarController;
    /**
     *
     * This is the SuperController of the Programm. It contains all other
     * Controller. These other Controllers will be read out by this Class (the
     * FxRageController) and then passed on to the Sup-FxController so that the
     * whole Programm can oerate like it should.
     */

    private SuperController superController;

    //
    // Constructors
    //
    public FxRageController() {
    }

    //
    // Methods
    //
    @Override
    public void init() {
        //TODO
    }

    //
    // Accessor methods
    //
    /**
     * Set the value of tpRage The Main-TabPane of the Program.
     *
     * @param newTabPane the new value of tpRage
     */
    private void setTpRage(TabPane newTabPane) {
        tpRage = newTabPane;
    }

    /**
     * Get the value of tpRage The Main-TabPane of the Program.
     *
     * @return the value of tpRage
     */
    private TabPane getTpRage() {
        return tpRage;
    }

    /**
     * Set the value of fxGraphEditorController The FxGraphEditorController of
     * this Class. There should be only one active Editor at a time.
     *
     * @param newFxGraphEditorController the new value of
     * fxGraphEditorController
     */
    private void setFxGraphEditorController(FxGraphEditorController newFxGraphEditorController) {
        fxGraphEditorController = newFxGraphEditorController;
    }

    /**
     * Get the value of fxGraphEditorController The FxGraphEditorController of
     * this Class. There should be only one active Editor at a time.
     *
     * @return the value of fxGraphEditorController
     */
    private FxGraphEditorController getFxGraphEditorController() {
        return fxGraphEditorController;
    }

    /**
     * Set the value of fxGraphGenerationController The
     * GraphGenerationController of this Class. It is no list because there can
     * only be one Generation-Tab per Rage-Program.
     *
     * @param newFxGraphGenerationController the new value of
     * fxGraphGenerationController
     */
    private void setFxGraphGenerationController(FxGraphGenerationController newFxGraphGenerationController) {
        fxGraphGenerationController = newFxGraphGenerationController;
    }

    /**
     * Get the value of fxGraphGenerationController The
     * GraphGenerationController of this Class. It is no list because there can
     * only be one Generation-Tab per Rage-Program.
     *
     * @return the value of fxGraphGenerationController
     */
    private FxGraphGenerationController getFxGraphGenerationController() {
        return fxGraphGenerationController;
    }

    /**
     * Set the value of fxTabControllerList The List of all FxTabController that
     * are needed. Remember: Every Super-Preview-Tab needs it's own
     * FxTabController. Therefore there are multiple FxTabController possible.
     *
     * @param newFxTabControllerList the new value of fxTabControllerList
     */
    private void setFxTabControllerList(List<FxTabController> newFxTabControllerList) {
        fxTabControllerList = newFxTabControllerList;
    }

    /**
     * Get the value of fxTabControllerList The List of all FxTabController that
     * are needed. Remember: Every Super-Preview-Tab needs it's own
     * FxTabController. Therefore there are multiple FxTabController possible.
     *
     * @return the value of fxTabControllerList
     */
    private List<FxTabController> getFxTabControllerList() {
        return fxTabControllerList;
    }

    /**
     * Set the value of fxMenuBarController The FxController for the MenuBar.
     * This Attribut will be set at this Main-Controller and passed on to the
     * other Tab-Controller where the MenuBar is needed as well.
     *
     * @param newFxMenuBarController the new value of fxMenuBarController
     */
    private void setFxMenuBarController(FxMenuBarController newFxMenuBarController) {
        fxMenuBarController = newFxMenuBarController;
    }

    /**
     * Get the value of fxMenuBarController The FxController for the MenuBar.
     * This Attribut will be set at this Main-Controller and passed on to the
     * other Tab-Controller where the MenuBar is needed as well.
     *
     * @return the value of fxMenuBarController
     */
    private FxMenuBarController getFxMenuBarController() {
        return fxMenuBarController;
    }

    /**
     * Set the value of superController This is the SuperController of the
     * Programm. It contains all other Controller. These other Controllers will
     * be read out by this Class (the FxRageController) and then passed on to
     * the Sup-FxController so that the whole Programm can oerate like it
     * should.
     *
     * @param newSuperController the new value of superController
     */
    private void setSuperController(SuperController newSuperController) {
        superController = newSuperController;
    }

    /**
     * Get the value of superController This is the SuperController of the
     * Programm. It contains all other Controller. These other Controllers will
     * be read out by this Class (the FxRageController) and then passed on to
     * the Sup-FxController so that the whole Programm can oerate like it
     * should.
     *
     * @return the value of superController
     */
    private SuperController getSuperController() {
        return superController;
    }

    //
    // Other methods
    //
    /**
     * Show a MessageBox at the Screen. This Method is Used at the
     * ExceptionHandler to show the Error Log.
     *
     * @param messageText The text that should be shown at the MessageBox.
     * @param messageType The Type of Message you want to Show. (Information,
     * Warning, Error, ...)
     */
    public void showMessage(String messageText, EnumMessageBoxType messageType) {
    }

    /**
     * This Method starts the GraphEditor by calling the FXMLLoader and passing
     * the correct FxGraphEditorController.
     */
    public void initFxGraphEditor() {
    }

    /**
     * This Method adds a new FxTabController to the List and by calling the
     * FXMLLoader and then passing it to the FXML. This Tab will be added to the
     * GUI.
     *
     * Also it calls the SuperController so that it can a new Tab for its own.
     */
    public void initNewTab() {
    }

    /**
     * Is called at the init-Method.
     *
     * Calls the IOHandler to search for ResourceBundles. Adds all found
     * Languages to the List so that the user can select them.
     */
    private void initLanguages() {
    }

}
