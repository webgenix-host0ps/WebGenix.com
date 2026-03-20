import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

const tiers = [
    {
        name: 'Starter Cloud',
        price: '149',
        period: '/mo',
        description: 'Perfect for a single personal blog or portfolio website.',
        features: [
            '1 Website',
            '10 GB NVMe Storage',
            'Unmetered Bandwidth',
            'Free SSL Certificate',
            '5 Professional Email Accounts',
            'Standard Performance'
        ]
    },
    {
        name: 'Premium Cloud',
        price: '299',
        period: '/mo',
        description: 'Host multiple sites with increased resource limits.',
        features: [
            '10 Websites',
            '50 GB NVMe Storage',
            'Unmetered Bandwidth',
            'Free SSL & Domain (1st Year)',
            'Unlimited Email Accounts',
            '2x Performance Boost'
        ],
        highlighted: true
    },
    {
        name: 'Business Cloud',
        price: '499',
        period: '/mo',
        description: 'Maximum power for eCommerce and intense traffic.',
        features: [
            'Unlimited Websites',
            '100 GB NVMe Storage',
            'Unmetered Bandwidth',
            'Free SSL & Domain (1st Year)',
            'Free Dedicated IP',
            '4x Performance Boost'
        ]
    }
];

export default function PricingSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Premium Hosting, Local Pricing
                    </h2>
                    <p className="text-text-secondary">
                        Start small and scale up as your traffic grows. Every plan includes our 99.9% uptime guarantee and 24/7 expert support.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-8 relative flex flex-col h-full bg-dark-900 border ${tier.highlighted ? 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.1)] transform md:-translate-y-2' : 'border-dark-700 hover:border-dark-600'} transition-all duration-300`}
                        >
                            {tier.highlighted && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg bg-emerald-600">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6 border-b border-dark-700 pb-6">
                                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                                <p className="text-sm text-text-muted">{tier.description}</p>
                            </div>

                            <div className="mb-8 flex items-end gap-1">
                                <span className="text-2xl font-bold text-text-muted mb-1">₹</span>
                                <span className="text-5xl font-extrabold text-white">{tier.price}</span>
                                <span className="text-sm text-text-muted font-medium mb-1">{tier.period}</span>
                            </div>

                            <CTAButton
                                variant={tier.highlighted ? 'primary' : 'secondary'}
                                className={`w-full justify-center mb-8 h-12 ${tier.highlighted ? '!bg-emerald-600 hover:!bg-emerald-500 !border-none' : ''}`}
                            >
                                Select {tier.name}
                            </CTAButton>

                            <div className="flex-grow">
                                <ul className="space-y-4">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className={`mt-0.5 shrink-0 ${tier.highlighted ? 'text-emerald-400' : 'text-blue-400'}`}>
                                                <Icon name="check" size={16} />
                                            </div>
                                            <span className="text-sm text-text-secondary leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
