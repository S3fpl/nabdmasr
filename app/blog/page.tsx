"use client";
import React from 'react';
import Image from 'next/image';
const profiles = [
  {
    name: "Ahmed Eid",
    role: "Graphic Designer , Flutter developer & Leader",
    company: "CEO NabdMasr",
    date: "2006-12-10",
    title: "Best practices for successful prototypes",
    image: "/pr_2.jpg",
  },
  {
    name: "Seif Ayman",
    role: "Front-End Developer, React & Next.js Enthusiast",
    company: "CTO NabdMasr",
    date: "2007-09-23",
    title: "Crafting Engaging User Interfaces with React",
    image: "/pr_1.jpg",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 text-center bg-clip-text text-transparent ">
            Nabd Masr Blog
          </h1>
          <p className="text-2xl text-gray-300 text-center max-w-3xl mx-auto">
            Discover insights, stories, and updates from our blood donation community
          </p>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Featured Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {profiles.map((profile, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-3xl backdrop-blur-xl p-10 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-8 mb-8">
                  {profile.image && (
                    <Image
                      className="w-24 h-24 rounded-full ring-4 ring-purple-500/20 transition-all duration-500 group-hover:ring-purple-500/40"
                      src={profile.image}
                      alt={profile.name}
                      width={96}
                      height={96}
                    />
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {profile.name}
                    </h3>
                    <p className="text-gray-400 text-lg">{profile.role}</p>
                    <p className="text-purple-400">{profile.company}</p>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">{profile.title}</h2>
                <time className="text-gray-500">
                  {new Date(profile.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto backdrop-blur-xl rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">About Nabd Masr</h2>
          <p className="text-xl text-gray-300 text-center leading-relaxed mb-12 max-w-3xl mx-auto">
            Nabd Masr is a community initiative aimed at saving lives by creating a communication platform
            that connects blood donors with patients in need quickly and easily. Our mission is to make
            blood donation accessible and efficient for everyone in Egypt.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-xl p-8 rounded-2xl transition-all duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 text-lg">Connecting donors with those in need through technology</p>
            </div>
            <div className="backdrop-blur-xl p-8 rounded-2xl transition-all duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 text-lg">Creating a sustainable blood donation ecosystem</p>
            </div>
            <div className="backdrop-blur-xl p-8 rounded-2xl transition-all duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">Our Impact</h3>
              <p className="text-gray-400 text-lg">Thousands of lives saved through our platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 hover:scale-105">
              <div className="h-64 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl mb-8"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Latest News Title {item}</h3>
              <p className="text-gray-400 text-lg mb-6">
                Brief description of the latest news and updates from our community.
              </p>
              <button className="text-purple-400 hover:text-purple-300 transition-colors text-lg">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="backdrop-blur-xl rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Community Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-4">10K+</div>
              <p className="text-gray-400 text-lg">Donors Registered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-4">5K+</div>
              <p className="text-gray-400 text-lg">Lives Saved</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-4">100+</div>
              <p className="text-gray-400 text-lg">Hospitals Connected</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-4">24/7</div>
              <p className="text-gray-400 text-lg">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto backdrop-blur-xl rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-gray-400 text-lg mb-8">
            Subscribe to our newsletter for the latest updates and stories
          </p>
          <div className="flex gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl backdrop-blur-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 text-lg"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:opacity-90 transition-opacity text-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="backdrop-blur-xl p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Simplicity and Clarity</h3>
            <p className="text-gray-400 text-lg">
              In the Nabd Masr website, it&apos;s essential to keep the interface simple and clear for users.
              A clean design helps guide donors and volunteers effortlessly through the required actions.
            </p>
          </div>
          <div className="backdrop-blur-xl p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Responsive Design</h3>
            <p className="text-gray-400 text-lg">
              Considering the variety of devices used by donors, it&apos;s crucial to ensure that the website
              works flawlessly on all screens, whether they are smartphones, tablets, or desktop monitors.
            </p>
          </div>
          <div className="backdrop-blur-xl p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Fast Communication</h3>
            <p className="text-gray-400 text-lg">
              It&apos;s essential to provide quick contact options for donors and volunteers, such as quick
              contact buttons or simple forms. The goal is to facilitate rapid access to help.
            </p>
          </div>
          <div className="backdrop-blur-xl p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">User Experience</h3>
            <p className="text-gray-400 text-lg">
              Creating an intuitive and engaging user experience is key to encouraging more people to
              participate in blood donation and make a difference in their community.
            </p>
          </div>
        </div>
      </section>  
    </div>
  );
};

export default Blog;