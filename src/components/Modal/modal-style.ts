import styled from 'styled-components';

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Asegura espacio en el top y bottom */
  overflow-y: auto; /* Permite que el modal sea desplazable si es muy alto */
`;

export const ModalContainer = styled.div`
  background: var(--white);
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 80%;
  max-width: 500px;
  max-height: 90vh; /* Limita la altura del modal */
  overflow-y: auto; /* Permite desplazamiento dentro del modal */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
