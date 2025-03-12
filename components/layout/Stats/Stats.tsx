"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import clsx from "clsx";
import { Shapes } from "@/components/ui/Shaps";

const statsData = [
    { value: "73M+", label: "developers", delay: "0" },
    { value: "1B+", label: "contributors", delay: "200" },
    { value: "4M+", label: "organizations", delay: "400" },
  ];

const Stats: React.FC = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.init({ duration: 1000, once: true });
        }, 300);
    }, []);

    return (
        <section className="relative w-[90%] mx-auto py-12">

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 relative z-10">
                {statsData.map((stat, index) => (
                    <StatCard 
                        key={index} 
                        value={stat.value} 
                        label={stat.label} 
                        delay={stat.delay} 
                        isFirst={index === 0} 
                        isLast={index === statsData.length - 1} 
                    />
                ))}
            </div>
        </section>
    );
};

type StatCardProps = {
    value: string;
    label: string;
    delay: string;
    isFirst: boolean;
    isLast: boolean;
};

const StatCard: React.FC<StatCardProps> = ({ value, label, delay, isFirst, isLast }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay}
            className={clsx(
                "group relative flex items-center justify-center gap-4 py-6 px-8 rounded-xl shadow-md",
                "transition-all duration-300 hover:scale-110 hover:rotate-2 active:scale-95",
                "opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-300",
                "backdrop-blur-lg bg-white/10 border border-white/20 text-white text-center",
                "w-full sm:w-auto"
            )}
        >

            {isFirst && (
                <div className="absolute -top-5 left-4 sm:-top-6 opacity-90 animate-float pointer-events-none">
                    <Shapes className="w-10 h-10 md:w-12 md:h-12" />
                </div>
            )}
            {isLast && (
                <div className="absolute -bottom-5 right-6 sm:-bottom-6 opacity-90 animate-float z-10 pointer-events-none">
                    <Shapes className="w-10 h-10 md:w-12 md:h-12" />
                </div>
            )}

            {/* 📊 المحتوى */}
            <h4 className="text-3xl font-extrabold">{value}</h4>
            <p className="text-sm font-medium uppercase">{label}</p>
        </div>
    );
};

export default Stats;
