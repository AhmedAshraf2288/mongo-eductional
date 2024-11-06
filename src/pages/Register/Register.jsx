import { Col, Container, Row } from "react-bootstrap";
import { ErrorMessage, Form, Formik } from "formik";
import TextInput from "../../components/Inputs/TextInput";
import { FaKey, FaUser } from "react-icons/fa6";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import SelectField from "../../components/Inputs/SelectField";
import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { MdPhoneIphone } from "react-icons/md";
import {
  useEducationLevelsData,
  useGovernratesData,
  useSettingsData,
} from "../../queries/queries";
import useAxios from "../../hooks/useAxios";
import { useStore } from "../../zustand/store";
import { toast } from "react-toastify";
import Confirm from "../../components/Confirm/Confirm";
import { FaPhone } from "react-icons/fa";
import styles from "./Register.module.css";
import '../../index.css';


export default function Register() {
  const { data: settings } = useSettingsData();
  const registerImage = settings?.find((item) => item.key === "register_image");
  const howToRegister = settings?.find(
    (item) => item.key === "how_to_register"
  );
  const formRef = useRef(null);

  const { data: governratesData } = useGovernratesData();
  const { data: educationLevelsData } = useEducationLevelsData();
  const [isNotVerified, setIsNotVerified] = useState(false);
  const userDetails = useRef({});
  const axios = useAxios();
  const setAuthData = useStore((state) => state.setAuthData);
  const [formErr, setFormErr] = useState({});

  const governratesOptions = useMemo(() => {
    if (!governratesData) return [];
    return governratesData.map((item) => {
      return { label: item.title, value: item.slug };
    });
  }, [governratesData]);

  const educationLevelsOptions = useMemo(() => {
    if (!educationLevelsData) return [];
    return educationLevelsData.map((item) => {
      return { label: item.title, value: item.slug };
    });
  }, [educationLevelsData]);


  const copyStudentCode = () => {
    navigator.clipboard.writeText(userDetails.current.code);
    toast.success("تم نسخ الكود بنجاح");
  };

  const registerMutation = useMutation({
    mutationFn: async (data) => {
      return axios.post("/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: (data) => {
      const response = data.data;
      console.log(data.data);

      toast.success(response.message);
      formRef?.current?.resetForm();
      if (!response.data.token) {
        userDetails.current = response.data;
        setIsNotVerified(true);
        return;
      }

      setAuthData(response.data);
    },
    onError: (error) => {
      const response = error.response.data;
      setFormErr(response.data);
      toast.error(response.message);
    },
  });

  useEffect(() => {
    const scroll = document.scrollingElement;
    scroll.scrollTop = 300
    return () => {
      console.log("mo");

    }
  }, [])

  return (
    <section>
      <div className={` ${styles.registerPage} section position-relative`}>
        <Row className="m-0 w-100 text--dark align-items-center flex-column-reverse flex-xl-row">
          <Col lg={6} className={`${styles.formRegister} d-flex flex-column align-items-center`}>
            <div className={`w-75 text-center`}>
              <h1 className="mb-3 f-size-48 f-Cairo-600">طلب انشاء حساب</h1>
              <p className=" f-size-24 f-Cairo-500">
                ادخل بياناتك بشكل صحيح و هيتم التواصل معاك <br /> في خلال 24 ساعة
                لتفعيل الحساب
              </p>
              <div className="pb-4">
                <Link
                  target="_blank"
                  to={howToRegister?.value}
                  className={`${styles.link} text-decoration-underline`}
                >
                  كيفية عمل حساب على المنصه
                </Link>
              </div>
              <Formik
                innerRef={formRef}
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  parent_phone: "",
                  governrate: "",
                  educ_level: "",
                  password: "",
                  password_confirmation: "",
                }}
                onSubmit={(values) => {
                  registerMutation.mutate(values);
                }}
              >
                {() => {
                  return (
                    <Form>
                      <TextInput
                        as="field"
                        name="name"
                        backError={formErr.name}
                        label="الأسم"
                        icon={<FaUser className="text--primary" />}
                      />
                      <div className="d-flex gap-4">
                        <TextInput
                          as="field"
                          name="phone"
                          backError={formErr.phone}
                          label="رقم الهاتف"
                          icon={<FaPhone />}
                        />
                        <TextInput
                          as="field"
                          name="parent_phone"
                          backError={formErr.parent_phone}
                          label="رقم هاتف ولي الامر"
                          icon={<MdPhoneIphone />}
                        />
                      </div>
                      <SelectField
                        className={`${styles.SelectField}`}
                        options={governratesOptions}
                        name="governrate"
                        backError={formErr.governrate}
                        error={<ErrorMessage name="governrate" />}
                        title="المحافظة"
                        placeholder="محافظة الطالب"
                      />
                      <SelectField
                        options={educationLevelsOptions}
                        name="educ_level"
                        backError={formErr.educ_level}
                        error={<ErrorMessage name="educ_level" />}
                        title="المرحلة الدراسية"
                        placeholder="المرحلة الدراسية للطالب"
                      />
                      <div className="d-flex gap-4">
                        <TextInput
                          as="field"
                          name="password"
                          backError={formErr.password}
                          type="password"
                          label="كلمة السر"
                          icon={<FaKey />}
                          className="w-100 bg-transparent"
                        />
                        <TextInput
                          as="field"
                          name="password_confirmation"
                          backError={formErr.password_confirmation}
                          type="password"
                          label="تأكيد كلمة السر"
                          icon={<FaKey />}
                          className="w-100 bg-transparent"
                        />
                      </div>

                      <Button
                        className="mb-4 mx-auto"
                        type="submit"
                        isLoading={registerMutation.isPending}
                      >
                        طلب إنشاء حساب جديد
                      </Button>
                      <p>
                        هل يوجد لديك حساب بالفعل؟{" "}
                        <Link
                          to="/login"
                          className={styles.go_to_account_link}
                        >
                          ادخل الي حسابك الان!
                        </Link>
                      </p>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </Col>



          <Col lg={6} md={6} className=" p-0 mb-5 mb-md-0">
            <div className=" d-xl-block d-lg-block d-md-block d-sm-none d-none">
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

    </section >
  );
}
