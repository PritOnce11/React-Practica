import { fireEvent, render, screen } from "@testing-library/react"
import CounterApp from "../pages_test/CounterApp"

test('comparar text Increment', () => {
    render(<CounterApp />)
    expect(screen.getByText("Increment").innerHTML).toEqual("Increment");
})

test('incrementar contador al hacer click', () => {
    render(<CounterApp />)
    
    expect(screen.getByText("Count: 0").innerHTML).toBe("Count: 0");

    for(let i = 0; i < 3; i++) {
        fireEvent.click(screen.getByText("Increment"));
    }

    expect(screen.getByText("Count: 3").innerHTML).toBe("Count: 3");
})
