import React from 'react';
import Icon from '../../ui/Icon';

const specs = [
    { label: 'Processors', value: 'AMD EPYC™ 7003 Series', icon: 'cpu' },
    { label: 'Storage', value: 'Enterprise NVMe SSD Arrays', icon: 'hard-drive' },
    { label: 'Network', value: '10 Gbps Redundant Uplinks', icon: 'activity' },
    { label: 'Virtualization', value: 'KVM Hypervisor', icon: 'layers' },
    { label: 'DDoS Protection', value: 'Automated 1Tbps Mitigation', icon: 'shield' },
    { label: 'Backups', value: 'Daily Automated Snapshots', icon: 'refresh-cw' }
];

export default function SpecsSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    
                    {/* Visual: Server Rack Mockup */}
                    <div className="flex-1 relative w-full xl:max-w-lg hidden md:block">
                        <div className="relative p-6 rounded-2xl bg-dark-900 border border-dark-700 shadow-2xl h-[400px] flex flex-col gap-3">
                            {/* Server Nodes */}
                            {[1, 2, 3, 4, 5].map((node) => (
                                <div key={node} className="w-full h-14 rounded bg-dark-800 border border-dark-600 flex items-center px-4 justify-between group overflow-hidden relative">
                                    {/* Scanline overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                    
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className="grid grid-cols-3 gap-1">
                                            {[1,2,3,4,5,6].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-dark-600" />)}
                                        </div>
                                        <div className="uppercase text-[10px] font-bold text-text-muted">NODE-{node}0{node}</div>
                                    </div>
                                    <div className="flex items-center gap-3 relative z-10">
                                        <div className={`w-2 h-2 rounded-full ${node === 2 ? 'bg-indigo-500 animate-pulse' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]'}`} />
                                        <div className={`w-2 h-2 rounded-full ${node === 2 ? 'bg-indigo-500 animate-pulse delay-75' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]'}`} />
                                        <div className={`w-2 h-2 rounded-full ${node === 2 ? 'bg-indigo-500 animate-pulse delay-150' : 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]'}`} />
                                    </div>
                                </div>
                            ))}
                            {/* Cooling Fans */}
                            <div className="flex items-center gap-2 mt-auto text-dark-500">
                                <Icon name="loader" size={24} className="animate-spin" />
                                <Icon name="loader" size={24} className="animate-[spin_1s_linear_infinite_reverse]" />
                                <Icon name="loader" size={24} className="animate-spin" />
                            </div>

                            <style jsx>{`
                                @keyframes shimmer {
                                    100% { transform: translateX(100%); }
                                }
                            `}</style>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Enterprise Hardware,<br />
                            Developer Experience.
                        </h2>
                        <p className="text-text-secondary leading-relaxed mb-8">
                            We don't cut corners on hardware. Every Virtual Private Server is hosted on enterprise-grade nodes, ensuring isolated performance that never degrades. With our custom-built dashboard, you get the simplicity of a developer cloud with the raw horsepower of bare metal.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {specs.map((spec, i) => (
                                <div key={i} className="flex items-start gap-4 text-left">
                                    <div className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center shrink-0 border border-dark-700 text-indigo-400 hover:scale-110 transition-transform">
                                        <Icon name={spec.icon} size={18} />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm mb-1">{spec.label}</div>
                                        <div className="text-text-muted text-xs">{spec.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
