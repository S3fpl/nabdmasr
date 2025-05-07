'use client';

import React, { useState } from 'react';

type TabType = 'overview' | 'features' | 'impact' | 'technology' | 'community' | 'roadmap';

const Feature = () => {
    const [activeTab, setActiveTab] = useState<TabType>('overview');

    const tabContent: Record<TabType, React.ReactElement> = {
        overview: (
            <div className="space-y-16">
                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center text-center py-20">
                    <h1 className="text-6xl font-bold mb-8 text-white">
                        Revolutionizing Blood Donation
                    </h1>
                    <p className="text-2xl text-gray-300 max-w-3xl leading-relaxed">
                        Join us in creating a more efficient, accessible, and impactful blood donation ecosystem.
                    </p>
                </div>

                {/* Key Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="group backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105">
                        <div className="h-16 w-16 rounded-2xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold mb-4 text-white">Instant Matching</h2>
                        <p className="text-gray-300 leading-relaxed">
                            AI-powered system that instantly matches donors with recipients based on location and blood type.
                        </p>
                    </div>

                    <div className="group backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
                        <div className="h-16 w-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold mb-4 text-white">Smart Scheduling</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Intelligent scheduling system that optimizes donation times and locations for maximum efficiency.
                        </p>
                    </div>

                    <div className="group backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105">
                        <div className="h-16 w-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold mb-4 text-white">Community Driven</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Join a growing community of donors and recipients working together to save lives.
                        </p>
                    </div>
                </div>
            </div>
        ),
        features: (
            <div className="space-y-16">
                {/* Feature Showcase */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="backdrop-blur-xl rounded-3xl p-10 border border-white/10">
                        <div className="flex items-start gap-6">
                            <div className="h-12 w-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Real-time Tracking</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Advanced tracking system that monitors blood supply levels and donation needs in real-time.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="backdrop-blur-xl rounded-3xl p-10 border border-white/10">
                        <div className="flex items-start gap-6">
                            <div className="h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Smart Scheduling</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    AI-powered scheduling that optimizes donation times and locations for maximum efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Features */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                        <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Digital Records</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Secure digital tracking of donation history and health records.
                        </p>
                    </div>
                    <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                        <div className="h-12 w-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Reward System</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Earn points and rewards for regular donations.
                        </p>
                    </div>
                    <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                        <div className="h-12 w-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Emergency Alerts</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Instant notifications for urgent blood requirements.
                        </p>
                    </div>
                </div>
            </div>
        ),
        impact: (
            <div className="space-y-16">
                {/* Impact Statistics */}
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
                        <div className="text-4xl font-bold text-red-400 mb-2">10K+</div>
                        <div className="text-gray-300">Lives Saved</div>
                    </div>
                    <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
                        <div className="text-4xl font-bold text-purple-400 mb-2">50K+</div>
                        <div className="text-gray-300">Active Donors</div>
                    </div>
                    <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
                        <div className="text-gray-300">Partner Hospitals</div>
                    </div>
                    <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
                        <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                        <div className="text-gray-300">Support Available</div>
                    </div>
                </div>

                {/* Success Stories */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="backdrop-blur-xl rounded-3xl p-10 border border-white/10">
                        <div className="flex items-start gap-6">
                            <div className="h-12 w-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Community Impact</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Join a network of over 10,000 donors making a real difference in their communities.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="backdrop-blur-xl rounded-3xl p-10 border border-white/10">
                        <div className="flex items-start gap-6">
                            <div className="h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Emergency Response</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Rapid response system for emergency blood requirements, saving lives in critical situations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        technology: (
            <div className="space-y-16">
                {/* Tech Stack */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="backdrop-blur-xl rounded-3xl p-10 border border-white/10">
                        <h3 className="text-2xl font-semibold mb-6">AI & Machine Learning</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Predictive Analytics for Blood Demand
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Smart Matching Algorithms
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Real-time Optimization
                            </li>
                        </ul>
                    </div>
                    <div className="backdrop-blur-xl rounded-3xl p-10 border border-white/10">
                        <h3 className="text-2xl font-semibold mb-6">Security & Privacy</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                End-to-End Encryption
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                HIPAA Compliance
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Secure Data Storage
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
        community: (
            <div className="space-y-16">
                {/* Community Features */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="backdrop-blur-xl rounded-3xl p-10 border border-white/10">
                        <h3 className="text-2xl font-semibold mb-6">Community Events</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                                <div className="h-12 w-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Monthly Donation Drive</h4>
                                    <p className="text-gray-300">Join our monthly community donation events</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                                <div className="h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Volunteer Program</h4>
                                    <p className="text-gray-300">Become a volunteer and help save lives</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="backdrop-blur-xl rounded-3xl p-10 border border-white/10">
                        <h3 className="text-2xl font-semibold mb-6">Recognition Program</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                                <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Top Donors</h4>
                                    <p className="text-gray-300">Special recognition for regular donors</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                                <div className="h-12 w-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Achievement Badges</h4>
                                    <p className="text-gray-300">Earn badges for your contributions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        roadmap: (
            <div className="space-y-16">
                {/* Roadmap Timeline */}
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-red-500/50 to-purple-500/50" />
                    <div className="space-y-12">
                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-red-500" />
                            <div className="ml-8 md:ml-0 md:mr-8 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                                <h3 className="text-2xl font-semibold mb-4">Q1 2024</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Launch of AI-powered matching system</li>
                                    <li>• Mobile app development</li>
                                    <li>• Partner hospital integration</li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-purple-500" />
                            <div className="ml-8 md:ml-0 md:mr-8 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                                <h3 className="text-2xl font-semibold mb-4">Q2 2024</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• Enhanced reward system</li>
                                    <li>• Community features launch</li>
                                    <li>• Emergency response optimization</li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-blue-500" />
                            <div className="ml-8 md:ml-0 md:mr-8 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                                <h3 className="text-2xl font-semibold mb-4">Q3 2024</h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li>• International expansion</li>
                                    <li>• Advanced analytics dashboard</li>
                                    <li>• Mobile app enhancements</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex justify-center mb-12">
                <div className="backdrop-blur-xl rounded-2xl p-2 border border-white/10">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`px-6 py-3 rounded-xl transition-all duration-300 ${activeTab === 'overview'
                            ? 'bg-red-500/50 text-white'
                            : 'text-gray-300 hover:text-white'
                            }`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('features')}
                        className={`px-6 py-3 rounded-xl transition-all duration-300 ${activeTab === 'features'
                            ? 'bg-purple-500/50 text-white'
                            : 'text-gray-300 hover:text-white'
                            }`}
                    >
                        Features
                    </button>
                    <button
                        onClick={() => setActiveTab('impact')}
                        className={`px-6 py-3 rounded-xl transition-all duration-300 ${activeTab === 'impact'
                            ? 'bg-blue-500/50 text-white'
                            : 'text-gray-300 hover:text-white'
                            }`}
                    >
                        Impact
                    </button>
                    <button
                        onClick={() => setActiveTab('technology')}
                        className={`px-6 py-3 rounded-xl transition-all duration-300 ${activeTab === 'technology'
                            ? 'bg-green-500/50 text-white'
                            : 'text-gray-300 hover:text-white'
                            }`}
                    >
                        Technology
                    </button>
                    <button
                        onClick={() => setActiveTab('community')}
                        className={`px-6 py-3 rounded-xl transition-all duration-300 ${activeTab === 'community'
                            ? 'bg-yellow-500/50 text-white'
                            : 'text-gray-300 hover:text-white'
                            }`}
                    >
                        Community
                    </button>
                    <button
                        onClick={() => setActiveTab('roadmap')}
                        className={`px-6 py-3 rounded-xl transition-all duration-300 ${activeTab === 'roadmap'
                            ? 'bg-pink-500/50 text-white'
                            : 'text-gray-300 hover:text-white'
                            }`}
                    >
                        Roadmap
                    </button>
                </div>
            </div>

            {tabContent[activeTab]}
        </div>
    );
};

export default Feature;
