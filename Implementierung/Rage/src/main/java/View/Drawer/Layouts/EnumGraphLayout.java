/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Source.View.Drawer.Layouts;

/**
 * This Enum Contains all implemented GraphLayout's that can be used by the
 * graphDrawer to position the VisualVertices.
 *
 * This Enum is needed because the Drawer needs to know whitch Layout to use for
 * the drawing of the Graph and this is done via this Enumeration.
 *
 * In our case there is only one Layout, because we well always draw the Graphs
 * in a Circle.
 *
 * If someone wants to Expand this Drawer by adding a new Layout he/she/it has
 * to update this Enum as well. This is not against ObjectOrienting Programming
 * because the Programmer that would add this new Layout already needs to
 * recompile the Pogram and therefore can expand the Enum as well.
 *
 */
public enum EnumGraphLayout {

}
