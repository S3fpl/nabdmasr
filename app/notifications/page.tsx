import React from 'react';
import { Bell, MessageSquare, Heart, Star, Settings } from 'lucide-react';

function Notifications() {
    return (
        <section className="min-h-screen mt-16 p-6">
            <div className="container mx-auto max-w-6xl">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-bold text-white">Notifications</h1>
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                        <Settings className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Main Notifications Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Recent Notifications */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Bell className="w-6 h-6 text-blue-400" />
                            <h2 className="text-xl font-semibold text-white">Recent</h2>
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <Bell className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">New notification #{item}</p>
                                            <p className="text-gray-400 text-sm">2 hours ago</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Messages Section */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center gap-3 mb-4">
                            <MessageSquare className="w-6 h-6 text-purple-400" />
                            <h2 className="text-xl font-semibold text-white">Messages</h2>
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                            <MessageSquare className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">New message from User #{item}</p>
                                            <p className="text-gray-400 text-sm">1 hour ago</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Likes Section */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Heart className="w-6 h-6 text-pink-400" />
                            <h2 className="text-xl font-semibold text-white">Likes</h2>
                        </div>
                        <div className="space-y-4">
                            {[1, 2].map((item) => (
                                <div key={item} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                                            <Heart className="w-5 h-5 text-pink-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">New like on your post</p>
                                            <p className="text-gray-400 text-sm">30 minutes ago</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements Section */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Star className="w-6 h-6 text-yellow-400" />
                            <h2 className="text-xl font-semibold text-white">Achievements</h2>
                        </div>
                        <div className="space-y-4">
                            {[1, 2].map((item) => (
                                <div key={item} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                                            <Star className="w-5 h-5 text-yellow-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">New achievement unlocked!</p>
                                            <p className="text-gray-400 text-sm">1 day ago</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* System Section */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Settings className="w-6 h-6 text-green-400" />
                            <h2 className="text-xl font-semibold text-white">System</h2>
                        </div>
                        <div className="space-y-4">
                            {[1, 2].map((item) => (
                                <div key={item} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <Settings className="w-5 h-5 text-green-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">System update available</p>
                                            <p className="text-gray-400 text-sm">2 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Notifications;

