

/**
 * Class IOController
 * Saves and loads the data of a single view tab. The file has the extension
 * „.RAGE“. It uses the singelton design
pattern.
 */
public class IOController {

  //
  // Fields
  //

  private uoiR0rQ39ILav controller;
  
  //
  // Constructors
  //
  public IOController () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of controller
   * @param newVar the new value of controller
   */
  private void setController (uoiR0rQ39ILav newVar) {
    controller = newVar;
  }

  /**
   * Get the value of controller
   * @return the value of controller
   */
  private uoiR0rQ39ILav getController () {
    return controller;
  }

  //
  // Other methods
  //

  /**
   * This method is the only way to access the IOController. Creates a new
   * IOController if it does not exist.
@return returns the IOController itself.
   * @return       uoiR0rQ39ILav
   */
  public static uoiR0rQ39ILav getInstance()
  {
  }


  /**
   * Writes a RAGE file to the disk.
@param file Information about the file.
@throws
   * IOException if saving fails print: „Error while saving the file.“.
   * @param        file
   */
  public void writeFile(urmJtpNJ02w7s file)
  {
  }


  /**
   * Reads a RAGE file from the disk and sends the content to the model.
@param file
   * Information about the file.
@throws IOException if loading fails print: „Error
   * while loading the file.“.
   * @param        file
   */
  public void readFile(urmJtpNJ02w7s file)
  {
  }


  /**
   */
  private void IOController()
  {
  }


}
