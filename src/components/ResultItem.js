

export default function ResultItem({index, word, children}){
    return(
        <span>
            <b>{index ? index+')' : ''} {word}:</b><br/>
            <ul>{children}</ul>
        </span>
    )
}