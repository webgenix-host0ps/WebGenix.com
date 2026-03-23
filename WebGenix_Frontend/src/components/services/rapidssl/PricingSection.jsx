import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

const tiers = [
    {
        name: 'RapidSSL Standard',
        target: 'Single Domain Security',
        price: '1,499',
        period: '/ year',
        description: 'Blazing fast issuance for a single domain (both www and non-www included by default).',
        features: [
            'Secures 1 Domain',
            '10-minute automated issuance',
            'Strong 256-bit encryption',
            '₹8,00,000 Relying Party Warranty',
            'Over 99% browser compatibility',
            'Free static site seal'
        ],
        badge: 'Most Popular'
    },
    {
        name: 'RapidSSL Wildcard',
        target: 'Unlimited Subdomains',
        price: '11,999',
        period: '/ year',
        description: 'The same lightning-fast issuance, but applied across your entire core domain and infinite subdomains.',
        features: [
            'Secures unlimited subdomains',
            '10-minute automated issuance',
            'Strong 256-bit encryption',
            '₹8,00,000 Relying Party Warranty',
            'Over 99% browser compatibility',
            'Free static site seal'
        ],
        badge: 'Best Value'
    }
];

export default function PricingSection() {
    return (
        <section className="py-24 bg-dark-900 border-t border-dark-700 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Speed meets affordability
                    </h2>
                    <p className="text-text-secondary">
                        Get premium encryption without the premium price tag. Choose whether you need to secure a single site, or an entire network of subdomains.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-10 relative flex flex-col h-full bg-dark-800 border ${tier.badge === 'Most Popular' ? 'border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.1)] transform md:-translate-y-2' : 'border-dark-700 hover:border-dark-600'
                                }`}
                        >
                            {tier.badge && (
                                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg ${tier.badge === 'Most Popular' ? 'bg-amber-600' : 'bg-dark-600 border border-dark-500'
                                    }`}>
                                    {tier.badge}
                                </div>
                            )}

                            <div className="mb-6 mt-4 text-center">
                                <h3 className="text-2xl font-bold text-white tracking-tight">{tier.name}</h3>
                                <p className="text-sm text-amber-400 font-medium tracking-wide mt-1">{tier.target}</p>
                            </div>

                            <div className="mb-8 pb-8 border-b border-dark-700 text-center">
                                <div className="flex items-end justify-center gap-1 mb-2">
                                    <span className="text-2xl font-bold text-text-muted mb-1">₹</span>
                                    <span className="text-5xl font-extrabold text-white">{tier.price}</span>
                                </div>
                                <div className="text-sm text-text-muted font-medium">{tier.period}</div>
                            </div>

                            <p className="text-sm text-text-secondary mb-8 leading-relaxed text-center">
                                {tier.description}
                            </p>

                            <div className="flex-grow">
                                <ul className="space-y-4 mb-10">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="mt-0.5 shrink-0 text-amber-500">
                                                <Icon name="check" size={18} />
                                            </div>
                                            <span className={`text-sm leading-snug ${idx === 0 && index === 1 ? 'font-bold text-white' : 'text-text-secondary'}`}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <CTAButton
                                variant={tier.badge === 'Most Popular' ? 'primary' : 'secondary'}
                                className={`w-full justify-center h-12 text-sm ${tier.badge === 'Most Popular' ? '!bg-amber-600 hover:!bg-amber-500 !text-dark-900 font-bold !border-none' : ''}`}
                            >
                                Select {tier.name}
                            </CTAButton>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
