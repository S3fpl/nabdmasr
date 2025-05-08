import React from 'react'
import Image from 'next/image'

const ApplicationPage = () => {
    return (
        <div className=" mx-auto p-8 mt-16">
            <h1 className="text-4xl font-bold mb-8 text-center text-red-600">My Flutter & Firebase Application</h1>

            <div className="space-y-8">
                <section className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-md border border-white/20">
                    <h2 className="text-2xl font-semibold mb-4 text-red-500">About the Application</h2>
                    <p className="text-white leading-relaxed">
                        This application was developed using Flutter for the frontend and Firebase as the backend service.
                        The combination of these technologies allows for a robust, scalable, and feature-rich mobile application.
                    </p>
                </section>

                <section className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-md border border-white/20">
                    <h2 className="text-2xl font-semibold mb-4 text-red-500">Key Technologies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border border-white/20 rounded-lg bg-white/5">
                            <h3 className="text-xl font-medium mb-2 text-red-400">Flutter</h3>
                            <p className="text-white">
                                Flutter provides a beautiful and responsive user interface with its widget-based architecture.
                                The application benefits from Flutter hot reload feature for rapid development and testing.
                            </p>
                        </div>
                        <div className="p-4 border border-white/20 rounded-lg bg-white/5">
                            <h3 className="text-xl font-medium mb-2 text-red-400">Firebase</h3>
                            <p className="text-white">
                                Firebase serves as the backend, providing authentication, real-time database,
                                cloud storage, and other essential services for the application.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-md border border-white/20">
                    <h2 className="text-2xl font-semibold mb-4 text-red-500">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-red-400">Core Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-white">
                                <li>User Authentication and Authorization</li>
                                <li>Real-time Data Synchronization</li>
                                <li>Cloud Storage for Media Files</li>
                                <li>Cross-platform Compatibility</li>
                                <li>Offline Support</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-red-400">Advanced Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-white">
                                <li>Push Notifications</li>
                                <li>Dark/Light Theme Support</li>
                                <li>Multi-language Support</li>
                                <li>Analytics Dashboard</li>
                                <li>Social Media Integration</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-red-400">Security Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-white">
                                <li>End-to-End Encryption</li>
                                <li>Two-Factor Authentication</li>
                                <li>Biometric Login</li>
                                <li>Secure Data Backup</li>
                                <li>Privacy Controls</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-red-400">Performance Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-white">
                                <li>Fast Loading Times</li>
                                <li>Optimized Battery Usage</li>
                                <li>Low Data Consumption</li>
                                <li>Automatic Updates</li>
                                <li>Cache Management</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-md border border-white/20">
                    <h2 className="text-2xl font-semibold mb-4 text-red-500">App Showcase</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative h-[600px]">
                            <Image
                                src="/images/iphone-mockup.png"
                                alt="App on iPhone"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative h-[600px]">
                            <Image
                                src="/images/macbook-mockup.png"
                                alt="App on MacBook"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-md border border-white/20">
                    <h2 className="text-2xl font-semibold mb-4 text-red-500">Performance Metrics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 border border-white/20 rounded-lg bg-white/5 text-center">
                            <h3 className="text-xl font-medium mb-2 text-red-400">99.9%</h3>
                            <p className="text-white">Uptime</p>
                        </div>
                        <div className="p-4 border border-white/20 rounded-lg bg-white/5 text-center">
                            <h3 className="text-xl font-medium mb-2 text-red-400">50ms</h3>
                            <p className="text-white">Response Time</p>
                        </div>
                        <div className="p-4 border border-white/20 rounded-lg bg-white/5 text-center">
                            <h3 className="text-xl font-medium mb-2 text-red-400">1M+</h3>
                            <p className="text-white">Active Users</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ApplicationPage
