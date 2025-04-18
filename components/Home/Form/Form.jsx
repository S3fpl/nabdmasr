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
                className={`relative w-[90%] max-w-md p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-lg bg-white/10 dark:bg-gray-900/20 border border-white/20 transform transition-transform duration-300 ${animate ? "scale-100" : "scale-90"
                    }`}
            >
                {/* Shapes - Top Right */}
                <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 opacity-80 animate-float z-[9999] pointer-events-none">
                    <Shapes className="w-12 h-12 md:w-16 md:h-16" />
                </div>

                {/* Shapes - Bottom Left */}
                <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 opacity-80 animate-float z-[9999]">
                    <Shapes className="w-12 h-12 md:w-16 md:h-16" />
                </div>

                {/* Close button */}
                <XIcon
                    onClick={handleClose}
                    className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white hover:text-red-500 transition duration-200"
                />

                {/* Form Title */}
                <h2 className="text-2xl font-bold text-center text-red-600 mb-6 mt-10">
                    {authType === "login" ? "Login" : "Sign Up"}
                </h2>

                {/* Form */}
                <form
                    className={`${authType === "signup"
                        ? "grid grid-cols-1 sm:grid-cols-2 gap-4"
                        : "space-y-4"
                        }`}
                >
                    {authType === "signup" && (
                        <>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="col-span-2 p-2 border rounded bg-white/20 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-none"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="p-2 border rounded bg-white/20 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-none"
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

                            {/* Gender Select - Glass Style */}
                            <select className="w-full p-2 border rounded bg-white/20 backdrop-blur-md text-white focus:outline-none focus:ring-none cursor-pointer hover:bg-white/30 transition-colors duration-200 appearance-none">
                                <option value="" className="bg-gray-900/90 hover:bg-white/30 hover:text-gray-900">
                                    Gender
                                </option>
                                {["male", "female"].map((gender) => (

                                    <option
                                        key={gender}
                                        value={gender}
                                        className="bg-gray-900/90 hover:bg-white/30 hover:text-gray-900">
                                        {gender}
                                    </option>
                                ))}
                            </select>

                            {/* Blood Type Select - Glass Style */}
                            <select className="custom-select w-full p-2 border rounded bg-white/20 backdrop-blur-md text-white focus:outline-none focus:ring-none cursor-pointer hover:bg-white/30 transition-colors duration-200 appearance-none">
                                <option value="" className="bg-gray-900/90 hover:bg-white/30 hover:text-gray-900">
                                    Blood Type
                                </option>
                                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((type) => (
                                    <option
                                        key={type}
                                        value={type}
                                        className="bg-gray-900/90 hover:bg-white/30 hover:text-gray-900"
                                    >
                                        {type}
                                    </option>
                                ))}
                            </select>

                            <input
                                type="date"
                                placeholder="Date of Birth"
                                className="p-2 border rounded bg-white/20 backdrop-blur-md text-white focus:outline-none focus:ring-none"
                            />
                            <input
                                type="text"
                                placeholder="Governorate"
                                className="p-2 border rounded bg-white/20 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-none"
                            />
                            <input
                                type="date"
                                placeholder="Last Donation Date"
                                className="p-2 border rounded bg-white/20 backdrop-blur-md text-white focus:outline-none focus:ring-none"
                            />
                        </>
                    )}

                    <input
                        type="email"
                        placeholder="Email"
                        className={`${authType === "signup" ? "col-span-2" : "w-full"
                            } p-2 border rounded bg-white/20 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-none`}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className={`${authType === "signup" ? "col-span-2" : "w-full"
                            } p-2 border rounded bg-white/20 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-none`}
                    />

                    <Button
                        className={`${authType === "signup" ? "col-span-2" : "w-full"
                            } bg-red-600 text-white py-2 rounded hover:bg-red-700 transition`}
                    >
                        {authType === "login" ? "Login" : "Sign Up"}
                    </Button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-white/30" />
                    <span className="mx-2 text-sm text-white/70">or</span>
                    <div className="flex-grow h-px bg-white/30" />
                </div>

                {/* Google Login Button */}
                <Button
                    variant="outline"
                    className="w-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition flex items-center justify-center gap-2"
                    onClick={() => {
                        // تنفيذ عملية تسجيل الدخول باستخدام جوجل
                        signIn("google");
                    }}
                >
                    <img
                        src="/google-icon.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    Login with Google
                </Button>
                {/* Toggle login/signup */}
                <p className="mt-4 text-center text-sm text-gray-300">
                    {authType === "login"
                        ? "Don't have an account?"
                        : "Already have an account?"}{" "}
                    <button
                        onClick={() =>
                            setAuthType(authType === "login" ? "signup" : "login")
                        }
                        className="text-red-500 font-bold hover:underline"
                    >
                        {authType === "login" ? "Sign up" : "Login"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Form;