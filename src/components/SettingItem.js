import { useState, useEffect } from 'react'


export default function SettingItem({name, value, children, onChange}){
    const [ checked, setChecked ] = useState(value)

    useEffect(() => {
        setChecked( prevChecked => value )        
    }, [value]);

    return(
        <li style={{listStyle:'none', padding:'10px', cursor:'pointer'}}>
            <input 
                type="checkbox"
                id={name} 
                name={name} 
                style={{margin:'10px'}} 
                checked={ checked ? "checked" : "" }
                onChange={ onChange }
            />
            <label htmlFor={name}>{children}</label>
        </li>
    )
}