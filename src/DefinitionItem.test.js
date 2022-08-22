import { fireEvent, render, screen } from '@testing-library/react';
import DefinitionItem from './DefinitionItem'

const clicking = (event) => {
    expect(event).toBe("group")
}

beforeEach( () => {
    render(
    <DefinitionItem 
        definition='Word is a group of continue letters' 
        example="word is a word"
        onClick={clicking} />)
})

test("Should render word", ()=>{
    const meaning = screen.getByTestId(/Wordisagroupofcontinueletters/i)
    expect(meaning).toBeInTheDocument();
})

test("Should click word", ()=>{
    const anyword = screen.getByText(/group/i)
    expect(anyword).toBeInTheDocument();
    fireEvent.click(anyword)
})

