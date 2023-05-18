import { getHeroeById, getHeroesByOwner } from "../../src/testing/08-imp-exp";
import heroes from "../../src/data/heroes"
/* eslint-disable no-undef */
describe('Pruebas en componente <Importaciones-Exportaciones/>', () => {

    // Test Nº1
    test('getHeroeById debe devolver un heroe por un ID', () => {

        const id = 4;

        const heroe = getHeroeById(id);

        expect(heroe).toEqual({
            id: 4,
            name: "Flash",
            owner: "DC"
        });
    });

    // TEST Nº2
    test('getHeroeById debe devolver undefined si no encuentra el heroe', () => {

        const id = 20;

        const heroe = getHeroeById(id);

        expect(heroe).toBeUndefined();
    });

    // TEST Nº3
    test('getHeroesByOwner debe devolver un arreglo con los heroes de DC', () => {

        const owner = "DC";

        const heroesDC = getHeroesByOwner(owner);

        expect(heroesDC).toEqual([
            { "id": 1, "name": "Batman", "owner": "DC" },
            { "id": 3, "name": "Superman", "owner": "DC" },
            { "id": 4, "name": "Flash", "owner": "DC" }
        ]
        )
        expect(heroesDC.length).toBe(3)
        expect(heroesDC).toEqual(heroes
            .filter(heroe => heroe.owner === owner))
    });

    // TEST Nº4
    test('getHeroesByOwner debe devolver un arreglo con los heroes de Marvel', () => {

        const owner = "Marvel";

        const heroesDC = getHeroesByOwner(owner);

        expect(heroesDC.length).toBe(2)
    });
});