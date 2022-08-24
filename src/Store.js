

const getValue = key => {
    return sessionStorage.getItem(key)
}

const setValue = (key, value) => {
    sessionStorage.setItem(key, value)
}

export {
    getValue,
    setValue
}