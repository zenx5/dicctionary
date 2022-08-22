import WordSpan from "./WordSpan";

export default function DefinitionItem({definition, example, onClick}){
    const styleLine = {
        display:'flex',
        flexWrap:'wrap'
    }

    return (
        <li>
            <p>
            <span style={styleLine} data-testid={definition.split(" ").join("")}>
                {definition.split(" ").map( word => {
                    return (
                        <WordSpan onClick={wordTarget=>{onClick(wordTarget)}} key={word+Math.random()}>{word}</WordSpan>
                    )})
                }
            </span>
            <br/>
            <small style={{color:'#000a'}}>{example}</small>
            </p>
        </li>

    )
}