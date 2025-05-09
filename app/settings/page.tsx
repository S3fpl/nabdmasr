'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    UserCircle,
    Bell,
    HelpCircle,
    Droplet,
    Shield,
    FileText,
    Globe,
    Phone,
    Settings,
    ArrowLeft,
    Home,
    Clock,
    AlertCircle,
    Eye,
    Share2,
    Download,
    Lock
} from 'lucide-react';

const SettingsPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState({
        email: true,
        sms: true,
        push: true,
        emergency: true,
        updates: true,
        reminders: true
    });
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const SettingsContent = () => (
        <div className="space-y-8">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-white">Settings</h1>
                <Link
                    href="/profile"
                    className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Profile</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Account Settings */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-6 col-span-1"
                >
                    <div className="flex items-center space-x-2 mb-4">
                        <UserCircle className="w-5 h-5 text-red-500" />
                        <h2 className="text-xl font-bold text-white">Account Settings</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-white">Email Notifications</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={notifications.email}
                                    onChange={() => setNotifications(prev => ({ ...prev, email: !prev.email }))}
                                />
                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-white">SMS Notifications</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={notifications.sms}
                                    onChange={() => setNotifications(prev => ({ ...prev, sms: !prev.sms }))}
                                />
                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-white">Push Notifications</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={notifications.push}
                                    onChange={() => setNotifications(prev => ({ ...prev, push: !prev.push }))}
                                />
                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                            </label>
                        </div>
                    </div>
                </motion.div>

                {/* Donation Preferences */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-6 col-span-1"
                >
                    <div className="flex items-center space-x-2 mb-4">
                        <Droplet className="w-5 h-5 text-red-500" />
                        <h2 className="text-xl font-bold text-white">Donation Preferences</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="p-3 bg-white/5 rounded-lg">
                            <label className="text-white text-sm mb-2 block">Blood Type</label>
                            <select className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white">
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg">
                            <label className="text-white text-sm mb-2 block">Preferred Donation Type</label>
                            <select className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white">
                                <option>Whole Blood</option>
                                <option>Plasma</option>
                                <option>Platelets</option>
                                <option>Double Red Cells</option>
                            </select>
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg">
                            <label className="text-white text-sm mb-2 block">Donation Frequency</label>
                            <select className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white">
                                <option>Every 56 days</option>
                                <option>Every 3 months</option>
                                <option>Every 6 months</option>
                                <option>Custom</option>
                            </select>
                        </div>
                    </div>
                </motion.div>

                {/* Privacy Settings */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-6 col-span-1"
                >
                    <div className="flex items-center space-x-2 mb-4">
                        <Shield className="w-5 h-5 text-red-500" />
                        <h2 className="text-xl font-bold text-white">Privacy Settings</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-white">Share Donation History</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-white">Show Location</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-white">Profile Visibility</span>
                            <select className="bg-white/10 border border-white/20 rounded-lg p-2 text-white">
                                <option>Public</option>
                                <option>Private</option>
                                <option>Donors Only</option>
                            </select>
                        </div>
                    </div>
                </motion.div>

                {/* Emergency Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-6 col-span-1"
                >
                    <div className="flex items-center space-x-2 mb-4">
                        <Phone className="w-5 h-5 text-red-500" />
                        <h2 className="text-xl font-bold text-white">Emergency Contact</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="p-3 bg-white/5 rounded-lg">
                            <input
                                type="text"
                                placeholder="Contact Name"
                                className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white placeholder-gray-400"
                            />
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg">
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white placeholder-gray-400"
                            />
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg">
                            <input
                                type="text"
                                placeholder="Relationship"
                                className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white placeholder-gray-400"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Medical History */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-6 col-span-1"
                >
                    <div className="flex items-center space-x-2 mb-4">
                        <FileText className="w-5 h-5 text-red-500" />
                        <h2 className="text-xl font-bold text-white">Medical History</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="p-3 bg-white/5 rounded-lg">
                            <textarea
                                placeholder="Add any relevant medical conditions..."
                                className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white placeholder-gray-400 h-24"
                            />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-white">Auto-fill Medical History</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                            </label>
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg">
                            <label className="text-white text-sm mb-2 block">Last Medical Check-up</label>
                            <input
                                type="date"
                                className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Language & Region */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-6 col-span-1"
                >
                    <div className="flex items-center space-x-2 mb-4">
                        <Globe className="w-5 h-5 text-red-500" />
                        <h2 className="text-xl font-bold text-white">Language & Region</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="p-3 bg-white/5 rounded-lg">
                            <select className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white">
                                <option>English</option>
                                <option>العربية</option>
                            </select>
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg">
                            <select className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white">
                                <option>Egypt (GMT+2)</option>
                                <option>UTC</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-white">Dark Mode</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={darkMode}
                                    onChange={() => setDarkMode(!darkMode)}
                                />
                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                            </label>
                        </div>
                    </div>
                </motion.div>

                {/* Donation Reminders */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-6 col-span-1"
                >
                    <div className="flex items-center space-x-2 mb-4">
                        <Clock className="w-5 h-5 text-red-500" />
                        <h2 className="text-xl font-bold text-white">Donation Reminders</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-white">Enable Reminders</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                            </label>
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg">
                            <label className="text-white text-sm mb-2 block">Reminder Frequency</label>
                            <select className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white">
                                <option>1 week before</option>
                                <option>2 weeks before</option>
                                <option>1 month before</option>
                            </select>
                        </div>
                        <div className="p-3 bg-white/5 rounded-lg">
                            <label className="text-white text-sm mb-2 block">Preferred Time</label>
                            <input
                                type="time"
                                className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Accessibility */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-6 col-span-1"
                >
                    <div className="flex items-center space-x-2 mb-4">
                        <Eye className="w-5 h-5 text-red-500" />
                        <h2 className="text-xl font-bold text-white">Accessibility</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="p-3 bg-white/5 rounded-lg">
                            <label className="text-white text-sm mb-2 block">Text Size</label>
                            <select className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white">
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                                <option>Extra Large</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-white">High Contrast</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-white">Screen Reader</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                            </label>
                        </div>
                    </div>
                </motion.div>

                {/* Data & Privacy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-6 col-span-1"
                >
                    <div className="flex items-center space-x-2 mb-4">
                        <Lock className="w-5 h-5 text-red-500" />
                        <h2 className="text-xl font-bold text-white">Data & Privacy</h2>
                    </div>
                    <div className="space-y-4">
                        <button className="w-full p-3 bg-white/5 rounded-lg text-white hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                            <Download className="w-4 h-4" />
                            <span>Download My Data</span>
                        </button>
                        <button className="w-full p-3 bg-white/5 rounded-lg text-white hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                            <Share2 className="w-4 h-4" />
                            <span>Share Data with Hospital</span>
                        </button>
                        <button className="w-full p-3 bg-red-500/20 rounded-lg text-red-500 hover:bg-red-500/30 transition-colors flex items-center justify-center space-x-2">
                            <AlertCircle className="w-4 h-4" />
                            <span>Delete Account</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );

    const SideNavigation = () => (
        <div className="h-full flex flex-col mt-2  z-[9999]">
            <div className="p-2 border-b border-white/10 flex items-center justify-between">
                <h2 className="text-sm font-medium text-red-500">Menu</h2>
                <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-white/5 rounded-full transition-colors"
                >
                    <ArrowLeft className="w-3.5 h-3.5 text-white" />
                </button>
            </div>
            <nav className="flex-1 p-2">
                <ul className="space-y-1">
                    <li>
                        <Link href="/" className="flex items-center space-x-2 text-white gray-700 hover:text-red-500 transition-colors py-1 px-2 rounded-md hover:bg-white/5">
                            <Home className="w-3.5 h-3.5" />
                            <span className="text-xs">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile" className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors py-1 px-2 rounded-md hover:bg-white/5">
                            <UserCircle className="w-3.5 h-3.5" />
                            <span className="text-xs">Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/notifications" className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors py-1 px-2 rounded-md hover:bg-white/5">
                            <Bell className="w-3.5 h-3.5" />
                            <span className="text-xs">Notifications</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/help" className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors py-1 px-2 rounded-md hover:bg-white/5">
                            <HelpCircle className="w-3.5 h-3.5" />
                            <span className="text-xs">Help</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );

    return (
        <>
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-0 top-1/2 -translate-y-1/2 z-[9999]"
                    >
                        <button
                            onClick={() => setIsOpen(true)}
                            className="p-2 rounded-r-lg transition-all duration-300 bg-red-500 text-white hover:bg-red-600"
                        >
                            <Settings className="w-4 h-4" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={sidebarRef}
                        initial={{ x: -180 }}
                        animate={{ x: 0 }}
                        exit={{ x: -180 }}
                        transition={{ type: "spring", damping: 20 }}
                        className="fixed left-0 top-[20%] h-[60vh] w-[180px] m-4 rounded-lg overflow-hidden z-[9999]"
                    >
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10" />
                        <div className="relative h-full">
                            <SideNavigation />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="min-h-screen bg-transparent p-8">
                <div className="max-w-7xl mx-auto">
                    <SettingsContent />
                </div>
            </div>
        </>
    );
};

export default SettingsPage;
