

/**
 * Class GraphBuilder
 * This class is a factory class to generate graphs of type G by given
 * GraphProperties G as well
as to modify graphs of this type.
 */
public class GraphBuilder {

  //
  // Fields
  //

  
  //
  // Constructors
  //
  public GraphBuilder () { };
  
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
   * @return returns a randomly generated graph satisfying the specified properties
   * @return       uCrEnQqDIUZVj
   * @param        properties properties the properties which the generated graphs
   * will have
   */
  public static uCrEnQqDIUZVj generateGraph(uCrEnQqDIUZVj properties)
  {
  }


  /**
   * @return returns a modified copy of graph in which the vertex with index vertex
   * and all edges incident
to it are deleted
@throws GraphInconsistencyException if
   * graph has no vertex with index vertex
   * @return       uCrEnQqDIUZVj
   * @param        graph graph the graph which is going to be modified
   * @param        vertex vertex the index of a vertex of graph, which will be
   * deleted
   */
  public static uCrEnQqDIUZVj deleteVertex(uCrEnQqDIUZVj graph, uDDdo5Ay7C13h vertex)
  {
  }


  /**
   * @return returns a modified copy of graph which has precisely one isolated vertex
   * more
   * @return       uCrEnQqDIUZVj
   * @param        graph graph the graph which is going to be modified
   */
  public static uCrEnQqDIUZVj addVertex(uCrEnQqDIUZVj graph)
  {
  }


  /**
   * @return returns a modified copy of graph in which the vertices having index
   * vertex1 and vertex2
swap indices. Note this results in a different but
   * isomorphic graph to graph
@throws GraphInconsistencyException if graph has no
   * vertex with index vertex1 or vertex2
   * @return       uCrEnQqDIUZVj
   * @param        graph graph the graph which is going to be modified
   * @param        vertex1 vertex1 the index of a vertex of graph
   * @param        vertex2 vertex2 the index of another vertex of graph
   */
  public static uCrEnQqDIUZVj swapVertices(uCrEnQqDIUZVj graph, uDDdo5Ay7C13h vertex1, uDDdo5Ay7C13h vertex2)
  {
  }


  /**
   * @return returns a modified copy of graph in which edge is deleted, if it was an
   * edge in graph.
Otherwise it just returns graph
   * @return       uCrEnQqDIUZVj
   * @param        graph graph the graph which is going to be modified
   * @param        edge edge the edge which is going to be deleted
   */
  public static uCrEnQqDIUZVj deleteEdge(uCrEnQqDIUZVj graph, uCrEnQqDIUZVj edge)
  {
  }


  /**
   * addEdge(graph: G, edge: E): G
@param graph the graph which is going to be
   * modified
@param edge the edge which is going to be inserted
@return returns a
   * modified copy of graph in which edge is inserted if it wasnt already an edge
in
   * graph otherwise it returns just graph. Note that the edge may contain vertices
   * which are not in
graph, since missing vertices will automatically be added
   * @return       uCrEnQqDIUZVj
   * @param        graph graph the graph which is going to be modified
   * @param        edge edge the edge which is going to be inserted
   */
  public static uCrEnQqDIUZVj addEdge(uCrEnQqDIUZVj graph, uCrEnQqDIUZVj edge)
  {
  }


  /**
   * @return returns a modified copy of graph in which all isolated vertices are
   * deleted
   * @return       uCrEnQqDIUZVj
   * @param        graph the graph which is going to be modified
   */
  public static uCrEnQqDIUZVj deleteIsolatedVertices(uCrEnQqDIUZVj graph)
  {
  }


}
