package application;

import graph.UselessGraph;
import heuristic.Heuristic;
import heuristic.HeuristicContainer;
import heuristic.SimpleHyperHeuristic;
import heuristic.totalColoring.greedy.TCGreedy;
import heuristic.totalColoring.greedy.TestH;
import heuristic.totalColoring.greedy.NotWorkingHeuristic;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Main {

  public static void main(String[] args) {
      //Example of the Heuristic Container
      
      Heuristic<UselessGraph> h;
     // h = greedy.create();
      System.out.println("test");
      System.out.println(TCGreedy.class.toString());
      HeuristicContainer c = new HeuristicContainer();
      try {          
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
      
      try {
          TCGreedy greedy = (TCGreedy) c.createSimpleUndirectedHeuristicByName("heuristic.totalColoring.greedy.TCGreedy");
          //TCGreedy greedy = new TCGreedy();
          if (greedy != null)
            greedy.applyTo(null);
      } catch (InstantiationException | IllegalAccessException ex) {
          Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
      }
      

  }

}
