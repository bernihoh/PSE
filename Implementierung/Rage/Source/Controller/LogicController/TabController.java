

/**
 * Class TabController
 * The Controller of exactly one Preview Tab in the View, that manages the DataPool
 * of this Preview Tab.
 */
public class TabController {

  //
  // Fields
  //

  
  //
  // Constructors
  //
  public TabController () { };
  
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
   * Constructor: Creates a new TabController and connects it with an own DataPool,
   * it also creates an
own StatisticController.
   * @param        tabName The name of this TabController.
   * @param        pool DataPool, that belongs to the TabController.
   */
  public void TabController(uRubgLa75CQhI tabName, u7jmAhI0g2j1F pool)
  {
  }


  /**
   * @return List <DetailViewController>.
   * @return       uA6dEmEdJIEiM
   */
  public uA6dEmEdJIEiM getDVCList()
  {
  }


  /**
   * @return DetailViewController.
   * @return       usZJSLufcKCmu
   * @param        name The name is the DetailViewController identifier, with it,
   * theTabController can
   * identify the current DetailViewController, the User is working on.
   */
  public usZJSLufcKCmu getDVC(uRubgLa75CQhI name)
  {
  }


  /**
   * @return DataPool
   * @return       u7jmAhI0g2j1F
   */
  public u7jmAhI0g2j1F getDataPool()
  {
  }


  /**
   * Adds one Graph to the DataPool, that belongs to the TabController
   * instance.
@throws EXCEPTION if the type of the Graph is not of the same graph
   * type in the DataPool.
   * @param        graph The graph that should be added to the DataPool.
   */
  public void addGraphToDataPool(uCrEnQqDIUZVj graph)
  {
  }


  /**
   * Merges two DataPools under one of the two TabController. The other TabController
   * with its DataPool
remains untouched.

@throws EXCEPTION if the graph type of
   * both DataPools is not equal.
   * @param        pool The DataPool, that should be copied.
   */
  public void mergeDataPool(u7jmAhI0g2j1F pool)
  {
  }


  /**
   * @return StatisticController
   * @return       uffambYhPpe1g
   */
  public uffambYhPpe1g getStatisticController()
  {
  }


  /**
   * @return HeuristicController
   * @return       upWKysSZ7Qrue
   */
  public upWKysSZ7Qrue getHeuristicController()
  {
  }


  /**
   * @return FilterController
   * @return       uA7crnnjW6JCR
   */
  public uA7crnnjW6JCR getFilterController()
  {
  }


  /**
   * Calls the HeuristicController to collor the graphs.
   */
  public void heuristicApplyToDataPool()
  {
  }


  /**
   * Instanciates a HeuristicController and gives him a DataPool.
   * @param        pool The given DataPool.
   */
  public void createHeuristicController(u7jmAhI0g2j1F pool)
  {
  }


  /**
   * Instanciates a DetailViewController and gives him a graph to display with all
   * heuristics, that tried to
collor it.
   * @param        graphPosition The position of the graph in the graph list in the
   * given DataPool.
   */
  public void createDetailViewController(uDDdo5Ay7C13h graphPosition)
  {
  }


  /**
   * Instanciates a FilterController and gives him a DataPool.
   * @param        pool The given DataPool.
   */
  public void createFilterController(u7jmAhI0g2j1F pool)
  {
  }


}
