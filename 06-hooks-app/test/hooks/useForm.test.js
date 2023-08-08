import { act, renderHook } from "@testing-library/react";
import useForm from "../../src/hooks/useForm"
/* eslint-disable no-undef */
describe('Pruebas en el hook useForm', () => {

    const initialForm = {
        name: "Lizandro",
        email: "lizandrojesus13@hotmail.com"
    }

    test('El test debe regresar los valores por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm))

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onChangeForm: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('Debe cambiar el nombre en el formulario', () => {

        const inputNewValue = "Alofokemusic";

        const { result } = renderHook(() => useForm(initialForm));
        const { onChangeForm } = result.current;
        // ACT es de actuar, toma como argumento un callback
        act(() => onChangeForm({ target: { name: "name", value: inputNewValue } }))
        // 
        expect(result.current.formState.name).toBe(inputNewValue);
    });

    test('Comprobar que el formulario tiene valores iniciales o vacios', () => {

        const newValue = "Alofokemusic"
        const valueInitial = {}

        const { result } = renderHook(() => useForm(initialForm));
        const { onChangeForm, onResetForm } = result.current;
        // ACT es de actuar, toma como argumento un callback
        act(() => {
            onChangeForm({ target: { name: "name", value: newValue } })
            onResetForm(valueInitial)
        })
        // Comparamos como valores
        // expect(typeof result.current.formState).toBe("object")
        // comparar si esta vacio o no
        expect(result.current.formState.name).toBe(undefined);
        expect(Object.keys(result.current.formState).length).toBe(0);
    });
});