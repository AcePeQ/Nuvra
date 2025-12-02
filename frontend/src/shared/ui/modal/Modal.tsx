import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { createContext, useState } from "react";

interface ModalProps {
  children: React.ReactNode;
}

interface ModalContextType {
  isOpen: boolean;
  toggleModal: (status: boolean) => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

function Modal({ children }: ModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleModal(status: boolean) {
    setIsOpen(status);
  }

  const ctx = {
    isOpen,
    toggleModal,
  };

  return createPortal(
    <ModalContext.Provider value={ctx}>
      <div aria-modal role="dialog" className={styles.modal}>
        <div aria-disabled className={styles.modal__overlay}></div>
        <div className={styles.modal__content}>{children}</div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("modals")!
  );
}

export default Modal;
