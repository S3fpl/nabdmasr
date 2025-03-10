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
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul>
                            <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
                            <li><Link href="#/ca" className="hover:text-gray-300">Careers</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">Press</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul>
                            <li><Link href="#" className="hover:text-gray-300">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">FAQs</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul>
                            <li><Link href="#" className="hover:text-gray-300">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-auto">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <ul className="flex space-x-4">
                            <li><Link href="" className="hover:text-gray-300"><FacebookIcon size={24} /></Link></li>
                            <li><Link href="" className="hover:text-gray-300"><InstagramIcon size={24} /></Link></li>
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
