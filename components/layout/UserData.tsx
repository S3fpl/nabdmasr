"use client";
import { useState } from "react";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { Session } from "next-auth";
import SigninWithGoogle from "./SigninWithGoogle";
import Logout from "./Logout";
import Link from "next/link";

interface UserDataProps {
    session: Session | null;
}

const UserData: React.FC<UserDataProps> = ({ session }) => {
    const [showModal, setShowModal] = useState(false);
    const [animate, setAnimate] = useState(false);

    const handleImageClick = () => {
        setAnimate(true);
        setShowModal(true);
    };

    const closeModal = () => {
        setAnimate(false);
        setTimeout(() => setShowModal(false), 300);
    };

    return (
        <div className="text-white text-center mt-10 z-[9999] relative">
            
            {session ? (
                <div className="group relative">
                    {session.user?.image && session.user.image.trim() !== "" && (
                        <div
                            className="group cursor-pointer fixed top-2 right-12 z-[10000]"
                            onClick={handleImageClick}
                        >
                            {/* Profile Image */}
                            <Image
                                src={session.user.image}
                                alt="profile"
                                width={50}
                                height={50}
                                className="rounded-full border border-orange-500 p-[2px] bg-gray-700/10 shadow-lg transition-all duration-300"
                            />

                            {/* Animated Settings Icon */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out">
                                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full backdrop-blur-sm bg-red-500/50 shadow-lg">
                                    <Image
                                        src="/settings.svg"
                                        alt="settings"
                                        width={28}
                                        height={28}
                                        className="w-6 h-6 filter brightness-0 invert sepia saturate-200 hue-rotate-[330deg]"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Modal - Popup with Glass Effect */}
                    {showModal && (
                        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
                            <div
                                className={`bg-white/30 text-white p-6 rounded-lg shadow-lg w-80 sm:w-96 max-w-full backdrop-blur-lg transition-transform duration-300 ${animate ? "scale-100" : "scale-0"
                                    }`}
                            >
                                {/* Close Button */}
                                <XIcon
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 font-extrabold cursor-pointer text-white transition-transform hover:scale-110 hover:text-red-400"
                                />
                                <h2 className="text-xl mb-6 bg-white/20 w-full sm:w-1/2 mx-auto px-4 py-3 rounded-lg flex justify-center items-center gap-2">
                                    <span>Account</span>
                                    <span>Settings</span>
                                </h2>

                                <ul className="space-y-4">

                                    {/* View Profile Link */}
                                    <li className="hover:bg-white/20 rounded-lg p-2 transition-all duration-300  hover:text-red-300">
                                        <Link
                                            href="/profile"
                                            className=" w-full text-left"
                                        >
                                            View Profile
                                        </Link>
                                    </li>

                                    {/* Donation History Link */}
                                    <li className="hover:bg-white/20 rounded-lg p-2 transition-all duration-300  hover:text-red-300">
                                        <Link
                                            href="/donation-history"
                                            className=" w-full text-left"
                                        >
                                            Donation History
                                        </Link>
                                    </li>

                                    {/* Previous Donations Link */}
                                    <li className="hover:bg-white/20 rounded-lg p-2 transition-all duration-300 hover:text-red-300">
                                        <Link
                                            href="/previous-donations"
                                            className=" w-full text-left"
                                        >
                                            Previous Donations
                                        </Link>
                                    </li>
                                </ul>

                                {/* Logout Button */}
                                <Logout closeModal={closeModal} />
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <SigninWithGoogle />
            )}
        </div>
    );
};

export default UserData;
