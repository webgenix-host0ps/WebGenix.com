import React from 'react';
import Icon from '../../ui/Icon';

const partners = [
    { name: 'Razorpay', icon: 'credit-card', color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { name: 'Paytm', icon: 'dollar-sign', color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { name: 'UPI', icon: 'smartphone', color: 'text-gray-300', bg: 'bg-gray-500/20' },
    { name: 'Google Pay', icon: 'globe', color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { name: 'FedEx', icon: 'truck', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { name: 'UPS', icon: 'package', color: 'text-amber-600', bg: 'bg-amber-600/10' },
    { name: 'USPS', icon: 'mail', color: 'text-blue-600', bg: 'bg-blue-600/10' },
    { name: 'Mailchimp', icon: 'send', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
];

export default function IntegrationsSection() {
    return (
        <section className="py-24 bg-dark-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

                <h2 className="text-3xl font-bold text-white mb-4">
                    Plays nice with others
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto mb-16">
                    Connect your store to the tools you already use. From leading payment gateways to global shipping carriers, one-click integrations make scaling simple.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-dark-800/80 border border-dark-700 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg transition-all cursor-default"
                        >
                            <div className={`w-10 h-10 rounded-xl ${partner.bg} ${partner.color} flex items-center justify-center`}>
                                <Icon name={partner.icon} size={20} />
                            </div>
                            <span className="font-semibold text-white">{partner.name}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-16 inline-flex items-center gap-2 text-emerald-400 text-sm font-medium hover:text-emerald-300 cursor-pointer">
                    View all 150+ integrations <Icon name="arrow-right" size={16} />
                </div>

            </div>
        </section>
    );
}
