import React from 'react';
import Icon from '../../ui/Icon';

const features = [
    {
        title: 'Full Root Access',
        description: 'Complete control over your server environment. Install any software, alter system files, and configure entirely to your specifications.',
        icon: 'terminal'
    },
    {
        title: 'Instant Provisioning',
        description: 'Your server is spun up and ready for SSH access in under 60 seconds from the moment payment clears.',
        icon: 'zap'
    },
    {
        title: 'Dedicated IP Address',
        description: 'Every instance includes its own dedicated IPv4 address, and an IPv6 subnet natively allocated at no extra charge.',
        icon: 'globe'
    },
    {
        title: 'Automated Backups',
        description: 'Schedule daily, weekly, or monthly snapshots natively in the dashboard. Restore your entire instance with single click.',
        icon: 'refresh-ccw'
    },
    {
        title: 'Custom ISOs',
        description: 'Upload and mount your own custom operating systems or choose from our extensive library of Linux and Windows variants.',
        icon: 'package'
    },
    {
        title: 'Advanced Firewall',
        description: 'Drop invalid traffic before it even touches your server. Configure rules visually in our secure cloud firewall control panel.',
        icon: 'shield'
    }
];

export default function FeaturesList() {
    return (
        <section className="py-24 bg-dark-900 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Everything a Developer Needs
                    </h2>
                    <p className="text-text-secondary">
                        We skipped the gimmicks and built a core set of features designed purely around stability, speed, and flexibility.
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
