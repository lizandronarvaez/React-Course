
import TodoList from "./TodoList";
import TodoFormAdd from "./TodoFormAdd";
import useTodos from "./hooks/useTodos";

const TodoAppList = () => {

    const { todos, todosCounter, todosPending, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos()
    console.log(todos)
    return (
        <>
            <h1>TODO AppList<small>Pendientes</small></h1>
            <hr />
            <h3 className="">Tareas Totales: {todosCounter} - <small className="text-bg-danger p-2 rounded">Tareas Pendientes: {todosPending}</small></h3>
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToogleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5 mt-2">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoFormAdd onNewTodo={handleNewTodo} />
                </div>
            </div>

        </>
    )
}

export default TodoAppList