import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import MainTest from '../MainTest'

test('default render', () => {
    expect(true).toBe(true)
})

test('Renders the main page', () => {
    render(<MainTest />)
    expect(true).toBeTruthy()
})

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});