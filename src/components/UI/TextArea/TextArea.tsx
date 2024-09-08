import React from "react";
import { ITextArea } from "app/types/ITextArea";
import { TextAreaContainer, TextAreaStyled } from "./TextArea-style";
import { Label } from "../Input/Input-style";

const TextArea: React.FC<ITextArea> = ({ label, id, required, value, onChange}) => {
    return (
        <TextAreaContainer>
            <Label>{label}
            <TextAreaStyled id={id} 
                value={value} 
                onChange={onChange}
                {...(required && { required })} 
            />
            </Label>
        </TextAreaContainer>
    );
}

export default TextArea;