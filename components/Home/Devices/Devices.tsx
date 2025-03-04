"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import clsx from "clsx";
import { Shapes } from "@/components/ui/Shaps";
import { Star } from "@/components/ui/Star";

const steps = [
    { title: "Register", desc: "Sign up and create your profile in minutes." },
    { title: "Find a Match", desc: "Search for donors or recipients near you." },
    { title: "Make a Difference", desc: "Connect and save lives easily." },
];

const Devices: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);

    return (
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Title */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-extrabold text-white drop-shadow-lg" data-aos="fade-up">
                    How it Works
                </h2>
            </div>

            {/* Steps & Image */}
            <div className="relative flex flex-col md:flex-row items-center justify-around gap-12">
                {/* Step List Left */}
                <StepList steps={steps} animation="fade-right" />

                {/* iPhone Image + Animated Shapes */}
                <div className="relative z-10 flex items-center justify-center">
                    <div data-aos="zoom-in" className="relative w-56 sm:w-64 md:w-72">
                        <Image
                            src="/iphone.png"
                            alt="App Demo"
                            width={500}
                            height={500}
                            className="w-full rounded-xl transform transition-transform duration-500 hover:scale-105 "
                        />
                    </div>

                    {/* ⭐️ النجوم المعدلة ⭐️ */}
                    <div className="absolute top-[-30%] left-[10%] opacity-80 animate-[spin_6s_linear_infinite]">
                        <Star className="w-10 h-10 md:w-14 md:h-14" />
                    </div>
                    <div className="absolute top-[10%] right-[-25%] opacity-80 animate-[spin_6s_linear_infinite]">
                        <Star className="w-12 h-12 md:w-16 md:h-16" />
                    </div>
                    <div className="absolute bottom-[20%] left-[-50%] opacity-80 animate-[spin_6s_linear_infinite]">
                        <Star className="w-8 h-8 md:w-12 md:h-12" />
                    </div>
                </div>

                {/* Step List Right */}
                <StepList steps={steps} animation="fade-left" />

                {/* ⭐️ أشكال إضافية */}
                <div className="absolute bottom-6 left-16 opacity-80 animate-float">
                    <Shapes className="w-8 h-8 md:w-12 md:h-12" />
                </div>
                <div className="absolute top-5 right-16 opacity-80 animate-float">
                    <Shapes className="w-10 h-10 md:w-14 md:h-14" />
                </div>
            </div>
        </section>
    );
};

export default Devices;

// Step List Component
type StepListProps = {
    steps: { title: string; desc: string }[];
    animation: "fade-right" | "fade-left";
};

const StepList: React.FC<StepListProps> = ({ steps, animation }) => (
    <div className="space-y-12">
        {steps.map((step, index) => (
            <GlassCard key={index} animation={animation}>
                <h5 className="text-2xl font-semibold text-white">{step.title}</h5>
                <p className="text-gray-300 text-lg">{step.desc}</p>
            </GlassCard>
        ))}
    </div>
);

// Glass Card Component
type GlassCardProps = {
    children: React.ReactNode;
    animation: "fade-right" | "fade-left";
};

const GlassCard: React.FC<GlassCardProps> = ({ children, animation }) => (
    <div
        data-aos={animation}
        className={clsx(
            "w-80 p-6 rounded-2xl shadow-lg backdrop-blur-xl border border-white/10 transition-transform duration-300",
            "bg-gray-900/40 hover:scale-105 hover:shadow-2xl"
        )}
    >
        {children}
    </div>
);
