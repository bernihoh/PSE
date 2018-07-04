

/**
 * Class MouseControllerGraphDrawer
 * This MouseController is used at Graph-Modifying.

For Example:
It registeres
 * when a Vertex is pressed so that it can be added to the selected Vertices.
 */
public class MouseControllerGraphDrawer {

  //
  // Fields
  //

  /**
   * The Graph the User wants to modify by using the Mouse.
   */
  private uf0fd9uPbY6Sl graph;
  
  //
  // Constructors
  //
  public MouseControllerGraphDrawer () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of graph
   * The Graph the User wants to modify by using the Mouse.
   * @param newVar the new value of graph
   */
  private void setGraph (uf0fd9uPbY6Sl newVar) {
    graph = newVar;
  }

  /**
   * Get the value of graph
   * The Graph the User wants to modify by using the Mouse.
   * @return the value of graph
   */
  private uf0fd9uPbY6Sl getGraph () {
    return graph;
  }

  //
  // Other methods
  //

  /**
   * This is the Constructor of this Class.
It uses the Empty-SuperConstructor.
It
   * get's an Graph as a Parameter and sets them.
   * @param        graph The VisualGraph that should be set to modified with the
   * Mouse.
   */
  public void MouseControllerGraphDrawer(uf0fd9uPbY6Sl graph)
  {
  }


  /**
   * The Constructor of this Class.
It gets the different EventHandlers as Parameters
   * and sets them.
Also it sets the given Graph.
   * @param        onMousePressedEventHandler The MouseHandler for the
   * onPressed-Action that should be set.
   * @param        onMouseDraggedEventHandler The MouseHandler for the
   * onDragged-Action that should be set.
   * @param        onMouseReleasedEventHandler The MouseHandler for the
   * onReleased-Action that should be set.
   * @param        graph The VisualGraph that should be set to modified with the
   * Mouse.
   */
  public void MouseController(uCDWcj6b3n5fk onMousePressedEventHandler, uCDWcj6b3n5fk onMouseDraggedEventHandler, uCDWcj6b3n5fk onMouseReleasedEventHandler, uf0fd9uPbY6Sl graph)
  {
  }


  /**
   * Set the VisualGraph of this MouseControllerGraphDrawer.
   * @param        graph The VisualGraph that should be set.
   */
  public void setGraph(uf0fd9uPbY6Sl graph)
  {
  }


}
