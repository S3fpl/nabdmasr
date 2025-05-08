"use client";
import React from 'react';
import Image from 'next/image';
import { FaCode, FaMobile, FaServer, FaDatabase, FaCloud, FaUsers, FaRocket, FaGithub, FaReact, FaNodeJs, FaSeedling, FaChartLine, FaLightbulb, FaGlobe, FaCheckCircle, FaTrophy, FaAward } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiFlutter } from 'react-icons/si';

// Add animation styles
const styles = `
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-50% - 1.5rem));
    }
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }
}

.animate-scroll {
    animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
    animation-play-state: paused;
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

.timeline-icon {
    @apply relative z-10;
}

.timeline-icon::before {
    content: '';
    @apply absolute inset-0 rounded-full bg-gray-700/50 blur-lg -z-10;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.1);
    }
}
`;

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

const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support" },
    { number: "5+", label: "Years Experience" }
];

const technologies = [
    { name: "React", icon: <FaReact className="w-8 h-8" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-8 h-8" /> },
    { name: "Python", icon: <FaCode className="w-8 h-8" /> },
    { name: "Github", icon: <FaGithub className="w-8 h-8" /> },
    { name: "Flutter", icon: <SiFlutter className="w-8 h-8" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
    { name: "GraphQL", icon: <FaCode className="w-8 h-8" /> },
    { name: "Redis", icon: <FaDatabase className="w-8 h-8" /> },
    { name: "Kubernetes", icon: <FaCloud className="w-8 h-8" /> },
    { name: "PostgreSQL", icon: <FaDatabase className="w-8 h-8" /> }
];

const developmentTimeline = [
    {
        date: "January 2024",
        title: "Project Initiation",
        description: "Started with planning and architecture design",
        challenges: ["Defining project scope", "Technology stack selection"],
        icon: <FaGithub className="w-6 h-6" />
    },
    {
        date: "February 2024",
        title: "Frontend Development",
        description: "Built the core UI components and pages",
        challenges: ["Responsive design implementation", "Performance optimization"],
        icon: <FaReact className="w-6 h-6" />
    },
    {
        date: "March 2024",
        title: "Backend Integration",
        description: "Implemented API endpoints and database structure",
        challenges: ["API security", "Database optimization"],
        icon: <FaNodeJs className="w-6 h-6" />
    },
];

const architectureMap = {
    frontend: {
        title: "Frontend Layer",
        technologies: [
            { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
            { name: "React", icon: <FaReact className="w-6 h-6" /> },
            { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" /> }
        ]
    },
    backend: {
        title: "Backend Layer",
        technologies: [
            { name: "Node.js", icon: <FaNodeJs className="w-6 h-6" /> },
            { name: "Express", icon: <FaServer className="w-6 h-6" /> },
            { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" /> }
        ]
    },
    infrastructure: {
        title: "    ",
        technologies: [
            { name: "GitHub", icon: <FaGithub className="w-6 h-6" /> },
            { name: "Flutter", icon: <SiFlutter className="w-6 h-6" /> }
        ]
    }
};

const milestones = [
    {
        year: "2024",
        events: [
            {
                month: "January",
                title: "Project Launch",
                description: "Initial planning and team formation",
                achievement: "Successfully assembled core development team",
                icon: <FaRocket className="w-6 h-6" />
            },
            {
                month: "February",
                title: "MVP Development",
                description: "Core features implementation",
                achievement: "Completed first version of the platform",
                icon: <FaCode className="w-6 h-6" />
            },
            {
                month: "March",
                title: "Beta Testing",
                description: "User testing and feedback collection",
                achievement: "Gathered valuable user insights",
                icon: <FaUsers className="w-6 h-6" />
            },
            {
                month: "April",
                title: "Official Launch",
                description: "Platform release and marketing campaign",
                achievement: "Reached 1000+ active users",
                icon: <FaTrophy className="w-6 h-6" />
            }
        ]
    },
    {
        year: "2023",
        events: [
            {
                month: "December",
                title: "Project Planning",
                description: "Market research and strategy development",
                achievement: "Secured initial funding",
                icon: <FaChartLine className="w-6 h-6" />
            }
        ]
    }
];

const growthTimeline = [
    {
        phase: "Foundation",
        year: "2023",
        achievements: [
            "Established core team",
            "Secured initial funding",
            "Developed business strategy"
        ],
        icon: <FaSeedling className="w-8 h-8" />
    },
    {
        phase: "Growth",
        year: "2024",
        achievements: [
            "Expanded team to 10 members",
            "Launched MVP platform",
            "Reached 1000+ users"
        ],
        icon: <FaChartLine className="w-8 h-8" />
    },
    {
        phase: "Innovation",
        year: "2024",
        achievements: [
            "Introduced AI features",
            "Enhanced platform security",
            "Optimized performance"
        ],
        icon: <FaLightbulb className="w-8 h-8" />
    },
    {
        phase: "Expansion",
        year: "2024",
        achievements: [
            "Entered new markets",
            "Partnered with key clients",
            "Launched mobile app"
        ],
        icon: <FaGlobe className="w-8 h-8" />
    }
];

function About() {
    return (
        <>
            <style jsx global>{styles}</style>
            <section className="min-h-screen py-12 mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-12 mb-12 border border-red-500/30 shadow-2xl hover:shadow-red-500/20 transition-all duration-500">
                        <h1 className="text-6xl font-bold text-white mb-6">About Nabd Masr</h1>
                        <p className="text-2xl text-white/90 max-w-3xl leading-relaxed">
                            Nabd Masr is a leading technology company dedicated to creating innovative solutions
                            that make a difference in people&apos;s lives. Our team of passionate developers and
                            engineers work together to build cutting-edge applications and services.
                        </p>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-red-500/30 text-center hover:bg-white/10 transition-all duration-300">
                                <div className="text-4xl font-bold text-red-500 mb-2">{stat.number}</div>
                                <div className="text-white">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {features.map((feature, index) => (
                            <div key={index} className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-red-500/30 hover:bg-white/10 transition-all duration-300 group">
                                <div className="text-red-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                                <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                                <p className="text-white">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mission & Vision Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-10 border border-red-500/30 hover:bg-white/10 transition-all duration-300">
                            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-white text-lg leading-relaxed">
                                At Nabd Masr, we strive to create innovative technological solutions that empower
                                individuals and businesses. Our commitment to excellence and continuous improvement
                                drives us to deliver the best possible products and services to our clients.
                            </p>
                        </div>
                        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-10 border border-red-500/30 hover:bg-white/10 transition-all duration-300">
                            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                            <p className="text-white text-lg leading-relaxed">
                                To be the leading technology company in Egypt, known for innovation, quality, and
                                customer satisfaction. We aim to transform the digital landscape through cutting-edge
                                solutions and exceptional service.
                            </p>
                        </div>
                    </div>

                    {/* Technologies Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center text-white mb-8">Our Tech Stack</h2>
                        <div className="relative overflow-hidden">
                            <div className="flex animate-scroll space-x-6 py-4">
                                {[...technologies, ...technologies].map((tech, index) => (
                                    <div
                                        key={index}
                                        className="backdrop-blur-xl bg-red-500/5 rounded-2xl p-6 border border-red-500/30 text-center hover:bg-red-500/10 transition-all duration-300 flex-shrink-0 w-48 group"
                                    >
                                        <div className="text-red-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {tech.icon}
                                        </div>
                                        <p className="text-white group-hover:text-white transition-colors duration-300">{tech.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Additional Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-10 border border-red-500/30 hover:bg-white/10 transition-all duration-300">
                            <h2 className="text-3xl font-bold text-white mb-6">Our Process</h2>
                            <ul className="space-y-4">
                                <li className="flex items-center text-white">
                                    <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3">1</span>
                                    Discovery & Planning
                                </li>
                                <li className="flex items-center text-white">
                                    <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3">2</span>
                                    Design & Prototyping
                                </li>
                                <li className="flex items-center text-white">
                                    <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3">3</span>
                                    Development
                                </li>
                                <li className="flex items-center text-white">
                                    <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3">4</span>
                                    Testing & Quality Assurance
                                </li>
                                <li className="flex items-center text-white">
                                    <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3">5</span>
                                    Deployment & Maintenance
                                </li>
                            </ul>
                        </div>
                        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-10 border border-red-500/30 hover:bg-white/10 transition-all duration-300">
                            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Us</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start text-white">
                                    <span className="text-red-500 mr-3">•</span>
                                    Experienced team of developers and designers
                                </li>
                                <li className="flex items-start text-white">
                                    <span className="text-red-500 mr-3">•</span>
                                    Cutting-edge technology stack
                                </li>
                                <li className="flex items-start text-white">
                                    <span className="text-red-500 mr-3">•</span>
                                    Agile development methodology
                                </li>
                                <li className="flex items-start text-white">
                                    <span className="text-red-500 mr-3">•</span>
                                    Dedicated support and maintenance
                                </li>
                                <li className="flex items-start text-white">
                                    <span className="text-red-500 mr-3">•</span>
                                    Competitive pricing and flexible engagement models
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Growth Timeline Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center text-white mb-8">Growth & Achievements</h2>
                        <div className="relative">
                            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-600 transform -translate-x-1/2"></div>
                            <div className="space-y-12">
                                {growthTimeline.map((phase, index) => (
                                    <div key={index} className="relative">
                                        <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                            <div className="w-1/2 px-8">
                                                <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-red-500 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
                                                    <div className="flex items-center mb-6">
                                                        <div className="timeline-icon p-4 rounded-full bg-red-500 mr-4 transform group-hover:scale-110 transition-transform duration-300">
                                                            <div className="text-white">
                                                                {phase.icon}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                                                            <p className="text-white">{phase.year}</p>
                                                        </div>
                                                    </div>
                                                    <ul className="space-y-3">
                                                        {phase.achievements.map((achievement, idx) => (
                                                            <li key={idx} className="flex items-center text-white group-hover:text-white transition-colors duration-300">
                                                                <FaCheckCircle className="w-4 h-4 text-red-500 mr-3" />
                                                                {achievement}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="w-1/2"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center text-white mb-8">Our Journey Through Time</h2>
                        <div className="space-y-12">
                            {milestones.map((yearData, yearIndex) => (
                                <div key={yearIndex} className="relative">
                                    <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/5 rounded-full px-6 py-2 inline-block border border-red-500">
                                        <h3 className="text-2xl font-bold text-white">
                                            {yearData.year}
                                        </h3>
                                    </div>
                                    <div className="mt-8 space-y-8">
                                        {yearData.events.map((event, eventIndex) => (
                                            <div key={eventIndex} className="relative pl-8 group">
                                                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-red-600 transform -translate-x-1/2 group-hover:scale-150 transition-transform duration-300"></div>
                                                <div className="absolute left-0 top-0 w-0.5 h-full bg-red-600 transform -translate-x-1/2"></div>
                                                <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-red-500 hover:bg-white/10 transition-all duration-300">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center">
                                                            <div className="text-red-400 mr-3">
                                                                {event.icon}
                                                            </div>
                                                            <h4 className="text-xl font-semibold text-white">
                                                                {event.title}
                                                            </h4>
                                                        </div>
                                                        <span className="text-red-400">{event.month}</span>
                                                    </div>
                                                    <p className="text-white mb-4">{event.description}</p>
                                                    <div className="flex items-center space-x-2">
                                                        <FaAward className="text-red-400" />
                                                        <span className="text-white">{event.achievement}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Development Timeline Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center text-white mb-8">Development Journey</h2>
                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-500/30"></div>
                            <div className="space-y-12">
                                {developmentTimeline.map((item, index) => (
                                    <div key={index} className="relative">
                                        <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                            <div className="w-1/2 px-8">
                                                <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-red-500/30 hover:bg-white/10 transition-all duration-300">
                                                    <div className="flex items-center mb-4">
                                                        <div className="text-red-500 mr-4">{item.icon}</div>
                                                        <div>
                                                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                                            <p className="text-white/80">{item.date}</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-white mb-4">{item.description}</p>
                                                    <div className="space-y-2">
                                                        {item.challenges.map((challenge, idx) => (
                                                            <div key={idx} className="flex items-center text-white">
                                                                <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                                                                {challenge}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/2"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Architecture Map Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center text-white mb-8">Technical Architecture</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {Object.entries(architectureMap).map(([key, layer]) => (
                                <div key={key} className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-red-500/30 hover:bg-white/10 transition-all duration-300">
                                    <h3 className="text-2xl font-semibold text-white mb-6">{layer.title}</h3>
                                    <div className="space-y-4">
                                        {layer.technologies.map((tech, index) => (
                                            <div key={index} className="flex items-center space-x-4 group">
                                                <div className="text-red-500 transform group-hover:scale-110 transition-transform duration-300">
                                                    {tech.icon}
                                                </div>
                                                <span className="text-white group-hover:text-white transition-colors duration-300">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center text-white mb-8">Our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden border border-red-500/30 hover:bg-white/10 transition-all duration-300 group">
                                    <div className="relative h-72 w-full">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                                        <p className="text-red-500 font-medium mb-3">{member.role}</p>
                                        <p className="text-white">{member.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-12 border border-red-500/30 text-center hover:bg-white/10 transition-all duration-300">
                        <FaRocket className="w-16 h-16 text-red-500 mx-auto mb-6 transform hover:scale-110 transition-transform duration-300" />
                        <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
                        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                            Let&apos;s work together to bring your ideas to life and create something extraordinary
                        </p>
                        <button className="bg-red-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/20">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
