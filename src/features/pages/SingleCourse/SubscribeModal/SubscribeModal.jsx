
import { Col, Modal, Row } from "react-bootstrap";
import Button from "../../../../components/Button/Button";
import { useState } from "react";
import SubscribeCodeModal from "../SubscribeCodeModal/SubscribeCodeModal";
import { useStore } from "../../../../zustand/store";

export default function SubscribeModal({
  isOpen,
  setIsOpen,
  confirmFunc,
  loading,
}) {
  const [codeSubscribeOpen, setCodeSubscribeOpen] = useState();
  const theme = useStore((state) => state.theme);

  return (
    <Modal
      centered
      size="lg"
      show={isOpen}
      onHide={() => setIsOpen(false)}
      className=" overflow-hidden"
    >
      <div
        className={`p-5`}
        style={{
          backgroundColor: theme == "dark" ? "#1a1a1a" : "#E5F3FF",
          borderRadius: "5px",
        }}
      >
        <p
          className="fs-5 text-center"
          style={{ color: theme == "dark" ? "#fff" : "#000" }}
        >
          اختر طريقة الدفع
        </p>
        <Row className="justify-content-center flex-column">
          <Col md={4} className="mb-3 w-100">
            <Button
              className="w-50 mx-auto"
              onClick={() => {
                confirmFunc({ payment_method: 1 });
              }}
              isLoading={loading}
            >
              دفع محفظة
            </Button>
          </Col>
          <Col md={4} className="mb-3 w-100">
            <Button
              className="w-50 mx-auto"
              onClick={() => {
                setCodeSubscribeOpen(true);
              }}
            >
              دفع كود
            </Button>
          </Col>
          <Col md={4} className="mb-3 w-100">
            <Button className="w-50 mx-auto" variant="">
              دفع فيزا
            </Button>
          </Col>
        </Row>
        <SubscribeCodeModal
          isOpen={codeSubscribeOpen}
          setIsOpen={setCodeSubscribeOpen}
          loading={loading}
          confirmFunc={confirmFunc}
        />
      </div>
    </Modal>
  );
}
