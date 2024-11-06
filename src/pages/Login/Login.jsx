import { Col, Row } from "react-bootstrap";
import styles from "./Login.module.css";
import { Form, Formik } from "formik";
import TextInput from "../../components/Inputs/TextInput";
import { FaKey, FaLock, FaPhone } from "react-icons/fa6";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useStore } from "../../zustand/store";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import Confirm from "../../components/Confirm/Confirm";
import { useSettingsData } from "../../queries/queries";
import '../../../src/index.css';

export default function Login() {
  const { data: settings } = useSettingsData();
  const contactNumber = settings?.find((item) => item.key === "contact_number");
  const loginImage = settings?.find((item) => item.key === "login_image");
  const setAuthData = useStore((state) => state.setAuthData);
  const [isCodeSwitchActive, setIsCodeSwitchActive] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [isNotVerified, setIsNotVerified] = useState(false);
  const userDetails = useRef({});
  const axios = useAxios();
  const howToRegister = settings?.find((item) => item.key === "how_to_pay");

  const copyContactNumber = () => {
    navigator.clipboard.writeText(contactNumber?.value);
    toast.success("تم نسخ الرقم بنجاح");
  };

  const copyStudentCode = () => {
    navigator.clipboard.writeText(userDetails.current.code);
    toast.success("تم نسخ الكود بنجاح");
  };

  const loginMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post("/login", data);
      return response.data;
    },
    onSuccess: (data) => {
      if (!data.data.token) {
        userDetails.current = data?.data;
        setIsNotVerified(true);
        return;
      }
      setAuthData(data.data);
      toast.success(data?.message);
    },
    onError: (error) => {
      const response = error.response.data;
      toast.error(response?.message);
    },
  });

  useEffect(() => {
    const scroll = document.scrollingElement;
    scroll.scrollTop = 300
  }, [])

  return <>
    <section >
      <div className={`${styles.loginPage} position-relative`}>
        <Row className="m-0 w-100 text--dark gap-5 flex-xl-div pt-5 pb-5">
          <Col lg={6} md={6} sm={12}>
            <div >
              <div className={`${styles.formLogin} w-75 mx-auto d-flex flex-column justify-content-center position-relative `}>


                <div className={`text-center`}>

                  <h1 className="mb-3 f-Cairo-600 f-size-48">تسجيل دخول</h1>

                  <p className="f-Cairo-500 f-size-24">
                    ادخل على حسابك بادخال رقم الهاتف وكلمة المرور المسجل بها من قبل
                  </p>
                </div>
                <div className="pb-4">
                  <Link
                    target="_blank"
                    to={howToRegister?.value}
                    className={`${styles.link} text-decoration-underline`}
                  >
                    كيفية تسجيل الدخول والاشتراك
                  </Link>
                </div>
                <Formik
                  initialValues={{ identifier: "", password: "" }}
                  onSubmit={(values) => {
                    loginMutation.mutate(values);
                  }}
                >
                  <Form action="">
                    {isCodeSwitchActive ? (
                      <>
                        <TextInput
                          as="field"
                          name="code"
                          label="أدخل الكود"
                          icon={<FaLock />}
                        />
                        <TextInput
                          as="field"
                          name="confirm_code"
                          label="أعد كتابة الكود"
                          icon={<FaLock />}
                        />
                      </>
                    ) : (
                      <>
                        <TextInput
                          as="field"
                          name="identifier"
                          label="رقم الهاتف او Id"
                          icon={<FaPhone />}

                        />
                        <TextInput
                          as="field"
                          name="password"
                          type="password"
                          label="كلمة السر"
                          icon={<FaKey />}
                        />
                      </>
                    )}
                    <Button
                      className={`${styles.btnLogin} f-Almarai-600 mb-4 w-md-50 mx-auto`}
                      type="submit"
                      isLoading={loginMutation.isPending}
                      bigPadding
                    >
                      تسجيل الدخول
                    </Button>
                    <p>
                      هل نسيت كلمة السر؟
                      <button
                        onClick={() => setIsChangePassword(true)}
                        type="button"
                        className="bg-transparent border-0 text--red"
                      >
                        اضغط هنا
                      </button>
                    </p>
                    <p>
                      لا يوجد لديك حساب؟ <Link to="/register" className={styles.newAccount_link}>انشئ حساب جديد</Link>
                    </p>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p className="mb-0 text--red">او قم بتسجيل الدخول عن طريق الكود</p>
                      <div
                        className={[
                          styles.switchToggler,
                          isCodeSwitchActive ? styles.active : null,
                        ].join(" ")}
                        onClick={() => setIsCodeSwitchActive((prev) => !prev)}
                      >
                        <span></span>
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </Col>







          <Col lg={6} md={6}>
            <div>
              <img
                className={`tree2__png`}
                src="/assets/images/Home/yellow-mango-tree-isolated-white-background 1.png"
                alt=""
              />
              <img
                className={`logoMango2__gif`}
                src="/assets/images/Home/profile 2.png"
                alt=""
              />
            </div>
          </Col>
        </Row>
















        <Confirm
          isOpen={isChangePassword}
          setIsOpen={setIsChangePassword}
          type="warning"
          message={`يرجى التواصل مع هذا الرقم لتغيير كلمة السر خاصتك: ${contactNumber?.value} ، هل تريد نسخ الرقم ؟`}
          confirmFunc={copyContactNumber}
        />
        <Confirm
          isOpen={isNotVerified}
          setIsOpen={setIsNotVerified}
          type="warning"
          message={`حسابك غير مفعل ، برجاء الانتظار حتى يقوم الأدمن بتفعيل حسابك ، كود الطالب الخاص بك هو: ${userDetails.current.code} ، هل تريد نسخ الكود ؟`}
          confirmFunc={copyStudentCode}
        />
        <div className="imgWallGreen">
          <img
            className={`wallGreen__gif`}
            src="/assets/images/Home/Rectangle 2.png"
            alt=""
          />
        </div>
      </div>
    </section>

  </>
}