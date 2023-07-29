/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem"

const TodoList = ({ todos = [], onDeleteTodo, onToogleTodo }) => {

    return (
        <ul style={{ listStyle: "none" }} className="list-group" >
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onToogleTodo={onToogleTodo}
                />
            ))}
        </ul>
    )
}

export default TodoList