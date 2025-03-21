import { useState } from "react";
import Image from "next/image";

export default function CommentSection() {
  const [comments, setComments] = useState([
    { text: "Very straight-to-point article. Really worth time reading. Thank you!", date: new Date().toLocaleString() },
    { text: "Loved the insights you shared!", date: new Date().toLocaleString() },
    { text: "Great read, keep it up!", date: new Date().toLocaleString() },
    { text: "Helpful and well-explained, thanks!", date: new Date().toLocaleString() },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = {
        text: newComment,
        date: new Date().toLocaleString(),
      };
      setComments([newCommentObj, ...comments]);
      setNewComment("");
    }
  };

  return (
    <section className="not-format p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-white">
          Discussion ({comments.length})
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="py-2 px-4 mb-4 bg-gray-900/10 rounded-lg border border-gray-700 outline-none backdrop-blur-3xl shadow-xl">
          <label htmlFor="comment" className="sr-only">Your comment</label>
          <textarea
            id="comment"
            rows={4}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="px-0 w-full text-sm text-white border-0 focus:ring-0 placeholder-gray-400 bg-transparent outline-none"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-900 hover:bg-primary-800"
        >
          Post comment
        </button>
      </form>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {comments.map((comment, index) => (
          <article
            key={index}
            className="p-4 md:p-6 text-base bg-gray-900 bg-opacity-30 border border-gray-600 rounded-lg backdrop-blur-md shadow-md"
          >
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 font-semibold text-sm text-white">
                  <Image
                    className="mr-2 w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="User"
                    width={32}
                    height={32}
                  />
                  User Name
                </p>
                <p className="text-sm text-gray-400">
                  <time dateTime={comment.date} title={comment.date}>
                    {comment.date}
                  </time>
                </p>
              </div>
            </footer>
            <p className="text-white">{comment.text}</p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center font-medium text-sm text-gray-400 hover:underline"
              >
                Reply
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
