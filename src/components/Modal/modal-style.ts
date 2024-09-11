import styled from 'styled-components';

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 15;
  justify-content: center;
  align-items: center; 
  padding: 20px; 
  `;

export const ModalContainer = styled.div`
  background: var(--white);
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 100%; 
  max-width: 500px;
  max-height: 90vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column; 
  overflow-y: auto;
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

