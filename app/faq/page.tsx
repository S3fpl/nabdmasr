"use client";
import Contact from '@/components/Home/Contact/Contact';
import { Shapes } from '@/components/ui/Shaps';
import Link from 'next/link';
import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'What is Nabd Masr?',
    answer: 'Nabd Masr is a blood donation platform that connects donors and those in need of blood, facilitating fast and easy communication.',
  },
  {
    question: 'How can I become a blood donor?',
    answer: 'Simply register on our platform, complete your profile, and indicate your willingness to donate. You will be contacted when there is a need for your blood type.',
  },
  {
    question: 'Is there any cost for using the platform?',
    answer: 'No, Nabd Masr is a free platform created to help save lives by connecting donors and patients efficiently.',
  },
  {
    question: 'Can I track my donation history?',
    answer: 'Yes, you can view your donation history through your profile page, including the dates and details of your previous donations.',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach our support team via the contact form on the website or through our hotline for urgent assistance.',
  },
  {
    question: 'Can I update my personal information?',
    answer: 'Yes, you can easily update your profile information from your account settings page.',
  },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 mt-16">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-500 drop-shadow-lg">Nabd Masr FAQ</h1>
        <p className="text-gray-400 text-lg md:text-xl mt-2">Everything you need to know about our platform.</p>
      </header>

      {/* Main FAQ Container */}
      <div className="relative p-6 w-full max-w-4xl bg-gray-800/50 backdrop-blur-2xl rounded-2xl shadow-xl border border-gray-700 z-10">
        {/* Shapes on FAQ Container */}
        <div className="absolute -top-8 left-28 opacity-60">
          <Shapes className="w-12 h-12 md:w-16 md:h-16" />
        </div>
        <div className="absolute -bottom-8 right-28 opacity-60">
          <Shapes className="w-12 h-12 md:w-16 md:h-16" />
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`mb-4 p-4 rounded-xl transition-all duration-300 ease-in-out ${activeIndex === index ? 'bg-gray-700/60' : 'bg-gray-800/20'
              }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left text-white text-xl md:text-2xl font-bold flex justify-between items-center"
            >
              {item.question}
              <span className="text-gray-400 text-3xl md:text-4xl">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-300 text-base md:text-lg leading-relaxed">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
      <Contact />

      {/* Footer Section */}
      <footer className="-mt-12 text-center">
        <p className="text-gray-500 text-md md:text-lg">
          Have more questions?
          <Link href="/contact" className="text-red-400 font-semibold hover:text-red-300 transition-colors ml-1">
            Contact us!
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Faq;
