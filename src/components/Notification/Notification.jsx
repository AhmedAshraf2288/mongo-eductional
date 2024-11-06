import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

export default function Notification({ notification }) {
  const [isSeen, setIsSeen] = useState(false);
  const axios = useAxios();
  const queryClient = useQueryClient();

  const markAsSeen = async () => {
    if (notification.read_at || isSeen) {
      return;
    }

    setIsSeen(true);
    try {
      const response = await axios.get(`/notifications/${notification.id}`);
      console.log({ response });
      queryClient.invalidateQueries("notifications");
    } catch (err) {
      setIsSeen(false);
      console.log(err);
      if (err.response.status === 401) {
        console.log("Unauthorized!");
      }
      toast.error(err.response.data.message);
    }
  };

  return (
    <div
      className={`py-2 px-3  cursor-pointer d-flex justify-content-between align-items-center gap-2`}
      onClick={markAsSeen}
      style={{ fontSize: "13px" }}
    >
      <div>
        <p className="mb-0 text--dark">{notification.message}</p>
        <p className="mb-0 text--dark">{notification.time}</p>
      </div>
      {isSeen || notification.read_at ? null : (
        <span className="bg-primary d-block p-1 rounded-circle"></span>
      )}
    </div>
  );
}
