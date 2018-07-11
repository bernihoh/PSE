package src.main.java.Controller.LogicController;

import src.main.java.Model.Graph.GraphProperties;

/**
 * Class GraphGeneratorController The controller for the graph generation
 * communication between the view and the GraphBuilder in the Model.
 */
public class GraphGeneratorController {

    //
    // Fields
    //
    //
    // Constructors
    //
    /**
     * Constructor: Creates a GraphGeneratorController.
     */
    public GraphGeneratorController() {
    }

    //
    // Methods
    //
    //
    // Accessor methods
    //
    //
    // Other methods
    //
    /**
     * Commands the GraphBuilder to create random graphs with specific
     * properties.
     *
     * @param genProperties The properties, that restrict the randomnes of the
     * GraphBuilder.
     */
    public void generate(GraphProperties genProperties) {
    }

    /**
     * Creates an empty GraphEditorController, that adds that manually generated
     * graph from a user. It calls the SuperController to start the method
     * createGEC without a DataPool and without a graph.
     */
    public void createManuallyGraph() {
    }

}
