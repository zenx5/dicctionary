

export default function ResultItem({index, word, children}){
    return(
        <span>
            <b>{index}) {word}:</b><br/>
            <ul>{children}</ul>
        </span>
    )
}