import { useNavigate } from "react-router-dom"
import { ButtonStyled } from "../components"

export default function Configure({children}){
    const navigate = useNavigate()  

    const saveEvent = () => {

    }

    const exitEvent = () => {
        navigate('/', {replace:true})
    }
    
    

    return(
        <div>
            <ul>
                {children}
            </ul>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                {/* <ButtonStyled color="green" onClick={saveEvent}>Save</ButtonStyled> */}
                <ButtonStyled color="red" onClick={exitEvent}>Exit</ButtonStyled>                
            </div>
        </div>
    )


}