import React from 'react'

const ConditionsPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br mt-8 p-4">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl max-w-3xl w-full p-8 text-white space-y-6">
                <h1 className="text-3xl font-bold text-center text-white mb-4">Terms & Conditions</h1>

                <section>
                    <h2 className="text-xl font-semibold mb-2">1. Platform Usage</h2>
                    <p className="text-sm text-gray-300">
                        Nabd Masr is intended solely for blood donation purposes. Any misuse or submission of false information is strictly prohibited.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">2. Accuracy of Information</h2>
                    <p className="text-sm text-gray-300">
                        Users are responsible for providing accurate information, especially regarding blood type and donation appointments.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">3. Privacy Policy</h2>
                    <p className="text-sm text-gray-300">
                        Your data is handled with strict confidentiality. We do not share your information with third parties unless legally required.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">4. Modifications</h2>
                    <p className="text-sm text-gray-300">
                        The platform reserves the right to modify these terms at any time. Users will be notified of major updates through in-app notifications.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default ConditionsPage
