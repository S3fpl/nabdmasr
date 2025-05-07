"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import clsx from "clsx";
import { Shapes } from "@/components/ui/Shaps";
import { Star } from "@/components/ui/Star";

// Icon Components
const UserIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const SearchIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const HeartIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

const LightningIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const LockIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

const LocationIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const DocumentIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const steps = [
    { title: "Register", desc: "Sign up and create your profile in minutes.", icon: <UserIcon /> },
    { title: "Find a Match", desc: "Search for donors or recipients near you.", icon: <SearchIcon /> },
    { title: "Make a Difference", desc: "Connect and save lives easily.", icon: <HeartIcon /> },
];

const features = [
    { title: "Real-time Matching", desc: "Instant connection with compatible donors", icon: <LightningIcon /> },
    { title: "Secure Communication", desc: "End-to-end encrypted messaging system", icon: <LockIcon /> },
    { title: "Location Services", desc: "Find donors in your vicinity", icon: <LocationIcon /> },
    { title: "Medical History", desc: "Comprehensive health records management", icon: <DocumentIcon /> },
];

const Devices: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);

    return (
        <section className="relative py-24 px-6 overflow-hidden min-h-screen flex flex-col items-center">
            {/* Title */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-extrabold text-white drop-shadow-lg" data-aos="fade-up">
                    How it Works
                </h2>
                <p className="mt-4 text-xl text-gray-300" data-aos="fade-up" data-aos-delay="200">
                    Join our community and make a difference today
                </p>
            </div>

            {/* Steps & Image */}
            <div className="relative flex flex-col md:flex-row items-center justify-around gap-12 w-full max-w-7xl mx-auto">
                {/* Step List Left */}
                <StepList steps={steps} animation="fade-right" />

                {/* iPhone Image + Animated Shapes */}
                <div className="relative z-10 flex items-center justify-center min-h-[300px]">
                    <div data-aos="zoom-in" className="relative w-56 sm:w-64 md:w-72">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl blur-xl"></div>
                        <Image
                            src="/iphone.png"
                            alt="App Demo"
                            width={300}
                            height={600}
                            priority
                            className="w-full h-auto rounded-xl transform transition-transform duration-500 hover:scale-105 relative z-10"
                        />
                    </div>

                    {/* Animated Stars */}
                    <div className="absolute top-[10%] right-[-25%] opacity-80 animate-[spin_6s_linear_infinite]">
                        <Star className="w-12 h-12 md:w-16 md:h-16 text-red-400" />
                    </div>
                    <div className="absolute bottom-[20%] left-[-50%] opacity-80 animate-[spin_6s_linear_infinite]">
                        <Star className="w-8 h-8 md:w-12 md:h-12 text-pink-400" />
                    </div>
                </div>

                {/* Step List Right */}
                <StepList steps={steps} animation="fade-left" />
            </div>

            {/* Features Section */}
            <div className="mt-32 w-full max-w-7xl mx-auto">
                <h3 className="text-4xl font-bold text-white text-center mb-12" data-aos="fade-up">
                    Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            feature={feature}
                        />
                    ))}
                </div>
            </div>

            {/* Animated Shapes */}
            <div className="absolute -bottom-5 left-16 sm:bottom-4 sm:left-16 opacity-80 animate-float">
                <Shapes className="w-10 h-10 md:w-14 md:h-14 text-red-400" />
            </div>
            <div className="absolute -top-5 right-16 sm:top-4 sm:right-16 opacity-80 animate-float">
                <Shapes className="w-10 h-10 md:w-14 md:h-14 text-pink-400" />
            </div>
        </section>
    );
};

// Step List Component
type StepListProps = {
    steps: { title: string; desc: string; icon: React.ReactNode }[];
    animation: "fade-right" | "fade-left";
};

const StepList: React.FC<StepListProps> = ({ steps, animation }) => (
    <div className="space-y-12">
        {steps.map((step, index) => (
            <GlassCard key={index} animation={animation}>
                <div className="flex items-center gap-4">
                    <div className="text-red-400">{step.icon}</div>
                    <div>
                        <h5 className="text-2xl font-semibold text-white">{step.title}</h5>
                        <p className="text-gray-300 text-lg">{step.desc}</p>
                    </div>
                </div>
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
            "w-80 min-h-[120px] p-6 rounded-2xl transition-all duration-300",
            "border border-white/10 hover:border-white/20",
            "hover:scale-105 hover:shadow-2xl",
            "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-red-500/10 before:to-pink-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
            "relative overflow-hidden"
        )}
    >
        <div className="relative z-10">{children}</div>
    </div>
);

// Feature Card Component
type FeatureCardProps = {
    feature: { title: string; desc: string; icon: React.ReactNode };
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => (
    <div
        className={clsx(
            "p-6 rounded-2xl transition-all duration-300",
            "border border-white/10 hover:border-white/20",
            "hover:shadow-xl hover:scale-105",
            "relative overflow-hidden",
            "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-red-500/10 before:to-pink-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
        )}
        data-aos="fade-up"
    >
        <div className="relative z-10">
            <div className="text-red-400 mb-4">{feature.icon}</div>
            <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
            <p className="text-gray-300">{feature.desc}</p>
        </div>
    </div>
);

export default Devices;
