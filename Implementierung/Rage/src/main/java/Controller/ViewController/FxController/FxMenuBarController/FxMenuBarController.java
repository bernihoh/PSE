package Source.Controller.ViewController.FxController.FxMenuBarController;

import Source.Controller.ViewController.FxController.FxRageController;
import javafx.scene.control.Menu;
import javafx.scene.control.ToggleGroup;

/**
 * Class FxMenuBarController This is the FxController for the MenuBar.
 */
public class FxMenuBarController {

    //
    // Fields
    //
    /**
     *
     * This is the FxRageController of this Class.
     *
     * This is needed for several Reasons: - So that the MenuBar can change some
     * Properties of all Tabs,Windows,... (like the Language). - For the
     * Tab-Switching. For example: at the showGraphGeneration-Method.
     */
    private FxRageController fxRageController;
    /**
     *
     * The Menu for the Language-Choosing.
     *
     * This is the Menu where where the MenuItems for the available Languages
     * will be put into. By these added MenuItems the User can change the
     * Language of the GUI.
     *
     * The MenuItems for the different Languages will be added dynamically.
     * That's why this JavaFx-Element is an Object at this Controller. (unlike
     * the others of this Scene).
     */

    private Menu menuLanguages;
    /**
     *
     * The ToggleGroup for the different MenuItems for the Language-Choosing.
     *
     * The MenuItems for the different Languages will be added dynamically to
     * the Menu. Therefore the dynamically generated Objects will be set into
     * this ToggleGroup. So that the User only can select one of the available
     * Languages to set the GUI to.
     */

    private ToggleGroup toggleGroupLanguage;

    //
    // Constructors
    //
    public FxMenuBarController() {
    }

    //
    // Methods
    //
    /**
     * This Method calls the corresponding Controller to perform the
     * Plugin-Import.
     *
     * Therefore a new FileChooser will be opened so that the User can choose
     * the Folder where the Plugin is stored in.
     */
    private void importHeuristics() {
    }

    /**
     * This Method calls the corresponding Controller to perform the Tab-Import.
     *
     * Therefore a new FileChooser will be opened so that the User can choose
     * the Folder where the Graph is stored in.
     */
    private void importTab() {
    }

    /**
     * This Method calls the corresponding Controller to perform the Tab-Export.
     * Therefore a new FileChooser will be opened so that the User can choose
     * the Folder where the Tab ahould be exported to.
     */
    private void exportTab() {
    }

    /**
     * This Method opens the Help Dialogue for the Functional-Things of this
     * Program.
     *
     * This Dialogue is shown as a new Window over the current Screen.
     */
    private void showFunctionalHelp() {
    }

    /**
     * This Method opens the Help Dialogue for the Usage-Things of this Program.
     * It explains the GUI and the steps the User has to do to accomplish the
     * different functional things the Program provides him/her with. This
     * Dialogue is shown as a new Window over the current Screen.
     */
    private void showUsageHelp() {
    }

    /**
     * This Method opens the Help Dialogue for the Import. It explains what can
     * be Imported and how the user has to do it. This Dialogue is shown as a
     * new Window over the current Screen.
     */
    private void showImportHelp() {
    }

    /**
     * This Method sets the Language of the GUI. Therefore this class calls the
     * changeLanguageMethod of the FxRageController so that all GUI-Elements
     * that contain Text will be shown correct Language.
     */
    private void setLanguage() {
    }

    /**
     * This Method opens the About Dialogue from this Program. This Dialogue is
     * shown as a new Window over the current Screen.
     */
    private void showAbout() {
    }

    /**
     * This Method will switch the GUI to the GraphGeneration-Tab, so that the
     * User can start set the properties and so on. Therefore uses the
     * FxRageController.
     */
    private void showGraphGeneration() {
    }

    /**
     * This Method will open the Graph-Editor, so that the User can start
     * working on his/her own Graph. Therefore uses the FxGraphEditorController.
     */
    private void showGraphEditor() {
    }

    //
    // Accessor methods
    //
    /**
     * Set the value of fxRageController This is the FxRageController of this
     * Class.
     *
     * This is needed for several Reasons: - So that the MenuBar can change some
     * Properties of all Tabs,Windows,... (like the Language). - For the
     * Tab-Switching. For example: at the showGraphGeneration-Method.
     *
     * @param newFxRageController the new value of fxRageController
     */
    private void setFxRageController(FxRageController newFxRageController) {
        fxRageController = newFxRageController;
    }

    /**
     * Get the value of fxRageController This is the FxRageController of this
     * Class.
     *
     * This is needed for several Reasons: - So that the MenuBar can change some
     * Properties of all Tabs,Windows,... (like the Language). - For the
     * Tab-Switching. For example: at the showGraphGeneration-Method.
     *
     * @return the value of fxRageController
     */
    private FxRageController getFxRageController() {
        return fxRageController;
    }

    /**
     * Set the value of menuLanguages The Menu for the Language-Choosing.
     *
     * This is the Menu where where the MenuItems for the available Languages
     * will be put into. By these added MenuItems the User can change the
     * Language of the GUI.
     *
     * The MenuItems for the different Languages will be added dynamically.
     * That's why this JavaFx-Element is an Object at this Controller. (unlike
     * the others of this Scene).
     *
     * @param newVar the new value of menuLanguages
     */
    private void setMenuLanguages(Menu newVar) {
        menuLanguages = newVar;
    }

    /**
     * Get the value of menuLanguages The Menu for the Language-Choosing.
     *
     * This is the Menu where where the MenuItems for the available Languages
     * will be put into. By these added MenuItems the User can change the
     * Language of the GUI.
     *
     * The MenuItems for the different Languages will be added dynamically.
     * That's why this JavaFx-Element is an Object at this Controller. (unlike
     * the others of this Scene).
     *
     * @return the value of menuLanguages
     */
    private Menu getMenuLanguages() {
        return menuLanguages;
    }

    /**
     * Set the value of toggleGroupLanguage The ToggleGroup for the different
     * MenuItems for the Language-Choosing.
     *
     * The MenuItems for the different Languages will be added dynamically to
     * the Menu. Therefore the dynamically generated Objects will be set into
     * this ToggleGroup. So that the User only can select one of the available
     * Languages to set the GUI to.
     *
     * @param newVar the new value of toggleGroupLanguage
     */
    private void setToggleGroupLanguage(ToggleGroup newVar) {
        toggleGroupLanguage = newVar;
    }

    /**
     * Get the value of toggleGroupLanguage The ToggleGroup for the different
     * MenuItems for the Language-Choosing.
     *
     * The MenuItems for the different Languages will be added dynamically to
     * the Menu. Therefore the dynamically generated Objects will be set into
     * this ToggleGroup. So that the User only can select one of the available
     * Languages to set the GUI to.
     *
     * @return the value of toggleGroupLanguage
     */
    private ToggleGroup getToggleGroupLanguage() {
        return toggleGroupLanguage;
    }

}
