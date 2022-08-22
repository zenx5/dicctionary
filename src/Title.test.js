import { render, screen } from '@testing-library/react';
import Title from './Title';

test("Shold render title h1", () => {
    render(<Title tag='h1'>Titulo</Title>)
    const title = screen.getByRole('heading')
    expect(title).toBeInTheDocument()
})

test("Shold render title h2", () => {
    render(<Title tag='h2'>Titulo</Title>)
    const title = screen.getByRole('heading')
    expect(title).toBeInTheDocument()
})

test("Shold render title h3", () => {
    render(<Title tag='h3'>Titulo</Title>)
    const title = screen.getByRole('heading')
    expect(title).toBeInTheDocument()
})

test("Shold render title h4", () => {
    render(<Title tag='h4'>Titulo</Title>)
    const title = screen.getByRole('heading')
    expect(title).toBeInTheDocument()
})

test("Shold render title h5", () => {
    render(<Title tag='h5'>Titulo</Title>)
    const title = screen.getByRole('heading')
    expect(title).toBeInTheDocument()
})

test("Shold render title h6", () => {
    render(<Title tag='h6'>Titulo</Title>)
    const title = screen.getByRole('heading')
    expect(title).toBeInTheDocument()
})

