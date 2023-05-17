import { retornaArreglo } from "../../src/testing/07-deses-arr";

/* eslint-disable no-undef */
describe('Pruebas en desescturacion de arreglos', () => {
    test('El test debe devolver un String y un Numero', () => {

        const [dato, numero] = retornaArreglo()
        
        expect(typeof dato).toBe("string");
        expect(typeof numero).toBe("number");
    });
});