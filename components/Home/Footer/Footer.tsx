"use client";
import Image from "next/image";
import Link from "next/link";
import { Shapes } from "@/components/ui/Shaps";
import { FacebookIcon, InstagramIcon } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full relative z-10 backdrop-blur-lg bg-gray-600/10 py-12 mt-16 border-t border-white/20">
            {/* عنصر Shapes العائم */}
            <div className="absolute -top-5 left-6 sm:-top-6 opacity-90 animate-float z-10 pointer-events-none">
                <Shapes className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <div className="absolute -top-5 right-6 sm:-top-6 opacity-90 animate-float z-10 pointer-events-none">
                <Shapes className="w-10 h-10 md:w-12 md:h-12" />
            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-6 gap-8">
                {/* Logo Section */}
                <div className="flex items-center space-x-4 w-full md:w-auto justify-start mr-24">
                    <Image src="/logo.ico" alt="Logo" width={64} height={64} />
                    <h2 className="text-white text-2xl font-semibold">NabdMasr</h2>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white text-left w-full">
                    {/* Nabd Masr */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Nabd Masr</h3>
                        <ul>
                            <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
                            <li><Link href="/statistics" className="hover:text-gray-300">Statistics</Link></li>
                            <li><Link href="/volunteers" className="hover:text-gray-300">Join as Volunteer</Link></li>
                        </ul>
                    </div>

                    {/* User Area */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">My Account</h3>
                        <ul>
                            <li><Link href="/profile" className="hover:text-gray-300">Settings</Link></li>
                            <li><Link href="/history" className="hover:text-gray-300">Donation History</Link></li>
                            <li><Link href="/requests" className="hover:text-gray-300">Requests</Link></li>
                            <li><Link href="/notifications" className="hover:text-gray-300">Notifications</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul>
                            <li><Link href="/faq" className="hover:text-gray-300">FAQs</Link></li>
                            <li><Link href="/terms" className="hover:text-gray-300">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
                            <li><Link href="/conditions" className="hover:text-gray-300">Donation Conditions</Link></li>
                            {/* رابط الكتاب */}
                            <li><Link href="/book" className="hover:text-gray-300">Guide</Link></li> {/* يمكن تغير الرابط إلى رابط الكتاب الفعلي */}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <ul className="flex space-x-4">
                            <li><Link href="https://www.facebook.com/share/1C4AXwSorf/" className="hover:text-gray-300"><FacebookIcon size={24} /></Link></li>
                            <li><Link href="https://instagram.com" className="hover:text-gray-300"><InstagramIcon size={24} /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-white text-sm mt-8 border-t border-white/20 pt-4">
                <p>© 2025 Nabd Masr. All rights reserved. <Link href="/copyright" className="hover:text-gray-300">Copyright</Link></p>
            </div>
        </footer>
    );
};

export default Footer;
