package Source.View.Graphics.UIElements;

import javafx.scene.Group;
import javafx.scene.Node;
import javafx.scene.transform.Scale;

/**
 * Class ZoomableScrollPane
 *
 * @author https://www.pixelduke.com/2012/09/16/zooming-inside-a-scrollpane/
 */
public class ZoomableScrollPane {

    //
    // Fields
    //
    public Group zoomGroup;

    //
    // Constructors
    //
    public ZoomableScrollPane() {
    }

    //
    // Methods
    //
    //
    // Accessor methods
    //
    /**
     * Set the value of zoomGroup
     *
     * @param newVar the new value of zoomGroup
     */
    public void setZoomGroup(Group newVar) {
        zoomGroup = newVar;
    }

    /**
     * Get the value of zoomGroup
     *
     * @return the value of zoomGroup
     */
    public Group getZoomGroup() {
        return zoomGroup;
    }

    //
    // Other methods
    //
    /**
     * This is the Constructor of this Class.
     *
     * @param content
     */
    public void ZoomableScrollPane(Node content) {
    }

    /**
     * @return uZD8ZajiFrx8N
     */
    public Scale getScaleValue() {
        return null;
    }

    /**
     */
    public void zoomToActual() {
    }

    /**
     * @param scaleValue
     */
    public void zoomTo(Scale scaleValue) {
    }

    /**
     */
    public void zoomActual() {
    }

    /**
     */
    public void zoomOut() {
    }

    /**
     */
    public void zoomIn() {
    }

    /**
     * @param minimizeOnly
     */
    public void zoomToFit(double minimizeOnly) {
    }

}
