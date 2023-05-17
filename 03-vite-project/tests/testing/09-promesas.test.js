import { getHeroeByIdAsync } from "../../src/testing/09-promesas";

/* eslint-disable no-undef */
describe('Pruebas en 09-Promesas', () => {
    test('getHeroeByIdAsync debe devolver un heroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {

                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })

                done();
            })
    });

    // Debe devolver un error sin no se encuentra el heroe
    test('getHeroeByIdAsync debe devolver error si no se encuentra', (done) => {

        const id = 20;
        getHeroeByIdAsync(id)
            .catch(error => {

                expect(error).toBe("No se pudo encontrar el heroe");
            
                done();
            })
    }, 1500);
});