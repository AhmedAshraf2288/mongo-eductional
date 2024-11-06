import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import styles from "./ReviewStars.module.css";
import { useMemo } from "react";

export default function ReviewStars({ rate, id }) {
  const starsElements = useMemo(() => {
    let fullStars = rate - (rate % 1);
    let halfStar = rate % 1 ? 1 : 0;
    let emptyStars = 5 - (fullStars + halfStar);
    
    const stars = [];
    for (let i = 0; i < fullStars; i++)
      stars.push(<IoStar key={`review-star-${id}-${i}`} />);
    if (halfStar)
      stars.push(<IoStarHalf key={`review-star-${id}-${fullStars}`} />);
    for (let i = 0; i < emptyStars; i++)
      stars.push(
        <IoStarOutline key={`review-star-${id}-${fullStars + halfStar + i}`} />
      );

    return stars;
  }, [rate]);

  return (
    <div className={`${styles.review} d-flex gap-2 align-items-center`}>
      <div className="text-warning d-flex gap-1 fs-6">{starsElements}</div>
    </div>
  );
}
