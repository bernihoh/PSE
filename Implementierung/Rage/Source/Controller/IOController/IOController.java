package Source.Controller.IOController;

import java.io.File;

/**
 * Class IOController Saves and loads the data of a single view tab. The file
 * has the extension �.RAGE�. It uses the singelton design pattern.
 */
public class IOController {

    //
    // Fields
    //
    private IOController controller;

    //
    // Constructors
    //
    private IOController() {
    }

    //
    // Methods
    //
    /**
     * This method is the only way to access the IOController. Creates a new
     * IOController if it does not exist.
     *
     * @return returns the IOController itself.
     * @return uoiR0rQ39ILav
     */
    public static IOController getInstance() {
        return null;
    }

    /**
     * Writes a RAGE file to the disk.
     *
     * @param file Information about the file.
     * @throws IOException if saving fails print: �Error while saving the
     * file.�.
     * @param file
     */
    public void writeFile(File file) {
    }

    /**
     * Reads a RAGE file from the disk and sends the content to the model.
     *
     * @param file Information about the file.
     * @throws IOException if loading fails print: �Error while loading the
     * file.�.
     * @param file
     */
    public void readFile(File file) {
    }

}
