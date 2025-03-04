"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Hero = () => {
    const [animationData, setAnimationData] = useState(null);
    const { theme, setTheme } = useTheme();
    const darkMode = theme === "dark";

    useEffect(() => {
        let isMounted = true;

        AOS.init({ duration: 1000, delay: 300 });

        const refreshAOS = () => {
            if (isMounted) {
                AOS.refresh();
                requestAnimationFrame(refreshAOS);
            }
        };
        requestAnimationFrame(refreshAOS);

        fetch("/blood-donation.json")
            .then((res) => res.json())
            .then((data) => isMounted && setAnimationData(data))
            .catch((err) => console.error("Error loading animation:", err));

        return () => {
            isMounted = false;
        };
    }, []);

    if (!animationData)
        return (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1050]">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                        <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
                    </div>
                </div>
            </div>
        );

    return (
        <section className="w-[90%] min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 mx-auto relative transition-all duration-500">
            {/* نص المقدمة */}
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 drop-shadow-lg" data-aos="fade-down">
                    Nabd Masr
                </h1>
                <h2 className="text-3xl md:text-5xl leading-tight font-semibold text-gray-300" data-aos="fade-up">
                    <span className="text-red-500 font-bold">Blood</span> donation has a <br className="hidden md:block" />
                    noble purpose—saving <span className="text-red-500 font-bold">lives</span>.
                </h2>
                <p className="text-lg md:text-xl max-w-lg mx-auto md:mx-0 text-gray-400" data-aos="fade-up">
                    A platform for blood donation and organ transplantation, making a difference one drop at a time.
                </p>
                <button
                    className={clsx(
                        "mt-6 px-8 py-3 rounded-full font-bold transition-all duration-500 shadow-lg",
                        "backdrop-blur-lg bg-white/10 border border-white/20 hover:text-white text-gray-300 transition duration-300 opacity-80 hover:opacity-100",
                        "hover:bg-white/20 hover:scale-105 focus:ring focus:ring-white/30 active:scale-95"
                    )}
                    data-aos="zoom-in"
                >
                    Get Started
                </button>
            </div>
            <motion.aside
    initial={{ opacity: 0, scale: 0.8, y: 30 }}
    animate={{ opacity:0.6, scale: 1, y: 0 }}
    transition={{ opacity:1, duration: 0.8, ease: "easeOut" }}
    whileHover={{
        scale: 1.01,
        borderColor: "white",
        opacity: 1,
        transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.95 }}
    className="md:w-1/2 flex justify-center backdrop-blur-lg bg-white/10 border border-white rounded-xl shadow-xl"
>
    <Lottie animationData={animationData} className="w-[65%] md:w-[75%] max-w-lg drop-shadow-xl" />
</motion.aside>

        </section>
    );
};

export default Hero;
