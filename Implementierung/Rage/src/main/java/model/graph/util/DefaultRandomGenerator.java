package model.graph.util;

public class DefaultRandomGenerator implements RandomNumberGenerator {
    @Override
    public double getNextDouble() {
        return  Math.random();
    }
}
