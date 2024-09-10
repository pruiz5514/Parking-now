import styled from 'styled-components';

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const SwitchLabel = styled.label`
  cursor: pointer;
  width: 100px; /* Ajuste al tamaño de la imagen proporcionada */
  height: 50px;
  background: var(--grey);
  display: block;
  border-radius: 50px;
  border: 1px solid var(--orange);
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 40px;  /* Ajuste de tamaño para el círculo */
    height: 40px;
    background: var(--orange);
    border-radius: 50%;
    transition: 0.3s;
  }

  &:active:after {
    width: 50px;
  }
`;

export const CheckedLabel = styled(SwitchLabel)`
  background: var(--blue);

  &:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;
