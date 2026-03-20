import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900">
                {/* Red/Rose gradient for raw power/hardware branding */}
                <div className="absolute top-0 right-1/4 w-[800px] h-[600px] bg-rose-600/10 blur-[150px] rounded-full poiter-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full poiter-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-8">
                            <Icon name="cpu" size={14} className="text-rose-400" />
                            <span className="text-sm font-medium text-rose-400">0% Virtualization Overhead</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Raw compute. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500">Uncompromised.</span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                            Single-tenant dedicated servers built for high-performance databases, machine learning, and extreme traffic. Get root access to enterprise-grade silicon in 60 seconds.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <CTAButton variant="primary" className="w-full sm:w-auto !bg-rose-600 hover:!bg-rose-500 !border-none">
                                View Configurations
                            </CTAButton>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-text-muted border-t border-dark-700 pt-8">
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">100%</span>
                                <span className="text-[10px] uppercase tracking-wider">Resource Allocation</span>
                            </div>
                            <div className="hidden sm:block w-px h-8 bg-dark-700" />
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">10 <span className="text-sm text-text-muted">Gbps</span></span>
                                <span className="text-[10px] uppercase tracking-wider">Uplink Options</span>
                            </div>
                            <div className="hidden sm:block w-px h-8 bg-dark-700" />
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">NVMe</span>
                                <span className="text-[10px] uppercase tracking-wider">Gen4 Storage Array</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual: Server hardware specs UI */}
                    <div className="flex-1 relative w-full xl:max-w-xl z-10 hidden lg:block">
                        <div className="relative h-[450px] flex items-center justify-center">

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px]">
                                {/* Server chassis UI */}
                                <div className="bg-dark-900 border-2 border-dark-700 rounded-xl shadow-2xl overflow-hidden relative group">

                                    {/* Glass reflection effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                    <div className="bg-dark-950 p-4 border-b border-dark-800 flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <Icon name="server" size={16} className="text-text-muted" />
                                            <span className="text-xs font-mono font-bold text-text-secondary">Node: SJC1-R3-U12</span>
                                        </div>
                                        <div className="flex gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse delay-100" />
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse delay-200" />
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-6">
                                        {/* CPU Usage Ring */}
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-sm font-bold text-white mb-1">AMD EPYC™ 9354P</div>
                                                <div className="text-xs text-text-muted">32 Cores / 64 Threads @ 3.8GHz</div>
                                            </div>
                                            <div className="w-16 h-16 rounded-full border-4 border-dark-800 flex items-center justify-center relative">
                                                <svg className="w-full h-full absolute -rotate-90">
                                                    <circle cx="28" cy="28" r="26" fill="transparent" stroke="currentColor" strokeWidth="4" className="text-rose-500" strokeDasharray="163" strokeDashoffset="16" />
                                                </svg>
                                                <span className="text-xs font-bold text-white">90%</span>
                                            </div>
                                        </div>

                                        <div className="h-px bg-dark-800 w-full" />

                                        {/* RAM Usage Bar */}
                                        <div>
                                            <div className="flex justify-between items-end mb-2">
                                                <div>
                                                    <div className="text-sm font-bold text-white">256GB ECC DDR5</div>
                                                    <div className="text-xs text-text-muted mt-0.5">4800MHz Memory</div>
                                                </div>
                                                <div className="text-xs font-mono text-rose-400">128GB Available</div>
                                            </div>
                                            <div className="h-2 w-full bg-dark-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-rose-500 w-1/2 relative">
                                                    <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="h-px bg-dark-800 w-full" />

                                        {/* Disk Usage Bar */}
                                        <div>
                                            <div className="flex justify-between items-end mb-2">
                                                <div>
                                                    <div className="text-sm font-bold text-white">2x 3.84TB NVMe</div>
                                                    <div className="text-xs text-text-muted mt-0.5">RAID 1 Array</div>
                                                </div>
                                                <div className="text-xs font-mono text-emerald-400">Read: 7.2GB/s</div>
                                            </div>
                                            <div className="h-2 w-full bg-dark-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald-500 w-3/4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Background blur accents */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-rose-500/10 blur-[60px] -z-10 rounded-full" />
                            </div>

                            <style jsx>{`
                                @keyframes shimmer {
                                    0% { transform: translateX(-100%); }
                                    100% { transform: translateX(100%); }
                                }
                            `}</style>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
