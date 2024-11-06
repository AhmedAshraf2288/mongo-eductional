import { Fragment, useEffect, useMemo } from "react";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { ToastContainer } from "react-toastify";
import { useSettingsData } from "./queries/queries";
import { IntlProvider } from "react-intl";
import messages from "./translations/messages";
import { setFavIcon } from "./utils/helpers";
import NotificationsPusher from "./features/components/NotificationsPusher/NotificationsPusher";
import PageAllCourses from "./components/CoursesList/PageAllCourses/PageAllCourses";

const locale = localStorage.getItem("lang") || "ar";

function App() {
  const translation = messages[locale];
  const { data: settings } = useSettingsData();

  const logoPage = useMemo(() => {
    if (!settings || !settings.length) return "";
    return settings.find((ele) => ele.key === "fav_icon")?.value;
  }, [settings]);

  useEffect(() => {
    if (logoPage) {
      setFavIcon(logoPage);
    } else {
      setFavIcon("/assets/images/NavImages/logo-01.svg");
    }
  }, [logoPage]);

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      console.log(e);

    };

    const handleKeyDown = (e) => {
      // if (e.keyCode === 123) {
      //   e.preventDefault();
      // }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
      }
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  

  return (
    <Fragment>
      <IntlProvider locale={locale} messages={translation} defaultLocale="ar">
        <RouterProvider router={router} />
      </IntlProvider>
      <ToastContainer position={"top-right"} autoClose={3000} />
      <NotificationsPusher />
      <link
        rel="icon"
        href={
          settings && logoPage
            ? logoPage
            : "/assets/images/NavImages/logo-01.svg"
        }
      />

    </Fragment>
  );
}

export default App;
