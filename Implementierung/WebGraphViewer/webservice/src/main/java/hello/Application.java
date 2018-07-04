package hello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import heuristic.HeuristicContainer;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.logging.Level;
import java.util.logging.Logger;
import heuristic.totalColoring.greedy.TCGreedy;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
    	HeuristicContainer c =  HeuristicContainer.getInstance();

    	try {                    
          c.registerByClass(TCGreedy.class);                              
      } catch (InstantiationException ex) {
          Logger.getLogger(Application.class.getName()).log(Level.SEVERE, null, ex);
      } catch (IllegalAccessException ex) {
          Logger.getLogger(Application.class.getName()).log(Level.SEVERE, null, ex);
      }

        SpringApplication.run(Application.class, args);
    }
}
