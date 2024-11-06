import { Modal } from "react-bootstrap";
import "./MyModal.css";
import { useStore } from "../../zustand/store";

export default function MyModal({ modalName, modalOpen, setModalOpen, children, size }) {
  const isOpen = useStore((state) => state.modalsStates[modalName]) || modalOpen;
  const editModalState = useStore((state) => state.editModalState);

  return (
    <Modal
      centered
      size={size || "xl"}
      show={isOpen}
      onHide={() => {
        editModalState(modalName, false)
        if(setModalOpen) setModalOpen();
      }}
    >
      {children}
    </Modal>
  );
}
