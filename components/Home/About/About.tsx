"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import clsx from "clsx";
import { Shapes } from "@/components/ui/Shaps";
import { Star } from "@/components/ui/Star";
const About = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });

        const interval = setInterval(() => {
            AOS.refresh();
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-[90%] mx-auto flex flex-col items-center gap-16 py-16 rounded-3xl shadow-2xl overflow-hidden relative z-10 bg-gray-900/40 backdrop-blur-lg border border-white/10">

            {/* ⭐️ أشكال متحركة ⭐️ */}
            <div className="absolute bottom-6 left-16 opacity-80 animate-float ">
                <Shapes className="w-8 h-8 md:w-12 md:h-12" />
            </div>
            <div className="absolute top-6 right-16 opacity-80 animate-float ">
                <Shapes className="w-10 h-10 md:w-14 md:h-14" />
            </div>
            <div className=" blur absolute bottom-[12%] right-[5%] opacity-80 animate-[spin_6s_linear_infinite] z-0">
                <Star className="w-10 h-10 md:w-20 md:h-20" />
            </div>
            <div className=" blur absolute bottom-[45%] left-[5%] opacity-80 animate-[spin_6s_linear_infinite] z-0">
                <Star className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <div className=" blur absolute top-[6%] left-[40%] opacity-80 animate-[spin_6s_linear_infinite] z-0">
                <Star className="w-8 h-8 md:w-24 md:h-24" />
            </div>



            {/* Title */}
            <div className="relative z-10 text-center" data-aos="fade-up">
                <h2 className="text-5xl font-extrabold text-red-500 drop-shadow-lg">Who We Are</h2>
            </div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-5xl">
                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center" data-aos="fade-right">
                    <Image
                        src="/About.svg"
                        alt="About Us"
                        width={400}
                        height={400}
                        className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 space-y-6 text-center md:text-left" data-aos="fade-left">
                    <p className="text-lg leading-relaxed text-gray-300">
                        We are a dedicated team focused on providing the best services in blood donation and organ transplantation.
                        Our mission is to save lives and create a lasting positive impact on society.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-300">
                        We aim to build a strong community where donors come together to make a difference, ensuring a healthier future for all.
                    </p>
                    <button
                        className={clsx(
                            "mt-6 px-8 py-3 border border-red-500 font-bold rounded-full shadow-lg transition-all duration-700",
                            "text-red-500 bg-transparent backdrop-blur-lg border border-white/20",
                            "hover:bg-red-500 hover:text-white hover:shadow-[0px_0px_20px_rgba(255,0,0,0.5)]"
                        )}
                        data-aos="zoom-in"
                    >
                        Learn More
                    </button>
                </div>
            </div>

        </section>
    );
};

export default About;
