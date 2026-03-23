import React from 'react';
import Icon from '../../ui/Icon';

const features = [
    {
        title: 'Zero Downtime',
        description: 'We sync your data in the background and only switch DNS when the new server is perfectly identical. Your visitors never notice a thing.',
        icon: 'clock'
    },
    {
        title: 'SEO Preserved',
        description: 'We meticulously map your URLs, maintain your SSL certificates, and ensure your Google rankings stay exactly where they are.',
        icon: 'search'
    },
    {
        title: 'Secure Data Transfer',
        description: 'All files and databases are encrypted during transit using 256-bit AES. We guarantee complete data integrity.',
        icon: 'shield'
    },
    {
        title: 'Managed by Experts',
        description: 'No automated scripts blindly copying files. A dedicated system administrator personally oversees and verifies your migration.',
        icon: 'users'
    },
    {
        title: 'Free for New Accounts',
        description: 'Moving to us shouldn\'t cost you extra. We offer complimentary white-glove migration for all new annual hosting plans.',
        icon: 'gift'
    },
    {
        title: 'Post-Migration Audit',
        description: 'We don\'t just move it and forget it. We perform a 50-point inspection to ensure forms work, speeds are fast, and no links are broken.',
        icon: 'check-square'
    }
];

export default function FeaturesList() {
    return (
        <section className="py-24 bg-dark-900 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        White-glove migration service
                    </h2>
                    <p className="text-text-secondary">
                        Changing hosts is stressful. We remove the risk, handle the technical heavy lifting, and make the transition completely invisible to your customers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-indigo-500/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(99,102,241,0.1)]">
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
