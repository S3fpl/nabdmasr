'use client'

import React, { useState, useEffect } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

interface Comment {
    id: number;
    text: string;
    author: string;
    likes: number;
    timestamp: string;
    createdAt: number; // Store creation timestamp
}

const CommentsPage = () => {
    const [comments, setComments] = useState<Comment[]>([])
    const [newComment, setNewComment] = useState('')
    const [author, setAuthor] = useState('')

    // Load comments from localStorage on component mount
    useEffect(() => {
        const savedComments = localStorage.getItem('comments')
        if (savedComments) {
            setComments(JSON.parse(savedComments))
        }
    }, [])

    // Save comments to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments))
    }, [comments])

    // Check for expired comments every minute
    useEffect(() => {
        const checkExpiredComments = () => {
            const now = Date.now()
            const tenDaysInMs = 10 * 24 * 60 * 60 * 1000 // 10 days in milliseconds

            setComments(prevComments =>
                prevComments.filter(comment =>
                    now - comment.createdAt < tenDaysInMs
                )
            )
        }

        const interval = setInterval(checkExpiredComments, 60000) // Check every minute
        return () => clearInterval(interval)
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newComment.trim() || !author.trim()) return

        const comment: Comment = {
            id: Date.now(),
            text: newComment,
            author: author,
            likes: 0,
            timestamp: new Date().toLocaleString(),
            createdAt: Date.now()
        }

        setComments([...comments, comment])
        setNewComment('')
    }

    const handleLike = (id: number) => {
        setComments(comments.map(comment =>
            comment.id === id
                ? { ...comment, likes: comment.likes + 1 }
                : comment
        ))
    }

    const getDaysRemaining = (createdAt: number) => {
        const now = Date.now()
        const tenDaysInMs = 10 * 24 * 60 * 60 * 1000
        const remainingMs = tenDaysInMs - (now - createdAt)
        return Math.ceil(remainingMs / (24 * 60 * 60 * 1000))
    }

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-24">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 text-center text-red-600">
                    Comments
                </h1>

                {/* Comment Form */}
                <form onSubmit={handleSubmit} className="mb-12 backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-sm border border-red-100 max-w-2xl mx-auto">
                    <div className="mb-6">
                        <label className="block text-red-500 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="w-full p-3 rounded-xl bg-transparent border border-red-200 duration-200 outline-none text-white placeholder-red-200"
                            required
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-red-500 font-medium mb-2">Comment</label>
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="w-full p-3 rounded-xl bg-transparent border border-red-200 duration-200 outline-none text-white placeholder-red-200"
                            rows={4}
                            required
                            placeholder="Write your comment here..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-600 transform hover:scale-[1.02] transition-all duration-200"
                    >
                        Add Comment
                    </button>
                </form>

                {/* Comments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                    {comments.map((comment) => {
                        const daysRemaining = getDaysRemaining(comment.createdAt)
                        // Determine grid span based on index and content length
                        const isLongComment = comment.text.length > 100
                        const gridSpan = isLongComment ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'

                        return (
                            <div
                                key={comment.id}
                                className={`backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-sm border border-red-100 transform hover:scale-[1.01] transition-all duration-200 h-full flex flex-col ${gridSpan}`}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-semibold text-white text-lg">{comment.author}</h3>
                                    <span className="text-sm text-red-200">{comment.timestamp}</span>
                                </div>
                                <p className="text-white mb-4 leading-relaxed flex-grow overflow-y-auto">{comment.text}</p>
                                <div className="flex justify-between items-center mt-auto">
                                    <button
                                        onClick={() => handleLike(comment.id)}
                                        className="flex items-center gap-2 text-red-200 hover:text-red-500 transition-colors duration-200"
                                    >
                                        {comment.likes > 0 ? (
                                            <FaHeart className="text-red-500 transform hover:scale-110 transition-transform duration-200" />
                                        ) : (
                                            <FaRegHeart className="transform hover:scale-110 transition-transform duration-200" />
                                        )}
                                        <span className="font-medium">{comment.likes}</span>
                                    </button>
                                    <span className={`text-sm ${daysRemaining <= 3 ? 'text-red-400' : 'text-red-200'}`}>
                                        {daysRemaining} days remaining
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CommentsPage