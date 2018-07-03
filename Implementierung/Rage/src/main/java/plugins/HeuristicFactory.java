/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package plugins;

import graph.Graph;
import heuristic.Heuristic;

/**
 *
 * @author tfi
 * @param <G>
 */
public interface HeuristicFactory<G extends Graph> {
    public abstract Heuristic<G> getHeuristicInstance();
}
