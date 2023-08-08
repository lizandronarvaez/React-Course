import todoReducer from "../../../src/08-useReducer/hooks/todoReducer";

/* eslint-disable no-undef */
describe('Pruebas en el todoReducer', () => {


    const initialState = [{
        id: 1,
        description: "Demo Todo",
        done: false
    }]

    test('Debe de regresar el estado inicial', () => {

        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);

    });

    test('Debe de agregar un todo', () => {

        const action = {
            type: "[TODO] Add Todo",
            payload: {
                id: 2,
                description: "Nuevo todo #2"
            }
        }
        // 
        const newState = todoReducer(initialState, action);
        // Numero de todos
        expect(newState.length).toBe(2);
        // Comprobar que existe el objeto
        expect(newState).toContain(action.payload);

    });

    // Debe de eliminar un TODO
    test('El todo debe eliminarse', () => {
        const addTodo = {
            type: "[TODO] Add Todo",
            payload: {
                id: 2,
                description: "Nuevo todo #2"
            }
        }
        const removeTodo = {
            type: "[TODO] Remove Todo",
            payload: {
                id: 2,
                description: "Nuevo todo #2"
            }
        }
        // 
        const newState = todoReducer(initialState, addTodo)
        expect(newState.length).toBe(2);
        // Elimina un TODO
        const todoRemove = todoReducer(initialState, removeTodo)
        expect(todoRemove.length).toBe(1);

    });

    // 
    test('Debe realizar el cambio de done false a true', () => {

        const newState = {
            type: "[TODO] Toggle Todo",
            payload: 1,
            done: false
        }
        // 
        const toggleTodo = todoReducer(initialState, newState)
        // Comprueba el valor
        expect(toggleTodo[0].done).toBe(true);

    });
});