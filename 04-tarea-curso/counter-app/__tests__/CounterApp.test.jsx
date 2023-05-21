/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/components/CounterApp"

describe('Pruebas en el componente <CounterApp />', () => {
    const DefaultValue = 100;

    // Test para comprobar que hace un snapshot o imagen de el archivo
    test('Debe hacer un snapshot', () => {
        const { container } = render(<CounterApp value={DefaultValue} />)
        expect(container).toMatchSnapshot();
    });

    // Test que comprueba si el valor que devuelve es el inicial
    test('Debe retornar el valor inicial', () => {

        render(<CounterApp value={DefaultValue} />);

        expect(screen.getByRole("heading", { level: 2 }).innerHTML).toBe(DefaultValue.toString())
        // console.log(screen.getByRole("heading",{level:2}).innerHTML)
        // screen.debug();
    });

    // test para comprobar que el valor aumenta cuando se hace click en el boton
    test('Al hacer click en el boton incemento, debe incrementar el valor', () => {

        render(<CounterApp value={DefaultValue} />);

        fireEvent.click(screen.getByText("Sumar +1"));

        expect(screen.getByText("101")).toBeTruthy();
    });

    // Test para comprobar que hace el decremento
    test('Al hacer click en el boton incemento, debe incrementar el valor', () => {

        render(<CounterApp value={DefaultValue} />);

        fireEvent.click(screen.getByText("Restar -1"));
        // screen.debug()
        expect(screen.getByText("99")).toBeTruthy();
    });

    test('Al hacer click en reestablecer debe volver a colocarse el valor inicial', () => {

        render(<CounterApp value={DefaultValue} />);

        fireEvent.click(screen.getByText("Sumar +1"));
        fireEvent.click(screen.getByText("Reestablecer"));
        fireEvent.click(screen.getByText("Restar -1"));
        fireEvent.click(screen.getByText("Sumar +1"));
        fireEvent.click(screen.getByRole("button", {
            name: "btn-resetgit"
        }))

        // screen.debug()
        expect(screen.getAllByText(DefaultValue)).toBeTruthy();

    });
});