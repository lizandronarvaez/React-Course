import { render,screen } from "@testing-library/react"
import FirstApp from "../src/components/FirtsApp"
/* eslint-disable no-undef */
describe('Pruebas en el componente <FirstApp />', () => {

    const title = "Curso de React con Fernando Herrera"
    const nombre = "Lizandro Narvaez";

    test('Pruebas en el componente', () => {
        const { container } = render(<FirstApp title={title} />)
        // expect(container).toMatchSnapshot();
    });

    test('Debe devolver el nombre del alumno enviado por props', () => {
        const { getByText} = render(
            <FirstApp
                nombre={nombre}
            />
        )
        expect(getByText(nombre).innerHTML).toBe(nombre)
    });
})