"use client";

import { useState } from "react";
import { signIn } from "next-auth/react"; // إذا كنت تستخدم next-auth للـ OAuth
import Image from "next/image"; // استيراد Image من next/image

const ChangeEmailWithGoogle: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleGoogleLogin = async () => {
        setLoading(true);
        try {
            // تنفيذ الـ OAuth الخاص بجوجل
            await signIn("google"); // assuming next-auth is set up for Google OAuth
        } catch (error) {
            console.error("Error signing in with Google", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full bg-red-600 text-white py-2 mt-8 rounded hover:bg-red-700 transition flex items-center justify-center gap-2"
        >
            {loading ? (
                <span>Loading...</span> // يمكنك إضافة حالة loading هنا
            ) : (
                <>
                    <Image
                        src="/google-icon.svg"
                        alt="Google"
                        width={20}
                        height={20}
                    />
                    Change Email 
                </>
            )}
        </button>
    );
};

export default ChangeEmailWithGoogle;
