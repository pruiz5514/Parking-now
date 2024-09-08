import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 1rem;
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
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--blue);
  padding: 5px;
  border-radius: 50%;
`;

export const Icon = styled.span`
  color: var(--orange);
  font-size: 18px;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 10px 10px 10px 50px; 
  border: 1px solid var(--orange);
  border-radius: 20px;
  font-size: 16px;
  outline: none;
  color: var(--blue-dark);

  &:focus {
    border-color: var(--orange);
  }
`;
