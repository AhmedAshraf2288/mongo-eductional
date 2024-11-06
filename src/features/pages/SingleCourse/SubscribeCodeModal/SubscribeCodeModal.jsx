import { Modal } from "react-bootstrap";
import { Form, Formik } from "formik";
import TextInput from "../../../../components/Inputs/TextInput";
import Button from "../../../../components/Button/Button";
import { useStore } from "../../../../zustand/store";

export default function SubscribeCodeModal({
  isOpen,
  setIsOpen,
  confirmFunc,
  loading,
}) {
  const theme = useStore((state) => state.theme);
  return (
    <Modal
      className="modal--small"
      centered
      show={isOpen}
      onHide={() => setIsOpen(false)}
      
    >
      <div className="p-5" >
        <p className="text-center" style={{color: theme === "dark" ? "#FFF"  :"#000"}}>اكتب الكود الخاص بك</p>
        <Formik
          initialValues={{ payment_method: 2, code: "" }}
          onSubmit={(values) => {
            confirmFunc(values);
          }}
        >
          <Form>
            <TextInput as="field" name="code" label="أدخل الكود" placeholder="الكود"/>
            <div className="d-flex justify-content-center gap-3" >
              <Button type="submit" className="w-50">
                دفع
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
}
