"use client";
import { signIn } from 'next-auth/react';
import React from 'react'

const SigninWithGoogle = () => {
  return (
    <button type='button'
    onClick={() => signIn('google')}
      className="bg-red-600 px-4 py-2 mt-8 rounded hover:bg-red-700 transition">
    Sign in with Google
  </button>
  )
}

export default SigninWithGoogle;