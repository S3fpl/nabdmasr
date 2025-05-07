"use client";
import { Navlinks } from "@/constant/consant";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavProps {
    openNav: () => void;
}

const Nav: React.FC<NavProps> = ({ openNav }) => {
    // فقط العناصر اللي ids بتاعتهم موجودة في المصفوفة دي
    const visibleIds = [1, 2, 3, 4, 5 ,18];
    const filteredNavLinks = Navlinks.filter(link => visibleIds.includes(link.id));

    return (
        <nav className="flex items-center justify-between h-[12vh] px-6 md:px-12 bg-transparent fixed top-0 w-full z-50 transition-all duration-300 p-4">
            {/* Logo and Nav side-by-side */}
            <div className="flex items-center space-x-8">
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

                {/* Navigation Links - Next to Logo */}
                <div className="hidden lg:flex items-center space-x-6 bg-white/10 backdrop-blur-lg shadow-xl px-6 opacity-80 hover:opacity-100 py-3 rounded-full border border-white/30">
                    {filteredNavLinks.map(({ id, url, label }) => (
                        <Link
                            key={id}
                            href={url}
                            className="relative text-white text-lg font-medium transition duration-300 hover:text-gray-300 group"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden">
                    <MenuIcon
                        onClick={openNav}
                        className="cursor-pointer size-8 text-white transition-transform duration-300 hover:scale-110"
                        aria-label="Open navigation menu"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
