import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

const tiers = [
    {
        name: 'Basic Vault',
        target: 'SMBs & Personal Projects',
        price: '1,200',
        period: '/ month',
        description: 'Secure secondary storage for essential off-site backups.',
        features: [
            '100 GB Remote Storage',
            'Daily Automated Snapshots',
            'AES-256 Encryption',
            '7-Day Retention Window',
            'Standard Support'
        ],
        badge: null
    },
    {
        name: 'Business Continuity',
        target: 'E-commerce & Web Apps',
        price: '7,400',
        period: '/ month',
        description: 'High-frequency snapshots and redundant global storage.',
        features: [
            '1 TB NVMe Storage',
            'Hourly Automated Snapshots',
            'AES-256 Encryption',
            '30-Day Retention Window',
            'Multi-Region Replication'
        ],
        badge: 'Recommended'
    },
    {
        name: 'Enterprise Archive',
        target: 'Compliance & Big Data',
        price: '24,900',
        period: '/ month',
        description: 'Cold storage tiering and massive capacity for regulatory compliance.',
        features: [
            '10 TB Tiered Storage',
            'Custom Snapshot Schedules',
            'AES-256 + WORM Protection',
            'Infinite Retention (Pay per GB)',
            'Dedicated Account Manager'
        ],
        badge: 'Maximum Scale'
    }
];

export default function PricingSection() {
    return (
        <section className="py-24 bg-dark-900 border-t border-dark-700 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Predictable storage pricing
                    </h2>
                    <p className="text-text-secondary">
                        Don't get penalized for protecting your company. Our flat-rate backup plans include inbound bandwidth and all API transfer fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-8 relative flex flex-col h-full bg-dark-800 border ${tier.badge === 'Recommended' ? 'border-cyan-500 shadow-[0_0_40px_rgba(34,211,238,0.1)] transform lg:-translate-y-2' : 'border-dark-700 hover:border-dark-600'
                                }`}
                        >
                            {tier.badge && (
                                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg ${tier.badge === 'Recommended' ? 'bg-cyan-600' : 'bg-dark-600 border border-dark-500'
                                    }`}>
                                    {tier.badge}
                                </div>
                            )}

                            <div className="mb-6 mt-4 text-center">
                                <h3 className="text-xl font-bold text-white tracking-tight">{tier.name}</h3>
                                <p className="text-xs text-cyan-400 font-medium tracking-wide mt-1 uppercase">{tier.target}</p>
                            </div>

                            <div className="mb-8 pb-8 border-b border-dark-700 text-center">
                                <div className="flex items-end justify-center gap-1 mb-1">
                                    <span className="text-2xl font-bold text-text-muted mb-1">₹</span>
                                    <span className="text-5xl font-extrabold text-white">{tier.price}</span>
                                </div>
                                <div className="text-sm text-text-muted font-medium">{tier.period}</div>
                            </div>

                            <p className="text-sm text-text-secondary mb-8 leading-relaxed text-center h-10">
                                {tier.description}
                            </p>

                            <div className="flex-grow">
                                <ul className="space-y-4 mb-10">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="mt-0.5 shrink-0 text-cyan-500">
                                                <Icon name="check" size={18} />
                                            </div>
                                            <span className={`text-sm leading-snug ${idx === 0 ? 'font-bold text-white' : 'text-text-secondary'}`}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <CTAButton
                                variant={tier.badge === 'Recommended' ? 'primary' : 'secondary'}
                                className={`w-full justify-center h-12 text-sm ${tier.badge === 'Recommended' ? '!bg-cyan-600 hover:!bg-cyan-500 !text-dark-900 font-bold !border-none' : ''}`}
                            >
                                Select Plan
                            </CTAButton>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
