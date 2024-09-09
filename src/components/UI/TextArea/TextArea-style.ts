import styled from 'styled-components';

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
`;

export const TextAreaStyled = styled.textarea`
  width: 100%;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid var(--orange);
  background-color: var(--white);
  font-size: 12px;
  color: var(--blue-dark);
  outline: none;
  resize: none;
`;
