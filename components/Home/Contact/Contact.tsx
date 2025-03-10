"use client";

import React from "react";
import { Shapes } from "@/components/ui/Shaps";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent px-4">
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-8 backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-lg text-white">
        {/* Shapes */}
        <div className="absolute -top-7 -right-7 sm:-top-8 sm:-right-8 opacity-80 z-[9999] pointer-events-none">
          <Shapes className="w-14 h-14 md:w-16 md:h-16" />
        </div>
        <div className="absolute -bottom-7 -left-7 sm:-bottom-8 sm:-left-8 opacity-80 z-[9999] pointer-events-none">
          <Shapes className="w-14 h-14 md:w-16 md:h-16" />
        </div>

        {/* Left Side - Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-300 mb-6">
            We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us using the form on the right.
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex-1 max-w-sm w-full">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form className="space-y-3">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 bg-transparent border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 bg-transparent border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                className="w-full p-2 bg-transparent border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your message"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-red-600/80 hover:bg-red-700/80 rounded-lg transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
