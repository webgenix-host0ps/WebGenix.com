import React from 'react';
import Icon from '../../ui/Icon';

const features = [
    {
        title: 'Free WHOIS Privacy',
        description: 'Other registrars charge up to $15/yr to hide your personal info. We include it absolutely free, forever.',
        icon: 'eye-off'
    },
    {
        title: 'Advanced DNS Management',
        description: 'Update records, manage subdomains, and point to external services instantly using our globally distributed Anycast network.',
        icon: 'globe'
    },
    {
        title: 'Simple Auto-Renewal',
        description: 'Never lose your domain. Set up stress-free auto-renewals with customizable billing dates and backup payment methods.',
        icon: 'refresh-ccw'
    },
    {
        title: 'Domain Lock Protection',
        description: 'Prevent unauthorized transfers and hijacking. Your domain stays securely locked until you explicitly unlock it.',
        icon: 'lock'
    },
    {
        title: 'Bulk Management Tools',
        description: 'Manage 1 or 1,000 domains easily. Update name servers, adjust auto-renewals, or assign folders in bulk.',
        icon: 'layers'
    },
    {
        title: 'Free Email Forwarding',
        description: 'Create up to 100 professional aliases (hello@yourdomain.com) and forward them free of charge to your personal inbox.',
        icon: 'mail'
    }
];

export default function FeaturesList() {
    return (
        <section className="py-24 bg-dark-900 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        More than just a name
                    </h2>
                    <p className="text-text-secondary">
                        Every domain registered with us includes powerful tools, security features, and industry-leading support at no extra charge.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-pink-500/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(244,114,182,0.1)]">
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
