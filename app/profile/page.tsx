'use client';
import React, { useState } from 'react';
import { User, Building2, MapPin, LogIn } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

// Dynamically import the map component with no SSR
const MapWithNoSSR = dynamic(
    () => import("@/components/Map"),
    {
        ssr: false,
        loading: () => (
            <div className="h-[300px] rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <p className="text-gray-400">Loading map...</p>
            </div>
        ),
    }
);

// Mock user data - Replace with actual auth data
const mockUserData = {
    isAuthenticated: true,
    isHospital: true,
    userData: {
        name: "Alexandria Medical Center",
        email: "contact@alexmedical.com",
        phone: "+20 3 123 4567",
        website: "www.alexmedical.com",
        address: "123 El-Gaish Road, Sidi Gaber, Alexandria",
        city: "Alexandria",
        operatingHours: "24/7",
        coordinates: [31.2157, 29.9553] as [number, number],
        bloodStock: {
            "A+": 15,
            "A-": 8,
            "B+": 12,
            "B-": 6,
            "O+": 20,
            "O-": 10,
            "AB+": 5,
            "AB-": 3
        }
    }
};

function Profile() {
    const router = useRouter();
    const [isHospital, setIsHospital] = useState(mockUserData.isHospital);
    const [hospitalLocation, setHospitalLocation] = useState<[number, number] | null>(mockUserData.userData.coordinates);
    const [userData, setUserData] = useState(mockUserData.userData);

    // Handle sign in
    const handleSignIn = () => {
        // Implement your sign in logic here
        router.push('/auth/signin');
    };

    if (!mockUserData.isAuthenticated) {
        return (
            <section className="px-4 mt-10">
                <div className="container mx-auto py-8">
                    <div className="bg-gray-500/20 border border-white/20 rounded-2xl p-6 text-white text-center">
                        <div className="flex flex-col items-center gap-4">
                            <div className="p-3 bg-red-500/20 rounded-lg">
                                <LogIn className="w-12 h-12 text-red-400" />
                            </div>
                            <h2 className="text-2xl font-bold">Sign In Required</h2>
                            <p className="text-gray-400 mb-6">Please sign in to view and manage your profile</p>
                            <button
                                onClick={handleSignIn}
                                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    const RegularProfile = () => (
        <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-500/20 rounded-lg">
                    <User className="w-6 h-6 text-red-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Personal Information</h2>
                    <p className="text-gray-400">Manage your personal details</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 rounded-xl">
                    <label className="text-white text-sm mb-2 block">Full Name</label>
                    <input
                        type="text"
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                        value={userData.name}
                        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    />
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                    <label className="text-white text-sm mb-2 block">Email</label>
                    <input
                        type="email"
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                        value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                    <label className="text-white text-sm mb-2 block">Phone Number</label>
                    <input
                        type="tel"
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                        value={userData.phone}
                        onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    />
                </div>
            </div>

            <div className="mt-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-red-500/20 rounded-lg">
                        <MapPin className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">Location</h2>
                        <p className="text-gray-400">Set your current location</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white/5 rounded-xl">
                        <label className="text-white text-sm mb-2 block">Address</label>
                        <input
                            type="text"
                            className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                            placeholder="Enter your address"
                            value={userData.address}
                            onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                        />
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                        <label className="text-white text-sm mb-2 block">City</label>
                        <input
                            type="text"
                            className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                            placeholder="Enter your city"
                            value={userData.city}
                            onChange={(e) => setUserData({ ...userData, city: e.target.value })}
                        />
                    </div>
                </div>
                <div className="mt-4 h-[300px] rounded-xl overflow-hidden">
                    <MapWithNoSSR
                        locations={[{
                            id: 1,
                            name: userData.name,
                            type: 'user',
                            address: userData.address,
                            phone: userData.phone,
                            website: '',
                            hours: '',
                            bloodTypes: [],
                            coordinates: hospitalLocation || [31.2157, 29.9553],
                            bloodStock: []
                        }]}
                        selectedLocation={null}
                        onLocationSelect={() => { }}
                    />
                </div>
            </div>
        </div>
    );

    const HospitalProfile = () => (
        <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-500/20 rounded-lg">
                    <Building2 className="w-6 h-6 text-red-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Hospital Information</h2>
                    <p className="text-gray-400">Manage your hospital details</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 rounded-xl">
                    <label className="text-white text-sm mb-2 block">Hospital Name</label>
                    <input
                        type="text"
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                        value={userData.name}
                        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    />
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                    <label className="text-white text-sm mb-2 block">Email</label>
                    <input
                        type="email"
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                        value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                    <label className="text-white text-sm mb-2 block">Phone Number</label>
                    <input
                        type="tel"
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                        value={userData.phone}
                        onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    />
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                    <label className="text-white text-sm mb-2 block">Website</label>
                    <input
                        type="url"
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                        value={userData.website}
                        onChange={(e) => setUserData({ ...userData, website: e.target.value })}
                    />
                </div>
            </div>

            <div className="mt-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-red-500/20 rounded-lg">
                        <MapPin className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">Location Details</h2>
                        <p className="text-gray-400">Set your hospital location</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white/5 rounded-xl">
                        <label className="text-white text-sm mb-2 block">Address</label>
                        <input
                            type="text"
                            className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                            placeholder="Enter hospital address"
                            value={userData.address}
                            onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                        />
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                        <label className="text-white text-sm mb-2 block">City</label>
                        <input
                            type="text"
                            className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                            placeholder="Enter city"
                            value={userData.city}
                            onChange={(e) => setUserData({ ...userData, city: e.target.value })}
                        />
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                        <label className="text-white text-sm mb-2 block">Operating Hours</label>
                        <input
                            type="text"
                            className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                            placeholder="e.g., 24/7 or 9:00 AM - 5:00 PM"
                            value={userData.operatingHours}
                            onChange={(e) => setUserData({ ...userData, operatingHours: e.target.value })}
                        />
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                        <label className="text-white text-sm mb-2 block">Coordinates</label>
                        <div className="grid grid-cols-2 gap-2">
                            <input
                                type="number"
                                step="any"
                                className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                                placeholder="Latitude"
                                value={hospitalLocation?.[0] || ''}
                                onChange={(e) => setHospitalLocation([parseFloat(e.target.value), hospitalLocation?.[1] || 0])}
                            />
                            <input
                                type="number"
                                step="any"
                                className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                                placeholder="Longitude"
                                value={hospitalLocation?.[1] || ''}
                                onChange={(e) => setHospitalLocation([hospitalLocation?.[0] || 0, parseFloat(e.target.value)])}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4 h-[300px] rounded-xl overflow-hidden">
                    <MapWithNoSSR
                        locations={[{
                            id: 1,
                            name: userData.name,
                            type: 'hospital',
                            address: userData.address,
                            phone: userData.phone,
                            website: userData.website,
                            hours: userData.operatingHours,
                            bloodTypes: Object.keys(userData.bloodStock),
                            coordinates: hospitalLocation || [31.2157, 29.9553],
                            bloodStock: Object.entries(userData.bloodStock).map(([type, units]) => ({
                                type,
                                units,
                                lastUpdated: new Date().toISOString()
                            }))
                        }]}
                        selectedLocation={null}
                        onLocationSelect={() => { }}
                    />
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-white">Blood Stock Management</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((type) => (
                        <div key={type} className="p-4 bg-white/5 rounded-xl">
                            <label className="text-white text-sm mb-2 block">Type {type}</label>
                            <input
                                type="number"
                                min="0"
                                className="w-full bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                                placeholder="Units"
                                value={userData.bloodStock[type as keyof typeof userData.bloodStock] || 0}
                                onChange={(e) => setUserData({
                                    ...userData,
                                    bloodStock: {
                                        ...userData.bloodStock,
                                        [type]: parseInt(e.target.value) || 0
                                    }
                                })}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <section className="px-4 mt-10">
            <div className="container mx-auto py-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-white">Profile</h1>
                    <div className="flex items-center gap-2">
                        <span className="text-white">Account Type:</span>
                        <select
                            value={isHospital ? "hospital" : "user"}
                            onChange={(e) => setIsHospital(e.target.value === "hospital")}
                            className="bg-white/10 border border-white/20 rounded-lg p-2 text-white"
                        >
                            <option value="user">Regular User</option>
                            <option value="hospital">Hospital</option>
                        </select>
                    </div>
                </div>
                <div className="bg-gray-500/20 border border-white/20 rounded-2xl p-6 text-white">
                    {isHospital ? <HospitalProfile /> : <RegularProfile />}
                </div>
            </div>
        </section>
    );
}

export default Profile;

