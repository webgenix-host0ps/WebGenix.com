import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

const levels = [
    {
        name: 'Domain Validation (DV)',
        target: 'For Personal Sites & Blogs',
        price: 'Free',
        period: 'Included with hosting',
        description: 'Basic encryption that verifies you own the domain. Issues in minutes.',
        features: [
            '256-bit encryption',
            'HTTPS & Padlock icon',
            'Automated issuance',
            'No paperwork required',
            'Protects 1 domain'
        ],
        icon: 'lock',
        color: 'text-gray-400',
        badge: ''
    },
    {
        name: 'Organization Validation (OV)',
        target: 'For Small Businesses & Nonprofits',
        price: '3,999',
        period: '/ year',
        description: 'Verifies your business exists. Adds instant credibility to your brand.',
        features: [
            'Everything in DV, plus:',
            'Business identity verification',
            'Dynamic site seal included',
            '₹40L+ relying party warranty',
            'Protects unlimited subdomains (Wildcard option)'
        ],
        icon: 'briefcase',
        color: 'text-blue-400',
        badge: 'Recommended'
    },
    {
        name: 'Extended Validation (EV)',
        target: 'For eCommerce & Enterprise',
        price: '11,999',
        period: '/ year',
        description: 'The highest level of trust. Displays your company name in certificate details.',
        features: [
            'Everything in OV, plus:',
            'Strict identity verification process',
            'Green address bar compatibility*',
            'Highest warranty level (₹8Cr+)',
            'Maximum customer trust conversion'
        ],
        icon: 'shield-check',
        color: 'text-emerald-400',
        badge: 'Maximum Trust'
    }
];

export default function ValidationLevelsSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Choose your level of trust
                    </h2>
                    <p className="text-text-secondary">
                        All our certificates provide industry-standard 256-bit encryption. The difference lies in the level of identity verification performed on your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {levels.map((level, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-8 relative flex flex-col h-full bg-dark-900 border ${level.badge === 'Recommended' ? 'border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.1)]' :
                                level.badge === 'Maximum Trust' ? 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.1)]' :
                                    'border-dark-700 hover:border-dark-600'
                                }`}
                        >
                            {level.badge && (
                                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-white text-[10px] font-bold tracking-widest uppercase rounded-full shadow-lg ${level.badge === 'Recommended' ? 'bg-blue-600' : 'bg-emerald-600'
                                    }`}>
                                    {level.badge}
                                </div>
                            )}

                            <div className="mb-6 flex flex-col items-center text-center">
                                <div className={`w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center mb-4 ${level.color}`}>
                                    <Icon name={level.icon} size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white">{level.name}</h3>
                                <p className="text-xs text-text-muted uppercase tracking-wide mt-1">{level.target}</p>
                            </div>

                            <div className="text-center mb-6">
                                <div className="flex items-center justify-center gap-1">
                                    {level.price !== 'Free' && <span className="text-lg font-bold text-text-muted mt-2">₹</span>}
                                    <span className="text-4xl font-extrabold text-white">{level.price}</span>
                                </div>
                                <div className="text-sm text-text-muted mt-1">{level.period}</div>
                            </div>

                            <p className="text-sm text-text-secondary text-center mb-8 pb-8 border-b border-dark-700">
                                {level.description}
                            </p>

                            <div className="flex-grow">
                                <ul className="space-y-4 mb-8">
                                    {level.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="mt-0.5 shrink-0 text-emerald-400">
                                                <Icon name="check" size={16} />
                                            </div>
                                            <span className={`text-sm leading-snug ${idx === 0 && index > 0 ? 'font-bold text-white' : 'text-text-secondary'}`}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <CTAButton
                                variant={level.badge === 'Maximum Trust' ? 'primary' : 'secondary'}
                                className={`w-full justify-center ${level.badge === 'Maximum Trust' ? '!bg-emerald-600 hover:!bg-emerald-500 !border-none' : ''}`}
                            >
                                Select {level.name.split(' ')[0]}
                            </CTAButton>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
