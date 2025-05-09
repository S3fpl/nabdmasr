"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Shapes } from "@/components/ui/Shaps";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
    const [userType, setUserType] = useState<"regular" | "hospital">("regular");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [status, setStatus] = useState("");
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        if (!formData.email.trim()) return "Email is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) return "Email is invalid.";
        if (!formData.password.trim()) return "Password is required.";
        return null;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const error = validateForm();
        if (error) {
            setStatus(error);
        } else {
            try {
                const result = await signIn("credentials", {
                    email: formData.email,
                    password: formData.password,
                    userType: userType,
                    redirect: false,
                });

                if (result?.error) {
                    setStatus("Invalid email or password");
                } else {
                    setStatus("Login successful!");
                    setTimeout(() => {
                        router.push('/');
                    }, 1000);
                }
            } catch {
                setStatus("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-4 mt-16">
            <div className="w-full max-w-7xl bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side - Form */}
                    <div className="p-6 md:p-8 lg:p-12 relative">
                        <div className="absolute top-4 left-4 opacity-80 animate-float">
                            <Shapes className="w-10 h-10" />
                        </div>
                        <div className="absolute bottom-4 right-4 opacity-80 animate-float">
                            <Shapes className="w-10 h-10" />
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-gray-300 text-sm mb-8">
                            Sign in to continue making a difference
                        </p>

                        <div className="mb-8">
                            <div className="flex gap-4 p-1 bg-white/5 rounded-lg">
                                <button
                                    onClick={() => setUserType("regular")}
                                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${userType === "regular"
                                        ? "bg-red-500 text-white shadow-lg"
                                        : "text-gray-300 hover:text-white"
                                        }`}
                                >
                                    Regular User
                                </button>
                                <button
                                    onClick={() => setUserType("hospital")}
                                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${userType === "hospital"
                                        ? "bg-red-500 text-white shadow-lg"
                                        : "text-gray-300 hover:text-white"
                                        }`}
                                >
                                    Hospital
                                </button>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div className="relative group">
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="relative group">
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                        placeholder="Enter your password"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white text-sm py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-red-500/20"
                            >
                                Sign In
                            </Button>

                            <div className="flex items-center my-4">
                                <div className="flex-grow h-px bg-white/30" />
                                <span className="mx-2 text-xs text-white/70">or</span>
                                <div className="flex-grow h-px bg-white/30" />
                            </div>

                            <Button
                                type="button"
                                onClick={() => signIn("google")}
                                className="w-full bg-white/10 text-white text-sm py-3 rounded-lg hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                <Image
                                    src="/google-icon.svg"
                                    alt="Google"
                                    width={16}
                                    height={16}
                                    className="w-4 h-4"
                                />
                                Continue with Google
                            </Button>
                        </form>

                        <p className="mt-6 text-center text-sm text-gray-300">
                            Don&apos;t have an account?{" "}
                            <button
                                onClick={() => router.push('/signup')}
                                className="text-red-500 font-semibold hover:underline"
                            >
                                Sign up
                            </button>
                        </p>

                        {status && (
                            <p
                                className={`text-center mt-4 text-sm ${status.toLowerCase().includes("success")
                                    ? "text-green-300"
                                    : "text-red-300"
                                    }`}
                            >
                                {status}
                            </p>
                        )}
                    </div>

                    {/* Right Side - Image/Info */}
                    <div className="hidden lg:block relative bg-gradient-to-br from-red-600/20 to-red-900/20 p-12">
                        <div className="absolute inset-0 bg-[url('/blood-donation.jpg')] bg-cover bg-center opacity-20" />
                        <div className="relative z-10 h-full flex flex-col justify-center">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Welcome Back to Our Community
                            </h2>
                            <p className="text-gray-200 text-lg mb-8">
                                Continue your journey of saving lives through blood donation.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-200">Quick and secure login</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-200">Access your dashboard</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l-4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-200">Manage your profile</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 