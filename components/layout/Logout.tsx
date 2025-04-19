"use client";
import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

interface LogoutProps {
  closeModal: () => void; 
}

const Logout: React.FC<LogoutProps> = ({ closeModal }) => {
  const [loading, setLoading] = useState(false); 

  const handleLogout = async () => {
    setLoading(true); 
    closeModal();     

    try {
      await signOut({ callbackUrl: '/' }); 
    } catch (error) {
      console.error("Error during sign out:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <button
      onClick={handleLogout}
      className={`w-full bg-red-600 text-white py-2 mt-2 rounded hover:bg-red-700 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={loading} 
    >
      {loading ? (
        'Logging out...'
      ) : (
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/logout.svg" 
            alt="Logout"
            width={20}
            height={20}
            className="w-5 h-5 mr-4"
          />
          Logout
        </div>
      )}
    </button>
  );
};

export default Logout;
