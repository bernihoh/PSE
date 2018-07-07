/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package generic.heuristic;

import generic.graph.Graph;

/**
 * A stepwise executed applyTo. Can be used for better visual debugging.
 * @author Thomas Fischer
 */
public interface HeuristicSingleStep<G extends Graph> {
    /**
     * 
     * @param g Graph.
     * @return true if finished, false otherwise.
     */
    public abstract boolean applyToSingleStep(G g);
    /**
     * Restart generic.heuristic.
     */
    public abstract void restart();
    /**
     * Is the generic.heuristic finished?
     * @return true if finished or not started, false otherwise.
     */
    public abstract boolean finished();    
}