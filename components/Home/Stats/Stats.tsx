"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import clsx from "clsx";

const statsData = [
    { value: "10K+", label: "Donors", delay: "0" },
    { value: "5K+", label: "Transplants", delay: "200" },
    { value: "20+", label: "Years", delay: "400" },
    { value: "50+", label: "Hospitals", delay: "600" },
];

const Stats: React.FC = () => {
    useEffect(() => {
        setTimeout(() => {
            AOS.init({ duration: 1000 });
        }, 300);
    }, []);

    return (
        <section className="w-[90%] mx-auto py-12">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {statsData.map((stat, index) => (
                    <StatCard key={index} value={stat.value} label={stat.label} delay={stat.delay} />
                ))}
            </div>
        </section>
    );
};

type StatCardProps = {
    value: string;
    label: string;
    delay: string;
};

const StatCard: React.FC<StatCardProps> = ({ value, label, delay }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay}
            className={clsx(
                "group flex items-center justify-center gap-4 py-4 px-6 rounded-xl shadow-md",
                "transition-all duration-300 hover:scale-105",
                "opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-300",
                "backdrop-blur-lg bg-white/10 border border-white/20 text-white text-center"
            )}
        >
            <h4 className="flex items-center justify-center text-3xl font-extrabold group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                {value}
            </h4>
            <p className="text-sm font-medium uppercase mt-1 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                {label}
            </p>
        </div>
    );
};

export default Stats;
