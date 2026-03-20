import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

const plans = [
    {
        name: 'Business Starter',
        price: '499',
        period: '/user / month',
        description: 'Professional email and standard collaboration tools.',
        features: [
            'Custom business email',
            '100-participant video meetings',
            '30 GB pooled storage per user',
            'Security and management controls',
            'Standard Support'
        ],
        highlighted: false
    },
    {
        name: 'Business Standard',
        price: '999',
        period: '/user / month',
        description: 'Enhanced storage and features for growing teams.',
        features: [
            'Everything in Starter, plus:',
            '150-participant meetings + recording',
            '2 TB pooled storage per user',
            'Shared drives for team files',
            'Advanced chat rooms'
        ],
        highlighted: true
    },
    {
        name: 'Business Plus',
        price: '1,499',
        period: '/user / month',
        description: 'Advanced compliance controls and massive storage.',
        features: [
            'Everything in Standard, plus:',
            '500-participant meetings + attendance',
            '5 TB pooled storage per user',
            'Enhanced security and Vault access',
            'Advanced endpoint management'
        ],
        highlighted: false
    }
];

export default function PricingSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Choose the right Workspace for your crew
                    </h2>
                    <p className="text-text-secondary">
                        We offer exactly the same pricing as Google direct, but with the added benefit of single-pane billing and our legendary managed web support.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-8 relative flex flex-col h-full transition-all duration-300 ${plan.highlighted
                                ? 'bg-gradient-to-b from-dark-800 to-blue-900/20 border-2 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.15)] transform md:-translate-y-4'
                                : 'bg-dark-900 border border-dark-700 hover:border-dark-600'
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-sm text-text-secondary">{plan.description}</p>
                            </div>

                            <div className="mb-8 flex items-end gap-1">
                                <span className="text-4xl font-extrabold text-white">₹{plan.price}</span>
                                <span className="text-sm text-text-muted mb-1">{plan.period}</span>
                            </div>

                            <CTAButton
                                variant={plan.highlighted ? 'primary' : 'secondary'}
                                className={`w-full justify-center mb-8 ${plan.highlighted ? '!bg-blue-600 hover:!bg-blue-500 !border-none' : ''}`}
                                to="/get-started"
                            >
                                Get Started
                            </CTAButton>

                            <div className="flex-grow">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="mt-0.5 mt-0.5 shrink-0 text-emerald-400">
                                                <Icon name="check" size={16} />
                                            </div>
                                            <span className={`text-sm leading-snug ${idx === 0 && (plan.name === 'Business Standard' || plan.name === 'Business Plus') ? 'font-bold text-white' : 'text-text-secondary'}`}>{feature}</span>
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
