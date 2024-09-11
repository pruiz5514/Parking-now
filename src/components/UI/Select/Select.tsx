"use client"
import { ISelect } from "app/types/ISelect";
import { SelectAddress } from "./Select-style";

const Select :React.FC<ISelect> = ({name, id, children}) => {
    return(
        <SelectAddress name={name} id={id}>
            {children}
        </SelectAddress>
    )
}

export default Select;