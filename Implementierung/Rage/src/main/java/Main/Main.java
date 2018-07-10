package Source.Main;

import Source.Controller.ViewController.FxController.FxRageController;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javafx.application.Application;
import static javafx.application.Application.launch;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.layout.StackPane;
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
        try {
            FXMLLoader loader = new FXMLLoader(getClass().getResource("/FXML/RaGE_GUI.fxml"));
            Scene scene = new Scene(loader.load());
            FxRageController fxRageController = loader.getController();
            fxRageController.init();

            primaryStage.setScene(scene);
            primaryStage.show();
        } catch (IOException ex) {
            Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
        }
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
