/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import useForm from "../hooks/useForm";
const TodoFormAdd = ({onNewTodo}) => {
    const { description, onChangeForm, onResetForm } = useForm({
        description: ""
    })

    // 

    const handleSubmitForm = e => {
        e.preventDefault();
        if (description.length <= 1) return;
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description
        }
        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={handleSubmitForm} >
            <input
                type="text"
                placeholder="Introduce una tarea para realizar"
                className="form-control"
                name="description"
                onChange={onChangeForm}
                value={description}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-2"
            >
                Agregar
            </button>
        </form>
    )
}

export default TodoFormAdd