package src.main.java.Utils;

import java.util.Collection;
import java.util.function.Function;

/**
 * Class CollectionUtil This class provides some helper methods for collections
 * of elements of type T as finding minimal elements (of a cost function
 * returning values of type R) or subsets.
 */
public class CollectionUtil<T, R> {

    //
    // Fields
    //
    //
    // Constructors
    //
    public CollectionUtil() {
    }

    //
    // Methods
    //
    //
    // Accessor methods
    //
    /**
     * @return returns the minimal value of evaluation
     * @param collection the collection on which evaluation will be minimized
     * @param evaluation the evaluation / cost function which will be minimized
     */
    public void getMinimalValue(Collection<T> collection, Function<T, R> evaluation) {
    }

    /**
     * @return returns the minimal value of evaluation
     * @return undef
     * @param collection the collection on which evaluation will be minimized
     * @param evaluation the evaluation / cost function which will be minimized
     * @param leq if false the first entry in the collection minimizing
     * evaluation will be returned, otherwise the last one will be returned
     */
    public Tuple<T, R> getMinimalArgument(Collection<T> collection, Function<T, R> evaluation, Boolean leq) {
        return null;
    }

    /**
     * @return returns the minimal value of evaluation
     * @param collection the collection on which evaluation will be minimized
     * @param evaluation the evaluation / cost function which will be minimized
     * @param leq if false the first entry in the collection minimizing
     * evaluation will be returned, otherwise the last one will be returned
     */
    public void getMinimalArgumentValue(Collection<T> collection, Function<T, R> evaluation, Boolean leq) {
    }

    /**
     * @return returns the list of subcollections of collection (in
     * lexicographic order, if collection is sorted)
     * @param collection the collection whose subcollections shall be retrieved
     */
    public void getSubCollections(Collection<T> collection) {
    }

    /**
     * @return returns the list of subcollections of collection (in
     * lexicographic order, if collection is sorted)
     * @param collection the collection whose subcollections shall be retrieved
     * @param minSize the minimal size of the subcollections returned
     * @param maxSize the maximal size of the subcollections returned
     */
    public void getSubCollections(Collection<T> collection, Integer minSize, Integer maxSize) {
    }

}