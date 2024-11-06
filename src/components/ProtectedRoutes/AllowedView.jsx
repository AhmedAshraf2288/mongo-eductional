import { Fragment, useMemo } from "react";
import { useStore } from "../zustand/store";

export default function AllowedView({ allowedRoles, children }) {
  const authData = useStore((state) => state.authData);

  const allowed = useMemo(() => {
    return allowedRoles.includes(authData?.user?.role);
  }, [allowedRoles, authData]);

  if (!allowed) return null;

  return <Fragment>{children}</Fragment>;
}
