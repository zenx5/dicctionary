import { createElement } from "react"

export default function Title({tag, children}) {
    const element = createElement(tag, {style:{textAlign:'center'}}, children)
    return element
}