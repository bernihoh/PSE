

/**
 * Class DataPool
 * The class manages the application of heuristics of type H on graphs of type G
 * which results have type R.
It assures that every heuristic stored in the pool is
 * applied to every graph stored in the pool. Moreover it
gathers statistics over
 * this applications.
 */
public class DataPool {

  //
  // Fields
  //

  
  //
  // Constructors
  //
  public DataPool () { };
  
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
   * A constructor for this class, assuring that the datapool can be loaded from
   * harddrive
   * @param        rageFormat rageFormat the line by line representation of a
   * datapool as specified in the RAGE data
   * format.
   */
  public void DataPool(u7qkS15Xb7BMH rageFormat)
  {
  }


  /**
   * @return returns the list of heuristics currently in this data pool
   */
  public void getHeuristics()
  {
  }


  /**
   * @throws DataInconsistencyException if heuristic may not be applied on graphs of
   * type G or does
not has results of type R
   * @param        heuristic heuristic the heuristic to be added to data pool, which
   * then will be applied to every graph
   * in the data pool
   */
  public void addHeuristic(uCrEnQqDIUZVj heuristic)
  {
  }


  /**
   * @return returns the list of graphs currently in this data pool
   */
  public void getGraphs()
  {
  }


  /**
   * @throws DataInconsistencyException if heuristics of type H may not be applied on
   * this graph
   * @param        graph graph the graph to be added to the data pool, on which then
   * all heuristics in the data pool
   * will be applied
   */
  public void addGraph(uCrEnQqDIUZVj graph)
  {
  }


  /**
   * @return returns the list of all results calculated on graphs by heuristics in
   * this data pool
   */
  public void getResults()
  {
  }


  /**
   * @return returns all results calculated by heuristic on graphs in this data pool
   * @param        heuristic heuristic the heuristic the results were calculated by
   */
  public void getResults(uCrEnQqDIUZVj heuristic)
  {
  }


  /**
   * @return returns the statistic gathered for heuristic
@throws
   * DataInconsistencyException if heuristic is not a heuristic of this data pool
   * @return       urcnTrs0XtwAX
   * @param        heuristic the heuristic whose statistics are requested
   */
  public urcnTrs0XtwAX getStatistics(uCrEnQqDIUZVj heuristic)
  {
  }


  /**
   * @return returns the line by line representation of this data pool as specified
   * in the RAGE data format
   * @return       u7qkS15Xb7BMH
   */
  public u7qkS15Xb7BMH toRAGE()
  {
  }


}
