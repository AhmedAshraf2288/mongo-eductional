import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "../Button/Button";
import { FormattedMessage } from "react-intl";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import { Link, NavLink } from "react-router-dom";
import NavProfile from "../../features/components/Navbar/NavProfile/NavProfile";
import NavNotifications from "../../features/components/Navbar/NavNotifications/NavNotifications";
import NavWallet from "../../features/components/Navbar/NavWallet/NavWallet";
import { useStore } from "../../zustand/store";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useSettingsData } from "../../queries/queries";
import styles from "./Navbar.module.css";
import '../../index.css'

export default function Navbar() {
  const authData = useStore((state) => state.authData);
  const { data: settings } = useSettingsData();
  const navLogo = settings?.find((item) => item.key === "nav_logo");
  const [isActive, setIsActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY >= 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.nav} ${isActive ? styles.nav__active : ""} ${isFixed ? styles.fixed : ""}`}
      aria-label="قائمة التنقل"
    >
      <Container className="p-0">
        <div className="d-flex flex-row-reverse justify-content-between align-items-center">
          <div className="d-flex gap-2 gap-md-3 align-items-center">
            {authData ? (
              <>
                <NavWallet balance={authData?.wallet_balance} />
                <NavNotifications />
                <NavProfile
                  studentCode={authData.code}
                  studentPoints={authData.points}
                />
              </>
            ) : (
              <>
                <div className="nav-menu d-none d-md-flex gap-3">
                  <Button
                    as="link"
                    to="/login"
                    variant="secondary"
                    className={`f-size-16 f-Almarai-700 d-flex justify-content-center align-items-center gap-1 ${styles.btnLoginNav}`}
                    aria-label="تسجيل الدخول"
                  >
                    <img src="/assets/images/NavImages/bae5b60a9a5e1b1269f5c80b7b205556.gif" alt="صورة تسجيل الدخول" loading="lazy" />
                    <FormattedMessage id="signIn" />
                  </Button>
                  <Button
                    as="link"
                    to="/register"
                    className={`d-flex justify-content-center align-items-center gap-1 ${styles.btnRegisterNav}`}
                    aria-label="إنشاء حساب جديد"
                  >
                    <img src="/assets/images/NavImages/6e3555de155e3eb983b360e1e958d87c.gif" alt="صورة إنشاء حساب" loading="lazy" />
                    <span id="createYourAccountNow">انشاء حساب</span>
                  </Button>
                </div>
                <Button
                  className="d-flex d-md-none"
                  onClick={() => setIsActive((prev) => !prev)}
                  aria-label={isActive ? "إغلاق القائمة" : "فتح القائمة"}
                >
                  {isActive ? <IoMdClose /> : <FaBars />}
                </Button>
              </>
            )}
          </div>
          <div className="d-lg-flex d-none">
            <div
              className={`${authData ? "d-flex" : "d-none"} justify-content-center w-100 align-items-center gap-5`}
            >
              <NavLink className={styles.nav_link} to="/" aria-label="الذهاب إلى الصفحة الرئيسية">
                الرئيسية
              </NavLink>
              <NavLink className={styles.nav_link} to="/dashboard/myCourses" aria-label="الذهاب إلى كورساتي">
                كورساتي
              </NavLink>
              <NavLink className={styles.nav_link} to="/dashboard/wallet" aria-label="الذهاب إلى محفظتي">
                محفظتي
              </NavLink>
              <NavLink className={styles.nav_link} to="/dashboard/codeShipping" aria-label="الذهاب إلى شحن الكود">
                شحن الكود
              </NavLink>
            </div>
          </div>
          <div className="d-flex flex-row-reverse gap-2 gap-md-4 align-items-center">
            <ThemeBtn />
            <Link to="/" className={`${styles.nav__logo}`} aria-label="الذهاب إلى الصفحة الرئيسية">
              <img
                src={navLogo?.value || "/assets/images/NavImages/navbarLogo.svg"}
                alt="شعار الموقع"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}