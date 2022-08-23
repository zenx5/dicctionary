import { createRef } from "react"
export default function PhoneticWord({transcription,audio}){
    const player =  createRef()

    const play = () => {
        player.current.play()
    }
    
    return(
        <span>
            {(transcription && audio) && (<small onClick={play} style={{color:'blue', cursor:'pointer'}}>{transcription} </small>)}
            {(transcription && !audio) && (<small>{transcription} </small>)}
            <audio ref={player}>
                <source src={audio} />
            </audio>
        </span>)
}