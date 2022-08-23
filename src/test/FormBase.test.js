import { fireEvent, render, screen } from "@testing-library/react";
import { FormBase } from "../components";

let disabled = false;

const eventSearch = (ev) => {
    console.log( ev )
    
}


test("Should render children", () => {
    render(
        <FormBase onSearch={eventSearch}>
            <p>child para test</p>
        </FormBase>
    )
    const stringChildren = screen.getByText(/child para test/i)
    expect( stringChildren ).toBeInTheDocument()
})
