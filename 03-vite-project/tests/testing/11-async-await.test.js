import { getApi } from "../../src/testing/11-async-await";
/* eslint-disable no-undef */
describe('Pruebas en el archivo Async/Await', () => {
    test('getApi debe devolver el JSON de la respuesta', async () => {
        const url = await getApi()

        expect(typeof url).toBe("object");
    });
})