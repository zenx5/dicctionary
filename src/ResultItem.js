

export default function ResultItem({word, children}){
    return(
        <span>
            <b>{word}:</b><br/>
            <ul>{children}</ul>
        </span>
    )
}