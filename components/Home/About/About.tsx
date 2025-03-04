"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import clsx from "clsx";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });

        const interval = setInterval(() => {
            AOS.refresh();
        }, 2000); // إعادة تشغيل AOS كل 2 ثانية

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-[90%] mx-auto flex flex-col items-center gap-16 py-16 rounded-3xl shadow-2xl overflow-hidden relative bg-gray-900/40 backdrop-blur-lg border border-white/10">
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
