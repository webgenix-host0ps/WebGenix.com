import React from 'react';
import Icon from '../../ui/Icon';

const features = [
    {
        title: 'Block-Level Incremental',
        description: 'Only upload what changed since your last snapshot. This drastically reduces backup window times, bandwidth usage, and storage costs.',
        icon: 'layers'
    },
    {
        title: 'Zero-Trust Encryption',
        description: 'Your data is encrypted client-side using a key only you possess before it even leaves your server. We cannot read your backups.',
        icon: 'lock'
    },
    {
        title: 'Multi-Region Replication',
        description: 'Automatically replicate backups across two geographically distinct datacenters to ensure disaster recovery even if a primary facility fails.',
        icon: 'map'
    },
    {
        title: 'Application Aware',
        description: 'Native integrations ensure database transactions in MySQL, PostgreSQL, and MS SQL are cleanly flushed before taking the volume snapshot.',
        icon: 'database'
    },
    {
        title: 'Ransomware Protection',
        description: 'Immutable storage options prevent even authorized administrators from deleting or modifying historical backup archives.',
        icon: 'shield-off'
    },
    {
        title: 'Automated Testing',
        description: 'We periodically boot a virtual clone of your environment from the backup repo to automatically verify data integrity and bootability.',
        icon: 'play-circle'
    }
];

export default function FeaturesList() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Intelligent Data Protection
                    </h2>
                    <p className="text-text-secondary">
                        Our backup platform doesn't just copy files. It understands complex applications, scales on demand, and defends against modern ransomware.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-dark-900 border border-dark-700 hover:border-cyan-500/50 transition-colors group relative overflow-hidden"
                        >
                            {/* Subtle background glow on hover */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[40px] rounded-full group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

                            <div className="w-12 h-12 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.1)] relative z-10">
                                <Icon name={feature.icon} size={24} />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2 relative z-10">
                                {feature.title}
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed relative z-10">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
