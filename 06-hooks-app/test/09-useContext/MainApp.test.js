/* eslint-disable no-undef */
import { MemoryRouter } from "react-router-dom";
import MainApp from "../../src/09-useContext/MainApp";
import { render, screen } from "@testing-library/react";
import React from "react";
global.React = React
/* eslint-disable no-undef */
describe('Pruebas en el componente <MainApp />', () => {

    test('Debe mostrar como pagina principal el HomePage', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        )

        expect(screen.getByText("HomePage")).toBeTruthy();
        // screen.debug();
    });

    test('Probar que se muestra la ruta Login', () => {

        render(
            <MemoryRouter initialEntries={["/login"]}>
                <MainApp />
            </MemoryRouter>
        )
        // Probamos que la ruta Login se renderiza y existe en el h2 con el nombre que le enviamos
        expect(screen.getByRole("heading", { level: 2 }).innerHTML).toBe("Login");

        // screen.debug()
    });

    // Probar que la ruta Login tiene la clase active

    test('Probar que la ruta Login tiene la clase `Active`', () => {

        render(
            <MemoryRouter initialEntries={["/login"]}>
                <MainApp />
            </MemoryRouter>
        )
        const enlace = screen.getByRole("link", { name: "Login" })

        expect(enlace.classList[1]).toContain("active");
        // screen.debug()
    });
});