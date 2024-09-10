"use client"
import { ISelect } from "app/types/ISelect";
import { SelectStyle } from "./select-style";

const Select :React.FC<ISelect> = ({name, id, children}) => {
    return(
        <SelectStyle name={name} id={id}>
            {children}
        </SelectStyle>
    )
}

export default Select;