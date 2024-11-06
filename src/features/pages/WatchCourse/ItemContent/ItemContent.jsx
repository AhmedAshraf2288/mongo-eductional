import Loading from "../../../../components/Loading/Loading";
import { useSingleWatchItemData } from "../../../../queries/queries";
import YoutubeVideo from "../Video/YoutubeVideo/YoutubeVideo";

export default function ItemContent({ activeItem }) {
  const { data, isLoading } = useSingleWatchItemData(activeItem);

  if(isLoading) return <Loading />

  if(!data) return null;

  return (
    <div className="d-flex flex-grow-1">
      <YoutubeVideo url="https://www.youtube.com/embed/4XcDw_iHTTQ?si=HqWoGorU-7QSjwPS"/>
      <iframe
        className="w-100"
        style={{
          aspectRatio: 560 / 315,
        }}
        // src={courseData.lectures[0].items[0].url}
        src={"https://www.youtube.com/embed/4XcDw_iHTTQ?si=HqWoGorU-7QSjwPS"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                            gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
