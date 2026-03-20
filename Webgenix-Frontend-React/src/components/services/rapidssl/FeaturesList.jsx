import React from 'react';
import Icon from '../../ui/Icon';

const features = [
    {
        title: 'Instant 256-Bit Encryption',
        description: 'Meet industry standards for data protection instantly. RapidSSL provides the same base encryption strength as certificates costing ten times as much.',
        icon: 'lock'
    },
    {
        title: 'Universal Browser Trust',
        description: 'Recognized by 99% of all desktop and mobile browsers. Your users will see the secure padlock icon, never a scary warning screen.',
        icon: 'globe'
    },
    {
        title: 'Free "Secured By" Seal',
        description: 'Boost conversion rates by displaying the widely recognized RapidSSL site seal on your checkout or registration pages.',
        icon: 'shield'
    },
    {
        title: '₹8,00,000 Warranty',
        description: 'Rest easy knowing that your certificate comes with a ₹8,00,000 warranty against mis-issuance by the Certificate Authority.',
        icon: 'dollar-sign'
    },
    {
        title: 'Free Reissues',
        description: 'Changed servers? Lost your private key? You can reissue your RapidSSL certificate for free, at any time, for the life of the cert.',
        icon: 'rotate-ccw'
    },
    {
        title: '30-Day Money Back',
        description: 'Try it completely risk-free. If you are not satisfied with your RapidSSL certificate, we will provide a full refund within 30 days.',
        icon: 'refresh-ccw'
    }
];

export default function FeaturesList() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Everything you need. Nothing you don't.
                    </h2>
                    <p className="text-text-secondary">
                        RapidSSL strips away the complexity of organizational checks to deliver pure, uncompromised encryption.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-dark-900 border border-dark-700 hover:border-amber-500/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-dark-800 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(245,158,11,0.1)]">
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
