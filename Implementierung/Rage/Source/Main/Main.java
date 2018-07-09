package Source.Main;

import javafx.application.Application;
import static javafx.application.Application.launch;
import javafx.stage.Stage;

/**
 * Class Main This is the Main-Class of the Programm.
 *
 * This Class will be started by JavaFx. From here everything else will be
 * started and then the Program can work as wished.
 */
public class Main extends Application {

    /**
     * This Method is the Start-Method of the Application.
     *
     * It starts the GUI.
     *
     * @param primaryStage
     */
    @Override
    public void start(Stage primaryStage) {
    }

    /**
     * The Main-Method of the Project.
     *
     * Remember that at JavaFx the Main-Method is only a fallback. This Method
     * only calls the launch-Method of the expanded Application-Class with the
     * given argument-String-Array.
     *
     * @param args Argument String-Array of the Main-Method.
     */
    public static void main(String[] args) {
        launch(args);
    }

}
