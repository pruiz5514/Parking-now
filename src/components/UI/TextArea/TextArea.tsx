import React from "react";
import { ITextArea } from "app/types/ITextArea";
import { TextAreaContainer, TextAreaStyled } from "./textArea-style";
import { Label } from "../Input/input-style";

const TextArea: React.FC<ITextArea> = ({ label, id, required, value, onChange}) => {
    return (
        <TextAreaContainer>
            <Label htmlFor={id}>{label} </Label>
            <TextAreaStyled id={id} 
                value={value} 
                onChange={onChange}
                {...(required && { required })} 
            />
        </TextAreaContainer>
    );
}

export default TextArea;