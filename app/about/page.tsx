import React from 'react';
import Image from 'next/image';

function About() {
    return (
        <section className="px-4">
            <div className="grid grid-cols-10 grid-rows-6 gap-6">
                <div className="col-span-2 row-span-4 col-start-2 row-start-2 backdrop-blur-lg bg-gray-500/20 border border-white/20 rounded-2xl overflow-hidden">
                    <Image
                        src="/"
                        alt="Image 1"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className="col-span-2 row-span-3 col-start-4 row-start-2 backdrop-blur-lg bg-gray-500/20 border border-white/20 rounded-2xl overflow-hidden flex items-center justify-center">
                    <Image
                        src="/logo.ico"
                        alt="Image 2"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="col-span-2 col-start-4 row-start-5 backdrop-blur-lg bg-gray-500/20 border border-white/20 rounded-2xl text-white text-3xl flex items-center justify-center flex-col py-6 px-4">
                    6+ <span className="text-xl">Months of Experience</span>
                </div>
                <div className="col-span-4 row-span-4 col-start-6 row-start-2 border-gray-500 hover:border-white run rounded-2xl flex items-center justify-center text-white text-3xl">4</div>
            </div>
            <div className="grid grid-cols-10 grid-rows-8 gap-6 p-4">
                <div className="col-span-4 row-span-2 col-start-2 row-start-2 backdrop-blur-lg bg-gray-500/20 border border-white/20 rounded-2xl flex items-center justify-center text-white text-3xl p-4">5</div>
                <div className="col-span-4 row-span-2 col-start-2 row-start-4 backdrop-blur-lg bg-gray-500/20 border border-white/20 rounded-2xl flex items-center justify-center text-white text-3xl p-4">6</div>
                <div className="col-span-4 row-span-2 col-start-2 row-start-6 backdrop-blur-lg bg-gray-500/20 border border-white/20 rounded-2xl flex items-center justify-center text-white text-3xl p-4">7</div>
                <div className="col-span-4 row-span-6 col-start-6 row-start-2 backdrop-blur-lg bg-gray-500/20 border border-white/20 rounded-2xl flex items-center justify-center text-white text-3xl p-4">8</div>
            </div>
        </section>
    );
}

export default About;
