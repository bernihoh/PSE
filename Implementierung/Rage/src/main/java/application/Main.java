package application;

import graph.*;
import heuristic.Heuristic;
import heuristic.HeuristicContainer;
import heuristic.SimpleUndirectedHeuristic;
import heuristic.totalColoring.greedy.TCGreedy;
import heuristic.totalColoring.greedy.TestH;

import java.util.List;

public class Main {

  public static void main(String[] args)  {
     // DataPool<SimpleUndirectedGraph,SimpleUndirectedEdge,Heuristic<SimpleUndirectedGraph>> pool = new DataPool<>();
      // DataPool<Graph<Edge>,Edge,Heuristic<Graph<Edge>>> pool2 =
        //      new DataPool<>();
      TCGreedy<SimpleUndirectedGraph<SimpleUndirectedEdge>,SimpleUndirectedEdge> greedy= new
              TCGreedy<>();
      greedy.testToke(null);
      Class clazz = greedy.getClass();
      TestH hyperHeuristic = new TestH();
      try {
          greedy = (TCGreedy<SimpleUndirectedGraph<SimpleUndirectedEdge>,SimpleUndirectedEdge>) clazz.newInstance();
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
      System.out.println("-----------");
      //Class<? extends TestH> cl = hyperHeuristic.getClsass();
      //Class<? extends TCGreedy> grcl = greedy.getClass();
      //container.getHeuristicByClass(greedy.getClass());
      System.out.println("-----------");
      SimpleUndirectedGraph<SimpleUndirectedEdge> simpleGraph = new SimpleUndirectedGraph<SimpleUndirectedEdge>();
        greedy.applyTo(simpleGraph);
      //Heuristic<? extends Graph<? extends Edge>> he = new TCGreedy(){};
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
      //Graph<SimpleUndirectedEdge> g2 =b.generateGraph((GraphProperties) null);
     // SimpleUndirectedGraph g = (SimpleUndirectedGraph) b.generateGraph((GraphProperties) null);
      //SimpleUndirectedGraph g3 = (SimpleUndirectedGraph) g2;
      //b.generateGraph(null);
      //Example of the Heuristic Container
      SimpleUndirectedGraph g = null;//graphBuilder.generateSimpleUndirectedGraph(100,900,0);

      GraphProperties properties = new GraphProperties();
      properties.setMaxDegree(20);
      properties.setNumOfVertices(10);
      properties.setGraphType(GraphType.SIMPLE_UNDIRECTED_GRAPH);

      Graph graph = RageGraphLibrary.getInstance().getGraphBuilder().generateGraph(properties);


      SimpleUndirectedGraph uGraph = (SimpleUndirectedGraph) graph;
      greedy.applyTo(uGraph);
     // h.applyTo(uGraph);

      //GraphBuilder graphBuilder = GraphBuilder.simpleUndirectedGraphBuilder();


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
          c.registerByName("heuristic.totalColoring.greedy.TCGreedy");
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
          TCGreedy greedy = (TCGreedy) c.createSimpleUndirectedHeuristicByName("heuristic.totalColoring.greedy.TCGreedy");
          Heuristic heuristic = c.createSimpleUndirectedHeuristicByClass(pluginClass);
          if (heuristic != null) {
              System.out.print("Running plugin heuristic. Output:");
              heuristic.applyTo(null);
          }
          //TCGreedy greedy = new TCGreedy();
          if (greedy != null) {
              System.out.print("Running greedy heuristic. Output:");
            
            HeuristicResult result = greedy.applyTo(g);
            System.out.println("-");
          }
      } catch (InstantiationException | IllegalAccessException ex) {
          Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
      }
      */

  }

}
