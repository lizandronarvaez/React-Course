/* eslint-disable no-undef */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Ecommerce from "../../src/03-Multiple-Custom-Hooks/Ecommerce"
import useFetch from "../../src/hooks/useFetch";
import Products from "../../src/03-Multiple-Custom-Hooks/Products";
import useCounter from "../../src/hooks/useCounter";
global.React = React;

jest.mock("../../../src/hooks/useFetch");
jest.mock("../../../src/hooks/useCounter");
describe('Pruebas en el componente <Ecommerce />', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        addCounter: mockIncrement,
    });

    beforeEach(()=>{
        jest.clearAllMocks();
    })
    
    test('Debe mostrar el componente entero', () => {
        useFetch.mockReturnValue({
            state: null,
            isLoading: true
        })

        render(<Ecommerce />)

        // Comprueba que existe el texto en el componente
        expect(screen.getByText("Cargando Datos..."));
        expect(screen.getByText("Ecommerce"))

        // Comprueba que el boton esta desabilitado
        const buttonDisabled = screen.getByRole("button", { name: "Anterior producto" })
        // En console log aparece como true
        // console.log(buttonDisabled.disabled)
        // Lo comprobamos
        expect(buttonDisabled.disabled).toEqual(true);
        // screen.debug()
    });

    test('Comprobar que el componente <Products /> debe devolver un dato', () => {
        const value = useFetch.mockReturnValue({
            state: [{ title: "Lizandro", price: 70 }],
            isLoading: false
        })
        const { state } = value()
        const { title, price } = state[0]
        render(<Ecommerce />)
        render(<Products title={title} price={price} />)
        // Comprueba que existe el texto
        expect(screen.getByText("Lizandro")).toBeTruthy();
        expect(screen.getByText("70€")).toBeTruthy();
        // COmprobamos que una vez que carguen los productos no existe el boton
        const buttonDisabled = screen.getByRole("button", { name: "Anterior producto" })

        expect(buttonDisabled.disabled).toEqual(false);
        // Debug es para comprobar que se inyectan los datos en el componente
        // screen.debug();
    });

    test('Debe llamar a la funcion incremento', () => {
        const value = useFetch.mockReturnValue({
            state: [{ title: "Lizandro", price: 70 }],
            isLoading: false
        })
        const { state } = value()
        const { title, price } = state[0]
        // 
        render(<Ecommerce />)
        render(<Products title={title} price={price} />)

        const buttonNext = screen.getByRole("button", { name: "Siguiente Producto" })

        fireEvent.click(buttonNext)

        // expect().toHaveBeenCalled();
    });
});