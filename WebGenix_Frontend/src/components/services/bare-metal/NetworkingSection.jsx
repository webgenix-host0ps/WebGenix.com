import React from 'react';
import Icon from '../../ui/Icon';

const networks = [
    {
        title: 'Unmetered 10Gbps Uplinks',
        description: 'Stop paying for bandwidth overages. Every bare metal server includes an unmetered 1Gbps public uplink standard, with affordable upgrades to 10Gbps.',
        icon: 'activity',
        metric: '10G',
        label: 'Max Speed'
    },
    {
        title: 'Anti-DDoS Protection',
        description: 'Our enterprise-grade hardware firewalls mitigate biometric, protocol, and volumetric attacks up to 1.2Tbps locally without blackholing your IP.',
        icon: 'shield',
        metric: '1.2T',
        label: 'Mitigation'
    },
    {
        title: 'Global Anycast Footprint',
        description: 'Deploy nodes in North America, Europe, or Asia-Pacific. All physical locations sit on premium Tier-1 carrier networks for maximum routing efficiency.',
        icon: 'globe',
        metric: '12',
        label: 'Datacenters'
    },
    {
        title: 'Private vRack Networking',
        description: 'Connect multiple bare metal servers, cloud instances, and databases across different physical locations using isolated layer 2 private networks.',
        icon: 'git-merge',
        metric: 'L2',
        label: 'VLANs'
    }
];

export default function NetworkingSection() {
    return (
        <section className="py-24 bg-dark-900 border-t border-dark-700 relative overflow-hidden">

            {/* Background Map Graphic Simulation */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="flex-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-dark-700 mb-6">
                            <Icon name="activity" size={12} className="text-red-400" />
                            <span className="text-xs font-medium text-text-secondary">Premium Network</span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Connectivity that never <span className="text-red-500">bottlenecks.</span>
                        </h2>

                        <p className="text-text-secondary leading-relaxed mb-8 text-lg">
                            The worlds most powerful server is useless if it cant talk to the internet. Weve built a massive, redundant global backbone to ensure your data always finds the fastest path to your users.
                        </p>

                        <div className="flex gap-8 mb-10 pb-10 border-b border-dark-800">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">5.8<span className="text-red-500 text-xl"> Tbps</span></div>
                                <div className="text-xs text-text-muted uppercase tracking-wider font-bold">Total Network Capacity</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">99.99<span className="text-red-500 text-xl">%</span></div>
                                <div className="text-xs text-text-muted uppercase tracking-wider font-bold">Uptime SLA</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 lg:order-1 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {networks.map((net, idx) => (
                                <div key={idx} className="bg-dark-950 border border-dark-800 rounded-xl p-6 hover:border-red-500/30 transition-colors group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-dark-900 border border-dark-700 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                                            <Icon name={net.icon} size={20} />
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xl font-bold text-white">{net.metric}</div>
                                            <div className="text-[10px] text-text-muted uppercase tracking-wider font-bold">{net.label}</div>
                                        </div>
                                    </div>

                                    <h3 className="text-sm font-bold text-white mb-2">{net.title}</h3>
                                    <p className="text-xs text-text-secondary leading-relaxed">
                                        {net.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
