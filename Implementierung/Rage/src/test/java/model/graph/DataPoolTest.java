package model.graph;

import model.graph.util.SimpleUndirectedBFSImpl;
import model.heuristic.SimpleHyperHeuristic;
import model.heuristic.SimpleTestHeuristic;
import model.heuristic.SimpleUndirectedHeuristic;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.mockito.Mock;

import java.util.Arrays;
import java.util.Collection;

import static org.junit.Assert.*;
@RunWith(Parameterized.class)
public class DataPoolTest {
    DataPool dataPool;

    public DataPoolTest(DataPool pool) {
        dataPool = pool;
    }

    @Parameterized.Parameters
    public static Collection<Object[]> getParameters() {
        return Arrays.asList(new Object[][] {
            {DataPool.createSimpleHyperDataPool()},
            {DataPool.createSimpleUndirectedDataPool()}
        });
    }

    @Test
    public void addGraph() {
        DataPool<SimpleUndirectedGraph> dataPool = new DataPool<SimpleUndirectedGraph>(){};

        boolean ret = dataPool.addGraph(new SimpleUndirectedGraph(new SimpleUndirectedBFSImpl()));
        assertEquals(ret,true);
        ret = dataPool.addGraph(null);
        assertEquals(ret,false);


    }

    @Test
    public void addHeuristic() {
        DataPool<SimpleUndirectedGraph> dataPool = new DataPool<SimpleUndirectedGraph>(){};
        boolean ret = dataPool.addHeuristic(new SimpleUndirectedHeuristic());
        assertEquals(ret,true);
        ret = dataPool.addHeuristic(new SimpleHyperHeuristic());
        assertEquals(ret,false);
        //TODO: mock it
        ret = dataPool.addHeuristic(new SimpleTestHeuristic());
        assertEquals(ret,false);
        ret = dataPool.addHeuristic(null);
        assertEquals(ret,false);


        DataPool<SimpleUndirectedTestGraph> dataPool2 = new DataPool<SimpleUndirectedTestGraph>(){};
        ret = dataPool2.addHeuristic(new SimpleUndirectedHeuristic());
        assertEquals(ret,true);
        ret = dataPool2.addHeuristic(new SimpleHyperHeuristic());
        assertEquals(ret,false);
        //TODO: mock it
        ret = dataPool2.addHeuristic(new SimpleTestHeuristic());
        assertEquals(ret,true);
        ret = dataPool2.addHeuristic(null);
        assertEquals(ret,false);
    }

    @Test
    public void runHeuristics() {
    }

    @Test
    public void createSimpleUndirectedDataPool() {
        DataPool<SimpleUndirectedGraph> pool = DataPool.createSimpleUndirectedDataPool();
        assertNotEquals(pool,null);
    }

    @Test
    public void createSimpleHyperDataPool() {
        DataPool<SimpleHyperGraph> pool = DataPool.createSimpleHyperDataPool();
        assertNotEquals(pool,null);
    }

    @Test
    public void createTestDataPool() {
    }
}