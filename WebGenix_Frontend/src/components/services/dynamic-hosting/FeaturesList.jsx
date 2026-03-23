import React from 'react';
import Icon from '../../ui/Icon';

const features = [
    {
        title: 'Persistent Storage',
        description: 'Attach scalable SSD volumes to your instances. Your data persists safely across deployments and restarts.',
        icon: 'hard-drive'
    },
    {
        title: 'Managed Databases',
        description: 'Connect instantly to fully managed PostgreSQL, MySQL, or MongoDB clusters with daily automated backups.',
        icon: 'database'
    },
    {
        title: 'Intelligent Auto-scaling',
        description: 'Set CPU or memory thresholds. We automatically spin up replica nodes during traffic spikes and scale down when quiet.',
        icon: 'trending-up'
    },
    {
        title: 'Docker Support',
        description: 'Bring your own Dockerfile. If it runs in a container, it runs on our platform with zero modifications required.',
        icon: 'box'
    },
    {
        title: 'Private Networking',
        description: 'Isolate your databases and backend services in a secure Virtual Private Cloud (VPC) inaccessible from the public internet.',
        icon: 'shield'
    },
    {
        title: 'Server Logs & Metrics',
        description: 'Monitor application health in real-time. Access live terminal logs, memory usage graphs, and historical performance.',
        icon: 'activity'
    }
];

export default function FeaturesList() {
    return (
        <section className="py-24 bg-dark-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Built for backend scale
                    </h2>
                    <p className="text-text-secondary">
                        Deploy APIs, microservices, and full-stack web applications with enterprise-grade infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-purple-500/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.1)]">
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
