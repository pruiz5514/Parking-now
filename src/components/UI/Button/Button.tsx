import { IButton } from "app/types/IButton"

const Button :React.FC<IButton> = ({text}) => {
    return(
        <button >{text}</button>
    )
}

export default Button;