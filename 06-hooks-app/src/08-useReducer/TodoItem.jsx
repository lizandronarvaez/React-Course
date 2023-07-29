/* eslint-disable react/prop-types */

const TodoItem = ({ todo, onDeleteTodo, onToogleTodo }) => {
    const { id, done, description } = todo;

    return (

        <li className="list list-group-item ">
            <p className="h4 py-3">
                Tarea:

                <span className={`h6 mx-5 ${(done) ? "text-decoration-line-through" : ""}`}>
                    {description}
                </span>
            </p>

            <button
                className="btn btn-primary mx-2"
                onClick={() => onToogleTodo(id)}
            >
                {
                    done ?
                        (
                            "Desmarcar"
                        ) :
                        (
                            "Completar"

                        )
                }
            </button>
            <button
                className="btn btn-danger"
                onClick={() => onDeleteTodo(id)}
            >
                Borrar
            </button>
        </li >
    )
}

export default TodoItem