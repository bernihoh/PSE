package src.main.java.Controller.ViewController.UIController.KeyController;

import java.util.List;
import javafx.scene.input.KeyEvent;

/**
 * Class KeyController The Abstract KeyController that should be implemented at
 * it's childs.
 *
 * Because for our purpose it is not important if the KeyEvent was a KeyPress or
 * a KeyRelease this Class does not contain other Handler that Handle these
 * different Events. (unlike at the MouseController) Instead this Class is the
 * only KeyEventHandler.
 */
abstract public class KeyController {

    //
    // Fields
    //
    /**
     *
     * The List of pressed Keys. This is used if multiple Keys are pressed. Then
     * the Program puffers them in here.
     *
     * This List will be managed by this Class completely and does not need to
     * be seen by outer Classes. Therefore there is not getter/setter-Method.
     */
    private List<String> pressed;

    //
    // Constructors
    //
    public KeyController() {
    }

    ;

  //
  // Methods
  //


  //
  // Accessor methods
  //

    /**
   * Set the value of pressed
   * The List of pressed Keys.
This is used if multiple Keys are pressed. Then the
   * Program puffers them in here.

This List will be managed by this Class
   * completely and does not need to be seen by outer Classes.
Therefore there is not
   * getter/setter-Method.
   * @param newPressedList the new value of pressed
   */
    private void setPressed(List<String> newPressedList) {
        pressed = newPressedList;
    }

    /**
     * Get the value of pressed The List of pressed Keys. This is used if
     * multiple Keys are pressed. Then the Program puffers them in here.
     *
     * This List will be managed by this Class completely and does not need to
     * be seen by outer Classes. Therefore there is not getter/setter-Method.
     *
     * @return the value of pressed
     */
    private List<String> getPressed() {
        return pressed;
    }

    //
    // Other methods
    //
    /**
     * This is the actual Handler of the Key-Event wich is overwritten at the
     * Child's to react to the different Events.
     *
     * @param keyEvent The actual Event that was triggered by the KeyBoard
     */
    public void handle(KeyEvent keyEvent) {
    }

}
