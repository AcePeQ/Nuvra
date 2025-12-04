import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { cloneElement, createContext, JSX, useContext, useState } from "react";
import Button from "../button/Button";

interface ModalProps {
  title?: string;
  children: React.ReactNode;
}

interface ModalContextType {
  title?: string;
  isOpen: boolean;
  toggleModal: (status: boolean) => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function useModalContext() {
  const ctx = useContext(ModalContext);

  if (!ctx) throw new Error("Modal context must be used inside Modal");

  return ctx;
}

function Modal({ title, children }: ModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleModal(status: boolean) {
    setIsOpen(status);
  }

  const ctx = {
    title,
    isOpen,
    toggleModal,
  };

  return <ModalContext.Provider value={ctx}>{children}</ModalContext.Provider>;
}

function ModalTrigger({ children }: { children: JSX.Element }) {
  const { toggleModal } = useModalContext();

  if (!children) {
    throw new Error("Modal trigger must have children");
  }

  return cloneElement(children, {
    onClick: () => toggleModal(true),
  });
}

function ModalHeader() {
  const { title, toggleModal } = useModalContext();

  if (!title) throw new Error("Modal must have a title");

  return (
    <header className={styles.modal__header}>
      <h2 className={styles.modal__title}>{title}</h2>
      <button
        aria-label="Close modal"
        type="button"
        className={styles.modal__closeButton}
        onClick={() => toggleModal(false)}
      >
        <svg
          className={styles.icon}
          aria-disabled
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8532 11.5274C13.0293 11.7035 13.1283 11.9424 13.1283 12.1915C13.1283 12.4405 13.0293 12.6794 12.8532 12.8555C12.6771 13.0317 12.4382 13.1306 12.1891 13.1306C11.9401 13.1306 11.7012 13.0317 11.5251 12.8555L6.56491 7.89381L1.60319 12.854C1.42707 13.0301 1.1882 13.129 0.939126 13.129C0.690054 13.129 0.451184 13.0301 0.275064 12.854C0.0989435 12.6778 3.71146e-09 12.439 0 12.1899C-3.71146e-09 11.9408 0.0989435 11.702 0.275064 11.5258L5.23678 6.56569L0.276626 1.60397C0.100506 1.42785 0.00156253 1.18898 0.00156254 0.939907C0.00156254 0.690836 0.100506 0.451965 0.276626 0.275845C0.452746 0.0997246 0.691617 0.000781121 0.940688 0.000781119C1.18976 0.000781116 1.42863 0.0997246 1.60475 0.275845L6.56491 5.23756L11.5266 0.275063C11.7027 0.0989432 11.9416 -4.14954e-09 12.1907 0C12.4398 4.14954e-09 12.6786 0.0989432 12.8547 0.275063C13.0309 0.451184 13.1298 0.690054 13.1298 0.939126C13.1298 1.1882 13.0309 1.42707 12.8547 1.60319L7.89303 6.56569L12.8532 11.5274Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </header>
  );
}

function ModalContent({
  ModalContainer = "div",
  children,
}: {
  children: React.ReactNode;
  ModalContainer?: React.ElementType;
}) {
  const { toggleModal, isOpen } = useModalContext();

  return (
    isOpen &&
    createPortal(
      <div aria-modal role="dialog" className={styles.modal}>
        <div
          aria-disabled
          onClick={() => toggleModal(false)}
          className={styles.modal__overlay}
        ></div>
        <ModalContainer className={styles.modal__content}>
          {children}
        </ModalContainer>
      </div>,
      document.getElementById("modals")!
    )
  );
}

interface ModalFooterProps {
  isDisabled?: boolean;
  children: React.ReactNode;
}

function ModalFooter({ isDisabled = false, children }: ModalFooterProps) {
  const { toggleModal } = useModalContext();

  return (
    <footer className={styles.modal__footer}>
      <Button
        onClick={() => toggleModal(false)}
        isButtonDisabled={isDisabled}
        buttonType="button"
        buttonSize="normal"
        buttonStyle="primary"
        label="Close modal"
      >
        Close
      </Button>
      {children}
    </footer>
  );
}

function ModalBody({ children }: { children: React.ReactNode }) {
  return <> {children} </>;
}

Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
