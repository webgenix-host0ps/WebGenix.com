import React from 'react';
import Icon from '../../ui/Icon';

const features = [
    {
        title: 'Global Edge Network',
        description: 'Your site is distributed across 300+ edge locations worldwide for sub-10ms response times.',
        icon: 'globe'
    },
    {
        title: 'Zero-Config Deployments',
        description: 'Connect your GitHub or GitLab repository and we automatically detect your framework and build settings.',
        icon: 'git-merge'
    },
    {
        title: 'Instant Rollbacks',
        description: 'Every deployment is atomic. Revert to any previous version instantly with a single click.',
        icon: 'rotate-ccw'
    },
    {
        title: 'Automatic SSL',
        description: 'Free, auto-renewing SSL certificates are provisioned for all custom domains automatically.',
        icon: 'lock'
    },
    {
        title: 'Unlimited Bandwidth',
        description: 'Never worry about traffic spikes. We provide unmetered bandwidth on all our paid plans.',
        icon: 'zap'
    },
    {
        title: 'Serverless Functions',
        description: 'Extend your static site with dynamic API endpoints seamlessly integrated into your deployment.',
        icon: 'server'
    }
];

export default function FeaturesList() {
    return (
        <section className="py-24 bg-dark-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Everything you need to ship faster
                    </h2>
                    <p className="text-text-secondary">
                        Our platform handles the infrastructure so you can focus on building your application.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-accent/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
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
