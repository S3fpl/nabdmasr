"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Shapes } from "@/components/ui/Shaps";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { Star } from "@/components/ui/Star";

const Hero = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });

        fetch("/blood-donation.json")
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch((err) => console.error("Error loading animation:", err));
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
            <div className="absolute top-[400px] left-[40px] opacity-80 animate-spin-slow">
                <Star className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className="absolute top-[200px] left-[450px] opacity-80 animate-spin-slow">
                <Star className="w-12 h-12 md:w-16 md:h-16" />
            </div>

            <div className="md:w-1/2 space-y-6 text-center md:text-left min-h-[300px]">
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
                        "backdrop-blur-lg bg-white/10 border border-white/20 hover:text-white text-gray-300",
                        "hover:bg-white/20 hover:scale-105 focus:ring focus:ring-white/30 active:scale-95"
                    )}
                    data-aos="zoom-in"
                >
                    Get Started
                </button>
            </div>

            <motion.aside
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02, rotate: 1.5, opacity: 1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95 }}
                className="relative md:w-1/2 flex justify-center backdrop-blur-lg bg-white/10 border border-white rounded-xl shadow-xl w-4/5 min-h-[350px]"
            >
                <div className="absolute -top-7 -right-7 sm:-top-8 sm:-right-8 opacity-80 animate-float z-[9999] pointer-events-none">
                    <Shapes className="w-14 h-14 md:w-16 md:h-16" />
                </div>
                <div className="absolute -bottom-7 -left-7 sm:-bottom-8 sm:-left-8 opacity-80 animate-float z-[9999] pointer-events-none">
                    <Shapes className="w-14 h-14 md:w-16 md:h-16" />
                </div>
                <Lottie animationData={animationData} className="w-[60%] md:w-[75%] max-w-lg drop-shadow-xl" />
            </motion.aside>
        </section>
    );
};

export default Hero;
