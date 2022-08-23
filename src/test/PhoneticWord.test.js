import { render, screen, fireEvent } from '@testing-library/react'
import { PhoneticWord } from '../components'

test("Should render component without audio", () => {
    render(<PhoneticWord transcription={'Word'} />)
    const textTranscription = screen.getByText(/Word/i)
    expect( textTranscription ).toBeInTheDocument()
})

