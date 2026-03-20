import React from 'react';
import Icon from '../../ui/Icon';

const features = [
    {
        title: '256-Bit Strong Encryption',
        description: 'The industry standard for data protection. Hackers would need supercomputers running for millions of years to crack a single session key.',
        icon: 'lock'
    },
    {
        title: 'SEO Ranking Boost',
        description: 'Google officially uses HTTPS as a ranking signal. Sites without an SSL certificate are penalized in search results and flagged as "Not Secure".',
        icon: 'trending-up'
    },
    {
        title: 'Dynamic Site Seal',
        description: 'Prove your identity instantly. OV and EV certificates include a clickable graphic you can put on your site displaying your verified company details.',
        icon: 'check-circle'
    },
    {
        title: 'Universal Compatibility',
        description: 'Our certificates are trusted by 99.9% of all web browsers, operating systems, and mobile devices natively without throwing warning screens.',
        icon: 'globe'
    },
    {
        title: 'Unlimited Server Licenses',
        description: 'Install your certificate on as many physical servers or load balancers as you need without paying additional licensing fees.',
        icon: 'server'
    },
    {
        title: 'Auto-Renewal Available',
        description: 'Never let your certificate expire by accident. If your domain is hosted with us, we automatically generate a new CSR and install the renewed cert.',
        icon: 'refresh-ccw'
    }
];

export default function FeaturesList() {
    return (
        <section className="py-24 bg-dark-900 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Enterprise security, accessible to everyone
                    </h2>
                    <p className="text-text-secondary">
                        Protecting your users shouldn't be complicated. We partner with the world's leading Certificate Authorities to deliver uncompromised security.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-emerald-500/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-dark-800 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.1)]">
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
