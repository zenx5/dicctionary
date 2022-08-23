import PhoneticWord from "./PhoneticWord";

export default function MeaningItem({word, phonetic, children}){
    return(
        <li key={Math.random()}>
            ({word}) <PhoneticWord transcription={phonetic[0]} audio={phonetic[1]} />            
            <ul>
                {children}
            </ul>
        </li>
    )
}