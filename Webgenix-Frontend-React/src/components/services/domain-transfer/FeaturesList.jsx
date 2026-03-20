import React from 'react';
import Icon from '../../ui/Icon';

const features = [
    {
        title: 'Zero Downtime Guaranteed',
        description: 'Keep your current nameservers during the transfer process and your website or emails won\'t skip a beat. Totally seamless transition.',
        icon: 'activity'
    },
    {
        title: 'Consolidated Billing',
        description: 'Stop hunting down invoices across 5 different domain registrars and hosting accounts. Bring everything under one predictable roof.',
        icon: 'file-text'
    },
    {
        title: 'Keep Remaining Time',
        description: 'If your domain doesn\'t expire for 8 months, you keep those 8 months. The transfer fee simply adds an extra 12 months on top of that.',
        icon: 'calendar'
    },
    {
        title: 'Auto-Renewal Safety',
        description: 'We secure your valuable domains with automatic renewals, ensuring you never accidentally lose a premium asset because of a missed email.',
        icon: 'refresh-cw'
    },
    {
        title: 'Bulk Transfer Tools',
        description: 'Have a portfolio of 100+ domains? Our bulk transfer tool lets you paste a CSV of domains and Auth-Codes to move them all simultaneously.',
        icon: 'layers'
    },
    {
        title: '24/7 Transfer Support',
        description: 'Stuck dealing with a difficult registrar who won\'t unlock your domain? Our expert support team will jump in and help you navigate the process.',
        icon: 'headphones'
    }
];

export default function FeaturesList() {
    return (
        <section className="py-24 bg-dark-900 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Why transfer your domains?
                    </h2>
                    <p className="text-text-secondary">
                        Moving your domains isn't just about saving money on renewals—it's about security, convenience, and better support.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-cyan-500/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                                <Icon name={feature.icon} size={24} />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
