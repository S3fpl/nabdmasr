import React from 'react';

function History() {
    return (
        <section className="min-h-screen py-12 px-4 mt-16">
            <div className="container mx-auto space-y-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Blood Donation History</h1>
                    <p className="text-gray-300 text-lg">Your complete blood donation journey and impact</p>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20">
                        <h3 className="text-gray-300 text-sm mb-2">Total Donations</h3>
                        <p className="text-3xl font-bold text-white">12</p>
                        <p className="text-green-400 text-sm mt-2">+2 this month</p>
                    </div>
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20">
                        <h3 className="text-gray-300 text-sm mb-2">Lives Impacted</h3>
                        <p className="text-3xl font-bold text-white">36</p>
                        <p className="text-blue-400 text-sm mt-2">3 lives per donation</p>
                    </div>
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20">
                        <h3 className="text-gray-300 text-sm mb-2">Blood Sent</h3>
                        <p className="text-3xl font-bold text-white">5.4L</p>
                        <p className="text-purple-400 text-sm mt-2">450ml per donation</p>
                    </div>
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20">
                        <h3 className="text-gray-300 text-sm mb-2">Next Donation</h3>
                        <p className="text-3xl font-bold text-white">15d</p>
                        <p className="text-yellow-400 text-sm mt-2">Eligible in 15 days</p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Blood Type Requests Section */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
                        <h2 className="text-2xl font-semibold text-white mb-6">Blood Type Requests</h2>
                        <div className="space-y-4">
                            <div className="bg-white/5 rounded-xl p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-white font-medium">A+ Blood Request</h3>
                                        <p className="text-gray-300 text-sm">Requested on: 15 March 2024</p>
                                        <p className="text-gray-400 text-xs">Urgency: High</p>
                                    </div>
                                    <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Pending</span>
                                </div>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-white font-medium">O- Blood Request</h3>
                                        <p className="text-gray-300 text-sm">Requested on: 10 March 2024</p>
                                        <p className="text-gray-400 text-xs">Urgency: Medium</p>
                                    </div>
                                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Completed</span>
                                </div>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-white font-medium">B+ Blood Request</h3>
                                        <p className="text-gray-300 text-sm">Requested on: 5 March 2024</p>
                                        <p className="text-gray-400 text-xs">Urgency: Low</p>
                                    </div>
                                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">In Progress</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Donation History Section */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
                        <h2 className="text-2xl font-semibold text-white mb-6">Your Donations</h2>
                        <div className="space-y-4">
                            <div className="bg-white/5 rounded-xl p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-white font-medium">Blood Donation #12</h3>
                                        <p className="text-gray-300 text-sm">Donated on: 20 February 2024</p>
                                        <p className="text-gray-400 text-xs">Location: Central Blood Bank</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-blue-300 block">450ml</span>
                                        <span className="text-green-400 text-xs">Verified</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-white font-medium">Blood Donation #11</h3>
                                        <p className="text-gray-300 text-sm">Donated on: 15 January 2024</p>
                                        <p className="text-gray-400 text-xs">Location: City General Hospital</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-blue-300 block">450ml</span>
                                        <span className="text-green-400 text-xs">Verified</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-white font-medium">Blood Donation #10</h3>
                                        <p className="text-gray-300 text-sm">Donated on: 10 December 2023</p>
                                        <p className="text-gray-400 text-xs">Location: Central Blood Bank</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-blue-300 block">450ml</span>
                                        <span className="text-green-400 text-xs">Verified</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blood Sent History */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
                        <h2 className="text-2xl font-semibold text-white mb-6">Blood Sent History</h2>
                        <div className="space-y-4">
                            <div className="bg-white/5 rounded-xl p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-white font-medium">Emergency Transfer</h3>
                                        <p className="text-gray-300 text-sm">Sent on: 18 March 2024</p>
                                        <p className="text-gray-400 text-xs">To: City General Hospital</p>
                                    </div>
                                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Delivered</span>
                                </div>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-white font-medium">Regular Transfer</h3>
                                        <p className="text-gray-300 text-sm">Sent on: 5 March 2024</p>
                                        <p className="text-gray-400 text-xs">To: Central Blood Bank</p>
                                    </div>
                                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hospital/Blood Bank Section */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
                        <h2 className="text-2xl font-semibold text-white mb-6">Hospital & Blood Bank Information</h2>
                        <div className="space-y-6">
                            <div className="bg-white/5 rounded-xl p-6">
                                <h3 className="text-xl font-medium text-white mb-4">Central Blood Bank</h3>
                                <div className="space-y-2 text-gray-300">
                                    <p>Location: 123 Medical Center Drive</p>
                                    <p>Contact: (555) 123-4567</p>
                                    <p>Operating Hours: 24/7</p>
                                    <p className="text-green-400">Current Stock: 85%</p>
                                </div>
                            </div>
                            <div className="bg-white/5 rounded-xl p-6">
                                <h3 className="text-xl font-medium text-white mb-4">City General Hospital</h3>
                                <div className="space-y-2 text-gray-300">
                                    <p>Location: 456 Health Avenue</p>
                                    <p>Contact: (555) 987-6543</p>
                                    <p>Operating Hours: 8 AM - 8 PM</p>
                                    <p className="text-yellow-400">Current Stock: 65%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default History;

