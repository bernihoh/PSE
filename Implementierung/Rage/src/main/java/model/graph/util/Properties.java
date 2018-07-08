/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.graph.util;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author Thomas Fischer
 */
public class Properties {
    protected Map<String,String> properties = new HashMap();

    public void setProperty(String id,String value) {
        properties.put(id,value);
    }

    public String getProperty(String id) {
        return properties.get(id);
    }
}
