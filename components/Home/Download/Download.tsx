"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// تعريف نوع Props الخاص بزر التحميل
type DownloadButtonProps = {
    href: string;
    icon: React.ReactNode;
    text: string;
    animation: "fade-right" | "fade-left";
    delay?: string;
};

// مكون زر التحميل
const DownloadButton: React.FC<DownloadButtonProps> = ({ href, icon, text, animation, delay }) => (
    <a
        href={href}
        className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg text-white border border-white/20 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl opacity-90 hover:opacity-100"
        data-aos={animation}
        data-aos-delay={delay || "0"}
    >
        {icon}
        <span>{text}</span>
    </a>
);

// مكون التحميل الرئيسي
const Download: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="w-full flex flex-col items-center justify-center py-16">
            {/* العنوان والنص */}
            <div className="text-center" data-aos="fade-up">
                <h2 className="text-5xl font-extrabold text-white drop-shadow-md mb-8">
                    Download Our App
                </h2>
                <p className="text-lg text-white/90 max-w-xl mx-auto">
                    Get the best experience with our mobile app. Stay connected and up to date with the latest features.
                </p>
            </div>

            {/* أزرار التحميل */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
                <DownloadButton
                    href="#"
                    icon={
                        <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                        </svg>
                    }
                    text="Download on App Store"
                    animation="fade-right"
                />

                <DownloadButton
                    href="#"
                    icon={
                        <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                        </svg>
                    }
                    text="Get it on Google Play"
                    animation="fade-left"
                    delay="100"
                />
            </div>
        </section>
    );
};

export default Download;
