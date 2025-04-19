"use client";

import { useState, useEffect } from "react";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Shapes } from "@/components/ui/Shaps";
import { signIn } from "next-auth/react";

const Form = ({ closeForm, initialAuthType }) => {
    const [authType, setAuthType] = useState(initialAuthType);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    const handleClose = () => {
        setAnimate(false);
        setTimeout(closeForm, 300);
    };

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${animate ? "opacity-100" : "opacity-0"
                }`}
        >
            <div
                className={`relative w-full max-w-sm p-3 sm:p-4 rounded-md shadow-lg backdrop-blur-md bg-white/10 dark:bg-gray-900/20 border border-white/20 transform transition-transform duration-300 ${animate ? "scale-100" : "scale-90"
                    }`}
            >
                {/* Shapes */}
                <div className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 opacity-80 animate-float z-[9999] pointer-events-none">
                    <Shapes className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 opacity-80 animate-float z-[9999]">
                    <Shapes className="w-10 h-10 md:w-12 md:h-12" />
                </div>

                {/* Close button */}
                <XIcon
                    onClick={handleClose}
                    className="absolute top-3 right-3 w-5 h-5 cursor-pointer text-white hover:text-red-500 transition duration-200"
                />

                {/* Title */}
                <h2 className="text-xl font-semibold text-center text-red-500 mb-4 mt-6">
                    {authType === "login" ? "Login" : "Sign Up"}
                </h2>

                {/* Form */}
                <form
                    className={`${authType === "signup"
                        ? "grid grid-cols-1 sm:grid-cols-2 gap-3"
                        : "space-y-3"
                        }`}
                >
                    {authType === "signup" && (
                        <>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="col-span-2 p-1.5 text-sm border rounded bg-white/20 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="p-1.5 text-sm border rounded bg-white/20 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none"
                                value="+20 "
                                pattern="^(\+20\s)(11|12|15)[0-9]{8}$"
                                required
                                title="Phone number must start with +20 followed by 011, 012, or 015 and 9 digits."
                                maxLength={14}
                                onInput={(e) => {
                                    let value = e.target.value;
                                    if (value.length > 14) {
                                        e.target.value = value.slice(0, 14);
                                    }
                                    if (!value.startsWith("+20 ")) {
                                        e.target.value = "+20 ";
                                    }
                                }}
                            />
                            <select className="w-full p-1.5 text-sm border rounded bg-white/20 backdrop-blur-md text-white focus:outline-none cursor-pointer hover:bg-white/30 transition">
                                <option value="">Gender</option>
                                {["male", "female"].map((gender) => (
                                    <option key={gender} value={gender}>
                                        {gender}
                                    </option>
                                ))}
                            </select>
                            <select className="w-full p-1.5 text-sm border rounded bg-white/20 backdrop-blur-md text-white focus:outline-none cursor-pointer hover:bg-white/30 transition">
                                <option value="">Blood Type</option>
                                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="date"
                                className="p-1.5 text-sm border rounded bg-white/20 backdrop-blur-md text-white focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Governorate"
                                className="p-1.5 text-sm border rounded bg-white/20 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none"
                            />
                            <input
                                type="date"
                                placeholder="Last Donation Date"
                                className="p-1.5 text-sm border rounded bg-white/20 backdrop-blur-md text-white focus:outline-none"
                            />
                        </>
                    )}

                    <input
                        type="email"
                        placeholder="Email"
                        className={`${authType === "signup" ? "col-span-2" : "w-full"} p-1.5 text-sm border rounded bg-white/20 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none`}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className={`${authType === "signup" ? "col-span-2" : "w-full"} p-1.5 text-sm border rounded bg-white/20 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none`}
                    />

                    <Button
                        className={`${authType === "signup" ? "col-span-2" : "w-full"} bg-red-600 text-white text-sm py-1.5 rounded hover:bg-red-700 transition`}
                    >
                        {authType === "login" ? "Login" : "Sign Up"}
                    </Button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-3">
                    <div className="flex-grow h-px bg-white/30" />
                    <span className="mx-2 text-xs text-white/70">or</span>
                    <div className="flex-grow h-px bg-white/30" />
                </div>

                {/* Google Login Button */}
                <Button
                    variant="outline"
                    className="w-full border-white/30 text-white text-sm py-1.5 hover:bg-white/10 hover:border-white/50 transition flex items-center justify-center gap-2"
                    onClick={() => signIn("google")}
                >
                    <img
                        src="/google-icon.svg"
                        alt="Google"
                        className="w-4 h-4"
                    />
                    Login with Google
                </Button>

                {/* Toggle login/signup */}
                <p className="mt-6text-center text-xs text-gray-300">
                    {authType === "login"
                        ? "Don't have an account?"
                        : "Already have an account?"}{" "}
                    <button
                        onClick={() =>
                            setAuthType(authType === "login" ? "signup" : "login")
                        }
                        className="text-red-500 font-semibold hover:underline"
                    >
                        {authType === "login" ? "Sign up" : "Login"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Form;
