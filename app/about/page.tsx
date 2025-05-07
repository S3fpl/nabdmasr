import React from 'react';
import Image from 'next/image';
import { FaCode, FaMobile, FaServer, FaDatabase, FaCloud, FaUsers, FaRocket } from 'react-icons/fa';

const teamMembers = [
    {
        name: "Ahmed Eyad",
        role: "Team Lead",
        image: "/team/ahmed-eyad.jpg",
        description: "Leading the Nabd Masr team with expertise in project management and development."
    },
    {
        name: "Seif Ayman",
        role: "Developer",
        image: "/team/seif.jpg",
        description: "Full-stack developer specializing in modern web technologies."
    },
    {
        name: "Youssef Adel",
        role: "Developer",
        image: "/team/youssef-adel.jpg",
        description: "Mobile app developer with experience in cross-platform development."
    },
    {
        name: "Mohammad Said",
        role: "Developer",
        image: "/team/mohammad.jpg",
        description: "Frontend developer focused on creating responsive and user-friendly interfaces."
    },
    {
        name: "Omar Ahmed",
        role: "Developer",
        image: "/team/omar.jpg",
        description: "Backend developer with strong expertise in system architecture."
    },
    {
        name: "Yahya Ahmed",
        role: "Developer",
        image: "/team/yahya.jpg",
        description: "Software engineer specializing in database management and optimization."
    },
    {
        name: "Youssef Sherif",
        role: "Developer",
        image: "/team/youssef-sherif.jpg",
        description: "Full-stack developer with expertise in cloud technologies."
    }
];

const features = [
    {
        icon: <FaCode className="w-8 h-8" />,
        title: "Web Development",
        description: "Modern web applications built with cutting-edge technologies"
    },
    {
        icon: <FaMobile className="w-8 h-8" />,
        title: "Mobile Apps",
        description: "Cross-platform mobile applications for iOS and Android"
    },
    {
        icon: <FaServer className="w-8 h-8" />,
        title: "Backend Solutions",
        description: "Scalable and secure server-side applications"
    },
    {
        icon: <FaDatabase className="w-8 h-8" />,
        title: "Database Management",
        description: "Efficient data storage and management solutions"
    },
    {
        icon: <FaCloud className="w-8 h-8" />,
        title: "Cloud Services",
        description: "Cloud-based solutions for modern businesses"
    },
    {
        icon: <FaUsers className="w-8 h-8" />,
        title: "Team Collaboration",
        description: "Tools and platforms for seamless team cooperation"
    }
];

function About() {
    return (
        <section className="min-h-screen py-12 mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="backdrop-blur-lg bg-gray-600/30 rounded-3xl p-8 mb-8 border border-cyan-200/20">
                    <h1 className="text-5xl font-bold text-red-500 mb-4">About Nabd Masr</h1>
                    <p className="text-xl text-white max-w-3xl">
                        Nabd Masr is a leading technology company dedicated to creating innovative solutions
                        that make a difference in people&apos;s lives. Our team of passionate developers and
                        engineers work together to build cutting-edge applications and services.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {features.map((feature, index) => (
                        <div key={index} className="backdrop-blur-lg bg-gray-600/30 rounded-2xl p-6 border border-emerald-200/20 hover:bg-gray-500/30 transition-all duration-300">
                            <div className="text-red-600 mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-red-500 mb-2">{feature.title}</h3>
                            <p className="text-white">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Mission & Vision Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="backdrop-blur-lg bg-gray-600/30 rounded-2xl p-8 border border-cyan-200/20">
                    
                        <h2 className="text-2xl font-bold text-red-500 mb-4">Our Mission</h2>
                        <p className="text-white">
                            At Nabd Masr, we strive to create innovative technological solutions that empower
                            individuals and businesses. Our commitment to excellence and continuous improvement
                            drives us to deliver the best possible products and services to our clients.
                        </p>
                    </div>
                    <div className="backdrop-blur-lg bg-gray-600/30 rounded-2xl p-8 border border-emerald-200/20">
                        <h2 className="text-2xl font-bold text-red-500 mb-4">Our Vision</h2>
                        <p className="text-white">
                            To be the leading technology company in Egypt, known for innovation, quality, and
                            customer satisfaction. We aim to transform the digital landscape through cutting-edge
                            solutions and exceptional service.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-red-500 mb-8">Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="backdrop-blur-lg bg-gray-600/30 rounded-2xl overflow-hidden border border-cyan-200/20 hover:bg-gray-500/40 transition-all duration-300">
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-red-500">{member.name}</h3>
                                    <p className="text-red-600 font-medium mb-2">{member.role}</p>
                                    <p className="text-white">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Contact Section */}
                <div className="backdrop-blur-lg bg-gray-600/30 rounded-2xl p-8 border border-emerald-200/20">
                    <div className="text-center">
                        <FaRocket className="w-12 h-12 text-red-600 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-red-500 mb-4">Ready to Start Your Project?</h2>
                        <p className="text-xl text-white mb-6">
                            Let&apos;s work together to bring your ideas to life
                        </p>
                        <button className="bg-red-600 text-cyan-50 px-8 py-3 rounded-full hover:bg-red-700 transition-colors duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
