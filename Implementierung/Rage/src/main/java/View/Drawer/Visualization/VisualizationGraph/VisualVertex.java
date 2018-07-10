package src.main.java.View.Drawer.Visualization.VisualizationGraph;

import javafx.scene.shape.Circle;

/**
 * Class VisualVertex The Vertex of an Visual-Graph. It is the Child of the
 * JavaFx-Circle Object so this Vertex can be drawn.
 */
public class VisualVertex extends Circle {

    //
    // Fields
    //
    /**
     *
     * The Identification-Number (ID) of this Node. This Variable is Final.
     */
    private final Integer ID;

    //
    // Constructors
    //
    /**
     * The Constructor of this Class.
     *
     * It contains only the final-ID as Parameter to set. The Parameters of the
     * JavaFx-Node will be set by the Layout if it calculates the Position of
     * this Vertex.
     *
     * @param id The ID that will be set to this Vertex.
     */
    public VisualVertex(Integer id) {
        this.ID = id;
    }

    //
    // Methods
    //
    //
    // Accessor methods
    //
    /**
     * Get the value of ID The Identification-Number (ID) of this Node. This
     * Variable is Final.
     *
     * @return the value of ID
     */
    public Integer getID() {
        return this.ID;
    }

    /**
     * This Method overwrites the standard toString-Method.
     *
     * @return It returns a String-Representation of this VisualVertex. "<ID>"
     * @return uRubgLa75CQhI
     */
    @Override
    public String toString() {
        return null;
    }

}
