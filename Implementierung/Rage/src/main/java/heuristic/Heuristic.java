/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package heuristic;

import graph.Graph;

/**
 *
 * @author Thomas Fischer
 */
public abstract class Heuristic<G extends Graph>{
    public Heuristic() {
        
    }
    
    public abstract void applyTo(G g);
}