"use client"
import { ISelect } from "app/types/ISelect";
import { SelectAddress } from "./Select-style";

const Select :React.FC<ISelect> = ({name, id, children, defaultValue, onChange}) => {
    return(
        <SelectAddress name={name} id={id} defaultValue={defaultValue} onChange={onChange}>
            {children}
        </SelectAddress>
    )
}

export default Select;