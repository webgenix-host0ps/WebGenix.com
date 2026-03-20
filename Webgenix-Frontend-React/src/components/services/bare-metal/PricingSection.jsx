import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

const tiers = [
    {
        name: 'Entry Compute',
        target: 'Web Hosting & File Storage',
        price: '12,000',
        period: '/ month',
        description: 'Perfect for small businesses needing dedicated resources without enterprise costs.',
        cpu: 'Intel Xeon E-2388G',
        cores: '8 Cores / 16 Threads',
        ram: '32GB DDR4 ECC',
        storage: '2x 1TB NVMe (Soft RAID)',
        network: '1 Gbps Unmetered',
        badge: null
    },
    {
        name: 'Advanced DB',
        target: 'Heavy Databases & Virtualization',
        price: '33,000',
        period: '/ month',
        description: 'High frequency cores and massive RAM allocations for complex virtualization clusters.',
        cpu: 'AMD EPYC 7502P',
        cores: '32 Cores / 64 Threads',
        ram: '128GB DDR4 ECC',
        storage: '2x 3.84TB NVMe (Hard RAID)',
        network: '1 Gbps Unmetered',
        badge: 'Most Popular'
    },
    {
        name: 'Enterprise AI',
        target: 'Machine Learning & Big Data',
        price: '82,000',
        period: '/ month',
        description: 'Absolute raw throughput. Dual socket architectures and PCIe Gen5 storage arrays.',
        cpu: 'Dual AMD EPYC 9354',
        cores: '64 Cores / 128 Threads',
        ram: '512GB DDR5 ECC',
        storage: '4x 7.68TB NVMe (Hard RAID)',
        network: '10 Gbps Unmetered',
        badge: 'Max Power'
    }
];

export default function PricingSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Provisioned in 60 seconds
                    </h2>
                    <p className="text-text-secondary">
                        Select a pre-configured server below for instant deployment, or contact sales for fully customizable chassis layouts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-8 relative flex flex-col h-full bg-dark-900 border ${tier.badge ? 'border-red-500 shadow-[0_0_40px_rgba(239,68,68,0.1)] transform lg:-translate-y-2' : 'border-dark-700 hover:border-dark-600'
                                }`}
                        >
                            {tier.badge && (
                                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg ${tier.badge === 'Max Power' ? 'bg-dark-900 border border-red-500 text-red-500' : 'bg-red-600'
                                    }`}>
                                    {tier.badge}
                                </div>
                            )}

                            <div className="mb-6 mt-2 text-center">
                                <h3 className="text-xl font-bold text-white tracking-tight">{tier.name}</h3>
                                <p className="text-xs text-text-muted font-medium tracking-wide mt-1 uppercase">{tier.target}</p>
                            </div>

                            <div className="mb-8 pb-8 border-b border-dark-700 text-center">
                                <div className="flex items-end justify-center gap-1 mb-1">
                                    <span className="text-2xl font-bold text-text-muted mb-1">₹</span>
                                    <span className="text-5xl font-extrabold text-white">{tier.price}</span>
                                </div>
                                <div className="text-sm text-text-muted font-medium">{tier.period}</div>
                            </div>

                            <p className="text-sm text-text-secondary mb-8 leading-relaxed text-center h-10">
                                {tier.description}
                            </p>

                            <div className="flex-grow">
                                <ul className="space-y-4 mb-10">
                                    <li className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-xs text-text-muted font-bold uppercase tracking-wider mb-1">
                                            <Icon name="cpu" size={12} /> Processor
                                        </div>
                                        <div className="text-sm font-bold text-white">{tier.cpu}</div>
                                        <div className="text-xs text-text-secondary">{tier.cores}</div>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-xs text-text-muted font-bold uppercase tracking-wider mb-1 mt-2">
                                            <Icon name="database" size={12} /> Memory
                                        </div>
                                        <div className="text-sm font-bold text-white">{tier.ram}</div>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-xs text-text-muted font-bold uppercase tracking-wider mb-1 mt-2">
                                            <Icon name="hard-drive" size={12} /> Storage
                                        </div>
                                        <div className="text-sm font-bold text-white">{tier.storage}</div>
                                    </li>
                                    <li className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-xs text-text-muted font-bold uppercase tracking-wider mb-1 mt-2">
                                            <Icon name="activity" size={12} /> Network
                                        </div>
                                        <div className="text-sm font-bold text-white">{tier.network}</div>
                                    </li>
                                </ul>
                            </div>

                            <CTAButton
                                variant={tier.badge ? 'primary' : 'secondary'}
                                className={`w-full justify-center h-12 text-sm ${tier.badge ? '!bg-red-600 hover:!bg-red-500 !border-none' : ''}`}
                            >
                                Deploy Server
                            </CTAButton>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
