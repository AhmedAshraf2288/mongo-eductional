import { Navigate, useNavigate } from "react-router";
import { useStore } from "../zustand/store"
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import '../index.css'
export default function IsLoggedIn({ children }) {
  const authData = useStore(state => state.authData);
  const [modalShow, setModalShow] = useState(true);
  let navigate = useNavigate()

  return <>
    {authData ? children : <> <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
      style={{ backgroundColor: "#007a3136",backdropFilter:'blur(30px)' }}
    >

      <Modal.Body className="text-center d-flex flex-column justify-content-center align-items-center gap-3" style={{ height: '300px', borderRadius: '12px' }}>
        <h4>يجب تسجيل الدخول اولا!</h4>
        <div className="d-flex flex-column align-items-center gap-3 mt-4 ">
          <button onClick={() => { setModalShow(false); return navigate('/login') }} className={`btnBgOrange f-Almarai-400 f-size-16`}>
            تسجيل دخول
          </button>
          <button onClick={() => { setModalShow(false); return navigate('/register') }} className={`btnBglight f-Almarai-400 f-size-16`}>
            انشاء حساب
          </button>
        </div>

      </Modal.Body>

    </Modal></>}
  </>
}
