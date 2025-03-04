"use client";

import { useState, useEffect } from "react";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <div className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-96 relative overflow-hidden transform transition-transform duration-300 ${animate ? "scale-100" : "scale-90"}`}>
                {/* Red wave SVG */}
                <div className="w-full absolute top-0 left-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#dc2626" fillOpacity="1" d="M0,288L80,261.3C160,235,320,181,480,181.3C640,181,800,235,960,250.7C1120,267,1280,245,1360,234.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                    </svg>
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

                <form className="space-y-4">
                    {authType === "signup" && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-2 border rounded"
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border rounded"
                    />

                    <Button className="w-full bg-red-600 text-white py-2 rounded">
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
