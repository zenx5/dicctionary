import { render, screen } from '@testing-library/react';
import { MeaningItem }from '../components'

beforeEach( () => {
    render(
    <MeaningItem typeword='Word' phonetic="/worssd/">
        <li>Item 1</li>
        <li>Item 2</li>
    </MeaningItem>)
})

test("Shold render word", ()=>{
    const word = screen.getByText(/Word/i)
    expect(word).toBeInTheDocument();
})

test("Shold render List children", ()=>{
    const item1 = screen.getByText(/Item 1/i)
    const item2 = screen.getByText(/Item 2/i)
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
})