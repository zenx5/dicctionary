import { useState } from "react";

export default function FormBase({disabled, onSearch, children}) {

    const style = {
        display:'flex',
        margin:'50px',
        justifyContent:'space-around',
        width:'50%',
        marginLeft:'auto',
        marginRight:'auto'
    };

    const submitEvent = async (ev) => {
        ev.preventDefault();
        await onSearch(ev);
    }

    return (<form data-testid="id-test-form" style={style} onSubmit={submitEvent}>
        {children}
        <button type="button" onClick={onSearch} disabled={disabled}>Search</button>
    </form>)


}