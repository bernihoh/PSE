package model.graph.testing;

import model.graph.Graph;

public abstract class THeuristic<G extends TGraph<E>, E extends TEdge> {
    abstract void appply(G g);
}
