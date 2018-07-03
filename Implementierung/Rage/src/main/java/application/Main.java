package application;

import graph.UselessGraph;
import heuristic.Heuristic;
import heuristic.HeuristicContainer;
import heuristic.SimpleHyperHeuristic;
import heuristic.totalColoring.greedy.TCGreedy;
import heuristic.totalColoring.greedy.TestH;
import heuristic.totalColoring.greedy.NotWorkingHeuristic;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Main {

  public static void main(String[] args)  {
      //Example of the Heuristic Container
      
      Heuristic<UselessGraph> h;
     // h = greedy.create();
      System.out.println("test");
      System.out.println(TCGreedy.class.toString());
      HeuristicContainer c = new HeuristicContainer();
      
      URL[] urls = new URL[1];
      Class pluginClass = null;
      try {
          String url = "file:///"+System.getProperty("user.dir")+"\\plugins\\Rage_Plugin.jar";
          urls[0] = new URL(url);
          //urls[0] = new URL("file:///C:/Users/tfi/Documents/PSE/PSE/Implementierung/Rage/plugins/Rage_Plugin.jar");          
          URLClassLoader ucl = new URLClassLoader(urls);
          pluginClass = ucl.loadClass("plugins.TCPluginHeuristic"); 
      } catch (MalformedURLException ex) {
          Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
      //} catch (ClassNotFoundException ex) {
     //     Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
      } catch (ClassNotFoundException ex) {
          Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
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
            greedy.applyTo(null);
          }
      } catch (InstantiationException | IllegalAccessException ex) {
          Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
      }
      

  }

}
