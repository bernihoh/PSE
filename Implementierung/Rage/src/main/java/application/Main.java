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
      TCGreedy greedy = new TCGreedy();
      Heuristic<UselessGraph> h;
     // h = greedy.create();
      System.out.println("test");
      
      HeuristicContainer c = new HeuristicContainer();
      try {
          c.registerByClass(TCGreedy.class);
          c.registerByClass(TestH.class);
          c.registerByClass(NotWorkingHeuristic.class);
          // TODO Auto-generated method stub
      } catch (InstantiationException ex) {
          Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
      } catch (IllegalAccessException ex) {
          Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
      }

  }

}
