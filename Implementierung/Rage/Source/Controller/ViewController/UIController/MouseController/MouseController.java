

/**
 * Class MouseController
 * The MouseController so that the Program could detect Mouse Clicks, Drag and
 * Drop.
 */
abstract public class MouseController {

  //
  // Fields
  //

  /**
   * The X-Position of the Mouse at the time of the Event.
   */
  private uUKYES3ok3Zt3 xPos;
  /**
   * The Y-Position of the Mouse at the time of the Event.
   */
  private uUKYES3ok3Zt3 yPos;  /**

   * This is the MouseHandler for the onPressed-Action.
   * This is an Implementation of the EventHandler<MouseHandler>, that overwrites the handle-Method.   */

  private uCDWcj6b3n5fk onMousePressedEventHandler;  /**

   * This is the MouseHandler for the onDragged-Action.
   * This is an Implementation of the EventHandler<MouseHandler>, that overwrites the handle-Method.   */

  private uCDWcj6b3n5fk onMouseDraggedEventHandler;  /**

   * This is the MouseHandler for the onRelease-Action.
   * This is an Implementation of the EventHandler<MouseHandler>, that overwrites the handle-Method.   */

  private uCDWcj6b3n5fk onMouseReleasedEventHandler;
  
  //
  // Constructors
  //
  public MouseController () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of xPos
   * The X-Position of the Mouse at the time of the Event.
   * @param newVar the new value of xPos
   */
  private void setXPos (uUKYES3ok3Zt3 newVar) {
    xPos = newVar;
  }

  /**
   * Get the value of xPos
   * The X-Position of the Mouse at the time of the Event.
   * @return the value of xPos
   */
  private uUKYES3ok3Zt3 getXPos () {
    return xPos;
  }

  /**
   * Set the value of yPos
   * The Y-Position of the Mouse at the time of the Event.
   * @param newVar the new value of yPos
   */
  private void setYPos (uUKYES3ok3Zt3 newVar) {
    yPos = newVar;
  }

  /**
   * Get the value of yPos
   * The Y-Position of the Mouse at the time of the Event.
   * @return the value of yPos
   */
  private uUKYES3ok3Zt3 getYPos () {
    return yPos;
  }

  /**
   * Set the value of onMousePressedEventHandler
   * This is the MouseHandler for the onPressed-Action.
This is an Implementation of
   * the EventHandler<MouseHandler>, that overwrites the handle-Method.
   * @param newVar the new value of onMousePressedEventHandler
   */
  private void setOnMousePressedEventHandler (uCDWcj6b3n5fk newVar) {
    onMousePressedEventHandler = newVar;
  }

  /**
   * Get the value of onMousePressedEventHandler
   * This is the MouseHandler for the onPressed-Action.
This is an Implementation of
   * the EventHandler<MouseHandler>, that overwrites the handle-Method.
   * @return the value of onMousePressedEventHandler
   */
  private uCDWcj6b3n5fk getOnMousePressedEventHandler () {
    return onMousePressedEventHandler;
  }

  /**
   * Set the value of onMouseDraggedEventHandler
   * This is the MouseHandler for the onDragged-Action.
This is an Implementation of
   * the EventHandler<MouseHandler>, that overwrites the handle-Method.
   * @param newVar the new value of onMouseDraggedEventHandler
   */
  private void setOnMouseDraggedEventHandler (uCDWcj6b3n5fk newVar) {
    onMouseDraggedEventHandler = newVar;
  }

  /**
   * Get the value of onMouseDraggedEventHandler
   * This is the MouseHandler for the onDragged-Action.
This is an Implementation of
   * the EventHandler<MouseHandler>, that overwrites the handle-Method.
   * @return the value of onMouseDraggedEventHandler
   */
  private uCDWcj6b3n5fk getOnMouseDraggedEventHandler () {
    return onMouseDraggedEventHandler;
  }

  /**
   * Set the value of onMouseReleasedEventHandler
   * This is the MouseHandler for the onRelease-Action.
This is an Implementation of
   * the EventHandler<MouseHandler>, that overwrites the handle-Method.
   * @param newVar the new value of onMouseReleasedEventHandler
   */
  private void setOnMouseReleasedEventHandler (uCDWcj6b3n5fk newVar) {
    onMouseReleasedEventHandler = newVar;
  }

  /**
   * Get the value of onMouseReleasedEventHandler
   * This is the MouseHandler for the onRelease-Action.
This is an Implementation of
   * the EventHandler<MouseHandler>, that overwrites the handle-Method.
   * @return the value of onMouseReleasedEventHandler
   */
  private uCDWcj6b3n5fk getOnMouseReleasedEventHandler () {
    return onMouseReleasedEventHandler;
  }

  //
  // Other methods
  //

  /**
   * The Empty-Constructor of this Class.
The MouseHandler of this Class had to be
   * set at a later time.
   */
  public void MouseController()
  {
  }


  /**
   * The Constructor of this Class.
It gets the differentEventHandlers as Parameters
   * and sets them.
   * @param        onMousePressedEventHandler The MouseHandler for the
   * onPressed-Action that should be set.
   * @param        onMouseDraggedEventHandler The MouseHandler for the
   * onDragged-Action that should be set.
   * @param        onMouseReleasedEventHandler The MouseHandler for the
   * onReleased-Action that should be set.
   */
  public void MouseController(uCDWcj6b3n5fk onMousePressedEventHandler, uCDWcj6b3n5fk onMouseDraggedEventHandler, uCDWcj6b3n5fk onMouseReleasedEventHandler)
  {
  }


  /**
   * Set's the onMousePressedEventHandler of the Class.
   * @param        onMousePressedEventHandler The EventHandler for the
   * onMousePressed-Event to set.
   */
  public void setOnMousePressedEventHandler(uCDWcj6b3n5fk onMousePressedEventHandler)
  {
  }


  /**
   * Set's the onMouseDraggedEventHandler of the Class.
   * @param        onMouseDraggedEventHandler The EventHandler for the
   * onMouseDragged-Event to set.
   */
  public void setOnMouseDraggedEventHandler(uCDWcj6b3n5fk onMouseDraggedEventHandler)
  {
  }


  /**
   * Set's the onMouseReleasedEventHandler of the Class.
   * @param        onMouseReleasedEventHandler The EventHandler for the
   * onMouseReleased-Event to set.
   */
  public void setOnMouseReleasedEventHandler(uCDWcj6b3n5fk onMouseReleasedEventHandler)
  {
  }


}
