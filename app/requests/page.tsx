'use client'

import React, { useState } from 'react';

function Requests() {
    const [activeSection, setActiveSection] = useState('institution');

    return (
        <section className="min-h-screen px-4 py-12 flex flex-col items-center bg-transparent mt-16">
            <div className="w-full max-w-5xl">
                {/* Header with Stats */} 
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold mb-2 text-white drop-shadow-lg">Blood Requests</h1>
                    <p className="text-lg text-white/80 mb-8">For Hospitals and Blood Banks Only</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="rounded-2xl p-6 bg-white/10 backdrop-blur-lg border border-white/20">
                            <h3 className="text-2xl font-bold text-white">1,234</h3>
                            <p className="text-white/70">Active Requests</p>
                        </div>
                        <div className="rounded-2xl p-6 bg-white/10 backdrop-blur-lg border border-white/20">
                            <h3 className="text-2xl font-bold text-white">89%</h3>
                            <p className="text-white/70">Success Rate</p>
                        </div>
                        <div className="rounded-2xl p-6 bg-white/10 backdrop-blur-lg border border-white/20">
                            <h3 className="text-2xl font-bold text-white">45</h3>
                            <p className="text-white/70">Institutions Connected</p>
                        </div>
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Request Form Section */}
                    <div className="rounded-3xl p-10 shadow-2xl border border-white/20 bg-white/10 backdrop-blur-lg flex flex-col justify-between min-h-[350px]">
                        <h2 className="text-2xl font-bold mb-6 text-white">Request Blood</h2>
                        <form className="flex-1">
                            {/* Form Navigation */}
                            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                                <button
                                    type="button"
                                    onClick={() => setActiveSection('institution')}
                                    className={`px-4 py-2 rounded-lg transition ${activeSection === 'institution'
                                        ? 'bg-red-500 text-white'
                                        : 'bg-white/20 text-white hover:bg-white/30'
                                        }`}
                                >
                                    Institution
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveSection('blood')}
                                    className={`px-4 py-2 rounded-lg transition ${activeSection === 'blood'
                                        ? 'bg-red-500 text-white'
                                        : 'bg-white/20 text-white hover:bg-white/30'
                                        }`}
                                >
                                    Blood Details
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveSection('additional')}
                                    className={`px-4 py-2 rounded-lg transition ${activeSection === 'additional'
                                        ? 'bg-red-500 text-white'
                                        : 'bg-white/20 text-white hover:bg-white/30'
                                        }`}
                                >
                                    Additional
                                </button>
                            </div>

                            {/* Form Sections */}
                            <div className="space-y-6">
                                {/* Institution Information Section */}
                                {activeSection === 'institution' && (
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold text-white mb-4">Institution Information</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <select className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" value="">
                                                <option value="" disabled>Institution Type</option>
                                                <option value="hospital">Hospital</option>
                                                <option value="blood_bank">Blood Bank</option>
                                            </select>
                                            <input className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Institution Name" />
                                            <input className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Institution ID" />
                                            <input className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="License Number" />
                                            <input className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Department" />
                                            <input className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Authorized Person" />
                                            <input className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Contact Number" />
                                            <input className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Email Address" />
                                            <input className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Location" />
                                        </div>
                                    </div>
                                )}

                                {/* Blood Requirements Section */}
                                {activeSection === 'blood' && (
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold text-white mb-4">Blood Requirements</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <select className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" value="">
                                                <option value="" disabled>Blood Type</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                            </select>
                                            <input className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Units Needed" type="number" min="1" />
                                            <select className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" value="">
                                                <option value="" disabled>Urgency Level</option>
                                                <option value="emergency">Emergency (Within 2 hours)</option>
                                                <option value="urgent">Urgent (Within 24 hours)</option>
                                                <option value="priority">Priority (Within 48 hours)</option>
                                                <option value="standard">Standard (Within 72 hours)</option>
                                            </select>
                                            <input className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Special Requirements" />
                                        </div>
                                    </div>
                                )}

                                {/* Additional Information Section */}
                                {activeSection === 'additional' && (
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold text-white mb-4">Additional Information</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" type="date" />
                                            <input className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" type="time" />
                                            <input className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Reference Number" />
                                            <input className="p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Patient ID (if applicable)" />
                                        </div>
                                        <textarea
                                            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400"
                                            placeholder="Additional Notes (e.g., special handling requirements, patient condition, cross-matching requirements)"
                                            rows={3}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8">
                                {activeSection !== 'institution' && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const sections = ['institution', 'blood', 'additional'];
                                            const currentIndex = sections.indexOf(activeSection);
                                            setActiveSection(sections[currentIndex - 1]);
                                        }}
                                        className="px-6 py-3 rounded-xl bg-white/20 text-white hover:bg-white/30 transition"
                                    >
                                        Previous
                                    </button>
                                )}
                                {activeSection !== 'additional' ? (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const sections = ['institution', 'blood', 'additional'];
                                            const currentIndex = sections.indexOf(activeSection);
                                            setActiveSection(sections[currentIndex + 1]);
                                        }}
                                        className="px-6 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition ml-auto"
                                    >
                                        Next
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="px-6 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition ml-auto"
                                    >
                                        Submit Request
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Recent Requests Section */}
                    <div className="rounded-3xl p-10 shadow-2xl border border-white/20 bg-white/10 backdrop-blur-lg min-h-[350px] flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-white">Recent Requests</h2>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition">All</button>
                                <button className="px-4 py-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition">Urgent</button>
                                <button className="px-4 py-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition">Nearby</button>
                            </div>
                        </div>
                        <ul className="space-y-4 flex-1 overflow-y-auto">
                            <li className="p-4 rounded-xl bg-white/10 border border-white/10 text-white">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="font-bold text-red-400">EMERGENCY</span>
                                        <h3 className="font-bold mt-1">A+ needed at Cairo Medical Center</h3>
                                        <p className="text-white/70">2 units required within 2 hours</p>
                                    </div>
                                    <span className="text-sm text-white/60">30 mins ago</span>
                                </div>
                                <div className="mt-2 flex gap-4 text-sm">
                                    <span className="text-white/70">Hospital ID: CM123</span>
                                    <span className="text-white/70">Department: Emergency</span>
                                </div>
                            </li>
                            <li className="p-4 rounded-xl bg-white/10 border border-white/10 text-white">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="font-bold text-yellow-400">URGENT</span>
                                        <h3 className="font-bold mt-1">O- needed at Giza Blood Bank</h3>
                                        <p className="text-white/70">5 units required within 24 hours</p>
                                    </div>
                                    <span className="text-sm text-white/60">2 hours ago</span>
                                </div>
                                <div className="mt-2 flex gap-4 text-sm">
                                    <span className="text-white/70">Bank ID: GB456</span>
                                    <span className="text-white/70">Type: Blood Bank</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* How It Works Section */}
                    <div className="rounded-3xl p-10 shadow-2xl border border-white/20 bg-white/10 backdrop-blur-lg min-h-[350px] flex flex-col">
                        <h2 className="text-2xl font-bold mb-4 text-white">How It Works</h2>
                        <div className="space-y-6 flex-1">
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Verify Institution</h3>
                                    <p className="text-white/70">Submit your institution details and credentials for verification.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Submit Request</h3>
                                    <p className="text-white/70">Fill out the blood request form with detailed requirements.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Match & Connect</h3>
                                    <p className="text-white/70">Our system matches your request with available blood banks and donors.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Complete Transfer</h3>
                                    <p className="text-white/70">Coordinate blood transfer and update request status.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="rounded-3xl p-10 shadow-2xl border border-white/20 bg-white/10 backdrop-blur-lg min-h-[350px] flex flex-col">
                        <h2 className="text-2xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
                        <div className="space-y-6 text-white/80 flex-1">
                            <div className="border-b border-white/10 pb-4">
                                <h3 className="font-semibold text-white mb-2">Who can submit requests?</h3>
                                <p className="text-white/70">Only verified hospitals and blood banks with valid medical licenses can submit blood requests.</p>
                            </div>
                            <div className="border-b border-white/10 pb-4">
                                <h3 className="font-semibold text-white mb-2">How is institution verification done?</h3>
                                <p className="text-white/70">We verify through official medical registries, license numbers, and institutional documentation.</p>
                            </div>
                            <div className="border-b border-white/10 pb-4">
                                <h3 className="font-semibold text-white mb-2">What are the response times?</h3>
                                <p className="text-white/70">Emergency requests: 2 hours, Urgent: 24 hours, Priority: 48 hours, Standard: 72 hours.</p>
                            </div>
                            <div className="border-b border-white/10 pb-4">
                                <h3 className="font-semibold text-white mb-2">How do we track requests?</h3>
                                <p className="text-white/70">Each request gets a unique reference number for tracking and status updates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Requests;

