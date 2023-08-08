/* eslint-disable no-undef */
import React from "react";
import HomePage from "../../src/09-useContext/HomePage";
import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext";
global.React = React
describe("Pruebas en el componente <HomePage />", () => {

    test('should ', () => {

        const saludo = "Estoy testeando el componente useContext"
        render(
            <UserContext.Provider value={{ saludo }}>
                <HomePage />
            </UserContext.Provider>
        );

        const saludar = screen.getByLabelText("saludo-label")

        expect(saludar.innerHTML).toBe(saludo);
    });
})