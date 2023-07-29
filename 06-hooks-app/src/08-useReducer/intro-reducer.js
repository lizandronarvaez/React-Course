/* eslint-disable no-unused-vars */
const initalState = [
    {
        id: 1,
        todo: "Estudiar Base de datos y Backend",
        done: false
    }
]
// Es una funcion pura

// La funcion reducer recibe dos parametros, el estado inicial y la accion que sirve para agregar algo

// siempre devuelve un estado

const funcionReducer = (state = initalState, action = {}) => {
    if (action.type === "[TODO] add todo") {
        return [...state, action.payload]
    }

    return state;
}

let todos = funcionReducer();

const newTarea = {
    id: 2,
    todo: "Estudiar Algoritmos",
    done: false
}

const agregarTareaNueva = {
    type: "[TODO] add todo",
    payload: newTarea
}

todos = funcionReducer(todos, agregarTareaNueva)
