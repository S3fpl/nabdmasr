import React from "react";
import { Lock, Eye, Server, AlertTriangle, Fingerprint, Database } from "lucide-react";

const SecurityPage = () => {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-16">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Security & Protection
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Your safety and data protection are our top priorities. Learn about our comprehensive security measures.
                    </p>
                </div>

                {/* Main Security Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Authentication Section */}
                    <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-green-500/20 rounded-xl">
                                <Fingerprint className="w-6 h-6 text-green-400" />
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Authentication</h2>
                        </div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                                NextAuth.js Integration
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                                Google OAuth Support
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                                JWT Token Protection
                            </li>
                        </ul>
                    </div>

                    {/* Route Protection */}
                    <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-500/20 rounded-xl">
                                <Lock className="w-6 h-6 text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Route Protection</h2>
                        </div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                Protected Routes Middleware
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                Role-Based Access Control
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                Automatic Redirects
                            </li>
                        </ul>
                    </div>

                    {/* Data Security */}
                    <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-500/20 rounded-xl">
                                <Database className="w-6 h-6 text-purple-400" />
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Data Security</h2>
                        </div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                                End-to-End Encryption
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                                Secure Data Storage
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                                Regular Security Audits
                            </li>
                        </ul>
                    </div>

                    {/* API Security */}
                    <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-red-500/20 rounded-xl">
                                <Server className="w-6 h-6 text-red-400" />
                            </div>
                            <h2 className="text-2xl font-semibold text-white">API Security</h2>
                        </div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                                Rate Limiting
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                                Input Validation
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                                CORS Protection
                            </li>
                        </ul>
                    </div>

                    {/* Privacy Controls */}
                    <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-yellow-500/20 rounded-xl">
                                <Eye className="w-6 h-6 text-yellow-400" />
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Privacy Controls</h2>
                        </div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                                GDPR Compliance
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                                Data Retention Policies
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                                User Data Control
                            </li>
                        </ul>
                    </div>

                    {/* Security Monitoring */}
                    <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:-translate-y-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-orange-500/20 rounded-xl">
                                <AlertTriangle className="w-6 h-6 text-orange-400" />
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Security Monitoring</h2>
                        </div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                                24/7 System Monitoring
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                                Automated Alerts
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                                Regular Security Updates
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Additional Security Information */}
                <div className="mt-16 backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10">
                    <h2 className="text-2xl font-semibold text-white mb-6">Additional Security Measures</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-medium text-white mb-4">Infrastructure Security</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li>• Secure Cloud Infrastructure</li>
                                <li>• DDoS Protection</li>
                                <li>• SSL/TLS Encryption</li>
                                <li>• Regular Backups</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-white mb-4">Compliance & Standards</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li>• HIPAA Compliance</li>
                                <li>• ISO 27001 Standards</li>
                                <li>• Regular Security Audits</li>
                                <li>• Privacy Shield Certified</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecurityPage;