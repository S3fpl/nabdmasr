"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Shapes } from "@/components/ui/Shaps";

type BloodType = "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
type Gender = "male" | "female";

interface Coordinates {
    latitude: string;
    longitude: string;
}

type BloodStock = {
    [K in BloodType]: number;
};

interface FormData {
    fullName: string;
    phone: string;
    gender: Gender | "";
    bloodType: BloodType | "";
    birthDate: string;
    governorate: string;
    lastDonationDate: string;
    email: string;
    password: string;
    hospitalName: string;
    website: string;
    address: string;
    city: string;
    operatingHours: string;
    coordinates: Coordinates;
    bloodStock: BloodStock;
}

export default function SignupPage() {
    const [userType, setUserType] = useState<"regular" | "hospital">("regular");
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        phone: "+20 ",
        gender: "",
        bloodType: "",
        birthDate: "",
        governorate: "",
        lastDonationDate: "",
        email: "",
        password: "",
        hospitalName: "",
        website: "",
        address: "",
        city: "",
        operatingHours: "",
        coordinates: {
            latitude: "",
            longitude: ""
        },
        bloodStock: {
            "A+": 0,
            "A-": 0,
            "B+": 0,
            "B-": 0,
            "O+": 0,
            "O-": 0,
            "AB+": 0,
            "AB-": 0
        }
    });
    const [status, setStatus] = useState("");
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name.includes(".")) {
            const [parent, child] = name.split(".");
            setFormData((prev) => {
                const parentValue = prev[parent as keyof FormData] as Record<string, string | number>;
                return {
                    ...prev,
                    [parent]: {
                        ...parentValue,
                        [child]: value
                    }
                };
            });
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const validateForm = () => {
        if (!formData.email.trim()) return "Email is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) return "Email is invalid.";
        if (!formData.password.trim()) return "Password is required.";

        if (userType === "regular") {
            if (!formData.fullName.trim()) return "Full name is required.";
            if (!/^(\+20\s)(11|12|15)[0-9]{8}$/.test(formData.phone))
                return "Phone number must start with +20 followed by 011, 012, or 015 and 9 digits.";
            if (!formData.gender) return "Gender is required.";
            if (!formData.bloodType) return "Blood type is required.";
            if (!formData.birthDate) return "Date of birth is required.";
            if (!formData.governorate.trim()) return "Governorate is required.";
        } else {
            if (!formData.hospitalName.trim()) return "Hospital name is required.";
            if (!formData.phone.trim()) return "Phone number is required.";
            if (!formData.address.trim()) return "Address is required.";
            if (!formData.city.trim()) return "City is required.";
            if (!formData.operatingHours.trim()) return "Operating hours is required.";
            if (!formData.coordinates.latitude || !formData.coordinates.longitude)
                return "Coordinates are required.";
        }

        return null;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const error = validateForm();
        if (error) {
            setStatus(error);
        } else {
            setStatus("Account created successfully!");
            // هنا تقدر تبعت البيانات لـ API
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        }
    };

    const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length > 14) {
            e.target.value = value.slice(0, 14);
        }
        if (!value.startsWith("+20 ")) {
            e.target.value = "+20 ";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br  flex items-center justify-center p-4 mt-16">
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
                            Join Us
                        </h1>
                        <p className="text-gray-300 text-sm mb-8">
                            Create your account to start making a difference
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {userType === "regular" ? (
                                    <>
                                        <div className="relative group">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                onInput={handlePhoneInput}
                                                maxLength={14}
                                                className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                                placeholder="+20 XXX XXX XXXX"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Gender</label>
                                            <select
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleChange}
                                                className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                            >
                                                <option value="">Select gender</option>
                                                {["male", "female"].map((gender) => (
                                                    <option key={gender} value={gender}>
                                                        {gender}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="relative group">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Blood Type</label>
                                            <select
                                                name="bloodType"
                                                value={formData.bloodType}
                                                onChange={handleChange}
                                                className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                            >
                                                <option value="">Select blood type</option>
                                                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
                                                    <option key={type} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="relative group">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Date of Birth</label>
                                            <input
                                                type="date"
                                                name="birthDate"
                                                value={formData.birthDate}
                                                onChange={handleChange}
                                                className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Governorate</label>
                                            <input
                                                type="text"
                                                name="governorate"
                                                value={formData.governorate}
                                                onChange={handleChange}
                                                className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                                placeholder="Enter your governorate"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Last Donation</label>
                                            <input
                                                type="date"
                                                name="lastDonationDate"
                                                value={formData.lastDonationDate}
                                                onChange={handleChange}
                                                className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="relative group col-span-2">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Hospital Name</label>
                                            <input
                                                type="text"
                                                name="hospitalName"
                                                value={formData.hospitalName}
                                                onChange={handleChange}
                                                className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                                placeholder="Enter hospital name"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                                placeholder="Enter phone number"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Website</label>
                                            <input
                                                type="url"
                                                name="website"
                                                value={formData.website}
                                                onChange={handleChange}
                                                className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                                placeholder="Enter website URL"
                                            />
                                        </div>
                                        <div className="relative group col-span-2">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Address</label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                                placeholder="Enter full address"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">City</label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                                placeholder="Enter city"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Operating Hours</label>
                                            <input
                                                type="text"
                                                name="operatingHours"
                                                value={formData.operatingHours}
                                                onChange={handleChange}
                                                className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                                placeholder="e.g., 9:00 AM - 5:00 PM"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Latitude</label>
                                            <input
                                                type="number"
                                                step="any"
                                                name="coordinates.latitude"
                                                value={formData.coordinates.latitude}
                                                onChange={handleChange}
                                                className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                                placeholder="Enter latitude"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Longitude</label>
                                            <input
                                                type="number"
                                                step="any"
                                                name="coordinates.longitude"
                                                value={formData.coordinates.longitude}
                                                onChange={handleChange}
                                                className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                                placeholder="Enter longitude"
                                            />
                                        </div>
                                    </>
                                )}

                                <div className="relative group col-span-2">
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
                                <div className="relative group col-span-2">
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                        placeholder="Create a password"
                                    />
                                </div>
                            </div>

                            {userType === "hospital" && (
                                <div className="bg-white/5 rounded-lg border border-white/10 p-6">
                                    <h3 className="text-white text-sm font-medium mb-4">Blood Stock</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {(Object.keys(formData.bloodStock) as BloodType[]).map((type) => (
                                            <div key={type} className="space-y-2">
                                                <label className="text-white text-xs font-medium">{type}</label>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    name={`bloodStock.${type}`}
                                                    value={formData.bloodStock[type]}
                                                    onChange={handleChange}
                                                    className="w-full p-3 text-sm bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-red-500/50 transition-all duration-200"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white text-sm py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-red-500/20"
                            >
                                Create Account
                            </Button>
                        </form>

                        <p className="mt-6 text-center text-sm text-gray-300">
                            Already have an account?{" "}
                            <button
                                onClick={() => router.push('/login')}
                                className="text-red-500 font-semibold hover:underline"
                            >
                                Login
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
                                Save Lives Through Blood Donation
                            </h2>
                            <p className="text-gray-200 text-lg mb-8">
                                Join our community of donors and hospitals working together to save lives.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-200">Easy registration process</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-200">Connect with hospitals</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-200">Track your donations</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 