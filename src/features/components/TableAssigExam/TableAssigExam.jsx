import React, { useState } from 'react'
import styles from './TableAssigExam.module.css'
import { Modal } from 'react-bootstrap';
export default function TableAssigExam({ type, data }) {
    const [modalShow, setModalShow] = useState(false);

    const { quiz } = data

    console.log(data);



    return <>
        <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
        >
            <div className="d-flex">
                <span className='rounded mt-3 ms-4 pe-2'><Modal.Header style={{borderBottom:'none'}} closeButton /></span>

            </div>


            <Modal.Body className="text-center d-flex flex-column justify-content-center align-items-center gap-3" style={{ height: '300px', borderRadius: '12px' }}>
                <h4>هل تريد بدأ الواجب الان؟</h4>
                <div className="d-flex align-items-center gap-3 mt-4 ">
                    <button onClick={() => { setModalShow(false); }} className={`btnBgOrange f-Almarai-400 f-size-16`} style={{ width: '180px' }}>
                        ابدأ الواجب
                    </button>
                    <button onClick={() => { setModalShow(false); }} className={`btnBglight f-Almarai-400 f-size-16`} style={{ width: '180px' }}>
                        الغاء
                    </button>
                </div>

            </Modal.Body>

        </Modal>


        <table className={` ${styles.tableAssigExam} mt-5`}>
            <thead className={` ${styles.tableHead}`}>
                <tr>
                    <th>عدد الاسئلة</th>
                    <th>النتيجة</th>
                    <th>الدرجة</th>
                    <th>عدد المحاولات</th>
                    <th>المحاولات المتبقية</th>
                    <th>عدد الاسئلة المحلولة</th>
                    <th>عدد الاسئلة الصحيحة</th>
                    <th>{type == "امتحان" ? "وقت بدا الامتحان" : "وقت بدا الواجب"}</th>
                    <th>{type == "امتحان" ? "وقت انهاء الامتحان" : "وقت انهاء الواجب"}</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>{type == "امتحان" ? quiz.num_questions : ""}</td>
                    <td>{type == "امتحان" ? "80%" : ""}</td>
                    <td>{type == "امتحان" ? "80 من 100" : ""}</td>
                    <td>{type == "امتحان" ? quiz.quiz_attempts_number : ""}</td>
                    <td>{type == "امتحان" ? "38" : ""}</td>
                    <td>{type == "امتحان" ? "38" : ""}</td>
                    <td>{type == "امتحان" ? "38" : ""}</td>
                    <td>{type == "امتحان" ? (<><span className='d-block'>{quiz.available_from.slice(0, 11)}</span> <span>{quiz.available_from.slice(12, 16)}</span> {quiz.available_from.slice(11, 13) <= 12 ? "مساءا" : "صباحا"} </>) : ""}</td>
                    <td>{type == "امتحان" ? (<><span className='d-block'>{quiz.available_to.slice(0, 11)}</span> <span>{quiz.available_to.slice(12, 16)}</span> {quiz.available_to.slice(11, 13) <= 12 ? "مساءا" : "صباحا"} </>) : ""}</td>
                </tr>
            </tbody>
        </table>
        <div className="btn my-5">
            <button onClick={() => { setModalShow(true) }} className={`btnBgOrange f-Almarai-400 f-size-16`}>
                {type == "امتحان" ? "ابدا الامتحان" : "ابدا الواجب"}
            </button>
        </div>
    </>
}
