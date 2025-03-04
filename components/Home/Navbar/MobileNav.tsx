import { Navlinks } from "@/constant/consant";
import { XIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface MobileNavProps {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ showNav, closeNav }) => {
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        setAnimate(showNav);
    }, [showNav]);

    const handleClose = () => {
        setAnimate(false);
        setTimeout(closeNav, 300);
    };

    return (
        <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-lg z-[1050] flex items-center justify-center transition-opacity duration-300 ${
                animate ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <header
                className={`relative bg-white/10 border border-white/20 shadow-xl rounded-2xl p-8 text-white flex flex-col items-center space-y-6 w-11/12 max-w-md transition-transform duration-300 ${
                    animate ? "scale-100" : "scale-0"
                }`}
            >
                {/* زر الإغلاق */}
                <XIcon
                    onClick={handleClose}
                    className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 font-extrabold cursor-pointer text-white transition-transform hover:scale-110 hover:text-red-400"
                />

                {/* روابط التنقل */}
                <div className="flex flex-col space-y-6 text-center">
                    {Navlinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.url}
                            className="text-white text-xl sm:text-2xl font-medium border-b border-transparent transition-all duration-300 pb-1 hover:text-red-400 hover:border-white/50"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </header>
        </div>
    );
};

export default MobileNav;
