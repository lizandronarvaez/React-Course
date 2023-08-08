
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import TodoAppList from "../../../src/08-useReducer/TodoAppList";
import React from "react";
import useTodos from "../../../src/08-useReducer/hooks/useTodos";
global.React = React;

jest.mock('../../../src/08-useReducer/hooks/useTodos');

describe('Pruebas en el componente <App />', () => {

    useTodos.mockReturnValue({

        todos: [
            {
                id: 1, description: "Todo 1", done: false
            },
            {
                id: 2, description: "Todo 2", done: true
            }
        ],
        todosCounter: 2,
        todosPending: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    });

    test('Se debe mostrar todo el componente', () => {

        render(<TodoAppList />);

        expect(screen.getByText("Todo 1")).toBeTruthy();
        expect(screen.getByText("Todo 2")).toBeTruthy();

    });
});