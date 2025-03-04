"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image"; // استيراد Image من Next.js

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <footer className="w-full relative z-10 backdrop-blur-lg bg-white/10 py-12 mt-16 border-t border-white/20">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-6 gap-8">
                {/* Logo Section */}
                <div className="flex items-center space-x-4">
                    <Image src="/logo.ico" alt="Logo" width={64} height={64} /> {/* استخدام Image */}
                    <h2 className="text-white text-2xl font-semibold">NabdMasr</h2>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul>
                            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-300">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-300">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul>
                            <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
                            <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
                            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul>
                            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <ul>
                            <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
                            <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
                            <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
