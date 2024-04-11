import { fireEvent, render, screen } from "@testing-library/react"
import MemoApp from "../pages_test/MemoApp";


test('Check if the component renders', () => {
    render(<MemoApp />)
    expect(screen.getByText("Actualizar Nombres").innerHTML).toEqual("Actualizar Nombres");
})

test('Check if the names changed', () => {
    render(<MemoApp />)

    fireEvent.click(screen.getByText("Actualizar"));

    const elementName = 'Juan';

    const element = screen.queryByText(elementName);

    if (!element) {
        throw new Error('Elemento no encontrado');

    }
})
