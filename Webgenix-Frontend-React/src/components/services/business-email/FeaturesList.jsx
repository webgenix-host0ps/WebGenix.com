import React from 'react';
import Icon from '../../ui/Icon';

const features = [
    {
        title: 'Custom Domain Email',
        description: 'Look professional with name@yourdomain.com. We handle all the DNS records automatically during setup.',
        icon: 'at-sign'
    },
    {
        title: 'Advanced Anti-Spam',
        description: 'Our enterprise-grade security filters out 99.9% of spam, viruses, and phishing attacks before they reach your inbox.',
        icon: 'shield-check'
    },
    {
        title: 'Unlimited Aliases',
        description: 'Create addresses like sales@, support@, or info@ and forward them all into a single primary inbox at no extra cost.',
        icon: 'users'
    },
    {
        title: 'Guaranteed 99.9% Uptime',
        description: 'Powered by an enterprise-grade cloud architecture, ensuring you never miss a critical message from a client.',
        icon: 'activity'
    },
    {
        title: 'Shared Calendars',
        description: 'Schedule meetings effortlessly. View team availability, book resources, and share your calendar links directly.',
        icon: 'calendar'
    },
    {
        title: 'End-to-End Encryption',
        description: 'Your data is secured in transit and at rest with strict privacy protocols. We do not scan your emails for advertising.',
        icon: 'lock'
    }
];

export default function FeaturesList() {
    return (
        <section className="py-24 bg-dark-900 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Everything you expect from an enterprise inbox
                    </h2>
                    <p className="text-text-secondary">
                        Don't settle for less. Our email hosting provides all the security, space, and speed your business requires to operate smoothly at scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-sky-500/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(14,165,233,0.1)]">
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
