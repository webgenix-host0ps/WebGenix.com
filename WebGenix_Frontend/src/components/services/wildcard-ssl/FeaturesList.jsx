import React from 'react';
import Icon from '../../ui/Icon';

const features = [
    {
        title: 'Unlimited Subdomains',
        description: 'Secure www, mail, blog, shop, portal, and any other subdomain you create today or in the future—all under one certificate.',
        icon: 'layers'
    },
    {
        title: 'Unified Management',
        description: 'Stop juggling dozens of expiration dates and key files. Manage the security for your entire infrastructure from a single dashboard.',
        icon: 'sliders'
    },
    {
        title: 'Instant Issuance (DV)',
        description: 'Our Domain Validated Wildcard certificates are issued automatically in minutes. Just verify domain ownership and install.',
        icon: 'zap'
    },
    {
        title: 'Massive Cost Savings',
        description: 'If you use more than 3 subdomains, a Wildcard SSL is mathematically cheaper than buying individual Single Domain certificates.',
        icon: 'dollar-sign'
    },
    {
        title: 'Future-Proof Security',
        description: 'Adding a new service? Your wildcard automatically covers it out of the box. No need to buy, provision, or install new certificates.',
        icon: 'shield-check'
    },
    {
        title: 'Universal Compatibility',
        description: 'Like our standard certs, Wildcards feature 99.9% browser and mobile device recognition with zero warning screens.',
        icon: 'globe'
    }
];

export default function FeaturesList() {
    return (
        <section className="py-24 bg-dark-900 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Complexity down. Security up.
                    </h2>
                    <p className="text-text-secondary">
                        Wildcard SSLs simplify scaling by providing blanket encryption across your entire domain scope.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-indigo-500/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-dark-800 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(99,102,241,0.1)]">
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
