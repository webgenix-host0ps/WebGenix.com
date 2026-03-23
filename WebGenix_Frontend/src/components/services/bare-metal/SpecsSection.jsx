import React from 'react';
import Icon from '../../ui/Icon';

const specs = [
    {
        title: 'Enterprise Processors',
        description: 'Choose between latest-gen Intel Xeon Scalable or AMD EPYC processors, offering up to 64 cores per socket for intensive parallel workloads.',
        icon: 'cpu',
        highlights: ['Base clocks up to 4.0GHz', 'L3 Cache up to 256MB', 'AVX-512 Instruction Set']
    },
    {
        title: 'Error Correcting Memory (ECC)',
        description: 'Avoid silent data corruption and system crashes. All our bare metal servers come standard with ECC DDR4 or DDR5 memory.',
        icon: 'database',
        highlights: ['Up to 1TB RAM per node', 'DDR5 speeds up to 4800MHz', 'Hexa-channel architecture']
    },
    {
        title: 'Gen4 NVMe Storage',
        description: 'Bypass the SATA bottleneck. PCIe Gen4 NVMe drives deliver over 7,000 MB/s read speeds, perfect for high-IOPS databases.',
        icon: 'hard-drive',
        highlights: ['Hardware RAID options available', 'Enterprise DWPD endurance', 'Hot-swappable drive bays']
    }
];

export default function SpecsSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Data center grade hardware
                    </h2>
                    <p className="text-text-secondary">
                        No noisy neighbors. No virtualization overhead. Just 100% dedicated hardware resources responding directly to your commands.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {specs.map((spec, index) => (
                        <div key={index} className="bg-dark-900 border border-dark-700 rounded-2xl p-8 hover:border-rose-500/30 transition-colors relative overflow-hidden group">

                            {/* Subtle background glow on hover */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 blur-[40px] rounded-full group-hover:bg-rose-500/10 transition-colors pointer-events-none" />

                            <div className="w-14 h-14 rounded-xl bg-dark-800 flex items-center justify-center text-rose-400 mb-6 border border-dark-700 shadow-inner">
                                <Icon name={spec.icon} size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{spec.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed mb-6">
                                {spec.description}
                            </p>

                            <ul className="space-y-3">
                                {spec.highlights.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <Icon name="check" size={14} className="text-emerald-500 shrink-0" />
                                        <span className="text-sm text-text-muted font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
