import { useNavigate } from "react-router";
import { Fragment, useEffect } from "react";
import { useStore } from "../../zustand/store";

export default function IsLoggedIn({ children }) {
  const authData = useStore((state) => state.authData);
  const navigator = useNavigate();

  useEffect(() => {
    if (authData) {
      navigator("/");
    }
  }, [authData, navigator]);

  return <Fragment>{children}</Fragment>;
}
