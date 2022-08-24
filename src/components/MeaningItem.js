import PhoneticWord from "./PhoneticWord";

export default function MeaningItem({typeword, phonetic, children}){
    return(
        <li key={Math.random()}>
            { typeword && `(${typeword})`} 
            { phonetic && <PhoneticWord transcription={ phonetic[0]} audio={phonetic[1]} /> }
            <ul>
                {children}
            </ul>
        </li>
    )
}