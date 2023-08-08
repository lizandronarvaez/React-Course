/* eslint-disable no-undef */
import React from "react";
import TodoItem from "../../src/08-useReducer/TodoItem";
import { fireEvent, render, screen } from "@testing-library/react"
global.React = React;

describe('Pruebas en el componente <TodoItem />', () => {

    const todo = {
        id: 1,
        description: "Pruebas en el componente",
        done: false
    };
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());
    // 
    test('Debe de mostrar el TODO pendiente a completar', () => {

        render(<TodoItem
            todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToogleTodo={onToggleTodoMock}
        />);

        const liElement = screen.getByRole("listitem");

        expect(liElement.classList[1]).toBe("list-group-item");

        const spanElement = screen.getByLabelText("span");

        expect(spanElement.classList).toContain("mx-5");
    });

    test('El componente todo debe aparecer completado', () => {

        todo.done = true;

        render(<TodoItem
            todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToogleTodo={onToggleTodoMock}
        />);


        const spanElement = screen.getByLabelText("span");

        expect(spanElement.classList).toContain("text-decoration-line-through");

    });

    test('El boton debe realizar la funcion toggleClass', () => {
        // Si todo.done esta en false
        todo.done = false
        render(<TodoItem
            todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToogleTodo={onToggleTodoMock}
        />);
        
        // EL boton toggle estara como completar
        const buttonToggle = screen.getByText("Completar")
        // AL HACER CLICK CAMBIAR A COMPLETADO Y TODO SERA TRUE
        fireEvent.click(buttonToggle)

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    
    });

    test('El boton deleteToggle debe ser llamado', () => {
        render(<TodoItem
            todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToogleTodo={onToggleTodoMock}
        />);

        const buttonDelete = screen.getByText("Borrar")
        fireEvent.click(buttonDelete)

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
});