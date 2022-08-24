import { useState } from "react";

export default function ButtonStyled(props){

    const [state, setState] = useState(0);

    const backgroundColors = {
        'default': '#ffffff',
        'green': '#33aa33',
        'red': '#aa3333',
        'blue': '#3333aa',
    }

    const colors = {
        'default': '#000000',
        'green': '#ffffff',
        'red': '#ffffff',
        'blue': '#ffffff',
    }

    const baseStyle = {
        padding: '5px 20px',
        backgroundColor: props.disabled ? 'lightgray' : backgroundColors[props.color?.toLowerCase() ?? 'default'],
        color: props.disabled ? 'gray' : colors[props.color?.toLowerCase() ?? 'default'],
        border: '1px solid black',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: props.disabled ? '0px 0px 1px gray' : '4px 4px 10px gray'
    }

    

    const styleButton = () => {
        switch(state) {
            case 0:
                return {
                    boxShadow: props.disabled ? '0px 0px 1px gray' : '4px 4px 10px gray'
                }
            case 1:
                return {
                    boxShadow: '0px 0px 10px '+(props.color?.toLowerCase() ?? 'lightgray')
                }
            default:
        }
    }

    const effectClick = (ev) => {
        setState( prevState => 1)
        if( props.onMouseDown ){
            props.onMouseDown(ev)
        }
    }

    const effectClickRelease = (ev) => {
        setState( prevState => 0)
        if( props.onMouseUp ){
            props.onMouseUp(ev)
        }
    }

    return(
        <button 
            style={{ ...baseStyle, ...styleButton()}} 
            onMouseDown={effectClick}
            onMouseUp={effectClickRelease}
            {...props}
        >{props.children}</button>)
}