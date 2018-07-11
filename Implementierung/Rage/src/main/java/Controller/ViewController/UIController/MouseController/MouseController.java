package src.main.java.Controller.ViewController.UIController.MouseController;

import javafx.event.EventHandler;
import javafx.scene.input.MouseEvent;

/**
 * Class MouseController The MouseController so that the Program could detect
 * Mouse Clicks, Drag and Drop.
 */
abstract public class MouseController {

    //
    // Fields
    //
    /**
     * The X-Position of the Mouse at the time of the Event.
     */
    private Double xPos;
    /**
     * The Y-Position of the Mouse at the time of the Event.
     */
    private Double yPos;
    /**
     *
     * This is the MouseHandler for the onPressed-Action. This is an
     * Implementation of the EventHandler<MouseHandler>, that overwrites the
     * handle-Method.
     */

    private EventHandler<MouseEvent> onMousePressedEventHandler;
    /**
     *
     * This is the MouseHandler for the onDragged-Action. This is an
     * Implementation of the EventHandler<MouseHandler>, that overwrites the
     * handle-Method.
     */

    private EventHandler<MouseEvent> onMouseDraggedEventHandler;
    /**
     *
     * This is the MouseHandler for the onRelease-Action. This is an
     * Implementation of the EventHandler<MouseHandler>, that overwrites the
     * handle-Method.
     */

    private EventHandler<MouseEvent> onMouseReleasedEventHandler;

    //
    // Constructors
    //
    /**
     * The Empty-Constructor of this Class. The MouseHandler of this Class had
     * to be set at a later time.
     */
    public MouseController() {
    }

    /**
     * The Constructor of this Class. It gets the differentEventHandlers as
     * Parameters and sets them.
     *
     * @param onMousePressedEventHandler The MouseHandler for the
     * onPressed-Action that should be set.
     * @param onMouseDraggedEventHandler The MouseHandler for the
     * onDragged-Action that should be set.
     * @param onMouseReleasedEventHandler The MouseHandler for the
     * onReleased-Action that should be set.
     */
    public MouseController(EventHandler<MouseEvent> onMousePressedEventHandler,
            EventHandler<MouseEvent> onMouseDraggedEventHandler,
            EventHandler<MouseEvent> onMouseReleasedEventHandler) {
        this.onMousePressedEventHandler = onMousePressedEventHandler;
        this.onMouseDraggedEventHandler = onMouseDraggedEventHandler;
        this.onMouseReleasedEventHandler = onMouseReleasedEventHandler;
    }

    //
    // Methods
    //
    //
    // Accessor methods
    //
    /**
     * Get the value of xPos The X-Position of the Mouse at the time of the
     * Event.
     *
     * @return the value of xPos
     */
    private Double getXPos() {
        return this.xPos;
    }

    /**
     * Set the value of xPos The X-Position of the Mouse at the time of the
     * Event.
     *
     * @param xPos the new value of xPos.
     */
    private void setXPos(Double newXPos) {
        this.xPos = newXPos;
    }

    /**
     * Get the value of yPos The Y-Position of the Mouse at the time of the
     * Event.
     *
     * @return the value of yPos
     */
    private Double getYPos() {
        return this.yPos;
    }

    /**
     * Set the value of yPos The Y-Position of the Mouse at the time of the
     * Event.
     *
     * @param newYPos the new value of yPos.
     */
    private void setYPos(Double newYPos) {
        this.yPos = newYPos;
    }

    /**
     * Get the value of onMousePressedEventHandler This is the MouseHandler for
     * the onPressed-Action. This is an Implementation of the
     * EventHandler<MouseHandler>, that overwrites the handle-Method.
     *
     * @return the value of onMousePressedEventHandler
     */
    private EventHandler<MouseEvent> getOnMousePressedEventHandler() {
        return onMousePressedEventHandler;
    }

    /**
     * Set the value of onMousePressedEventHandler This is the MouseHandler for
     * the onPressed-Action. This is an Implementation of the
     * EventHandler<MouseHandler>, that overwrites the handle-Method.
     *
     * @param newOnMousePressedEventHandler the new value of
     * onMousePressedEventHandler
     */
    private void setOnMousePressedEventHandler(EventHandler<MouseEvent> newOnMousePressedEventHandler) {
        onMousePressedEventHandler = newOnMousePressedEventHandler;
    }

    /**
     * Get the value of onMouseDraggedEventHandler This is the MouseHandler for
     * the onDragged-Action. This is an Implementation of the
     * EventHandler<MouseHandler>, that overwrites the handle-Method.
     *
     * @return the value of onMouseDraggedEventHandler
     */
    private EventHandler<MouseEvent> getOnMouseDraggedEventHandler() {
        return onMouseDraggedEventHandler;
    }

    /**
     * Set the value of onMouseDraggedEventHandler This is the MouseHandler for
     * the onDragged-Action. This is an Implementation of the
     * EventHandler<MouseHandler>, that overwrites the handle-Method.
     *
     * @param newOnMouseDraggedEventHandler the new value of
     * onMouseDraggedEventHandler
     */
    private void setOnMouseDraggedEventHandler(EventHandler<MouseEvent> newOnMouseDraggedEventHandler) {
        onMouseDraggedEventHandler = newOnMouseDraggedEventHandler;
    }

    /**
     * Get the value of onMouseReleasedEventHandler This is the MouseHandler for
     * the onRelease-Action. This is an Implementation of the
     * EventHandler<MouseHandler>, that overwrites the handle-Method.
     *
     * @return the value of onMouseReleasedEventHandler
     */
    private EventHandler<MouseEvent> getOnMouseReleasedEventHandler() {
        return onMouseReleasedEventHandler;
    }

    /**
     * Set the value of onMouseReleasedEventHandler This is the MouseHandler for
     * the onRelease-Action. This is an Implementation of the
     * EventHandler<MouseHandler>, that overwrites the handle-Method.
     *
     * @param newOnMouseReleasedEventHandler the new value of
     * onMouseReleasedEventHandler
     */
    private void setOnMouseReleasedEventHandler(EventHandler<MouseEvent> newOnMouseReleasedEventHandler) {
        onMouseReleasedEventHandler = newOnMouseReleasedEventHandler;
    }
}
