import { useParams } from "react-router";

import Loading from "../../../components/Loading/Loading";
import { useSingleWatchItemData } from "../../../queries/queries";

export default function Material() {
  const { itemSlug } = useParams();
  const { data, isLoading } = useSingleWatchItemData(itemSlug, "material");

  const hideBtns = (e) => {
    const iframeDocument = e.target.contentWindow.document;
    try {
      iframeDocument.getElementById("downloads").style.display = "none";
      iframeDocument.getElementById("print").style.display = "none";
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <Loading />;

  if (!data) return null;

  return (
    <div>
      <iframe
        onLoad={(e) => hideBtns(e)}
        src={`${data.url}#toolbar=0`}
      ></iframe>
    </div>
  );
}
