import { toast } from "react-toastify";
import useAxios from "../../../../hooks/useAxios";
import { useStore } from "../../../../zustand/store";
import styles from "./Comments.module.css";
import { useLayoutEffect, useRef, useState } from "react";
import CommentsList from "./CommentsList/CommentsList";

export default function Comments({ comments, slug }) {
  const authData = useStore((state) => state.authData);
  const [newComments, setNewComments] = useState([]);
  const commentRef = useRef();
  const axios = useAxios();

  useLayoutEffect(() => {
    setNewComments([]);
  }, [slug]);

  const addComment = async (e) => {
    e.preventDefault();
    const comment = commentRef.current.value;
    if (comment.trim() === "") {
      toast.error("يرجى كتابة تعليقك أولا");
      return;
    }

    const data = new FormData();
    data.append("video", slug);
    data.append("body", comment);

    try {
      const response = await axios.post("/my-learning/video-comment", data);
      setNewComments((prev) => [response.data.data, ...prev]);
      commentRef.current.value = "";
      toast.success("تم إضافة التعليق بنجاح");
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        console.log("Unauthorized!");
      }
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="p-3 py-5 bg--dark">
      <h2 className="mb-4 dark_text-white bg--dark">تعليقات الفيديو</h2>
      {comments || newComments.length ? null : (
        <p>لا يوجد أى تعليقات على هذا الفيديو ، كن أول من يترك تعليقا.</p>
      )}
      <form
        onSubmit={addComment}
        className="card-footer p-3 rounded-2"
        style={{ border: "1px solid #dddddd8f" }}
      >
        <div className="d-flex flex-column flex-lg-row bg--dark">
          <img
            className={
              "rounded-circle shadow-1-strong flex-shrink-0 " + styles.userImage
            }
            src={authData.profile_img || "/assets/images/avatar.webp"}
            alt="avatar"
          />
          <div className="form-outline w-100">
            <label
              className="form-label dark_text-white"
              htmlFor="comment_textarea"
            >
              أكتب تعليقك
            </label>
            <textarea
              className="form-control bg-white dark_textarea-black"
              id="comment_textarea"
              placeholder="قم بكتابة تعليقك هنا"
              ref={commentRef}
              style={{
                resize: "none",
                height: "120px",
              }}
            ></textarea>
          </div>
        </div>
        <div className="mt-2 pt-1 d-flex gap-2 justify-content-end">
          <button className="btn btn-primary px-4 py-2">إضافة التعليق</button>
        </div>
      </form>
      <CommentsList comments={comments} />
    </div>
  );
}
