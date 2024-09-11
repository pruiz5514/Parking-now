import styled from 'styled-components';

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  width:100%
`;

export const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid var(--orange);
  background-color: var(--white);
  font-size: 12px;
  color: var(--blue-dark);
  outline: none;
  resize: none;
`;
