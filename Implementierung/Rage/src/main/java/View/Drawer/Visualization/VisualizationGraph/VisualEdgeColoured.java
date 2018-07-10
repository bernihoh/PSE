package src.main.java.View.Drawer.Visualization.VisualizationGraph;

import java.util.List;

/**
 * Class VisualEdgeColoured Extends the VisualEdge Class. This Edge also
 * contains a Colour-ID so that the Edge can be coloured.
 */
public class VisualEdgeColoured extends VisualEdge {

    //
    // Fields
    //
    /**
     *
     * The ID of the Colour used by the Heuristic. This is like a Foreign-Key of
     * the Colour.
     *
     * Remember: The actual colour of the specific Elements are not important
     * because the User wants to see if the calculation of the Heuristic found a
     * solution not what colour the Elements have. The Colour-ID can be
     * associated with different drawing-colours for different draws without
     * changing the statement of the Program.
     */
    private Integer ColourID;

    //
    // Constructors
    //
    public VisualEdgeColoured() {
    }

    /**
     * The Constructor of this Class.
     *
     * Set's the given List of by this Edge connected Vertices to the List of
     * this Object.
     *
     * @param connectedVertices The List of by this Edge connected Vertices.
     * This given List will be set to the List of this Edge-Object.
     * @param colourId The ColourID that will be set to this Edge.
     *
     * If this Edge is not coloured jet set the colour to null or use the other
     * constructor.
     */
    public VisualEdgeColoured(List<Integer> connectedVertices, Integer colourId) {
        super(connectedVertices);
        this.setColourID(colourId);
    }

    //
    // Methods
    //
    //
    // Accessor methods
    //
    /**
     * Get the value of ColourID The ID of the Colour used by the Heuristic.
     * This is like a Foreign-Key of the Colour.
     *
     * Remember: The actual colour of the specific Elements are not important
     * because the User wants to see if the calculation of the Heuristic found a
     * solution not what colour the Elements have. The Colour-ID can be
     * associated with different drawing-colours for different draws without
     * changing the statement of the Program.
     *
     * @return the value of ColourID
     */
    private Integer getColourID() {
        return ColourID;
    }

    /**
     * Set the value of ColourID The ID of the Colour used by the Heuristic.
     * This is like a Foreign-Key of the Colour.
     *
     * Remember: The actual colour of the specific Elements are not important
     * because the User wants to see if the calculation of the Heuristic found a
     * solution not what colour the Elements have. The Colour-ID can be
     * associated with different drawing-colours for different draws without
     * changing the statement of the Program.
     *
     * @param newColourID the new value of ColourID
     */
    private void setColourID(Integer newColourID) {
        ColourID = newColourID;
    }

    /**
     * Checks if this Edge is Coloured.
     *
     * Therefore this Method checks if the ColourID is null or an actual
     * Integer-Value.
     *
     * @return true if the ColourID-Varialbe is set and false if not.
     * @return uZLSB8lOho0lC
     */
    public Boolean isColoured() {
        return this.ColourID != null;
    }

    /**
     * This Method overwrites the standard toString-Method.
     *
     * @return It returns a String-Representation of this VisualEdge-Coloured.
     * "{<VertexID1>, ...}:<ColourID>"
     * @return uRubgLa75CQhI
     */
    @Override
    public String toString() {
        return null;
    }

}
