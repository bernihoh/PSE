package Source.View.Drawer.Layouts;

import Source.View.Drawer.Visualization.VisualizationGraph.VisualGraph;

/**
 * Class GraphLayoutCircle This is the Circle Layout of the Graph. Therfore this
 * Layout orderes the Graph-Nodes into a Circle.
 *
 * It is an Child-Class of the abstract GraphLayout-Class.
 */
class GraphLayoutCircle extends GraphLayout {

    //
    // Fields
    //
    /**
     * The Radius of the Circle where the Elements should be positioned at.
     */
    private Double radius;

    //
    // Constructors
    //
    /**
     * The Empty-Constructor of this Class.
     */
    public GraphLayoutCircle() {
    }

    /**
     * The Constructor of this Class.
     *
     * Sets the given Radius as radius of this Layout.
     *
     * @param radius The Radius to set.
     */
    public GraphLayoutCircle(Double radius) {
        this.setRadius(radius);
    }

    //
    // Methods
    //
    /**
     * This is the overwritten Method from the abstract-Parent-Class.
     */
    @Override
    public VisualGraph executeLayout(VisualGraph graph) {
        return null;
    }

    //
    // Accessor methods
    //
    /**
     * Set the value of radius The Radius of the Circle where the Elements
     * should be positioned at.
     *
     * @param newRadius the new value of radius
     */
    private void setRadius(Double newRadius) {
        this.radius = newRadius;
    }

    /**
     * Get the value of radius The Radius of the Circle where the Elements
     * should be positioned at.
     *
     * @return the value of radius
     */
    private Double getRadius() {
        return this.radius;
    }

}
