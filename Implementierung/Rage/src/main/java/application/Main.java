package application;


import model.graph.*;
import model.graph.testing.*;
import model.heuristic.Heuristic;
import model.heuristic.SimpleTestHeuristic;
import model.heuristic.SimpleUndirectedHeuristic;

public class Main {

  public static void main(String[] args)  {
/*      TPool<TSimpleGraphNamed,TSimpleEdge,TSimpleHeuristic> tpool = new TPool<>();
      THeuristic<?,?> heuristicBase = new TSimpleHeuristic();
      TSimpleHeuristic th = (TSimpleHeuristic)heuristicBase;

      TSimpleGraphNamed tgNamed = null;
      tpool.add(th);
      tpool.add(tgNamed);*/

     //TestBase base = new TestImpl();
     //OtherImpl other = new OtherImpl();
     //base.test(other);




      //-----------------------------
      //generate heuristics
      //-----------------------------
      Heuristic h = new SimpleUndirectedHeuristic();
      Heuristic testH = new SimpleTestHeuristic();

      //-----------------------------
      //generate graph
      //-----------------------------
      GraphProperties properties = new GraphProperties();
      properties.setMaxDegree(300);
      properties.setNumOfVertices(100);
      properties.setGraphType(GraphType.SIMPLE_UNDIRECTED_GRAPH);
      GraphBuilder builder = GraphBuilder.getGraphBuilder(properties);
      Graph graph = builder.generateGraph(properties);

      properties.setMaxDegree(300);
      properties.setNumOfVertices(100);
      properties.setGraphType(GraphType.TEST_GRAPH);
      builder = GraphBuilder.getGraphBuilder(properties);
      Graph testGraph = builder.generateGraph(properties);

      //DataPool<SimpleUndirectedGraph> pool = DataPool.create();
      //DataPool<SimpleUndirectedGraph> pool = new DataPool<SimpleUndirectedGraph>() {};
      DataPool<SimpleUndirectedGraph> pool = DataPool.createSimpleUndirectedDataPool();
      DataPool<SimpleUndirectedTestGraph> poolTest = DataPool.createTestDataPool();
      boolean ret;
      System.out.println("**************");
      System.out.println("running pool 1 (SimpleUndirectedGraph)");
      System.out.println("**************");
      pool.addGraph((SimpleUndirectedGraph) graph);
      ret = pool.addHeuristic(testH);
      System.out.println("adding Simple Test Heuristic:"+ret);
      ret = pool.addHeuristic(h);
      System.out.println("adding Simple Undirected Heuristic:"+ret);
      System.out.println("running heuristics:");
      pool.runHeuristics();

      System.out.println("**************");
      System.out.println("running pool 2(SimpleUndirectedTestGraph extends SimpleUndirectedGraph)");
      System.out.println("**************");

        poolTest.addGraph((SimpleUndirectedTestGraph) testGraph);
      ret = poolTest.addHeuristic(testH);
      System.out.println("adding Simple Test Heuristic:"+ret);
      ret = poolTest.addHeuristic(h);
      System.out.println("adding Simple Undirected Heuristic:"+ret);
      System.out.println("running heuristics:");
      poolTest.runHeuristics();




   /*   Class listClass = ArrayList.class;

      try {

          ArrayList list = (ArrayList) listClass.newInstance();

      } catch (InstantiationException e) {
          e.printStackTrace();
      } catch (IllegalAccessException e) {
          e.printStackTrace();
      }

      // DataPool<SimpleUndirectedGraph,SimpleUndirectedEdge,Heuristic<SimpleUndirectedGraph>> pool = new DataPool<>();
      // DataPool<TGraph<Edge>,Edge,Heuristic<TGraph<Edge>>> pool2 =
        //      new DataPool<>();
     // TCGreedy<SimpleUndirectedGraph<SimpleUndirectedEdge>,SimpleUndirectedEdge> greedy= new
       //       TCGreedy<>();
      TCGreedy<SimpleUndirectedGraph<SimpleUndirectedEdgeNamed>,SimpleUndirectedEdgeNamed> greedy = null;
      //greedy.testToke(null);
      //Class clazz = greedy.getClass();
      Class clazz = TCGreedy.class;
      TestH hyperHeuristic = new TestH();
      try {
          greedy = (TCGreedy<SimpleUndirectedGraph<SimpleUndirectedEdgeNamed>,SimpleUndirectedEdgeNamed>) clazz.newInstance();
          greedy.applyTo(null);
      } catch (InstantiationException e) {
          e.printStackTrace();
      } catch (IllegalAccessException e) {
          e.printStackTrace();
      }

      System.out.println("-----------");
      HeuristicContainer container =HeuristicContainer.getInstance();
      container.registerByClass2(clazz);
      container.registerByClass2(hyperHeuristic.getClass());
      container.listHeuristicsForGraphType(null);
      SimpleUndirectedGraph<SimpleUndirectedEdge> gtest = null;//class;

      //Integer.class;
      //G
      //((SimpleUndirectedGraph.class <SimpleUndirectedEdge>.class;
      System.out.println("-----------");
      //Class<? extends TestH> cl = hyperHeuristic.getClsass();
      //Class<? extensds TCGreedy> grcl = greedy.getClass();
      Heuristic<? extends TGraph, ? extends Edge> heu = container.getHeuristicByClass(greedy.getClass(),
              SimpleUndirectedGraph.class,
              SimpleUndirectedEdge.class);

      greedy = (TCGreedy<SimpleUndirectedGraph<SimpleUndirectedEdgeNamed>, SimpleUndirectedEdgeNamed>) heu;

      greedy.testToke(null);

      SimpleUndirectedGraphBuilder<SimpleUndirectedGraph<SimpleUndirectedEdgeNamed>,SimpleUndirectedEdgeNamed>
              myBuilder = new SimpleUndirectedGraphBuilder<>();
      GraphProperties properties = new GraphProperties();
      properties.setMaxDegree(20);
      properties.setNumOfVertices(10);
      properties.setGraphType(GraphType.SIMPLE_UNDIRECTED_GRAPH);
      SimpleUndirectedGraph<SimpleUndirectedEdgeNamed> genGraph = myBuilder.generateGraph(properties);
      greedy.applyTo(genGraph);


      System.out.println("-----------");
      //SimpleUndirectedGraph<SimpleUndirectedEdge> simpleGraph = new SimpleUndirectedGraph<SimpleUndirectedEdge>();
        //greedy.applyTo(simpleGraph);
      //Heuristic<? extends TGraph<? extends Edge>> he = new TCGreedy(){};
      //pool.poolTest((Heuristic<SimpleUndirectedGraph>) he);
      //SimpleUndirectedHeuristic<SimpleUndirectedGraph> hg;
      //pool2.poolTest(hg);
     // he.applyTo(null);
      //pool.poolTest(greedy);
     // Heuristic<SimpleUndirectedGraph> h = new Heuristic<SimpleUndirectedGraph>(){};

      RageGraphLibrary.getInstance().init();
      //GraphBuilderReflect graphBuilder = RageGraphLibrary.getInstance().getGraphBuilder();
      //GraphBuilderReflect<SimpleUndirectedGraph,SimpleUndirectedEdge> b =
        //      new GraphBuilderReflect<SimpleUndirectedGraph,SimpleUndirectedEdge>() {};
      //TGraph<SimpleUndirectedEdge> g2 =b.generateGraph((GraphProperties) null);
     // SimpleUndirectedGraph g = (SimpleUndirectedGraph) b.generateGraph((GraphProperties) null);
      //SimpleUndirectedGraph g3 = (SimpleUndirectedGraph) g2;
      //b.generateGraph(null);
      //Example of the Heuristic Container
      SimpleUndirectedGraph g = null;//graphBuilder.generateSimpleUndirectedGraph(100,900,0);

      //GraphProperties properties = new GraphProperties();
      //properties.setMaxDegree(20);
      //properties.setNumOfVertices(10);
      //properties.setGraphType(GraphType.SIMPLE_UNDIRECTED_GRAPH);

      //TGraph generic.model.graph = RageGraphLibrary.getInstance().getGraphBuilder().generateGraph(properties);


      //SimpleUndirectedGraph uGraph = (SimpleUndirectedGraph) generic.model.graph;
      //greedy.applyTo(uGraph);
     // h.applyTo(uGraph);

      //GraphBuilder graphBuilder = GraphBuilder.simpleUndirectedGraphBuilder();

*/
      //SimpleUndirectedGraph undirectedGraph = (SimpleUndirectedGraph) graphBuilder.generateGraph(properties);
      //System.out.println(properties.getGraphType().toString());
      return;
  /*    System.out.println(g.maxDegree());
      
      Heuristic<UselessGraph> h;
     // h = greedy.create();
      System.out.println("test");
      System.out.println(TCGreedy.class.toString());
      HeuristicContainer c =  HeuristicContainer.getInstance();
      
      URL[] urls = new URL[1];
      Class pluginClass = null;
      try {
          String url = "file:///"+System.getProperty("user.dir")+"\\plugins\\Rage_Plugin.jar";
          urls[0] = new URL(url);
          //urls[0] = new URL("file:///C:/Users/tfi/Documents/PSE/PSE/Implementierung/Rage/plugins/Rage_Plugin.jar");          
          URLClassLoader ucl = new URLClassLoader(urls);
          pluginClass = ucl.loadClass("plugins.TCPluginHeuristic"); 
      } catch (MalformedURLException | ClassNotFoundException ex) {
          Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
      //} catch (ClassNotFoundException ex) {
     //     Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
      }


      try {          
          if (pluginClass != null)
              c.registerByClass(pluginClass);
          c.registerByName("generic.heuristic.totalColoring.greedy.TCGreedy");
          c.registerByClass(TestH.class);
          c.registerByClass(NotWorkingHeuristic.class);
          // TODO Auto-generated method stub
      } catch (InstantiationException ex) {
          Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
      } catch (IllegalAccessException ex) {
          Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
      } catch (ClassNotFoundException ex) {
          Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
      }
      
      System.out.println("--------------------");
      try {
          TCGreedy greedy = (TCGreedy) c.createSimpleUndirectedHeuristicByName("generic.heuristic.totalColoring.greedy.TCGreedy");
          Heuristic generic.heuristic = c.createSimpleUndirectedHeuristicByClass(pluginClass);
          if (generic.heuristic != null) {
              System.out.print("Running plugin generic.heuristic. Output:");
              generic.heuristic.applyTo(null);
          }
          //TCGreedy greedy = new TCGreedy();
          if (greedy != null) {
              System.out.print("Running greedy generic.heuristic. Output:");
            
            HeuristicResult result = greedy.applyTo(g);
            System.out.println("-");
          }
      } catch (InstantiationException | IllegalAccessException ex) {
          Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
      }
      */

  }

}
