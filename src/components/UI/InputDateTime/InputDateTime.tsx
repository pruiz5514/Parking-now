import React from "react";
import { InputContainer, Label, InputWrapper } from "../Input/Input-style";
import { IInput } from "app/types/IInput";
import { InputDateStyled } from "./Input-date-time-style";

const InputDateTime: React.FC<IInput> = ({  label, type, placeholder, required, id, value, onChange, name,  min, max }) => {
    return (
        <InputContainer>
            <Label htmlFor={id}>{label}</Label>
            <InputWrapper>
                <InputDateStyled 
                    type={type} 
                    placeholder={placeholder}
                    id={id} 
                    value={value} 
                    name = {name}
                    onChange={onChange} 
                    min={min} 
                    max={max} 
                    {...(required && { required })}
                />
            </InputWrapper>
        </InputContainer>
    );
}

export default InputDateTime;