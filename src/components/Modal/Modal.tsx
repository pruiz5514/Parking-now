import { IModal } from "app/types/IModal";
import { CloseButton, ModalContainer, Overlay } from "./modal-style";

const Modal: React.FC<IModal> = ({ isOpen, onClose, children }) => {
    return(
        <Overlay isOpen={isOpen} onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>×</CloseButton>
                {children}
            </ModalContainer>
        </Overlay>
    );
};
export default Modal;