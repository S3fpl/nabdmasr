import React from 'react';

function Privacy() {
    return (
        <section className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 relative overflow-hidden mt-16">
            <div className="max-w-7xl mx-auto relative">
                {/* Hero Section with 3D Effect */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10"></div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text transform hover:scale-105 transition-transform duration-300">
                        Privacy Policy
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
                        Last updated: March 2024. We are committed to protecting your privacy and personal information.
                    </p>
                </div>

                {/* Modern Bento Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 auto-rows-[minmax(180px,auto)]">
                    {/* Information Collection Card */}
                    <div className="group backdrop-blur-xl bg-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-1 lg:col-span-4">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="p-2 sm:p-3 bg-blue-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">Information We Collect</h2>
                        </div>
                        <div className="space-y-3 sm:space-y-4 text-gray-300">
                            <p className="text-sm sm:text-base">Personal information we collect:</p>
                            <ul className="space-y-2 sm:space-y-3">
                                <li className="flex items-center gap-2 sm:gap-3 group/item">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                                    <span className="text-sm sm:text-base group-hover/item:text-blue-400 transition-colors duration-300">Name and contact information</span>
                                </li>
                                <li className="flex items-center gap-2 sm:gap-3 group/item">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                                    <span className="text-sm sm:text-base group-hover/item:text-blue-400 transition-colors duration-300">Account credentials</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Data Usage Card */}
                    <div className="group backdrop-blur-xl bg-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-1 lg:col-span-4">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="p-2 sm:p-3 bg-purple-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">How We Use Your Data</h2>
                        </div>
                        <div className="space-y-3 sm:space-y-4 text-gray-300">
                            <p className="text-sm sm:text-base">Purposes of data usage:</p>
                            <ul className="space-y-2 sm:space-y-3">
                                <li className="flex items-center gap-2 sm:gap-3 group/item">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                                    <span className="text-sm sm:text-base group-hover/item:text-purple-400 transition-colors duration-300">Service provision</span>
                                </li>
                                <li className="flex items-center gap-2 sm:gap-3 group/item">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                                    <span className="text-sm sm:text-base group-hover/item:text-purple-400 transition-colors duration-300">Communication</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Data Protection Card */}
                    <div className="group backdrop-blur-xl bg-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:-translate-y-1 lg:col-span-4">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="p-2 sm:p-3 bg-green-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-green-400 transition-colors duration-300">Data Protection</h2>
                        </div>
                        <div className="space-y-3 sm:space-y-4 text-gray-300">
                            <p className="text-sm sm:text-base">Security measures:</p>
                            <ul className="space-y-2 sm:space-y-3">
                                <li className="flex items-center gap-2 sm:gap-3 group/item">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                                    <span className="text-sm sm:text-base group-hover/item:text-green-400 transition-colors duration-300">Encryption</span>
                                </li>
                                <li className="flex items-center gap-2 sm:gap-3 group/item">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                                    <span className="text-sm sm:text-base group-hover/item:text-green-400 transition-colors duration-300">Access controls</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Your Rights Card */}
                    <div className="group backdrop-blur-xl bg-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-1 lg:col-span-6">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="p-2 sm:p-3 bg-emerald-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">Your Rights</h2>
                        </div>
                        <div className="space-y-3 sm:space-y-4 text-gray-300">
                            <p className="text-sm sm:text-base">Your data protection rights:</p>
                            <ul className="space-y-2 sm:space-y-3">
                                <li className="flex items-center gap-2 sm:gap-3 group/item">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                                    <span className="text-sm sm:text-base group-hover/item:text-emerald-400 transition-colors duration-300">Access your data</span>
                                </li>
                                <li className="flex items-center gap-2 sm:gap-3 group/item">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                                    <span className="text-sm sm:text-base group-hover/item:text-emerald-400 transition-colors duration-300">Request data deletion</span>
                                </li>
                                <li className="flex items-center gap-2 sm:gap-3 group/item">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                                    <span className="text-sm sm:text-base group-hover/item:text-emerald-400 transition-colors duration-300">Opt-out preferences</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Cookies & Tracking Card */}
                    <div className="group backdrop-blur-xl bg-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:-translate-y-1 lg:col-span-6">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="p-2 sm:p-3 bg-orange-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">Cookies & Tracking</h2>
                        </div>
                        <div className="space-y-3 sm:space-y-4 text-gray-300">
                            <p className="text-sm sm:text-base">How we use cookies:</p>
                            <ul className="space-y-2 sm:space-y-3">
                                <li className="flex items-center gap-2 sm:gap-3 group/item">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                                    <span className="text-sm sm:text-base group-hover/item:text-orange-400 transition-colors duration-300">Essential cookies</span>
                                </li>
                                <li className="flex items-center gap-2 sm:gap-3 group/item">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                                    <span className="text-sm sm:text-base group-hover/item:text-orange-400 transition-colors duration-300">Analytics cookies</span>
                                </li>
                                <li className="flex items-center gap-2 sm:gap-3 group/item">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></span>
                                    <span className="text-sm sm:text-base group-hover/item:text-orange-400 transition-colors duration-300">Marketing cookies</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="group backdrop-blur-xl bg-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:-translate-y-1 lg:col-span-12">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="p-2 sm:p-3 bg-indigo-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">Contact Us</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            <div className="space-y-3 sm:space-y-4 text-gray-300 group/item">
                                <h3 className="text-base sm:text-lg font-medium text-white group-hover/item:text-indigo-400 transition-colors duration-300">Privacy Inquiries</h3>
                                <p className="text-sm sm:text-base group-hover/item:text-indigo-400 transition-colors duration-300">Questions about your data</p>
                                <p className="text-sm sm:text-base group-hover/item:text-indigo-400 transition-colors duration-300">privacy@example.com</p>
                            </div>
                            <div className="space-y-3 sm:space-y-4 text-gray-300 group/item">
                                <h3 className="text-base sm:text-lg font-medium text-white group-hover/item:text-indigo-400 transition-colors duration-300">Data Requests</h3>
                                <p className="text-sm sm:text-base group-hover/item:text-indigo-400 transition-colors duration-300">Access or delete your data</p>
                                <p className="text-sm sm:text-base group-hover/item:text-indigo-400 transition-colors duration-300">data@example.com</p>
                            </div>
                            <div className="space-y-3 sm:space-y-4 text-gray-300 group/item">
                                <h3 className="text-base sm:text-lg font-medium text-white group-hover/item:text-indigo-400 transition-colors duration-300">Legal Support</h3>
                                <p className="text-sm sm:text-base group-hover/item:text-indigo-400 transition-colors duration-300">Legal compliance matters</p>
                                <p className="text-sm sm:text-base group-hover/item:text-indigo-400 transition-colors duration-300">legal@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Privacy;

