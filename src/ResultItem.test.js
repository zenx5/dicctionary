import { render, screen } from '@testing-library/react';
import ResultItem from './ResultItem';

beforeEach( () => {
    render(
    <ResultItem word='Palabra'>
        <li>Item 1</li>
        <li>Item 2</li>
    </ResultItem>)
})

test("Shold render word", ()=>{
    const word = screen.getByText(/Palabra/i)
    expect(word).toBeInTheDocument();
})

test("Shold render List children", ()=>{
    const item1 = screen.getByText(/Item 1/i)
    const item2 = screen.getByText(/Item 2/i)
    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
})