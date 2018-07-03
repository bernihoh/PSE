package hello;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import graph.Graph;
import graph.GraphBuilder;
import java.util.List;
import static java.lang.Math.cos;
import static java.lang.Math.sin;


@RestController
public class GreetingController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    private  Graph g;
    @CrossOrigin
    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
    	logger.info("Request received");
    	Greeting g = new Greeting(counter.incrementAndGet(),
                            String.format(template, name));
    	logger.info("Servlet thread released");
        return g;
    }

     @CrossOrigin
    @GetMapping("/bfs")
    public List<Integer> bfs(@RequestParam(value="name", defaultValue="World") String name) {
    	logger.info("Request BFS received");
		if (g==null) return null;
		 
		 List<Integer> bfs = g.getVerticesBFS(0);

    	logger.info("Servlet thread released");
        return bfs;
    }

     @CrossOrigin
    @GetMapping("/graph")
    public GraphData graph(@RequestParam(value="name", defaultValue="World") String name) {
    	logger.info("Request Graph received");
		
		g = GraphBuilder.generateSimpleUndirectedGraph();
        List<graph.Edge> edges = g.getEdges();
        List<Integer> vertices = g.getVertices();
		Integer n= 0;
		GraphData gd = new GraphData();
        for (graph.Edge e : edges) {
			List<Integer> l = e.getVertices();
			Integer i1 = l.get(0);
			Integer i2 = l.get(1);
            //for (Integer i : e.getVertices()) {
              //  System.out.print(i+" ");				
            //}Intexer		
			
			Edge edge = new Edge(n.toString(),i1.toString(),i2.toString());
			gd.addEdge(edge);
			n = n+1;
            System.out.println("");
        }
		n= 0;
		double deltaPhi = 2*Math.PI / vertices.size();
	    double phi = 0;
		double r = 0.4;
        for (Integer i : vertices) {			
			
			double x = r*cos(phi)+0.5;
			double y = r*sin(phi)+0.5;
            String sx = String.valueOf(x);
			String sy = String.valueOf(y);
			System.out.println(x+" "+y);
			Node node = new Node(i.toString(),sx,sy,i.toString());            
			gd.addNode(node);
			n = n+1;
			phi+=deltaPhi;
        }
		
    	
		
    	logger.info("Servlet thread released");
        return gd;
    }
}
