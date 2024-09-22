import React from "react";
import { ITextArea } from "app/types/ITextArea";
import { TextAreaContainer, TextAreaStyled } from "./TextArea-style";
import { Label } from "../Input/Input-style";

const TextArea: React.FC<ITextArea> = ({ label, id, required, value, onChange, name, maxlength, defaultValue}) => {
    return (
        <TextAreaContainer>
            <Label htmlFor={id}>{label} </Label>
            <TextAreaStyled id={id} 
                value={value} 
                onChange={onChange}
                name={name}
                maxLength={maxlength}
                defaultValue={defaultValue}
                {...(required && { required })} 
            />
        </TextAreaContainer>
    );
}

export default TextArea;