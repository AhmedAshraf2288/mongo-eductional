import { useParams } from "react-router";
import Loading from "../../../components/Loading/Loading";
import { useSingleWatchItemData } from "../../../queries/queries";
import YoutubeVideoPlayer from "../../../components/YoutubeVideoPlayer/YoutubeVideoPlayer";
import useAxios from "../../../hooks/useAxios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Comments from "../components/Comments/Comments"

export default function Video() {
  const { itemSlug } = useParams();
  const { data, isLoading } = useSingleWatchItemData(itemSlug, "video");
  const axios = useAxios();

  console.log(data);
  

  const submitVideoView = async () => {
    const formData = new FormData();
    formData.append("video", itemSlug);

    try {
      const response = await axios.post("/my-learning/view-lesson", formData);
      console.log({ response });
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        console.log("Unauthorized!");
      }
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    let isClicked = false;
    window.focus();

    const handleIframeFirstClick = () => {
      if (
        (document.activeElement.classList.contains("video-iframe") ||
          document.activeElement.closest(".video-iframe")) &&
        !isClicked
      ) {
        isClicked = true;
        submitVideoView();
      }
    };

    window.addEventListener("blur", handleIframeFirstClick);
    document.addEventListener("click", handleIframeFirstClick);

    return () => {
      window.removeEventListener("blur", handleIframeFirstClick);
      document.removeEventListener("click", handleIframeFirstClick);
    };
  }, [itemSlug]);

  console.log(data);
  

  if (isLoading) return <Loading />;

  if (!data) return null;

  return (
    <>
      <div className="d-flex flex-grow-1 overflow-hidden">
        {data.reached_max_num_of_views ? (
          <div className="p-3 pt-5 fs-4 w-100 text-center">
            <img
              className="w-100 mb-3"
              src="/assets/images/spreadsheet.svg"
              alt=""
            />
            <p className="dark_text-white">
              لقد استهلكت عدد مرات مشاهدة الفيديو المتاحة لك
            </p>
            <p className="dark_text-white">اسم الفيديو: {data?.title}</p>
            <p className="dark_text-white">وصف الفيديو: {data?.description}</p>
          </div>
        ) : (
          <YoutubeVideoPlayer
            type={data?.type?.value}
            url={
              !data?.type?.value
                ? data?.url
                : `https://iframe.mediadelivery.net/embed/${data?.bunny_lib_id}/${data?.url}`
            }
          />
        )}
      </div>
    </>
  );
}
