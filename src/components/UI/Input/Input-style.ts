import styled from 'styled-components';

export const InputContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0.3rem;
  width: 100%;

  @media (max-width: 480px) {
    margin: 0.2rem;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  cursor: pointer;
  color: var(--blue);

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const IconContainer = styled.div`
  position: absolute;
  left: 10px; /* Ajusta esta posición según sea necesario */
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--blue);
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    left: 10px; /* Mantén la misma posición en móviles */
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const SpanIcon = styled.span`
  color: var(--orange);
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 5px 5px 5px 40px; /* Ajusta el padding para dejar espacio para el icono */
  border: 1px solid var(--orange);
  border-radius: 20px;
  font-size: 12px;
  outline: none;
  color: var(--blue-dark);
  box-sizing: border-box; /* Asegura que el padding se incluya en el ancho total */

  @media (max-width: 480px) {
    padding: 5px 5px 5px 35px; /* Ajusta el padding para dispositivos móviles */
    font-size: 11px;
    width: 100%;
  }
`;
