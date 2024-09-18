"use client"
import { ISelect } from "app/types/ISelect";
import { SelectAddress } from "./Select-style";

const Select :React.FC<ISelect> = ({name, id, children, defaultValue}) => {
    return(
        <SelectAddress name={name} id={id} defaultValue={defaultValue}>
            {children}
        </SelectAddress>
    )
}

export default Select;