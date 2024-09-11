import styled from 'styled-components';


export const InputDateStyled = styled.input`
  width: 100%;
  padding: 5px; 
  border: 1px solid var(--orange);
  border-radius: 20px;
  font-size: 12px;
  outline: none;
  color: var(--blue-dark);
  box-sizing: border-box; 

  @media (max-width: 480px) {
    font-size: 11px;
    width: 100%;
  }
`;