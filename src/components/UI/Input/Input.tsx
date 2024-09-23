import React from "react";
import { InputContainer, Label, InputStyled, InputWrapper, IconContainer, SpanIcon } from "./Input-style";
import { IInput } from "app/types/IInput";

const Input: React.FC<IInput> = ({  label, type, placeholder, required, id, value, onChange, icon: IconComponent, name, key, maxLength, defaultValue }) => {
    return (
        <InputContainer key={key}>
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
                    name = {name}
                    maxLength={maxLength}                    
                    onChange={onChange} 
                    defaultValue={defaultValue}
                    {...(required && { required })}
                />
            </InputWrapper>
            
        </InputContainer>
    );
}

export default Input;