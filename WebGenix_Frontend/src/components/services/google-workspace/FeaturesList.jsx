import React from 'react';
import Icon from '../../ui/Icon';

const features = [
    {
        title: 'Gmail for Business',
        description: 'Get custom email (@yourcompany.com), 30GB+ of storage, and industry-leading anti-spam protection that keeps your inbox clean.',
        icon: 'mail',
        color: 'text-red-400',
        bg: 'bg-red-500/10',
        shadow: 'shadow-[0_0_15px_rgba(248,113,113,0.15)]'
    },
    {
        title: 'Google Meet',
        description: 'Secure, enterprise-grade video conferencing. Host frictionless meetings with up to 500 participants with screen sharing and recording.',
        icon: 'video',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        shadow: 'shadow-[0_0_15px_rgba(96,165,250,0.15)]'
    },
    {
        title: 'Google Drive',
        description: 'Store, access, and share your files in one secure place. Sync files across all devices and collaborate on them in real-time.',
        icon: 'hard-drive',
        color: 'text-green-400',
        bg: 'bg-green-500/10',
        shadow: 'shadow-[0_0_15px_rgba(74,222,128,0.15)]'
    },
    {
        title: 'Docs, Sheets & Slides',
        description: 'Create text documents, robust spreadsheets, and beautiful presentations. Multiple people can work in the same document at the same time.',
        icon: 'file-text',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        shadow: 'shadow-[0_0_15px_rgba(96,165,250,0.15)]'
    },
    {
        title: 'Google Calendar',
        description: 'Schedule events quickly by checking coworkers\' availability or layering their calendars in a single view. Share calendars externally.',
        icon: 'calendar',
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/10',
        shadow: 'shadow-[0_0_15px_rgba(250,204,21,0.15)]'
    },
    {
        title: 'Admin Console & Vault',
        description: 'Add users, manage devices, and configure security metrics easily. Retain, archive, and search your organization\'s data for compliance.',
        icon: 'shield-check',
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        shadow: 'shadow-[0_0_15px_rgba(52,211,153,0.15)]'
    }
];

export default function FeaturesList() {
    return (
        <section className="py-24 bg-dark-900 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Everything your team needs to succeed
                    </h2>
                    <p className="text-text-secondary">
                        Whether you're a team of two or two thousand, Google Workspace provides the industry standard in cloud collaboration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-dark-500 transition-colors group"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.bg} ${feature.color} ${feature.shadow}`}>
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
