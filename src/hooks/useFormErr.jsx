import { useState } from "react";
import { toast } from "react-toastify";

export default function useFormErr() {
  const [formErr, setFormErr] = useState({});

  function handleMutationErr(err) {
    if (err.response.status == 422) {
      setFormErr(err.response.data.data);
      toast.error(err.response.data.message);
    } else {
      setFormErr({ general: err.response.data.message });
      toast.error(err.response.data.message);
    }
  }

  return { formErr, setFormErr, handleMutationErr };
}
