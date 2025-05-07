"use client";
import React, { useState } from 'react';
import Form from '../Home/Form/Form';

export default function Page() {
  const [showForm, setShowForm] = useState(false);
  const [authType, setAuthType] = useState("login");

  const handleAuth = (type: string) => {
    setAuthType(type);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        {/* Login & Signup Buttons */}
        <div className="flex space-x-4 fixed top-8 right-7 z-[9999]">
          <button
            onClick={() => handleAuth("login")}
            className="border border-white/30 px-4 py-2 rounded-2xl transition duration-300 shadow-xl backdrop-blur-xl bg-white/10 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl text-white opacity-80 hover:opacity-100"
          >
            Login
          </button>
          <button
            onClick={() => handleAuth("signup")}
            className="border border-white/30 px-4 py-2 rounded-2xl transition duration-300 shadow-xl backdrop-blur-xl bg-white/10 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl text-white opacity-80 hover:opacity-100"
          >
            Signup
          </button>
        </div>
      </div>
      {showForm && (
        <Form closeForm={closeForm} initialAuthType={authType} />
      )}
    </>
  );
}
