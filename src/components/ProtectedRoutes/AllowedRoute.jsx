import { Fragment } from "react";
import { useStore } from "../zustand/store";
import { Navigate } from "react-router";

export default function AllowedRoute({
  redirect,
  routes,
  allowedRoles,
  children,
}) {
  const authData = useStore((state) => state.authData);

  const allowed = allowedRoles.includes(authData?.user?.role);

  if (!allowed && redirect && authData?.user?.role != undefined) {
    return <Navigate to={routes[authData.user.role]} />;
  } else if (!allowed) {
    return <Navigate to={"/unauthorized"} />;
  }

  return <Fragment>{children}</Fragment>;
}
