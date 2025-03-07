"use client";

import { useState, useEffect } from "react";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Shapes } from "@/components/ui/Shaps";

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
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${animate ? "opacity-100" : "opacity-0"}`}>

            <div className={`relative w-5/6 sm:w-96 p-6 rounded-lg shadow-lg backdrop-blur-lg bg-white/10 dark:bg-gray-900/20 border border-white/20 transform transition-transform duration-300 ${animate ? "scale-100" : "scale-90"}`}>

                {/* Shapes - Top Right */}
                <div className="absolute -top-7 -right-7 sm:-top-8 sm:-right-8 opacity-80 animate-float z-[9999] pointer-events-none">
                    <Shapes className="w-14 h-14 md:w-16 md:h-16" />
                </div>

                {/* Shapes - Bottom Left */}
                <div className="absolute -bottom-7 -left-7 sm:-bottom-8 sm:-left-8 opacity-80 animate-float z-[9999]">
                    <Shapes className="w-14 h-14 md:w-16 md:h-16" />
                </div>

                {/* Close button */}
                <XIcon
                    onClick={handleClose}
                    className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 font-extrabold cursor-pointer text-white hover:text-red-500 transition duration-200"
                />

                {/* Form content */}
                <h2 className="text-2xl font-bold text-center text-red-600 mb-6 mt-10">
                    {authType === "login" ? "Login" : "Sign Up"}
                </h2>

                <form className="space-y-4 ">
                    {authType === "signup" && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-2 border rounded bg-white/20 backdrop-blur-md text-black dark:text-white placeholder-gray-400"
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded bg-white/20 backdrop-blur-md text-black dark:text-white placeholder-gray-400"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border rounded bg-white/20 backdrop-blur-md text-black dark:text-white placeholder-gray-400"
                    />

                    <Button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
                        {authType === "login" ? "Login" : "Sign Up"}
                    </Button>
                </form>

                {/* Toggle between login and signup */}
                <p className="mt-4 text-center text-sm text-gray-500">
                    {authType === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                        onClick={() => setAuthType(authType === "login" ? "signup" : "login")}
                        className="text-red-600 font-bold hover:underline"
                    >
                        {authType === "login" ? "Sign up" : "Login"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Form;
