import { getUsuarioActivo } from "../../src/testing/05-funciones";
/* eslint-disable no-undef */
describe('Pruebas en el archivo 05-funciones', () => {
    test('getUsuarioActivo debe retornar un objeto', () => {

        const username = "Lizandro";

        const testUserActivo = getUsuarioActivo(username)

        expect(testUserActivo).toStrictEqual({
            uid: "ABC567",
            username
        });
    });
});