package Source.Utils.Properties;

/**
 * Class PropertyValue This class stores data of the type T, which might be
 * constant.
 */
public class PropertyValue<T> {

    //
    // Fields
    //
    //
    // Constructors
    //
    public PropertyValue() {
    }

    /**
     * A constructor of this class
     *
     * @param value the value of this PropertyValue
     * @param isConst whether the value is constant ie. might not be altered
     * after its initialization
     */
    public PropertyValue(T value, Boolean isConst) {
    }

    //
    // Methods
    //
    //
    // Accessor methods
    //
    /**
     * @return returns the value stored in this PropertyValue
     * @return uCrEnQqDIUZVj
     */
    public T getValue() {
        return null;
    }

    /**
     * @throws DataInconsistencyException if the const flag is set
     * @param value the value which will be stored in this PropertyValue
     */
    public void setValue(T value) {
    }

    /**
     * @return returns true iff this PropertyValue is constant ie. the const
     * flag is set
     */
    public Boolean isConstant() {
        return null;
    }

}
