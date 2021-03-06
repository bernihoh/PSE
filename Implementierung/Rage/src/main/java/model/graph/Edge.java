/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.graph;

import java.util.List;

/**
 *
 * @author Thomas Fischer
 */
public abstract class Edge {
    abstract public List<Integer> getVertices();

    public Edge() {

    }

    @Override
    public int hashCode() {
      return getVertices().hashCode();  
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Edge other = (Edge) obj;
        return other.getVertices().equals(this.getVertices());
    }
}
