import React from 'react';
import {
    UserGroupIcon,
    HeartIcon,
    ChartBarIcon,
    ClockIcon,
    MapPinIcon,
    PhoneIcon,
    CalendarIcon,
    DocumentTextIcon,
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
    ExclamationCircleIcon,
    CheckCircleIcon,
    DocumentArrowDownIcon,
    Cog6ToothIcon,
    UserPlusIcon,
    BellIcon,
    CalendarDaysIcon,
    ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

function Statistics() {
    return (
        <section className="min-h-screen bg-gradient-to-br p-8 mt-16">
            <div className="container mx-auto space-y-8">
                {/* Header Section with Quick Actions */}
                <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-4xl font-bold mb-2 text-white">Nabd Masr Dashboard</h1>
                            <p className="text-gray-300">Blood Donation Statistics & Analytics</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-4 py-2 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 transition-all flex items-center gap-2">
                                <DocumentArrowDownIcon className="w-5 h-5" />
                                Export Data
                            </button>
                            <button className="px-4 py-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition-all flex items-center gap-2">
                                <DocumentTextIcon className="w-5 h-5" />
                                Generate Report
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-white/5">
                            <p className="text-gray-400 text-sm flex items-center gap-2">
                                <ClockIcon className="w-4 h-4" />
                                Last Updated
                            </p>
                            <p className="text-white">Just now</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5">
                            <p className="text-gray-400 text-sm flex items-center gap-2">
                                <CalendarIcon className="w-4 h-4" />
                                Data Period
                            </p>
                            <p className="text-white">Last 30 Days</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5">
                            <p className="text-gray-400 text-sm flex items-center gap-2">
                                <CheckCircleIcon className="w-4 h-4" />
                                Status
                            </p>
                            <p className="text-green-400">All Systems Operational</p>
                        </div>
                    </div>
                </div>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <HeartIcon className="w-8 h-8 text-red-400" />
                            <h3 className="text-xl font-semibold text-white">Total Donations</h3>
                        </div>
                        <p className="text-3xl font-bold text-red-400">2,458</p>
                        <p className="text-green-400 text-sm mt-2 flex items-center gap-1">
                            <ArrowTrendingUpIcon className="w-4 h-4" />
                            12.5% from last month
                        </p>
                    </div>

                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <UserGroupIcon className="w-8 h-8 text-blue-400" />
                            <h3 className="text-xl font-semibold text-white">Active Donors</h3>
                        </div>
                        <p className="text-3xl font-bold text-blue-400">1,234</p>
                        <p className="text-green-400 text-sm mt-2 flex items-center gap-1">
                            <ArrowTrendingUpIcon className="w-4 h-4" />
                            8.3% from last week
                        </p>
                    </div>

                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <CalendarDaysIcon className="w-8 h-8 text-purple-400" />
                            <h3 className="text-xl font-semibold text-white">Upcoming Drives</h3>
                        </div>
                        <p className="text-3xl font-bold text-purple-400">12</p>
                        <p className="text-blue-400 text-sm mt-2 flex items-center gap-1">
                            <BellIcon className="w-4 h-4" />
                            Next drive in 3 days
                        </p>
                    </div>

                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <ChartBarIcon className="w-8 h-8 text-yellow-400" />
                            <h3 className="text-xl font-semibold text-white">Blood Units Available</h3>
                        </div>
                        <p className="text-3xl font-bold text-yellow-400">456</p>
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                            <ArrowTrendingDownIcon className="w-4 h-4" />
                            -5.2% from last week
                        </p>
                    </div>
                </div>

                {/* Blood Type Distribution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20">
                        <h3 className="text-2xl font-semibold text-white mb-4">Blood Type Distribution</h3>
                        <div className="space-y-4">
                            {[
                                { type: 'A+', percentage: '35%', units: '156' },
                                { type: 'B+', percentage: '25%', units: '112' },
                                { type: 'O+', percentage: '20%', units: '89' },
                                { type: 'AB+', percentage: '5%', units: '22' },
                                { type: 'A-', percentage: '7%', units: '31' },
                                { type: 'B-', percentage: '4%', units: '18' },
                                { type: 'O-', percentage: '3%', units: '13' },
                                { type: 'AB-', percentage: '1%', units: '5' }
                            ].map((bloodType, index) => (
                                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-white font-medium">{bloodType.type}</span>
                                            <span className="text-gray-400">{bloodType.units} units</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-700 rounded-full">
                                            <div
                                                className="h-full bg-red-400 rounded-full"
                                                style={{ width: bloodType.percentage }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20">
                        <h3 className="text-2xl font-semibold text-white mb-4">Donation Centers</h3>
                        <div className="space-y-4">
                            {[
                                { name: 'Main Hospital', donations: '856', status: 'active' },
                                { name: 'City Center', donations: '645', status: 'active' },
                                { name: 'University Hospital', donations: '432', status: 'active' },
                                { name: 'Community Center', donations: '289', status: 'maintenance' }
                            ].map((center, index) => (
                                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                                    <div className="flex items-center gap-3">
                                        <MapPinIcon className="w-5 h-5 text-blue-400" />
                                        <div>
                                            <p className="text-white font-medium">{center.name}</p>
                                            <p className="text-gray-400 text-sm">{center.donations} donations</p>
                                        </div>
                                    </div>
                                    <span className={`text-${center.status === 'active' ? 'green' : 'yellow'}-400 flex items-center gap-1`}>
                                        {center.status === 'active' ? (
                                            <CheckCircleIcon className="w-4 h-4" />
                                        ) : (
                                            <ExclamationCircleIcon className="w-4 h-4" />
                                        )}
                                        {center.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Actions and Emergency Contacts */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20">
                        <h3 className="text-2xl font-semibold text-white mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { action: 'Add Donor', icon: UserPlusIcon },
                                { action: 'Schedule Drive', icon: CalendarDaysIcon },
                                { action: 'View Reports', icon: ClipboardDocumentListIcon },
                                { action: 'Settings', icon: Cog6ToothIcon }
                            ].map((action, index) => (
                                <button
                                    key={index}
                                    className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-left"
                                >
                                    <action.icon className="w-6 h-6 text-blue-400 mb-2" />
                                    <span className="text-white">{action.action}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20">
                        <h3 className="text-2xl font-semibold text-white mb-4">Emergency Contacts</h3>
                        <div className="space-y-4">
                            {[
                                { name: 'Emergency Hotline', number: '123-456-7890', type: '24/7' },
                                { name: 'Blood Bank', number: '123-456-7891', type: '24/7' },
                                { name: 'Support', number: '123-456-7892', type: '9AM-5PM' }
                            ].map((contact, index) => (
                                <div key={index} className="p-4 rounded-xl bg-white/5">
                                    <div className="flex items-center gap-3">
                                        <PhoneIcon className="w-5 h-5 text-red-400" />
                                        <div>
                                            <p className="text-white font-medium">{contact.name}</p>
                                            <p className="text-gray-400 text-sm">{contact.number}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm mt-2">{contact.type}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20">
                        <h3 className="text-2xl font-semibold text-white mb-4">System Status</h3>
                        <div className="space-y-4">
                            {[
                                { metric: 'Website Uptime', value: '99.9%', status: 'good' },
                                { metric: 'App Performance', value: '98.5%', status: 'good' },
                                { metric: 'Database Health', value: '100%', status: 'good' },
                                { metric: 'API Response', value: '95ms', status: 'good' }
                            ].map((metric, index) => (
                                <div key={index} className="p-4 rounded-xl bg-white/5">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-300">{metric.metric}</span>
                                        <span className="text-green-400">{metric.value}</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-700 rounded-full">
                                        <div
                                            className="h-full bg-green-400 rounded-full"
                                            style={{ width: '100%' }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer with Additional Info */}
                <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 border border-white/20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div>
                            <h4 className="text-lg font-medium text-white mb-2">Data Sources</h4>
                            <ul className="text-gray-300 space-y-1">
                                <li>• Donation Records</li>
                                <li>• Hospital Reports</li>
                                <li>• User Feedback</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-white mb-2">Last Updates</h4>
                            <ul className="text-gray-300 space-y-1">
                                <li>• Donors: 2m ago</li>
                                <li>• Inventory: 5m ago</li>
                                <li>• Drives: 1m ago</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-white mb-2">Quick Links</h4>
                            <ul className="text-gray-300 space-y-1">
                                <li>• Donation Schedule</li>
                                <li>• Blood Inventory</li>
                                <li>• Donor Portal</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-white mb-2">Support</h4>
                            <ul className="text-gray-300 space-y-1">
                                <li>• Help Center</li>
                                <li>• Contact Support</li>
                                <li>• FAQ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Statistics;

