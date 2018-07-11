package hello;

import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicLong;

import model.graph.*;
import model.heuristic.Heuristic;
import model.heuristic.HeuristicContainer;
import model.heuristic.HeuristicResult;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import java.util.List;
import static java.lang.Math.cos;
import static java.lang.Math.sin;


@RestController
public class GreetingController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    private Graph g;
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
    public GraphData runHeuristic(@RequestParam(value="name", defaultValue="model.heuristic.TCGreedy") String name) {
        logger.info("Request runHeuristic "+name+" received");

        if (g == null) return null;

        Heuristic heuristic = null;
        try {
            Class clazz = Class.forName(name);
            heuristic = HeuristicContainer.getInstance().getHeuristicForGraphByClass(g.getClass(), clazz);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        }
        if (heuristic == null) return  null;
        HeuristicResult result = g.applyHeuristic(heuristic);
         



        if (result == null) return null;

        List<model.graph.Edge> edges = result.getGraph().getEdges();
        List<Integer> vertices = result.getGraph().getVertices();
        Integer n= 0;
        GraphData gd = new GraphData();
        for (model.graph.Edge e : edges) {
            List<Integer> l = e.getVertices();
            Integer i1 = l.get(0);
            Integer i2 = l.get(1);
            //for (Integer i : e.getVertices()) {
              //  System.out.print(i+" ");              
            //}Intexer      
            Integer color = result.getColor(e);

            Edge edge;

            if (g instanceof SimpleUndirectedTestGraph) {
                SimpleUndirectedLabeledEdge labeledEdge = (SimpleUndirectedLabeledEdge) e;
                edge = new Edge("e"+n.toString(), i1.toString(), i2.toString(), "1",labeledEdge.getLabel());
            } else {
                edge = new Edge("e"+n.toString(), i1.toString(), i2.toString(), "1","");
            }

            gd.addEdge(edge);
            n = n+1;
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
    @GetMapping("/getGraphTypeList")
    public List<String> getGraphTypeList() {
        List<String> list = new ArrayList<>();
        list.add("SimpleUndirectedGraph");
        list.add("SimpleUndirectedLabeledGraph");
        return list;
    }

    @CrossOrigin
    @GetMapping("/getHeuristicList")
    public List<String> getHeuristicList(){
        logger.info("Request Heuristic List received");
        List<String> list = new ArrayList<>();
        if (g == null) return  list;

        List<Class<? extends Heuristic>> hc = HeuristicContainer.getInstance().getHeuristicClassesForGraph(g.getClass());
        for (Class<? extends Heuristic> h : hc) {
            list.add(h.getTypeName());
            System.out.println(h.getTypeName());
        }
        System.out.println("size:"+list.size());
        return list;

    }

    @CrossOrigin
    @GetMapping("/genGraph")
    public GraphData genGraph(
		@RequestParam(value="maxDegree", defaultValue="3") int maxDegree,
		@RequestParam(value="nOfVertices", defaultValue="6") int nOfVertices,
        @RequestParam(value="graphType") String type
		//@RequestParam("nOfVertices") int nOfVertices,
		//@RequestParam("nOfVertices") int nOfVertices
		) {

    	logger.info("Request Graph received");
    	GraphProperties prop = new GraphProperties();
    	prop.setMaxDegree(maxDegree);
    	prop.setNumOfVertices(nOfVertices);
    	switch(type) {
            case "SimpleUndirectedGraph":
                prop.setGraphType(GraphType.SIMPLE_UNDIRECTED_GRAPH);
                logger.info("simple undirected");
                break;
            case "SimpleUndirectedLabeledGraph":
                prop.setGraphType(GraphType.TEST_GRAPH);
                logger.info("labeled graph type");
                break;
            default:
                logger.info("default graph type");
                prop.setGraphType(GraphType.SIMPLE_UNDIRECTED_GRAPH);
        }
        g = GraphBuilder.getGraphBuilder(prop).generateGraph(prop);



		//g = GraphBuilder.generateSimpleUndirectedGraph(nOfVertices,maxDegree,0);
        List<model.graph.Edge> edges = g.getEdges();
        List<Integer> vertices = g.getVertices();
		Integer n= 0;
		GraphData gd = new GraphData();



        for (model.graph.Edge e : edges) {

			List<Integer> l = e.getVertices();
			Integer i1 = l.get(0);
			Integer i2 = l.get(1);
            //for (Integer i : e.getVertices()) {
              //  System.out.print(i+" ");				
            //}Intexer		
			
			Edge edge;
			if (g instanceof SimpleUndirectedTestGraph) {
			    SimpleUndirectedLabeledEdge labeledEdge = (SimpleUndirectedLabeledEdge) e;

                edge = new Edge("n"+n.toString(), i1.toString(), i2.toString(), "1",labeledEdge.getLabel());
            } else {
                edge = new Edge("n"+n.toString(), i1.toString(), i2.toString(), "1","");
            }
			gd.addEdge(edge);
			n = n+1;
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
			Node node = new Node(i.toString(),sx,sy,i.toString(),"1");
			gd.addNode(node);
			n = n+1;
			phi+=deltaPhi;
        }

        List<Class<? extends Heuristic>> hc = HeuristicContainer.getInstance().getHeuristicClassesForGraph(g.getClass());
        for (Class<? extends Heuristic> h : hc) {
            System.out.println(h.getTypeName());
        }
    	
		logger.info(nOfVertices+" "+maxDegree);
    	logger.info("Servlet thread released");
        return gd;
    }
}
