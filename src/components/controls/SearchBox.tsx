import { CSSProperties } from "react"

interface ISearchBox {
    styles?:CSSProperties;
}

export const SearchBox:React.FC<ISearchBox> = (props) => {

    return(<input style={props.styles}/>)
}