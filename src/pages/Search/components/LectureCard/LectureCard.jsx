import { toast } from 'react-toastify'
import Button from '../../../../components/Button/Button'
import Info from '../../../../components/Info/Info'
import styles from './lectureCard.module.css'
import useAxios from '../../../../hooks/useAxios'
import { useNavigate } from 'react-router'
import { useStore } from '../../../../zustand/store'
import { useState } from 'react'
import Confirm from '../../../../components/Confirm/Confirm'

export default function LectureCard({ lecture }) {
    const [authData, setAuthData] = useStore((state) => [state.authData, state.setAuthData])
    const [enrollConfirmOpen, setEnrollConfirmOpen] = useState(false)
    const navigate = useNavigate()
    const axios = useAxios()

    const enrollInLecture = async () => {
        const data = new FormData()
        data.append("lesson", lecture.slug)
        data.append("enroll_type", "2")
        data.append("payment_method", "1")

        try {
            const response = await axios.post("/courses/enroll", data)
            console.log({ response })
            setAuthData({
                ...authData,
                wallet_balance: response.data.data.wallet_balance
            })
            toast.success("تم الاشتراك بنجاح")
            navigate("/profile/my-courses/")
        } catch (err) {
            console.log(err)
            if (err.response.status === 401) {
                console.log("Unauthorized!")
            }
            toast.error(err.response.data.message)
        }
    }

    return (
        <div className={`w-100 h-100 d-flex flex-column`}>
            <div className={`${styles.card__body} position-relative text--dark flex-grow-1 d-flex flex-column`}>
                <div className={`${styles['card__body-lecture-title']}`}>
                    {lecture.title}
                </div>
                <div className={`${styles['card__body-content']} text-center d-flex flex-column flex-grow-1`}>
                    <div>{lecture.description}</div>
                    <div className={`${styles['card__separator']}`}></div>
                    <div className='d-flex justify-content-between align-items-center mb-4 gap-2 flex-wrap-reverse mt-auto'>
                        {lecture.is_user_enrolled ? (
                            <Button className="fs-6" variant="secondary" rounded as="link" to={`/profile/my-courses/`}>الدخول للمحاضرة</Button>
                        ) : (
                            <>
                                <Button
                                    onClick={() => setEnrollConfirmOpen(true)}
                                    className="fs-6"
                                    variant="secondary"
                                    rounded
                                >
                                    اشترك الآن
                                </Button>
                                {lecture.price === 0 ? (
                                    <div className={`${styles.card__info}`}>محاضرة مجانية!</div>
                                ) : (
                                    <div className='d-flex'>
                                        <Info className="py-2 px-4" variant="red">{lecture.price} جنية</Info>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
                <div className={`${styles.card__date}`}>الاربعاء 6 مارس 2024</div>
            </div>
            <Confirm
                isOpen={enrollConfirmOpen}
                setIsOpen={setEnrollConfirmOpen}
                type="warning"
                message='هل انت متأكد من التسجيل فى المحاضرة ؟'
                confirmFunc={enrollInLecture}
            />
        </div>
    )
}
