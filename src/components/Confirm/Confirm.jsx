import { RiErrorWarningFill } from "react-icons/ri";
import { AiFillWarning } from "react-icons/ai";
import { Modal } from "react-bootstrap";
import Button from "../Button/Button";
import styles from "./Confirm.module.css"


export default function Confirm({
  isOpen,
  setIsOpen,
  type,
  message,
  confirmFunc,
  loading,
}) {
  return (
    <Modal
      className="modal--small"
      centered
      show={isOpen}
      onHide={() => setIsOpen(false)}
    >
      <div className={`p-5 ${styles.modal__content}`}>
        <div className={`${styles.confirm__icon} text-center mb-4`}>
          {type == "warning" ? (
            <AiFillWarning className="text-warning" />
          ) : (
            <RiErrorWarningFill className="text-danger" />
          )}
        </div>
        <p className="fs-5 text-center">{message}</p>
        <div className="d-flex gap-3 justify-content-center">
          <Button
            variant="red"
            className="button--big"
            onClick={() => {
              confirmFunc();
              setIsOpen(false);
            }}
          
            isLoading={loading}
          >
            تأكيد
          </Button>
          <Button className="button--big" onClick={() => setIsOpen(false)}>
            الغاء
          </Button>
        </div>
      </div>
    </Modal>
  );
}
