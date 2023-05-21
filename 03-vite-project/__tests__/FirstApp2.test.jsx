import { render, screen } from "@testing-library/react"
import FirstApp from "../src/components/FirtsApp"
/* eslint-disable no-undef */
describe('Pruebas en el componente <FirstApp />', () => {
    const title = "Curso de React con Fernando Herrera"
    const nombre = "Lizandro Narvaez";

    test('Debe devolver el nombre del alumno enviado por props', () => {

        render(<FirstApp nombre={nombre} />)
        expect(screen.getByText(nombre)).toBeTruthy();
        // screen.debug();
    });

    test('Debe devolver el h1', () => {

        render(<FirstApp title={title} nombre={nombre} />)

        expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title)
    });

    test('Nº de props pasados como nombre existe', () => {

        render(<FirstApp nombre={nombre} />)
        expect(screen.getAllByText(nombre).length).toBe(1);
        // screen.debug();
    });
})