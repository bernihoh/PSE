package hello;

import model.graph.RageGraph;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import java.util.logging.Level;
import java.util.logging.Logger;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        RageGraph.getInstance().init();

        SpringApplication.run(Application.class, args);
    }
}
