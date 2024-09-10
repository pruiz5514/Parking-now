import React from "react";
import { InputContainer, Label, InputStyled, InputWrapper, IconContainer, SpanIcon } from "./input-style";
import { IInput } from "app/types/IInput";

const Input: React.FC<IInput> = ({  label, type, placeholder, required, id, value, onChange, icon: IconComponent }) => {
    return (
        <InputContainer>
            <Label htmlFor={id}>{label}</Label>
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
            
        </InputContainer>
    );
}

export default Input;