"use client";
import { Navlinks } from "@/constant/consant";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavProps {
    openNav: () => void;
}

const Nav: React.FC<NavProps> = ({ openNav }) => {
    return (
        <nav className="flex items-center justify-between h-[12vh] px-6 md:px-12 bg-transparent fixed top-0 w-full z-50 transition-all duration-300 p-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
                <Image
                    src="/nabdmasr.ico"
                    alt="Nabd Masr Logo"
                    width={50}
                    height={50}
                    priority
                    className="h-12 md:h-14 w-auto object-contain drop-shadow-lg"
                />
            </Link>

            {/* Navigation Links - Centered */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center space-x-8 bg-white/10 backdrop-blur-lg shadow-xl px-6 opacity-80 hover:opacity-100 py-3 rounded-full border border-white/30">
                {Navlinks.map(({ id, url, label }) => (
                    <Link
                        key={id}
                        href={url}
                        className="relative text-white text-lg font-medium transition duration-300 hover:text-gray-300 group"
                    >
                        {label}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Icon - Centered but moved to right on tablets */}
            <div className="fixed top-9 left-1/2 -translate-x-1/2 md:left-auto md:right-36 md:translate-x-0 lg:hidden">
                <MenuIcon
                    onClick={openNav}
                    className="cursor-pointer size-8 text-white transition-transform duration-300 hover:scale-110"
                    aria-label="Open navigation menu"
                />
            </div>
        </nav>
    );
};

export default Nav;
