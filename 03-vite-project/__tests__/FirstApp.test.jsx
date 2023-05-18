import { render } from "@testing-library/react"
import FirstApp from "../src/components/FirtsApp"
/* eslint-disable no-undef */
describe('Pruebas en el componente <FirstApp />', () => {

    test('Pruebas en el componente', () => {

        const title = "Curso de React con Fernando Herrera"
        render(<FirstApp title={title} />)

    });

})