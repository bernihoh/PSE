package src.main.java.Controller.ViewController.FxController.FxGraphGenerationTabController;

import src.main.java.Controller.LogicController.GraphGeneratorController;
import src.main.java.Controller.ViewController.FxController.FxRageController;
import src.main.java.Model.Graph.GraphProperties;
import javafx.scene.control.ComboBox;

/**
 * Class FxGraphGenerationController The FxController for the
 * Graph-Generation-Tab.
 */
public class FxGraphGenerationController {

    //
    // Fields
    //
    /**
     *
     * This is the FxRageController. This is needed so that the
     * GraphGenerationTab can start an Editor by calling this Super-Class. It is
     * passed on by the init-Method.
     */
    private FxRageController fxRageController;
    /**
     * The GraphGeneratorController for this Class.
     */
    private GraphGeneratorController graphGeneratorController;
    /**
     *
     * The GraphProperties of this Class. It among other things contains the
     * differentGraphTypes that are implemented in this Program and the User can
     * choose.
     *
     * This is only a copy that is get via the GeneratorController, so that the
     * access to this Object is easier for the FxGraphGeneratorController and
     * the GraphGenerationController is not flooded with requests. Therefore
     * there is no need for a getter-Method.
     */

    private GraphProperties graphProperties;
    /**
     *
     * The Combobox where the User can choose the Type of the generated Graph.
     *
     * The Possible Choices are given via the given graphProperties.
     *
     * The other Settings will be based on this Choice, to provide the user with
     * the correct Settings for the different Graph-Types.
     */

    private ComboBox cbGraphType;

    //
    // Constructors
    //
    public FxGraphGenerationController() {
    }

    /**
     * This method overrides the init-Method from the abstract-Class
     * FxController. It sets the FxRageController by the given Parameter. This
     * is possible because the FxRageController calls this Method and gives
     * itself as parameter with it.
     *
     * @param fxRageController The FxRageController that will be set.
     */
    public void init(FxRageController fxRageController) {
    }

    //
    // Methods
    //
    /**
     * This Method is called by the GraphProperties-Setter. It changes the
     * GUI-Elements to the needed ones. They will be dynamically created.
     */
    private void updateGUIElementFromProperties() {
    }

    /**
     * This Method starts the generation by calling the correct Method at the
     * GraphGenerationController.
     */
    private void startGeneration() {
    }

    /**
     * This Method starts the import of an previously saved Tab by calling the
     * correct Method at the GraphGenerationController.
     */
    private void startImport() {
    }

    /**
     * This Method starts the GraphEditor by calling the correct Method at the
     * GraphGenerationController. Also it init's the GraphEditor by calling the
     * FxRageController.
     */
    private void startEditor() {
    }

    //
    // Accessor methods
    //
    /**
     * Set the value of fxRageController This is the FxRageController. This is
     * needed so that the GraphGenerationTab can start an Editor by calling this
     * Super-Class. It is passed on by the init-Method.
     *
     * @param newFxRageController the new value of fxRageController
     */
    private void setFxRageController(FxRageController newFxRageController) {
        fxRageController = newFxRageController;
    }

    /**
     * Get the value of fxRageController This is the FxRageController. This is
     * needed so that the GraphGenerationTab can start an Editor by calling this
     * Super-Class. It is passed on by the init-Method.
     *
     * @return the value of fxRageController
     */
    private FxRageController getFxRageController() {
        return fxRageController;
    }

    /**
     * Set the value of graphGeneratorController The GraphGeneratorController
     * for this Class. Then set the graphProperties of this Class from the Value
     * out of the GraphGenerationController. Then call the
     * updateGUIElementFromProperties-Method to update the GUI to the given
     * Properties.
     *
     * @param newGraphGeneratorController The GraphGeneratorController to set.
     */
    private void setGraphGeneratorController(GraphGeneratorController newGraphGeneratorController) {
        graphGeneratorController = newGraphGeneratorController;
    }

    /**
     * Get the value of graphGeneratorController The GraphGeneratorController
     * for this Class.
     *
     * @return the value of graphGeneratorController
     */
    private GraphGeneratorController getGraphGeneratorController() {
        return graphGeneratorController;
    }

    /**
     * Set the value of graphProperties The GraphProperties of this Class. It
     * among other things contains the differentGraphTypes that are implemented
     * in this Program and the User can choose.
     *
     * This is only a copy that is get via the GeneratorController, so that the
     * access to this Object is easier for the FxGraphGeneratorController and
     * the GraphGenerationController is not flooded with requests. Therefore
     * there is no need for a getter-Method.
     *
     * @param newGraphProperties the new value of graphProperties
     */
    private void setGraphProperties(GraphProperties newGraphProperties) {
        graphProperties = newGraphProperties;
    }

    /**
     * Get the value of graphProperties The GraphProperties of this Class. It
     * among other things contains the differentGraphTypes that are implemented
     * in this Program and the User can choose.
     *
     * This is only a copy that is get via the GeneratorController, so that the
     * access to this Object is easier for the FxGraphGeneratorController and
     * the GraphGenerationController is not flooded with requests. Therefore
     * there is no need for a getter-Method.
     *
     * @return the value of graphProperties
     */
    private GraphProperties getGraphProperties() {
        return graphProperties;
    }

    /**
     * Set the value of cbGraphType The Combobox where the User can choose the
     * Type of the generated Graph.
     *
     * The Possible Choices are given via the given graphProperties.
     *
     * The other Settings will be based on this Choice, to provide the user with
     * the correct Settings for the different Graph-Types.
     *
     * @param newVar the new value of cbGraphType
     */
    private void setCbGraphType(ComboBox newVar) {
        cbGraphType = newVar;
    }

    /**
     * Get the value of cbGraphType The Combobox where the User can choose the
     * Type of the generated Graph.
     *
     * The Possible Choices are given via the given graphProperties.
     *
     * The other Settings will be based on this Choice, to provide the user with
     * the correct Settings for the different Graph-Types.
     *
     * @return the value of cbGraphType
     */
    private ComboBox getCbGraphType() {
        return cbGraphType;
    }

}
