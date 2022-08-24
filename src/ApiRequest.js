const getWord = async (word) => {
    return await (await fetch(`${process.env.REACT_APP_API_URL}/${word}`) ).json()
}

export { getWord }
