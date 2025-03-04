import React from "react";
import Image from "next/image";
import clsx from "clsx";

type FeatureType = {
    title: string;
    description: string;
    icon: string;
};

const features: FeatureType[] = [
    { title: "Seamless Donation", description: "Enhancing the donation process with ease.", icon: "/red.svg" },
    { title: "Efficient Matching", description: "Matching donors with recipients efficiently.", icon: "/logo.ico" },
    { title: "Organ Transplant Support", description: "Reliable support for organ transplantation.", icon: "/black.svg" },
];

const FeatureSection: React.FC = () => {
    return (
        <section className="w-[90%] mx-auto flex flex-col gap-16 py-16">
            <div className="text-center flex flex-col items-center">
                <h2 className="text-4xl font-extrabold text-white border-b-4 border-red-600 pb-2">
                    Our Features
                </h2>
                <p className="text-lg text-gray-300 mt-3 max-w-2xl">
                    Providing the best services for blood donation and organ transplantation with efficiency and reliability.
                </p>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

type FeatureCardProps = {
    feature: FeatureType;
    index: number;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
    const invertedBorder = index % 2 === 1; // كل كارت ثاني يكون له حدود معكوسة

    return (
        <div
            className={clsx(
                "relative flex flex-col items-center text-center w-[300px] h-[350px] p-6 rounded-2xl shadow-lg transition-transform hover:scale-105",
                "backdrop-blur-lg bg-white/10 border border-white/20 text-white",
                invertedBorder && "border-white bg-white/5"
            )}
        >
            <div className="w-20 h-20 flex items-center justify-center mb-8">
                <Image src={feature.icon} alt={feature.title} width={80} height={80} className="object-contain" />
            </div>
            <h5 className="text-xl font-bold text-red-400 mb-2">{feature.title}</h5>
            <p className="text-gray-300 text-sm mt-1 mb-4 px-3">{feature.description}</p>
            <button className="px-5 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-500 transition-all mt-auto">
                Learn More
            </button>
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                NEW
            </div>
        </div>
    );
};

export default FeatureSection;
