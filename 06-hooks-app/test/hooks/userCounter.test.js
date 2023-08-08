/* eslint-disable no-undef */
import { act, renderHook } from "@testing-library/react";
import useCounter from "../../src/hooks/useCounter";

describe('Pruebas en el Hooks Counter', () => {
    test('Debe retornar los valores por defecto', () => {
        const value = 10;

        const { result: { current } } = renderHook(() => useCounter());
        const { counter, addCounter, subCounter, resetCounter } = current;
        // Comprueba el contador inicial
        expect(counter).toBe(value);
        // Comprueba la funcion subir contado
        expect(addCounter).toEqual(expect.any(Function));
        // Comprueba la funcion baja contador
        expect(subCounter).toEqual(expect.any(Function));
        // Comprueba la funcion que resetea el contador
        expect(resetCounter).toEqual(expect.any(Function));
    });

    test('El contador debe tener el valor inicial de 100', () => {
        const { result: { current } } = renderHook(() => useCounter(100));
        const { counter } = current;

        // El contador debe marcar 100
        expect(counter).toBe(100);
    });

    test('La funcion addCounter tiene que cambiar el contador', () => {
        const { result } = renderHook(() => useCounter(10));
        const { addCounter } = result.current;
        // hacer click ala funcion
        act(() => {
            addCounter(1);
            addCounter(2)
        })

        // El contador incremetara su valor en 1
        expect(result.current.counter).toBe(13);
    });

    test('La funcion subCounter tiene que restar el contador', () => {
        const { result } = renderHook(() => useCounter(10));
        const { subCounter } = result.current;
        // hacer click ala funcion
        act(() => {
            subCounter(1);
            subCounter(2);
        })

        // El contador incremetara su valor en 1
        expect(result.current.counter).toBe(7);
    });

    test('La funcion resetCounter debe restableecer el contador', () => {
        const { result } = renderHook(() => useCounter(10));
        const { resetCounter } = result.current;
        // hacer click ala funcion
        act(() => {
            resetCounter()
        })

        // El contador incremetara su valor en 1
        expect(result.current.counter).toBe(10);
    });
});