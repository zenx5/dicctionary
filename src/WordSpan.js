import { useState } from "react";

export default function WordSpan({children, onClick}){

    const [fontWeight, setFontWeight] = useState(300);

    const mouseEnter = () => {
        setFontWeight( prevFontWeight => (600))
    }
    
    const mouseLeave = () => {
        setFontWeight( prevFontWeight => (300))
    }

    return (
        <span 
            
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={()=>{onClick(children)}}
            style={{marginRight:'5px', cursor:'pointer',fontWeight:fontWeight}}
        >{children}</span>
    )
}