package Source.Model.Graph;

import java.util.List;

/**
 * Class Graph This class describes the abstract structure of a graph. Each
 * graph has (independent of its concrete type) a finite amount of vertices and
 * edges, which define a relation of vertices. The type E of this edges defines
 * the concrete graph type. The class has methods for retrieving the relations
 * given by the edges. Vertices are identified with their unique index and thus
 * are not saved explicitly.
 */
abstract public class Graph<E> {

    //
    // Fields
    //
    //
    // Constructors
    //
    public Graph() {
    }

    //
    // Methods
    //
    //
    // Accessor methods
    //
    //
    // Other methods
    //
    /**
     * The Constructor of this Class.
     *
     * @param edges the edges belonging to this graph
     * @param numVertices the number of vertices this graph has
     */
    public Graph(List<E> edges, Integer numVertices) {
    }

    /**
     * @return returns the number of vertices which the graph contains
     * @return uDDdo5Ay7C13h
     */
    public Integer getNumVertices() {
        return null;
    }

    /**
     * convenience method for retrieving the list of vertex indices
     *
     * @return returns the list [0 ... numVertices#xdc00;1]
     * @return uDDdo5Ay7C13h
     */
    public Integer getVertices() {
        return null;
    }

    /**
     * @return returns the edges giving the graph its structure
     * @return uCrEnQqDIUZVj
     */
    public List<E> getEdges() {
        return null;
    }

    /**
     * @return returns true iff the vertex is incident to the given edge
     * @throws GraphInconstistencyException if vertex is an invalid vertex index
     * or edge is not an edge of the graph
     * @return uZLSB8lOho0lC
     * @param vertex vertex the index of a vertex of the graph ie. in [0 ...
     * numVertices#xdc00;1]
     * @param edge edge an edge of the graph
     */
    public Boolean areIncident(Integer vertex, E edge) {
        return null;
    }

    /**
     * @return returns true iff there is an edge which is incident to both
     * vertices
     * @throws GraphInconsistencyException if vertex1 or vertex2 is not a valid
     * vertex index
     * @return uZLSB8lOho0lC
     * @param vertex1 vertex1 the index of a vertex of the graph ie. in [0 ...
     * numVertices#xdc00;1]
     * @param vertex2 vertex2 the index of a vertex of the graph ie. in [0 ...
     * numVertices2]
     */
    public Boolean areAdjacent(Integer vertex1, Integer vertex2) {
        return null;
    }

    /**
     * @return returns true iff there is a vertex which is incident to both
     * edges
     * @throws GraphInconsistencyException if edge1 or edge2 is not an edge of
     * the graph
     * @return uZLSB8lOho0lC
     * @param edge1 edge1 an edge of the graph
     * @param edge2 edge2 another edge of the graph
     */
    public Boolean areAdjacent(E edge1, E edge2) {
        return null;
    }

    /**
     * @return returns the list of all vertices which are adjacent to vertex
     * @throws GraphInconsistencyException if vertex is not a valid vertex index
     * @return umgFSLDYCXrQe
     * @param vertes vertex the index of a vertex of the graph ie. in [0 ...
     * numVertices#xdc00;1]
     */
    public List<Integer> getAdjacentVertices(Integer vertes) {
        return null;
    }

    /**
     * @return returns the list of all edges which are adjacent to edge
     * @throws GraphInconsistencyException if edge is not an edge of the graph
     * @return uCrEnQqDIUZVj
     * @param edge edge an edge of the graph
     */
    public List<E> getAdjacentEdges(E edge) {
        return null;
    }

    /**
     * @return returns the list of all edges incident to vertex
     * @throws GraphInconsistencyException if vertex is an invalid vertex index
     * @return uCrEnQqDIUZVj
     * @param vertex vertex the index of a vertex of the graph ie. in [0 ...
     * numVertices#xdc00;1]
     */
    public List<E> getIncidentEdges(Integer vertex) {
        return null;
    }

    /**
     * @return returns the list of all vertices which are incident to any of the
     * edges in the list
     * @throws GraphInconsistencyException if there is an edge in edges, which
     * is not an edge of the graph
     * @return umgFSLDYCXrQe
     * @param edges edges a list of edges of the graph
     */
    public List<Integer> getIncidentVertices(List<E> edges) {
        return null;
    }

    /**
     * @return returns the line-by-line representation of the graph as specified
     * in the RAGE-data format
     * @return u7qkS15Xb7BMH
     */
    public List<String> toRAGE() {
        return null;
    }

}
