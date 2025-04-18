'use client';

import React from 'react';
import { signOut } from 'next-auth/react'; // استيراد signOut

interface LogoutProps {
  closeModal: () => void; // Prop لقفل المودال
}

const Logout: React.FC<LogoutProps> = ({ closeModal }) => {
  const handleLogout = () => {
    closeModal();         // يقفل المودال الأول
    signOut({ callbackUrl: '/' }); // يسجل الخروج ويرجع لصفحة الهوم
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full bg-red-600 text-white py-2 mt-6 rounded hover:bg-red-700 transition"
    >
      Logout
    </button>
  );
};

export default Logout;
