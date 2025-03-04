"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Navlinks } from "@/constant/consant";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Form from "@/components/Home/Form/Form";

interface NavProps {
    openNav: () => void;
}

const Nav: React.FC<NavProps> = ({ openNav }) => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [authType, setAuthType] = useState<"login" | "signup">("login");

    const handleAuth = useCallback((type: "login" | "signup") => {
        setAuthType(type);
        setShowForm(true);
    }, []);

    return (
        <>
            <nav className="flex items-center justify-between h-[12vh] px-6 md:px-12 bg-transparent fixed top-0 w-full z-50 transition-all duration-300 l   p-4">
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

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center justify-center space-x-8 bg-white/10 backdrop-blur-lg shadow-xl px-6 opacity-80 hover:opacity-100 py-3 rounded-full border border-white/30 ml-36">
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

                {/* Buttons & Mobile Menu Icon */}
                <div className="flex items-center space-x-4 md:space-x-6">
    <Button
        onClick={() => handleAuth("login")}
        className="border border-white/30 px-5 py-2 rounded-2xl transition duration-300 shadow-xl backdrop-blur-xl bg-white/10 text-white  hover:bg-white/20 hover:border-white/50 hover:shadow-2xltext-white opacity-80 hover:opacity-100"
    >
        Login
    </Button>
    <Button
        onClick={() => handleAuth("signup")}
        className="border border-white/30 px-5 py-2 rounded-2xl transition duration-300 shadow-xl backdrop-blur-xl bg-white/10   hover:bg-white/20 hover:border-white/50 hover:shadow-2xl text-white opacity-80 hover:opacity-100"
    >
        Signup
    </Button>

    {/* Mobile Menu Icon */}
    <MenuIcon
        onClick={openNav}
        className="cursor-pointer size-8 text-white lg:hidden transition-transform duration-300 hover:scale-110"
        aria-label="Open navigation menu"
    />


</div>


            </nav>

            {/* Show Form if Button Clicked */}
            {showForm && <Form closeForm={() => setShowForm(false)} initialAuthType={authType} />}
        </>
    );
};

export default Nav;
