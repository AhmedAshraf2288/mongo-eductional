import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { ScrollRestoration } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { useStore } from "../../zustand/store";

export default function MainLayout() {
  const theme = useStore(state => state.theme);
  return (
    <div data-theme={theme}>
      <ScrollRestoration />
      <Navbar />
        <main className={`${styles.main}`}>
          <Outlet />
        </main>
      <Footer />
    </div>
  );
}
