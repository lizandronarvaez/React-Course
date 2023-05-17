/* eslint-disable no-undef */
describe('Pruebas Unitarias ReactJs', () => {

    test('Debe devolver "Hola Mundo"', () => {
        // Las pruebas tienen

        // Inicializacion
        const saludar = "Hola mundo"

        // Accion o realizacion de prueba
        const saludo = saludar.trim();

        // Esperar o observarw prueba

        expect(saludar).toBe(saludo);
    });

    test('Debe devolver 4', () => {
        expect(2 + 1).toBe(3)
    })
});
