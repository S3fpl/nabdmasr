"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <div className="fixed top-0 right-0 w-full z-[9999]">
      <div className="container mx-auto px-4">
        <div className="absolute flex right-4 top-0 sm:top-4 md:top-0 justify-end py-4">
          <div className="flex space-x-4">
            <button
              onClick={() => router.push('/login')}
              className="border border-white/30 px-4 py-2 rounded-2xl transition duration-300 shadow-xl backdrop-blur-xl bg-white/10 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl text-white opacity-80 hover:opacity-100 text-sm sm:text-base"
            >
              Login
            </button>
            <button
              onClick={() => router.push('/signup')}
              className="border border-white/30 px-4 py-2 rounded-2xl transition duration-300 shadow-xl backdrop-blur-xl bg-white/10 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl text-white opacity-80 hover:opacity-100 text-sm sm:text-base"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
