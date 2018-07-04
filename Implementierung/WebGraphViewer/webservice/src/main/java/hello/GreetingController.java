package hello;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLClassLoader;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import graph.Graph;
import graph.GraphBuilder;
import java.util.List;
import static java.lang.Math.cos;
import static java.lang.Math.sin;
import heuristic.HeuristicContainer;
import heuristic.HeuristicResult;
import heuristic.totalColoring.greedy.TCGreedy;
import heuristic.Heuristic;


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
    @GetMapping("/runHeuristic")
    public GraphData runHeuristic(@RequestParam(value="name", defaultValue="World") String name) {
        logger.info("Request runHeuristic received");
        if (g == null) return null;

         HeuristicContainer c =  HeuristicContainer.getInstance();
         HeuristicResult result = null;
         try {
          Heuristic greedy =  c.createSimpleUndirectedHeuristicByClass(TCGreedy.class);          
         
          //TCGreedy greedy = new TCGreedy();
          if (greedy != null) {
              System.out.print("Running greedy heuristic. Output:");            
              result = greedy.applyTo(g);            
          }
      } catch (InstantiationException | IllegalAccessException ex) {
        logger.info("SEVERE ERROR");          

      }
        if (result == null) return null;
        List<graph.Edge> edges = result.getGraph().getEdges();
        List<Integer> vertices = result.getGraph().getVertices();
        Integer n= 0;
        GraphData gd = new GraphData();
        for (graph.Edge e : edges) {
            List<Integer> l = e.getVertices();
            Integer i1 = l.get(0);
            Integer i2 = l.get(1);
            //for (Integer i : e.getVertices()) {
              //  System.out.print(i+" ");              
            //}Intexer      
            Integer color = result.getColor(e);
            Edge edge = new Edge(n.toString(),i1.toString(),i2.toString(),color.toString());
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
            Integer color = result.getColor(i);
            Node node = new Node(i.toString(),sx,sy,i.toString(),color.toString());            
            gd.addNode(node);
            n = n+1;
            phi+=deltaPhi;
        }
        
        
        
        logger.info("Servlet thread released");
        return gd;
    }
	
	@CrossOrigin
    @GetMapping("/graph")
    public GraphData graph(@RequestParam(value="name", defaultValue="World") String name) {
		//return genGraph(3,6);
		return null;
	}

    @CrossOrigin
    @GetMapping("/genGraph")
    public GraphData genGraph(
		@RequestParam(value="maxDegree", defaultValue="3") int maxDegree,
		@RequestParam(value="nOfVertices", defaultValue="6") int nOfVertices
		//@RequestParam("nOfVertices") int nOfVertices,
		//@RequestParam("nOfVertices") int nOfVertices
		) {
    	logger.info("Request Graph received");
	
		g = GraphBuilder.generateSimpleUndirectedGraph(nOfVertices,maxDegree,0);
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
			
			Edge edge = new Edge(n.toString(),i1.toString(),i2.toString(),"");
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
			Node node = new Node(i.toString(),sx,sy,i.toString(),"");            
			gd.addNode(node);
			n = n+1;
			phi+=deltaPhi;
        }
		
    	
		logger.info(nOfVertices+" "+maxDegree);
    	logger.info("Servlet thread released");
        return gd;
    }
}
