"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="w-[90%] mx-auto flex flex-col items-center gap-16 py-20 relative z-10">
            {/* Transparent Background with Light Effect */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/20" />

            {/* Light Beams */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000" />

            {/* Title */}
            <div className="relative z-10 text-center" data-aos="fade-up">
                <h2 className="text-6xl font-light tracking-wider text-white/90">
                    Who We Are
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400/50 to-purple-400/50 mx-auto mt-4 rounded-full" />
            </div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 w-full max-w-6xl px-8">
                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center" data-aos="fade-right">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-700" />
                        <Image
                            src="/About.svg"
                            alt="About Us"
                            width={400}
                            height={400}
                            className="relative rounded-[2rem] transform group-hover:scale-105 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 space-y-8 text-center md:text-left" data-aos="fade-left">
                    <p className="text-xl leading-relaxed text-white/80 font-light">
                        We are a dedicated team focused on providing the best services in blood donation and organ transplantation.
                        Our mission is to save lives and create a lasting positive impact on society.
                    </p>
                    <p className="text-xl leading-relaxed text-white/80 font-light">
                        We aim to build a strong community where donors come together to make a difference, ensuring a healthier future for all.
                    </p>
                    <button
                        className={clsx(
                            "mt-8 px-10 py-4 font-light tracking-wider rounded-full relative group overflow-hidden",
                            "bg-white/10 backdrop-blur-sm text-white/90",
                            "hover:bg-white/20 transition-all duration-500"
                        )}
                        data-aos="zoom-in"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative">
                            <Link href="/about">
                                Discover More
                            </Link>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;