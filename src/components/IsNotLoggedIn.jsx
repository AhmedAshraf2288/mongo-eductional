import { Navigate } from "react-router";
import { useStore } from "../zustand/store"

export default function IsNotLoggedIn({children}) {
  const authData = useStore(state => state.authData);

  if(authData) return <Navigate to="/"/>

  return children;
}
