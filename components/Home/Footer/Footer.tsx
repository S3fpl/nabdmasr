"use client";
import Image from "next/image";
import Link from "next/link";
import { Shapes } from "@/components/ui/Shaps";
import { FacebookIcon, InstagramIcon } from "lucide-react";
import { Navlinks } from "@/constant/consant";

const Footer = () => {
    const getLinksByCategory = (ids: number[]) => {
        return Navlinks.filter(link => ids.includes(link.id));
    };

    const nabdMasrLinks = getLinksByCategory([2, 4, 8, 9, 20]);
    const accountLinks = getLinksByCategory([11, 12, 13, 14]);
    const resourceLinks = getLinksByCategory([5, 15, 16, 17, 18]);

    const copyrightLink = Navlinks.find(link => link.id === 19);

    return (
        <footer className="w-full relative z-10 backdrop-blur-lg bg-gray-600/10 py-12 mt-16 border-t border-white/20">
            {/* أشكال عائمة */}
            <div className="absolute -top-5 left-6 sm:-top-6 opacity-90 animate-float z-10 pointer-events-none">
                <Shapes className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <div className="absolute -top-5 right-6 sm:-top-6 opacity-90 animate-float z-10 pointer-events-none">
                <Shapes className="w-10 h-10 md:w-12 md:h-12" />
            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-6 gap-8">
                {/* اللوجو */}
                <div className="flex items-center space-x-4 w-full md:w-auto justify-start mr-24">
                    <Image src="/logo.ico" alt="Logo" width={64} height={64} />
                    <h2 className="text-white text-2xl font-semibold">NabdMasr</h2>
                </div>

                {/* روابط الفوتر */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white text-left w-full">
                    {/* Nabd Masr */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Nabd Masr</h3>
                        <ul>
                            {nabdMasrLinks.map(link => (
                                <li key={link.id}>
                                    <Link href={link.url} className="hover:text-gray-300">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* My Account */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">My Account</h3>
                        <ul>
                            {accountLinks.map(link => (
                                <li key={link.id}>
                                    <Link href={link.url} className="hover:text-gray-300">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul>
                            {resourceLinks.map(link => (
                                <li key={link.id}>
                                    <Link href={link.url} className="hover:text-gray-300">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="https://www.facebook.com/share/1C4AXwSorf/" className="hover:text-gray-300">
                                    <FacebookIcon size={24} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://instagram.com" className="hover:text-gray-300">
                                    <InstagramIcon size={24} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* حقوق النشر */}
            <div className="text-center text-white text-sm mt-8 border-t border-white/20 pt-4">
                <p>
                    © 2025 Nabd Masr. All rights reserved.{" "}
                    {copyrightLink && (
                        <Link href={copyrightLink.url} className="hover:text-gray-300">
                            {copyrightLink.label}
                        </Link>
                    )}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
