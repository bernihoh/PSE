package Source.Utils.Properties;

import java.util.List;

/**
 * Class Properties This abstract class implements a key value storage used for
 * exchanging data between the different layers of the application. It is used
 * to adapt the user interface to varying settings of heuristics. The keys may
 * be used to translate the GUI to different languages as well. New key-value
 * pairs can only be added by subclasses, thus guaranteeing their presence at
 * any time.
 */
public class Properties {

    //
    // Fields
    //
    //
    // Constructors
    //
    public Properties() {
    }

    //
    // Methods
    //
    /**
     * @throws DataInconsistencyException if the property is already set
     * @param property the property to be added
     * @param value the value(-type) the property will have
     */
    protected void addProperty(String property, PropertyValue value) {
    }

    //
    // Accessor methods
    //
    /**
     * @return returns the list of all keys ie. properties
     */
    public List<String> getProperties() {
        return null;
    }

    /**
     * @return returns the value of the property
     * @throws DataInconsistencyException if there is no key property
     * @param property the property whose value is requested
     */
    public PropertyValue getProperty(String property) {
        return null;
    }

}
