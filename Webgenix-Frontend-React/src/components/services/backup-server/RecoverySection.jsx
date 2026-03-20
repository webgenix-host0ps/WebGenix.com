import React from 'react';
import Icon from '../../ui/Icon';

const workflows = [
    {
        title: 'Instant Database Rollbacks',
        description: 'Corrupted database table? Use point-in-time recovery to dial your database back exactly to the minute before the error occurred.',
        icon: 'rotate-ccw'
    },
    {
        title: 'Bare-Metal Restores',
        description: 'Complete server failure? We can mount your backup volume directly to a new bare metal chassis, restoring your entire OS and file system in minutes.',
        icon: 'server'
    },
    {
        title: 'Compliance Archiving',
        description: 'Move older backups to WORM (Write Once, Read Many) locked cold storage shelves to meet strict financial or medical data retention laws.',
        icon: 'shield-check'
    }
];

export default function RecoverySection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="flex-1 lg:order-2">
                        <div className="grid grid-cols-1 gap-6">
                            {workflows.map((workflow, index) => (
                                <div key={index} className="flex gap-4 p-6 bg-dark-900 border border-dark-700 rounded-2xl hover:border-cyan-500/30 transition-colors">
                                    <div className="w-12 h-12 shrink-0 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 border border-cyan-500/20">
                                        <Icon name={workflow.icon} size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">{workflow.title}</h3>
                                        <p className="text-sm text-text-secondary leading-relaxed">{workflow.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900 border border-dark-700 mb-6">
                            <Icon name="activity" size={12} className="text-text-muted" />
                            <span className="text-xs font-medium text-text-secondary">Disaster Recovery</span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Backups don't matter. <br />
                            <span className="text-cyan-500">Restores do.</span>
                        </h2>

                        <p className="text-text-secondary leading-relaxed mb-8 text-lg">
                            We design our backup infrastructure around your Recovery Time Objective (RTO). Whether you need to recover a single accidentally deleted file or spin up an entirely new datacenter region, our tools keep downtime to an absolute minimum.
                        </p>

                        <div className="bg-dark-900 border border-dark-700 rounded-xl p-6 flex flex-col sm:flex-row md:flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden group">
                            {/* Pulse background element */}
                            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="hidden sm:flex w-12 h-12 rounded-full bg-cyan-500/20 items-center justify-center text-cyan-400">
                                    <Icon name="clock" size={24} />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-bold text-white">Aggressive RPOs</div>
                                    <div className="text-xs text-text-muted mt-1">Snapshot frequencies as low as 1 minute.</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
