import { FaLock } from "react-icons/fa";
import { useParams } from "react-router";
import styles from "./LectureTab.module.css";
import { NavLink } from "react-router-dom";

export default function LectureTab({ lecture, handleClose }) {
  const { slug } = useParams();

  return (
    <div>
      <NavLink
        onClick={handleClose}
        className={({ isActive }) => {
          return `w-100 my-2 d-block cursor-pointer d-flex justify-content-between align-items-center gap-2 ${
            isActive
              ? styles.lecture_tab__title_active
              : styles.lecture_tab__title
          }`;
        }}
        to={`/courses/watch/${slug}/${lecture.slug}`}
      >
        <span className="d-flex align-items-center gap-2">
          <div style={{ padding: "12px 0" }}>
            <p className={`${styles.lecture_label} mb-0`}>
              <svg
                className={`${styles.lecture_tab__title__icon}`}
                width="28px"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "10px" }}
              >
                <path
                  d="M23.7947 19.456L17.9373 16.9333C16.688 16.396 15.2547 16.396 14.0067 16.936L8.18667 19.456C7.22267 19.8733 6.624 20.7853 6.62267 21.8347C6.62133 22.884 7.21867 23.7973 8.18 24.2173L10.6667 25.3027V28.7587C10.6667 30.0573 11.4267 31.2467 12.6053 31.7893C13.6307 32.2613 14.772 32.5 16 32.5C17.228 32.5 18.3693 32.26 19.3973 31.7893C20.5733 31.2467 21.3333 30.056 21.3333 28.7587V25.292L22.6667 24.7133V28.5013C22.6667 29.2387 23.2627 29.8347 24 29.8347C24.7373 29.8347 25.3333 29.2387 25.3333 28.5013C25.3333 28.5013 25.3333 21.9053 25.3333 21.8347C25.3333 20.7987 24.7453 19.864 23.7947 19.4573V19.456ZM15.0667 19.384C15.6427 19.1333 16.3067 19.1333 16.8827 19.3813L22.6827 21.7507C22.6827 21.7693 22.6733 21.784 22.672 21.8027L16.892 24.3133C16.3107 24.5653 15.644 24.5653 15.0627 24.3107L9.24533 21.904L15.0653 19.384H15.0667ZM18.6667 28.7573C18.6667 29.0227 18.5187 29.2573 18.2813 29.3667C16.9347 29.984 15.064 29.984 13.72 29.3667C13.4813 29.2573 13.3333 29.0227 13.3333 28.7573V26.4653L13.9973 26.7547C14.628 27.0293 15.304 27.1667 15.9813 27.1667C16.6547 27.1667 17.328 27.0307 17.956 26.7573L18.6667 26.448V28.7573ZM9.33333 6.5C9.33333 7.604 8.43733 8.5 7.33333 8.5C6.22933 8.5 5.33333 7.604 5.33333 6.5C5.33333 5.396 6.22933 4.5 7.33333 4.5C8.43733 4.5 9.33333 5.396 9.33333 6.5ZM14.6667 6.5C14.6667 7.604 13.7707 8.5 12.6667 8.5C11.5627 8.5 10.6667 7.604 10.6667 6.5C10.6667 5.396 11.5627 4.5 12.6667 4.5C13.7707 4.5 14.6667 5.396 14.6667 6.5ZM25.3333 0.5H6.66667C2.99067 0.5 0 3.49067 0 7.16667V23.1667C0 26.8427 2.99067 29.8333 6.66667 29.8333C7.40267 29.8333 8 29.2373 8 28.5C8 27.7627 7.40267 27.1667 6.66667 27.1667C4.46133 27.1667 2.66667 25.372 2.66667 23.1667V12.5H29.3333V23.1667C29.3333 24.1413 28.9787 25.0813 28.3347 25.8107C27.848 26.3627 27.9 27.2053 28.4533 27.692C29.0027 28.1787 29.8467 28.128 30.3347 27.5733C31.4093 26.3573 32 24.7907 32 23.1653V7.16667C32 3.49067 29.0093 0.5 25.3333 0.5ZM2.66667 9.83333V7.16667C2.66667 4.96133 4.46133 3.16667 6.66667 3.16667H25.3333C27.5387 3.16667 29.3333 4.96133 29.3333 7.16667V9.83333H2.66667Z"
                  fill="currentColor"
                />
              </svg>

              {lecture.title}
            </p>
          </div>
          {lecture.is_user_enrolled ? null : (
            <FaLock className="flex-shrink-0" style={{ color: "#dc3545" }} />
          )}
        </span>
      </NavLink>
    </div>
  );
}
