import styles from "../Comments.module.css"

export default function CommentsList({ comments }) {
    return (
        <>
            {comments?.map(comment => (
                <div className="d-flex flex-start mt-4" key={comment.id}>
                    <img
                        className={"rounded-circle shadow-1-strong flex-shrink-0 " + styles.userImage}
                        src={comment.creator.img || "/assets/images/avatar.webp"}
                        alt="avatar"
                    />
                    <div className="flex-grow-1 flex-shrink-1">
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-1 dark_text-white">{comment.creator.name}</p>
                            </div>
                            <p className="small mb-0 dark_text-white">{comment.body}</p>
                        </div>

                        {comment.replies.map(reply => (
                            <div className="d-flex flex-start mt-4" key={reply.id}>
                                <img
                                    className={"rounded-circle shadow-1-strong flex-shrink-0 " + styles.userImage}
                                    src={comment.creator.img || "/assets/images/avatar-icon.webp"}
                                    alt="avatar"
                                />
                                <div className="flex-grow-1 flex-shrink-1">
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="mb-1 dark_text-white">{reply.creator.name}</p>
                                        </div>
                                        <p className="small mb-0 dark_text-white">{reply.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}
