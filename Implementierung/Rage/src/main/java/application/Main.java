package application;


import model.graph.*;
import model.graph.testing.*;
import model.heuristic.Heuristic;
import model.heuristic.HeuristicContainer;
import model.heuristic.SimpleTestHeuristic;
import model.heuristic.SimpleUndirectedHeuristic;

import java.util.List;

public class Main {

  public static void main(String[] args){
      /*Class<? extends Graph> asd;
      TPool<? extends TGraph,? extends TSimpleEdge> pool_3 = new TPool<>();
      TPool<TGraph<TSimpleEdge>,TSimpleEdge> pool_ = new TPool<>();
      TPool<TSimpleGraph,TSimpleEdge> pool_2 = new TPool<>();
      TSimpleGraph g1= new TSimpleGraph();
      TSimpleGraph2 g2= new TSimpleGraph2();
      TSimpleGraphNamed gn = new TSimpleGraphNamed();
      TSimpleGraph2_<TSimpleEdgeNamed> ggg;
     /* try {
          Class<?> clazz = Class.forName("model.graph.testing.TSimpleGraph2_<TSimpleEdgeNamed>");
          try {
              clazz.newInstance();
          } catch (InstantiationException e) {
              e.printStackTrace();
          } catch (IllegalAccessException e) {
              e.printStackTrace();
          }
      } catch (ClassNotFoundException e) {
          e.printStackTrace();
      }

      TGraph<TSimpleEdge> gg1 = new TGraph<>();
      TGraph<TSimpleEdgeNamed> gg2 = new TGraph<>();
      //pool.add(g2);
      pool_.add(g1);
      pool_.add(gg1);*/
      //pool.add(gg2);
      //pool_2.add(g1);
      //pool_2.add(g2);

      //-----------------------------
      //generate heuristics
      //-----------------------------
      Heuristic h = new SimpleUndirectedHeuristic();
      Heuristic testH = new SimpleTestHeuristic();

      RageGraph.getInstance().init();

      System.out.println("--------------------");
      Class graphClazz = SimpleUndirectedGraph.class;
      graphClazz = SimpleUndirectedTestGraph.class;;
      System.out.println("Heuristics usable for graphtype "+graphClazz.getTypeName()+":");

      List<Class<? extends Heuristic>> list = HeuristicContainer.getInstance().getHeuristicClassesForGraph(graphClazz);
      //List<Class<? extends Heuristic>> list = HeuristicContainer.getInstance().getHeuristicClassesForGraph(SimpleUndirectedGraph.class);
      for (Class<? extends Heuristic> l:list) {
          Heuristic heur = null;
          try {
              heur = HeuristicContainer.getInstance().getHeuristicForGraphByClass(graphClazz, l);
          } catch (IllegalAccessException e) {
              e.printStackTrace();
          } catch (InstantiationException e) {
              e.printStackTrace();
          }
        System.out.println("->"+l.getTypeName());
      }

      graphClazz = SimpleUndirectedGraph.class;
      System.out.println("Heuristics usable for graphtype "+graphClazz.getTypeName()+":");

      list = HeuristicContainer.getInstance().getHeuristicClassesForGraph(graphClazz);
      //List<Class<? extends Heuristic>> list = HeuristicContainer.getInstance().getHeuristicClassesForGraph(SimpleUndirectedGraph.class);
      for (Class<? extends Heuristic> l:list) {
          Heuristic heur = null;
          try {
              heur = HeuristicContainer.getInstance().getHeuristicForGraphByClass(graphClazz, l);
          } catch (IllegalAccessException e) {
              e.printStackTrace();
          } catch (InstantiationException e) {
              e.printStackTrace();
          }
          System.out.println("->"+l.getTypeName());
      }
      System.out.println("--------------------");

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
      DataPool<SimpleUndirectedGraph,SimpleUndirectedHeuristic> pool = DataPool.createSimpleUndirectedDataPool();
      DataPool<SimpleUndirectedTestGraph,SimpleTestHeuristic> poolTest = DataPool.createTestDataPool();
      boolean ret;
      System.out.println("**************");
      System.out.println("running pool 1 (SimpleUndirectedGraph)");
      System.out.println("**************");
      pool.addGraph((SimpleUndirectedGraph) graph);
      ret = pool.addHeuristic(testH);
     // ret = pool.addHeuristic2((SimpleUndirectedHeuristic) testH);
      System.out.println("adding Simple Test Heuristic:"+ret);
      ret = pool.addHeuristic(h);
      ret = pool.addHeuristic2((SimpleUndirectedHeuristic) h);
      System.out.println("adding Simple Undirected Heuristic:"+ret);
      System.out.println("running heuristics:");
      pool.runHeuristics();

      System.out.println("**************");
      System.out.println("running pool 2(SimpleUndirectedTestGraph extends SimpleUndirectedGraph)");
      System.out.println("**************");

        poolTest.addGraph((SimpleUndirectedTestGraph) testGraph);
      ret = poolTest.addHeuristic(testH);
      ret = poolTest.addHeuristic2((SimpleTestHeuristic) testH);
      System.out.println("adding Simple Test Heuristic:"+ret);
      ret = poolTest.addHeuristic(h);
//      ret = poolTest.addHeuristic2((SimpleTestHeuristic) h);
      System.out.println("adding Simple Undirected Heuristic:"+ret);
      System.out.println("running heuristics:");
      poolTest.runHeuristics();

  }

}
