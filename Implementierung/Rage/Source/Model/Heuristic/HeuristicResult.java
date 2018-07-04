

/**
 * Class HeuristicResult
 * This class is the abstract interface of the result of a specific calculation of
 * an heuristic H on a specific graph
of type G.
 */
public class HeuristicResult {

  //
  // Fields
  //

  
  //
  // Constructors
  //
  public HeuristicResult () { };
  
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
   * The constructor of this class
   * @param        graph graph the graph this heuristic was calculated upon
   * @param        heuristic heuristic the heuristic by which the result was
   * calculated
   */
  public void HeuristicResult(uCrEnQqDIUZVj graph, uCrEnQqDIUZVj heuristic)
  {
  }


  /**
   * @return returns the graph this result was calculated upon
   * @return       uCrEnQqDIUZVj
   */
  public uCrEnQqDIUZVj getGraph()
  {
  }


  /**
   * @return returns the heuristic by which this result was calculated
   * @return       uCrEnQqDIUZVj
   */
  public uCrEnQqDIUZVj getHeuristic()
  {
  }


  /**
   * @return returns the line-by-line representation of this heuristic result as
   * specified in the RAGE data
format
   * @return       u7qkS15Xb7BMH
   */
  public u7qkS15Xb7BMH toRAGE()
  {
  }


}
