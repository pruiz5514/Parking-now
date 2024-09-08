import styled from 'styled-components';

export const InputContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0.3rem;
`;

export const Label = styled.label`
  font-size: 14px;
  cursor: pointer;
  color: var(--blue);
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const IconContainer = styled.div`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--blue);
  padding: 5px;
  border-radius: 50%;
`;

export const SpanIcon = styled.span`
  color: var(--orange);
  font-size: 14px;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 5px 5px 5px 35px; 
  border: 1px solid var(--orange);
  border-radius:20px;
  font-size: 12px;
  outline: none;
  color: var(--blue-dark);
`;
