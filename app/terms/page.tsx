import React from 'react';

function Terms() {
    return (
        <section className="min-h-screen px-4 py-12">
            <div className="container mx-auto max-w-7xl">
                <h1 className="text-4xl font-bold mb-12 text-white text-center">Terms and Conditions</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Introduction - Full Width */}
                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 md:col-span-2">
                        <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Welcome to our platform. By accessing and using our services, you agree to be bound by these Terms and Conditions.
                            Please read them carefully before proceeding.
                        </p>
                    </div>

                    {/* Technical Requirements - Medium */}
                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-white">2. Technical Requirements</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)</li>
                            <li>JavaScript enabled</li>
                            <li>Stable internet connection (minimum 5Mbps)</li>
                            <li>Device with minimum 4GB RAM</li>
                            <li>Updated operating system with latest security patches</li>
                        </ul>
                    </div>

                    {/* API Usage - Medium */}
                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-white">3. API Usage</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Rate limiting: 1000 requests per hour per API key</li>
                            <li>API keys must be kept secure</li>
                            <li>Webhook endpoints must be HTTPS</li>
                            <li>Maintain API version compatibility</li>
                        </ul>
                    </div>

                    {/* Data Security - Large */}
                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 md:col-span-2">
                        <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Security</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-xl font-medium mb-2 text-white">Security Measures</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>End-to-end encryption</li>
                                    <li>Regular security audits</li>
                                    <li>GDPR and CCPA compliance</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium mb-2 text-white">Data Protection</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>Data retention policies</li>
                                    <li>TLS 1.3 encryption</li>
                                    <li>Secure data transmission</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* SLA - Medium */}
                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-white">5. Service Level</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>99.9% uptime guarantee</li>
                            <li>24/7 monitoring</li>
                            <li>Automated backups</li>
                            <li>Disaster recovery</li>
                        </ul>
                    </div>

                    {/* Third-Party - Medium */}
                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-white">6. Third-Party</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>AWS, GCP, Azure</li>
                            <li>Stripe, PayPal</li>
                            <li>Google Analytics</li>
                            <li>Cloudflare CDN</li>
                        </ul>
                    </div>

                    {/* IP Rights - Medium */}
                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-white">7. IP Rights</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Source code</li>
                            <li>API designs</li>
                            <li>UI/UX designs</li>
                            <li>Database schemas</li>
                        </ul>
                    </div>

                    {/* Support - Full Width */}
                    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 md:col-span-2 lg:col-span-3">
                        <h2 className="text-2xl font-semibold mb-4 text-white">8. Technical Support</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center">
                                <h3 className="text-xl font-medium mb-2 text-white">Email</h3>
                                <p className="text-gray-300">support@example.com</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-medium mb-2 text-white">Documentation</h3>
                                <p className="text-gray-300">docs.example.com</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-medium mb-2 text-white">GitHub</h3>
                                <p className="text-gray-300">github.com/example</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-medium mb-2 text-white">Discord</h3>
                                <p className="text-gray-300">discord.gg/example</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-gray-400 text-sm">
                    Last updated: {new Date().toLocaleDateString()}
                </div>
            </div>
        </section>
    );
}

export default Terms;

