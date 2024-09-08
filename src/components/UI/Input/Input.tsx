import React from "react";
import { InputContainer, Label, InputStyled, InputWrapper, IconContainer, SpanIcon } from "./Input-style";
import { IInput } from "app/types/IInput";

const Input: React.FC<IInput> = ({  label, type, placeholder, required, id, value, onChange, icon: IconComponent }) => {
    return (
        <InputContainer>
            <Label>{label}
            <InputWrapper>
                <IconContainer>
                <SpanIcon>{IconComponent && <IconComponent />}</SpanIcon>
                </IconContainer>
                <InputStyled 
                    type={type} 
                    placeholder={placeholder}
                    id={id} 
                    value={value} 
                    onChange={onChange} 
                    {...(required && { required })}
                />
            </InputWrapper>
            </Label>
        </InputContainer>
    );
}

export default Input;