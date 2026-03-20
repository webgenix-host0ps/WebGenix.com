import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

const tiers = [
    {
        name: 'DV Wildcard',
        target: 'For Rapid Deployment',
        price: '6,499',
        period: '/ year',
        description: 'Verify domain ownership in minutes and secure your entire subdomain infrastructure immediately.',
        features: [
            'Secures unlimited subdomains',
            'Full 256-bit encryption',
            'Issued within 15 minutes',
            'No physical paperwork',
            '₹8,00,000 Relying Party Warranty',
            'Static site seal'
        ],
        badge: 'Fastest'
    },
    {
        name: 'OV Wildcard',
        target: 'For Established Businesses',
        price: '16,499',
        period: '/ year',
        description: 'Includes strict business identity verification to provide higher customer trust and warranty levels.',
        features: [
            'Everything in DV Wildcard, plus:',
            'Verified company details in certificate',
            'Dynamic, clickable site seal',
            '₹8Cr+ Relying Party Warranty',
            'Premium organizational trust',
            'Requires business registration docs'
        ],
        badge: 'Recommended'
    }
];

export default function PricingSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700 relative overflow-hidden">

            {/* Background flourish */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Wildcard pricing that scales with you
                    </h2>
                    <p className="text-text-secondary">
                        Instead of paying per subdomain, flat-rate pricing secures your entire primary domain instantly. Choose your verification level below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-10 relative flex flex-col h-full bg-dark-900 border ${tier.badge === 'Recommended' ? 'border-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.15)] transform md:-translate-y-2' : 'border-dark-700 hover:border-dark-600'
                                }`}
                        >
                            {tier.badge && (
                                <div className={`absolute top-0 right-8 -translate-y-1/2 px-4 py-1 text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg ${tier.badge === 'Recommended' ? 'bg-indigo-600' : 'bg-dark-600 border border-dark-500'
                                    }`}>
                                    {tier.badge}
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white tracking-tight">{tier.name}</h3>
                                <p className="text-sm text-indigo-400 font-medium tracking-wide mt-1">{tier.target}</p>
                            </div>

                            <div className="mb-8 pb-8 border-b border-dark-700">
                                <div className="flex items-end gap-1 mb-2">
                                    <span className="text-2xl font-bold text-text-muted mb-1">₹</span>
                                    <span className="text-5xl font-extrabold text-white">{tier.price}</span>
                                </div>
                                <div className="text-sm text-text-muted font-medium">{tier.period}</div>
                            </div>

                            <p className="text-sm text-text-secondary mb-8 leading-relaxed">
                                {tier.description}
                            </p>

                            <div className="flex-grow">
                                <ul className="space-y-5 mb-10">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className={`mt-0.5 shrink-0 ${tier.badge === 'Recommended' ? 'text-indigo-400' : 'text-emerald-400'}`}>
                                                <Icon name="check" size={18} />
                                            </div>
                                            <span className={`text-sm leading-snug ${idx === 0 && index === 1 ? 'font-bold text-white' : 'text-text-secondary'}`}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <CTAButton
                                variant={tier.badge === 'Recommended' ? 'primary' : 'secondary'}
                                className={`w-full justify-center h-12 text-sm ${tier.badge === 'Recommended' ? '!bg-indigo-600 hover:!bg-indigo-500 !border-none' : ''}`}
                            >
                                Get {tier.name}
                            </CTAButton>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
