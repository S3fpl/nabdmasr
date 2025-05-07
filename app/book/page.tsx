"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from "react";

type TabType = 'overview' | 'features' | 'impact';

const BookPage = () => {
    const [activeTab, setActiveTab] = useState<TabType>('overview');

    const tabContent: Record<TabType, React.ReactElement> = {
        overview: (
            <div className="grid md:grid-cols-3 gap-10 mb-24">
                {/* Why This Guide */}
                <div className="group backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105">
                    <div className="h-16 w-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-semibold mb-6 text-white">Why This Guide?</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        A comprehensive resource covering everything you need to know about blood donation, designed to educate and encourage participation in saving lives.
                    </p>
                </div>

                {/* What&apos;s Inside */}
                <div className="group backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105">
                    <div className="h-16 w-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-semibold mb-6 text-white">What&apos;s Inside?</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Learn about the donation process, health benefits, eligibility requirements, and answers to common questions in an easy-to-understand format.
                    </p>
                </div>

                {/* Join the Mission */}
                <div className="group backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-105">
                    <div className="h-16 w-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-semibold mb-6 text-white">Join the Mission</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Become part of a life-saving mission. Every drop counts, and your awareness can lead to someone&apos;s survival.
                    </p>
                </div>
            </div>
        ),
        features: (
            <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="backdrop-blur-xl rounded-3xl p-10 border border-white/10">
                        <div className="flex items-start gap-6">
                            <div className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Real-time Tracking</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Track blood donation needs in real-time across different locations. Get instant notifications for urgent requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="backdrop-blur-xl rounded-3xl p-10 border border-white/10">
                        <div className="flex items-start gap-6">
                            <div className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Smart Scheduling</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    AI-powered scheduling system that matches donors with the most urgent needs based on blood type and location.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="backdrop-blur-xl rounded-3xl p-10 border border-white/10">
                        <div className="flex items-start gap-6">
                            <div className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Digital Records</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Secure digital tracking of donation history and health records for better donor management.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="backdrop-blur-xl rounded-3xl p-10 border border-white/10">
                        <div className="flex items-start gap-6">
                            <div className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Reward System</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Earn points and rewards for regular donations, with special recognition for frequent donors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        impact: (
            <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="backdrop-blur-xl rounded-3xl p-10 border border-white/10">
                        <div className="flex items-start gap-6">
                            <div className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0">
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
                            <div className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="backdrop-blur-xl rounded-3xl p-10 border border-white/10">
                    <div className="flex items-start gap-6">
                        <div className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Success Stories</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Read inspiring stories of lives saved through our blood donation network. Each donation creates a ripple effect of positive change.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <section className="min-h-screen text-white py-24 px-4 md:px-8 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Hero Section */}
                <div className="text-center mb-24">
                    <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600 mb-8">
                        Nabd Masr Blood Donation Guide
                    </h1>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Your comprehensive resource for understanding and participating in life-saving blood donation
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                    <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                        <div className="text-4xl font-bold text-red-400 mb-2">50K+</div>
                        <div className="text-gray-300">Lives Saved</div>
                    </div>
                    <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                        <div className="text-4xl font-bold text-red-400 mb-2">100+</div>
                        <div className="text-gray-300">Donation Centers</div>
                    </div>
                    <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                        <div className="text-4xl font-bold text-red-400 mb-2">24/7</div>
                        <div className="text-gray-300">Emergency Support</div>
                    </div>
                    <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                        <div className="text-4xl font-bold text-red-400 mb-2">10K+</div>
                        <div className="text-gray-300">Active Donors</div>
                    </div>
                </div>

                {/* Tabs Navigation */}
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
                                ? 'bg-red-500/50 text-white'
                                : 'text-gray-300 hover:text-white'
                                }`}
                        >
                            Features
                        </button>
                        <button
                            onClick={() => setActiveTab('impact')}
                            className={`px-6 py-3 rounded-xl transition-all duration-300 ${activeTab === 'impact'
                                ? 'bg-red-500/50 text-white'
                                : 'text-gray-300 hover:text-white'
                                }`}
                        >
                            Impact
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="mb-24">
                    {tabContent[activeTab]}
                </div>

                {/* Book Download Section */}
                <div className="backdrop-blur-xl rounded-[2.5rem] p-12 md:p-16 border border-white/10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1">
                            <Image
                                src="/nabdmasrbook.png"
                                alt="Nabd Masr Book Cover"
                                width={400}
                                height={520}
                                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left space-y-10">
                            <div>
                                <h3 className="text-4xl font-bold text-white mb-6">Download Your Copy</h3>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Ready to dive in? Get your comprehensive guide to blood donation today.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <Link
                                    href="/"
                                    target="_blank"
                                    className="inline-block bg-red-500/50 hover:bg-red-600/50 text-white font-semibold py-5 px-10 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-lg text-lg"
                                >
                                    Download PDF
                                </Link>
                                <div>
                                    <Link
                                        href="/"
                                        className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-3 text-lg"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        Back to Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Future Vision Section */}
                <div className="mt-24 text-center">
                    <h2 className="text-4xl font-bold mb-8">Our Vision for the Future</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                            <div className="h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Global Network</h3>
                            <p className="text-gray-300">
                                Building a worldwide network of blood donation centers and volunteers.
                            </p>
                        </div>
                        <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                            <div className="h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
                            <p className="text-gray-300">
                                Developing cutting-edge technology for blood matching and distribution.
                            </p>
                        </div>
                        <div className="backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                            <div className="h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Community</h3>
                            <p className="text-gray-300">
                                Creating a strong community of donors and healthcare professionals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookPage;
