"use client";
import Image from "next/image";
import Link from "next/link";

const BookPage = () => {
    return (
        <section className="min-h-screen  text-white py-16 px-6 flex items-center justify-center mt-20">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 w-full max-w-5xl shadow-2xl space-y-12">
                <h1 className="text-4xl font-bold text-center text-white">
                    Nabd Masr Blood Donation Guide
                </h1>

                {/* Session 1 */}
                <section className="text-lg leading-relaxed">
                    <h2 className="text-2xl font-semibold mb-2 text-white">Why This Guide?</h2>
                    <p className="text-gray-300">
                        This book is a comprehensive resource covering everything you need to know about blood donation.
                        It is designed to educate and encourage people to take part in saving lives.
                    </p>
                </section>

                {/* Session 2 */}
                <section className="text-lg leading-relaxed">
                    <h2 className="text-2xl font-semibold mb-2 text-white">What’s Inside?</h2>
                    <p className="text-gray-300">
                        Learn about the donation process, health benefits, eligibility requirements, and answers to common questions.
                        The content is tailored to make the process easy and understandable for everyone.
                    </p>
                </section>

                {/* Session 3 */}
                <section className="text-lg leading-relaxed">
                    <h2 className="text-2xl font-semibold mb-2 text-white">Join the Mission</h2>
                    <p className="text-gray-300">
                        By understanding the impact of blood donation, you can become part of a life-saving mission.
                        Every drop counts, and your awareness can lead to someone’s survival.
                    </p>
                </section>

                {/* Book + Download Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-12">
                    <div className="flex-1">
                        <Image 
                            src="/nabd-masr-book.png" 
                            alt="Nabd Masr Book Cover" 
                            width={320} 
                            height={420} 
                            className="rounded-xl shadow-2xl mx-auto md:mx-0"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left space-y-6">
                        <h3 className="text-2xl font-semibold text-white">Download Your Copy</h3>
                        <p className="text-lg text-gray-300">
                            Ready to dive in? Click the button below to download the full guide.
                        </p>
                        <Link 
                            href="/" 
                            target="_blank" 
                            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                        >
                            Download PDF
                        </Link>
                        <div>
                            <Link href="/" className="text-gray-400 hover:text-white underline block mt-4">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookPage;
