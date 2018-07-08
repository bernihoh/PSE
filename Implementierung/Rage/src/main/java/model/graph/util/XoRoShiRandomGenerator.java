package model.graph.util;

import it.unimi.dsi.util.XoRoShiRo128PlusRandom;
import model.graph.util.RandomNumberGenerator;

public class XoRoShiRandomGenerator implements RandomNumberGenerator {
    private XoRoShiRo128PlusRandom randomGen = new XoRoShiRo128PlusRandom();
    @Override
    public double getNextDouble() {
        return randomGen.nextDouble();
    }
}
