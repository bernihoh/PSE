package src.main.java.View.Drawer.Layouts;

import src.main.java.View.Drawer.Visualization.VisualizationGraph.VisualEdge;
import src.main.java.View.Drawer.Visualization.VisualizationGraph.VisualGraph;
import src.main.java.View.Drawer.Visualization.VisualizationGraph.VisualVertex;

/**
 * Class GraphLayoutCircle This is the Circle Layout of the Graph. Therfore this
 * Layout orderes the Graph-Nodes into a Circle.
 *
 * It is an Child-Class of the abstract GraphLayout-Class.
 */
class GraphLayoutCircle<V extends VisualVertex, E extends VisualEdge, G extends VisualGraph<V, E>> extends GraphLayout<V, E, G> {

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
    public G executeLayout(G graph) {
        final double increment = 360 / graph.getVertices().size();
        double degree = 0;
        //Go through all Vertices of the given Graph and set the Position of it.
        for (V vertex : graph.getVertices()) {
            //Set the Vertex-Position.
            double x = radius * Math.cos(Math.toRadians(degree)) + vertex.getBoundsInLocal().getWidth() / 2;
            double y = radius * Math.sin(Math.toRadians(degree)) + vertex.getBoundsInLocal().getHeight() / 2;

            vertex.relocate(x, y);

            degree += increment;
        }

        return graph;
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
    public final void setRadius(Double newRadius) {
        this.radius = newRadius;
    }

    /**
     * Get the value of radius The Radius of the Circle where the Elements
     * should be positioned at.
     *
     * @return the value of radius
     */
    public Double getRadius() {
        return this.radius;
    }

}
