/* eslint-disable no-undef */
import { getSaludo } from "../../src/testing/02-template-string"
// 
describe('Pruebas en el archivo 02-template-string', () => {

    test('Funcion getSaludo debe devolver "Realizando Testing"', () => {

        const param = "Testing";
        const message = getSaludo(param)
        expect(message).toBe(`Realizando ${param}`)
    })
})