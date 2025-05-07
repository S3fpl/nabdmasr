"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";

interface Comment {
    id: number;
    name: string;
    text: string;
    date: string;
    likes: number;
    liked: boolean;
}

const Comments: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState({ name: "", text: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
        // Load comments from localStorage on component mount
        const savedComments = localStorage.getItem("comments");
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        }
    }, []);

    const handleSubmitComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.name.trim() || !newComment.text.trim()) return;

        setIsSubmitting(true);
        const comment: Comment = {
            id: Date.now(),
            name: newComment.name,
            text: newComment.text,
            date: new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
            likes: 0,
            liked: false
        };

        const updatedComments = [comment, ...comments];
        setComments(updatedComments);
        localStorage.setItem("comments", JSON.stringify(updatedComments));
        setNewComment({ name: "", text: "" });
        setIsSubmitting(false);
    };

    const handleLike = (commentId: number) => {
        const updatedComments = comments.map(comment => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
                    liked: !comment.liked
                };
            }
            return comment;
        });
        setComments(updatedComments);
        localStorage.setItem("comments", JSON.stringify(updatedComments));
    };

    return (
        <div className="mt-32 w-full max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold text-white text-center mb-12" data-aos="fade-up">
                Comments
            </h3>

            {/* Comment Form */}
            <div className="mb-16" data-aos="fade-up">
                <form onSubmit={handleSubmitComment} className="max-w-xl mx-auto">
                    <div className="flex gap-4 mb-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={newComment.name}
                            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                            className="flex-1 p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                            required
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                        >
                            {isSubmitting ? "Posting..." : "Post"}
                        </button>
                    </div>
                    <div className="mb-6">
                        <textarea
                            placeholder="Write your comment here..."
                            value={newComment.text}
                            onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors min-h-[80px] resize-none"
                            required
                        />
                    </div>
                </form>
            </div>

            {/* Comments List */}
            <div className="space-y-4" data-aos="fade-up">
                {comments.map((comment) => (
                    <div
                        key={comment.id}
                        className="p-4 rounded-xl relative overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                                        {comment.name.charAt(0).toUpperCase()}
                                    </div>
                                    <h4 className="text-sm font-semibold text-white">{comment.name}</h4>
                                </div>
                                <span className="text-gray-400 text-xs">{comment.date}</span>
                            </div>
                            <p className="text-gray-300 text-sm mb-3">{comment.text}</p>
                            <button
                                onClick={() => handleLike(comment.id)}
                                className="flex items-center gap-1 text-sm text-gray-400 hover:text-red-400 transition-colors"
                            >
                                <svg
                                    className={`w-4 h-4 ${comment.liked ? 'text-red-400 fill-current' : 'text-gray-400'}`}
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                                <span>{comment.likes}</span>
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments; 