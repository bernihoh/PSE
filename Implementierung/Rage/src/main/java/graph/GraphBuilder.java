/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package graph;

/**
 *
 * @author Thomas Fischer
 */
public abstract class GraphBuilder {
    
    
    private static double[] calcProbabilites(int[] degree, boolean[] valid) {
        int nOfValidPicks = 0;
        int currentMaxDegree=0;
        int totalDegree=0;
        for (int j = 0; j < degree.length; j++) {
            if (valid[j]) {
                nOfValidPicks++;
                totalDegree += degree[j];
                if (degree[j] > currentMaxDegree) {
                    currentMaxDegree = degree[j];
                    
                }
            }
        }
        double[] prob = new double[degree.length];
        double normFactor = 1 / (double)(nOfValidPicks * (currentMaxDegree + 1) - totalDegree);
        for (int j = 0; j < degree.length; j++) {
            if (valid[j]) {
                prob[j] = ((double)(currentMaxDegree - degree[j] + 1)) * normFactor;
            } else {
                prob[j] = 0;
            }
        }

        return prob;
    }
    
    private static int pickRandomVertex(boolean[] validPick,double[] probabilites) {
        double r = Math.random();            
        double bound = 0;
        int vertex = -1;
        for (int i=0;i<probabilites.length;i++) {
            if (r < probabilites[i]+bound )  {
                vertex = i;
                break;
            }
            bound+=probabilites[i];
        }
        return vertex;
    }
    
    public static SimpleUndirectedGraph generateSimpleUndirectedGraph(
            int nOfVertices,int maxDegree, int minDegree)  {
        
        
        
        int[][] adjMatrix = new int[nOfVertices][nOfVertices];
        
        int[] degree = new int[nOfVertices];
        boolean[] validPick = new boolean[nOfVertices];
        double[] probabilites = new double[nOfVertices];
        
        for (int i=0;i<adjMatrix.length;i++) {
            degree[i]=0;
            probabilites[i]=1/nOfVertices;
            validPick[i]=true;
            for (int j=0;j<adjMatrix[i].length;j++) {
                adjMatrix[i][j]=0;
            }
        }
        
        boolean finished = false;
        int nOfValidPicks = nOfVertices;
        int nOfFailures = 0;
        while(nOfValidPicks>1 && nOfFailures <10) {
            System.out.println(nOfValidPicks + " "+nOfFailures);
            //-----
            //calculate probabilites
            //------
            
            //get max and total degree
            int currentMaxDegree=0;
            int totalDegree = 0;
            
            
            probabilites = calcProbabilites(degree,validPick);
            int startVertex = pickRandomVertex(validPick, probabilites);
            if (startVertex < 0) {
                System.out.println("SCHWERWIEGEND: start: -1");
                nOfFailures++;
                continue;               
            }
            
            
            boolean[] validEndPicks = new boolean[nOfVertices];
            boolean oneValidFound = false;
            for (int i = 0;i<nOfVertices;i++) {
                if (adjMatrix[startVertex][i] != 1 &&
                    adjMatrix[i][startVertex]!= 1)
                {
                    if (validPick[i] && probabilites[i]!=0 && i != startVertex) {
                        validEndPicks[i] = true;
                        oneValidFound = true;
                    }else {
                        validEndPicks[i] = false;
                    }
                }
                else{
                    validEndPicks[i]=false;
                }
            }
            
            if (!oneValidFound) {
                nOfFailures++;
                continue;
            }
            
            probabilites = calcProbabilites(degree,validEndPicks);
            int endVertex = pickRandomVertex(validEndPicks, probabilites);
            if (endVertex < 0 || startVertex == endVertex) {
                System.out.println("SCHWERWIEGEND: end: -1");
                nOfFailures++;
                continue;
                
            }
            
            degree[startVertex]++;
            degree[endVertex]++;
                                                
            if (degree[startVertex]>=maxDegree) {
                validPick[startVertex]=false;                
            }
            
            if (degree[endVertex]>=maxDegree) {
                validPick[endVertex]=false;                
            }           
            
            
            
            adjMatrix[startVertex][endVertex] = 1;   
            nOfFailures=0;
            nOfValidPicks=0;
            for (int i=0;i<nOfVertices;i++) {
               if (validPick[i]) {
                   nOfValidPicks++;
               }
            }
        }
        SimpleUndirectedGraph g = new SimpleUndirectedGraph();
        
        for (int i=0;i<nOfVertices;i++) {
            for (int j=0;j<nOfVertices;j++) {
                if (adjMatrix[i][j]==1) {
                    g.createEdge(i, j);
                    adjMatrix[j][i]=0;
                }
            }
        }        
        
        
/*        g.createEdge(0, 1);
        g.createEdge(1, 2);
        g.createEdge(2, 3);
        g.createEdge(3, 4);
        //g.createEdge(4, 0);
        //g.createEdge(0, 3);        
        //g.createEdge(4, 2);        
        g.createEdge(0, 4);        */
        return g;   
    }
}
