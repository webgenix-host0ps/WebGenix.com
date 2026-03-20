import React from 'react';
import Icon from '../../ui/Icon';

const reasons = [
    {
        title: 'Unified Billing & Management',
        description: 'Manage your domain, hosting, and employee email accounts all from a single dashboard. One monthly invoice for your entire digital infrastructure.',
        icon: 'credit-card'
    },
    {
        title: 'Free Setup & Domain Verification',
        description: 'Connecting Workspace to a domain involves complex TXT, MX, and SPF records. If your domain is with us, we configure everything automatically with zero downtime.',
        icon: 'settings'
    },
    {
        title: 'Priority Human Support',
        description: 'Skip the massive Google support queues. Get 24/7 direct access to our in-house cloud experts who can troubleshoot email routing issues instantly.',
        icon: 'headphones'
    }
];

export default function WhyChooseUsSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700 overflow-hidden relative">

            {/* Background design */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="flex-1 w-full max-w-lg lg:order-2">
                        {/* Abstract visual representing unified support/billing */}
                        <div className="relative h-[400px]">

                            {/* Central Dashboard Concept */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] bg-dark-900 border border-dark-600 rounded-2xl shadow-2xl p-6 z-20">
                                <div className="text-sm font-bold text-white mb-4 border-b border-dark-700 pb-2">Active Services</div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between bg-dark-800 p-3 rounded-lg border border-dark-700">
                                        <div className="flex items-center gap-3">
                                            <Icon name="globe" size={16} className="text-sky-400" />
                                            <span className="text-xs font-semibold text-white">yourdomain.com</span>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    </div>
                                    <div className="flex items-center justify-between bg-dark-800 p-3 rounded-lg border border-dark-700">
                                        <div className="flex items-center gap-3">
                                            <Icon name="server" size={16} className="text-purple-400" />
                                            <span className="text-xs font-semibold text-white">Pro Hosting Plan</span>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    </div>
                                    <div className="flex items-center justify-between bg-blue-900/20 p-3 rounded-lg border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] relative overflow-hidden">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
                                        <div className="flex items-center gap-3">
                                            <Icon name="mail" size={16} className="text-red-400" />
                                            <div>
                                                <div className="text-xs font-bold text-white">Google Workspace</div>
                                                <div className="text-[10px] text-text-muted">12 Active Users</div>
                                            </div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-dark-700 flex justify-between items-center text-xs">
                                    <span className="text-text-secondary">Next Invoice: Nov 1</span>
                                    <span className="font-bold text-white">₹12,499</span>
                                </div>
                            </div>

                            {/* Decorative Orbit Rings */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-dark-700/50 rounded-full" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] border border-dark-700/30 rounded-full" />

                        </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left lg:order-1">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Same great product.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Much better experience.</span>
                        </h2>
                        <p className="text-text-secondary leading-relaxed mb-10">
                            Why buy Workspace directly from Google when you can get it for the same price from an Official Cloud Partner, bundled seamlessly with your existing infrastructure?
                        </p>

                        <div className="space-y-8">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-700 flex items-center justify-center text-blue-400 shrink-0 shadow-lg">
                                        <Icon name={reason.icon} size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{reason.title}</h3>
                                        <p className="text-sm text-text-secondary leading-relaxed max-w-md">{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
