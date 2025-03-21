"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import animationData from '@/public/construction.json';

const Construction = () => {
    return (
        <div className="fixed inset-0 z-[1111] flex items-center justify-center backdrop-blur-xl bg-black/50">
            <div className="bg-white/20 p-8 rounded-2xl shadow-2xl flex flex-col items-center mt-4 relative">
                <button
                    onClick={() => window.history.back()}
                    className="absolute top-2 left-2 flex items-center gap-1 px-3 py-1 text-white hover:text-gray-300 transition"
                >
                    <span className="text-sm">Back</span>
                </button>

                <Lottie animationData={animationData} loop={true} className="w-80 h-80" />
                <h1 className="text-white text-2xl mt-2 text-center">Page Under Construction</h1>
                <p className="text-white text-base mt-1 text-center">For inquiries, contact us at:</p>
                <a
                    href="mailto:nabdmasr.team@gmail.com"
                    className="text-blue-400 text-base underline mt-1"
                >
                    nabdmasr.team@gmail.com
                </a>
            </div>
        </div>
    );
};

export default Construction;
