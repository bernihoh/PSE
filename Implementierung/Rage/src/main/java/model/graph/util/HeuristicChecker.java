package model.graph.util;

import model.graph.Graph;
import model.heuristic.Heuristic;

import java.lang.reflect.Method;
import java.lang.reflect.Type;

public class HeuristicChecker {
    private static String APPLY_METHOD_NAME = "applyTo";
    public static boolean isApplicable(Heuristic h, String graphClazzName) {
        try {
            Class graphClass = Class.forName(graphClazzName);
            return isApplicable(h,graphClass);
        } catch (ClassNotFoundException e) {
            //TODO:
            e.printStackTrace();
            return false;
        }
    }
    public static boolean isApplicable(Heuristic h, Class<?> graphClazz) {
        Class clazz = h.getClass();
        return isApplicable(clazz,graphClazz);
    }

    public static boolean isApplicable(Class<? extends Heuristic> heuristicClazz, Class<?> graphClazz) {
        Class clazz = heuristicClazz;
        Method[] allMethods = clazz.getDeclaredMethods();
        for (Method m:allMethods) {
            if (m.getName().equals(APPLY_METHOD_NAME)) {
                //method name is ok
                //check parameters
                Type[] pType = m.getGenericParameterTypes();

                //need exactly one parameter
                if (pType.length != 1) {
                    return false;
                }
                //graph type must be instanceof parameter type.
                Type t = pType[0];


                Class parameterClazz = null;
                try {
                    parameterClazz = Class.forName(t.getTypeName());

                    if (parameterClazz.isAssignableFrom(graphClazz)) {
                        return true;
                    }
                } catch (ClassNotFoundException e) {
                    e.printStackTrace();
                }

            }
        }
        return false;
    }
}
