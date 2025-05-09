import React from 'react';
import { FaHandHoldingHeart, FaUserFriends, FaCalendarAlt, FaUsers, FaChartLine, FaHeartbeat, FaTint, FaAward, FaHospital, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

function Volunteers() {
    return (
        <section className="min-h-screen px-4 py-12 mt-16">
            <div className="container mx-auto max-w-7xl">
                {/* Hero Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Join Our Blood Donation Volunteer Community</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                        Make a difference in someone&apos;s life by becoming a blood donation volunteer. Your time and effort can save lives.
                    </p>
                </div>

                {/* Modern Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 mb-12 md:mb-16">
                    {/* Hero Stats Card - Spans 2 columns */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 md:col-span-2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white flex items-center">
                            <FaChartLine className="mr-3" /> Impact Stats
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
                            <div className="text-center p-4 bg-white/5 rounded-xl">
                                <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
                                <p className="text-gray-300">Lives Saved</p>
                            </div>
                            <div className="text-center p-4 bg-white/5 rounded-xl">
                                <p className="text-3xl md:text-4xl font-bold text-white">1000+</p>
                                <p className="text-gray-300">Volunteers</p>
                            </div>
                            <div className="text-center p-4 bg-white/5 rounded-xl">
                                <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
                                <p className="text-gray-300">Events Monthly</p>
                            </div>
                        </div>
                    </div>

                    {/* Why Volunteer Card - Spans 2 columns */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 md:col-span-2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white flex items-center">
                            <FaHandHoldingHeart className="mr-3" /> Why Volunteer?
                        </h2>
                        <ul className="space-y-3 md:space-y-4 text-gray-300">
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">•</span>
                                Save lives and make a direct impact on your community
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">•</span>
                                Gain valuable experience in healthcare and community service
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">•</span>
                                Join a supportive network of like-minded individuals
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">•</span>
                                Develop new skills and enhance your resume
                            </li>
                        </ul>
                    </div>

                    {/* Health Benefits Card - Spans 2 columns */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 md:col-span-2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white flex items-center">
                            <FaHeartbeat className="mr-3" /> Health Benefits
                        </h2>
                        <ul className="space-y-3 md:space-y-4 text-gray-300">
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">•</span>
                                Free health check-up
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">•</span>
                                Blood pressure monitoring
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">•</span>
                                Iron level testing
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">•</span>
                                Cholesterol screening
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">•</span>
                                Regular health updates
                            </li>
                        </ul>
                    </div>

                    {/* Donation Process Card - Spans 2 columns */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 md:col-span-2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white flex items-center">
                            <FaTint className="mr-3" /> Donation Process
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">Before Donation</h3>
                                <ul className="space-y-2 md:space-y-3 text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2">1.</span>
                                        Registration and health screening
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2">2.</span>
                                        Medical history review
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2">3.</span>
                                        Physical examination
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">During & After</h3>
                                <ul className="space-y-2 md:space-y-3 text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2">4.</span>
                                        Blood donation (15-20 minutes)
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2">5.</span>
                                        Rest and refreshments
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2">6.</span>
                                        Post-donation care instructions
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Requirements Card - Spans 2 columns */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 md:col-span-2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white flex items-center">
                            <FaUserFriends className="mr-3" /> Requirements
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">Basic Requirements</h3>
                                <ul className="space-y-2 md:space-y-3 text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Age 18 or older
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Weight at least 50kg
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        Good health condition
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">Health Criteria</h3>
                                <ul className="space-y-2 md:space-y-3 text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        No recent surgeries
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        No blood-borne diseases
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        No active infections
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Schedule Card - Spans 2 columns */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 md:col-span-2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white flex items-center">
                            <FaCalendarAlt className="mr-3" /> Schedule
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">Regular Hours</h3>
                                <ul className="space-y-2 md:space-y-3 text-gray-300">
                                    <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                                    <li>Saturday: 10:00 AM - 4:00 PM</li>
                                    <li>Sunday: Closed</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">Special Events</h3>
                                <ul className="space-y-2 md:space-y-3 text-gray-300">
                                    <li>Blood Drives: Monthly</li>
                                    <li>Community Outreach: Bi-weekly</li>
                                    <li>Training Sessions: Quarterly</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6">
                            <a
                                href="/hospital"
                                className="inline-flex items-center justify-center w-full backdrop-blur-lg bg-white/10 text-white px-6 py-3 rounded-full text-base font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <FaMapMarkerAlt className="mr-2" />
                                View Hospital Locations
                            </a>
                        </div>
                    </div>

                    {/* Community Card - Spans full row */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 md:col-span-6">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white flex items-center">
                            <FaUsers className="mr-3" /> Community
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                            {/* Events Section */}
                            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-4 md:p-6">
                                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white flex items-center">
                                    <FaCalendarAlt className="mr-2" /> Events
                                </h3>
                                <ul className="space-y-2 md:space-y-3 text-gray-300">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                        Monthly meetups
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                        Annual recognition
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                        Training workshops
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                        Team building
                                    </li>
                                </ul>
                            </div>

                            {/* Support Section */}
                            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-4 md:p-6">
                                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white flex items-center">
                                    <FaHandHoldingHeart className="mr-2" /> Support
                                </h3>
                                <ul className="space-y-2 md:space-y-3 text-gray-300">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                        24/7 volunteer support
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                        Mentorship program
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                        Professional development
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                        Peer support groups
                                    </li>
                                </ul>
                            </div>

                            {/* Achievements Section */}
                            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-4 md:p-6">
                                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white flex items-center">
                                    <FaAward className="mr-2" /> Achievements
                                </h3>
                                <ul className="space-y-2 md:space-y-3 text-gray-300">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                        Top volunteer awards
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                        Community recognition
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                        Leadership opportunities
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                        Skill certifications
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Hospital Locations Card - Spans full row */}
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 md:p-8 border border-white/20 md:col-span-6">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white flex items-center">
                            <FaHospital className="mr-3" /> Donation Centers
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {/* Main Hospital */}
                            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-4 md:p-6">
                                <h3 className="text-lg md:text-xl font-semibold mb-3 text-white flex items-center">
                                    <FaHospital className="mr-2" /> Central Blood Bank
                                </h3>
                                <div className="space-y-3 text-gray-300">
                                    <p className="flex items-start">
                                        <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                                        <span>123 Medical Center Drive, Downtown</span>
                                    </p>
                                    <p className="flex items-center">
                                        <FaPhone className="mr-2 flex-shrink-0" />
                                        <span>(555) 123-4567</span>
                                    </p>
                                    <p className="flex items-center">
                                        <FaClock className="mr-2 flex-shrink-0" />
                                        <span>24/7 Emergency Services</span>
                                    </p>
                                </div>
                            </div>

                            {/* North Branch */}
                            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-4 md:p-6">
                                <h3 className="text-lg md:text-xl font-semibold mb-3 text-white flex items-center">
                                    <FaHospital className="mr-2" /> North Medical Center
                                </h3>
                                <div className="space-y-3 text-gray-300">
                                    <p className="flex items-start">
                                        <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                                        <span>456 Health Avenue, North District</span>
                                    </p>
                                    <p className="flex items-center">
                                        <FaPhone className="mr-2 flex-shrink-0" />
                                        <span>(555) 234-5678</span>
                                    </p>
                                    <p className="flex items-center">
                                        <FaClock className="mr-2 flex-shrink-0" />
                                        <span>Mon-Sat: 8AM-8PM</span>
                                    </p>
                                </div>
                            </div>

                            {/* South Branch */}
                            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-4 md:p-6">
                                <h3 className="text-lg md:text-xl font-semibold mb-3 text-white flex items-center">
                                    <FaHospital className="mr-2" /> South Community Hospital
                                </h3>
                                <div className="space-y-3 text-gray-300">
                                    <p className="flex items-start">
                                        <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                                        <span>789 Care Street, South Side</span>
                                    </p>
                                    <p className="flex items-center">
                                        <FaPhone className="mr-2 flex-shrink-0" />
                                        <span>(555) 345-6789</span>
                                    </p>
                                    <p className="flex items-center">
                                        <FaClock className="mr-2 flex-shrink-0" />
                                        <span>Mon-Fri: 9AM-5PM</span>
                                    </p>
                                </div>
                            </div>

                            {/* East Branch */}
                            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-4 md:p-6">
                                <h3 className="text-lg md:text-xl font-semibold mb-3 text-white flex items-center">
                                    <FaHospital className="mr-2" /> East Medical Complex
                                </h3>
                                <div className="space-y-3 text-gray-300">
                                    <p className="flex items-start">
                                        <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                                        <span>321 Wellness Road, East End</span>
                                    </p>
                                    <p className="flex items-center">
                                        <FaPhone className="mr-2 flex-shrink-0" />
                                        <span>(555) 456-7890</span>
                                    </p>
                                    <p className="flex items-center">
                                        <FaClock className="mr-2 flex-shrink-0" />
                                        <span>Mon-Sun: 7AM-10PM</span>
                                    </p>
                                </div>
                            </div>

                            {/* West Branch */}
                            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-4 md:p-6">
                                <h3 className="text-lg md:text-xl font-semibold mb-3 text-white flex items-center">
                                    <FaHospital className="mr-2" /> West Health Center
                                </h3>
                                <div className="space-y-3 text-gray-300">
                                    <p className="flex items-start">
                                        <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                                        <span>654 Medical Plaza, West Side</span>
                                    </p>
                                    <p className="flex items-center">
                                        <FaPhone className="mr-2 flex-shrink-0" />
                                        <span>(555) 567-8901</span>
                                    </p>
                                    <p className="flex items-center">
                                        <FaClock className="mr-2 flex-shrink-0" />
                                        <span>Mon-Fri: 8AM-6PM</span>
                                    </p>
                                </div>
                            </div>

                            {/* Mobile Unit */}
                            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-4 md:p-6">
                                <h3 className="text-lg md:text-xl font-semibold mb-3 text-white flex items-center">
                                    <FaHospital className="mr-2" /> Mobile Donation Unit
                                </h3>
                                <div className="space-y-3 text-gray-300">
                                    <p className="flex items-start">
                                        <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                                        <span>Various locations - Check schedule</span>
                                    </p>
                                    <p className="flex items-center">
                                        <FaPhone className="mr-2 flex-shrink-0" />
                                        <span>(555) 678-9012</span>
                                    </p>
                                    <p className="flex items-center">
                                        <FaClock className="mr-2 flex-shrink-0" />
                                        <span>Schedule varies</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="text-center space-y-4 md:space-y-6">
                    <button className="backdrop-blur-lg bg-white/10 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 w-full md:w-auto">
                        Become a Volunteer Today
                    </button>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <button className="backdrop-blur-lg bg-white/10 text-white px-6 py-3 rounded-full text-base font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 w-full md:w-auto">
                            Learn More
                        </button>
                        <button className="backdrop-blur-lg bg-white/10 text-white px-6 py-3 rounded-full text-base font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 w-full md:w-auto">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Volunteers;

