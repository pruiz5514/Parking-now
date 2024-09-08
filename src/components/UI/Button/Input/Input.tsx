import React from "react";
// import { IoPersonSharp } from "react-icons/io5";
import { InputContainer, Label, InputStyled, InputWrapper, IconContainer, Icon } from "./Input-style";
import { IInput } from "app/types/IInput";

const Input: React.FC<IInput> = ({  label, type, placeholder, required, id, value, onChange, icon: IconComponent }) => {
    return (
        <InputContainer>
            <Label>{label}
            <InputWrapper>
                <IconContainer>
                <Icon>{IconComponent && <IconComponent />}</Icon>
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