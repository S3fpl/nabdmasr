"use client";
import Contact from '@/components/Home/Contact/Contact';
import Link from 'next/link';
import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FaqItem[] = [
  {
    category: "About Nabd Masr",
    question: 'What is Nabd Masr?',
    answer: 'Nabd Masr is a blood donation platform that connects donors and those in need of blood, facilitating fast and easy communication.',
  },
  {
    category: "About Nabd Masr",
    question: 'How can I become a blood donor?',
    answer: 'Simply register on our platform, complete your profile, and indicate your willingness to donate. You will be contacted when there is a need for your blood type.',
  },
  {
    category: "Platform Usage",
    question: 'Is there any cost for using the platform?',
    answer: 'No, Nabd Masr is a free platform created to help save lives by connecting donors and patients efficiently.',
  },
  {
    category: "Platform Usage",
    question: 'Can I track my donation history?',
    answer: 'Yes, you can view your donation history through your profile page, including the dates and details of your previous donations.',
  },
  {
    category: "Support & Help",
    question: 'How do I contact support?',
    answer: 'You can reach our support team via the contact form on the website or through our hotline for urgent assistance.',
  },
  {
    category: "Account Management",
    question: 'Can I update my personal information?',
    answer: 'Yes, you can easily update your profile information from your account settings page.',
  },
];

const categories = Array.from(new Set(faqData.map(item => item.category)));

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqData.filter(item => item.category === activeCategory);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 mt-16 ">
      {/* Header Section */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl mt-4">
          Find answers to common questions about Nabd Masr
        </p>
      </header>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${activeCategory === category
              ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
              : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Main FAQ Container */}
      <div className="w-full max-w-5xl">
        {filteredFaqs.map((item, index) => (
          <div
            key={index}
            className="mb-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full p-6 text-left flex justify-between items-center"
            >
              <span className="text-xl md:text-2xl font-semibold text-white">
                {item.question}
              </span>
              <span className="text-2xl text-gray-400 transition-transform duration-300">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Help Section */}
      <div className="mt-16 mb-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
        <p className="text-gray-400 text-lg mb-6">
          Our support team is here to help you 24/7
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-red-500 text-white rounded-full text-lg font-semibold hover:bg-red-600 transition-colors duration-300 shadow-lg shadow-red-500/30"
        >
          Contact Support
        </Link>
      </div>

      <Contact />
    </div>
  );
};

export default Faq;
