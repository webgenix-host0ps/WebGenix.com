import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

const plans = [
    {
        name: 'Email Starter',
        price: '149',
        period: '/mo per mailbox',
        description: 'Perfect for freelancers and small teams starting to look professional.',
        features: [
            '10 GB Email Storage',
            'Custom Domain address',
            'Advanced Spam & Virus Protection',
            'Webmail access',
            'POP3 / IMAP support',
            'Standard Support'
        ],
        highlighted: false
    },
    {
        name: 'Email Pro',
        price: '299',
        period: '/mo per mailbox',
        description: 'Massive storage and advanced collaboration tools for growing businesses.',
        features: [
            '50 GB Email Storage',
            'Custom Domain address',
            'Advanced Spam & Virus Protection',
            'Shared Calendars & Contacts',
            'Mobile sync (ActiveSync)',
            'Priority 24/7 Support'
        ],
        highlighted: true
    }
];

export default function PricingSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-text-secondary">
                        Start with exactly what you need. Add new mailboxes to your account at any time as your team grows.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-8 relative flex flex-col h-full transition-all duration-300 ${plan.highlighted
                                ? 'bg-gradient-to-b from-dark-800 to-sky-900/20 border-2 border-sky-500/50 shadow-[0_0_40px_rgba(14,165,233,0.15)] transform md:-translate-y-4'
                                : 'bg-dark-900 border border-dark-700 hover:border-dark-600'
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-sm text-text-secondary">{plan.description}</p>
                            </div>

                            <div className="mb-8 flex items-end gap-1">
                                <span className="text-4xl font-extrabold text-white">₹{plan.price}</span>
                                <span className="text-sm text-text-muted mb-1">{plan.period}</span>
                            </div>

                            <div className="flex-grow">
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${plan.highlighted ? 'bg-sky-500/20 text-sky-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                                                <Icon name="check" size={14} />
                                            </div>
                                            <span className="text-sm text-text-secondary leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <CTAButton
                                variant={plan.highlighted ? 'primary' : 'secondary'}
                                className={`w-full justify-center ${plan.highlighted ? '!bg-sky-600 hover:!bg-sky-500 !border-none' : ''}`}
                            >
                                Choose {plan.name}
                            </CTAButton>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
