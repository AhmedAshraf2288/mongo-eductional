import axios from "axios";
import { useStore } from "../zustand/store";

// const API_LINK = "https://bio-clinic.integration25.com/api/v1";
// const API_LINK = "https://api.samehahmed.com/api/v1";
// const API_LINK = "https://vocab.smelectro.tech/api/v1";
const API_LINK = "https://devlms.fast-web1.net/api/v1";
// const API_LINK = "https://mohamed-elghareeb.com/api/v1";


export default function useAxios() {
  const authData = useStore((state) => state.authData);

  return axios.create({
    baseURL: API_LINK,
    headers: {
      Authorization: `Bearer ${authData ? authData.token : ""}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}