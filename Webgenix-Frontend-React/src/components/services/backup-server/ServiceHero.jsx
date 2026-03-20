import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900">
                {/* Cyan/Blue gradient for data/security branching */}
                <div className="absolute top-0 right-1/4 w-[800px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full poiter-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full poiter-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
                            <Icon name="refresh-cw" size={14} className="text-cyan-400" />
                            <span className="text-sm font-medium text-cyan-400">Automated Daily Snapshots</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Bulletproof <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Data Vaulting.</span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                            Enterprise-grade object storage built to protect your critical infrastructure from ransomware, hardware failures, and human error. Automatically replicate and encrypt your backups across global regions.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <CTAButton variant="primary" className="w-full sm:w-auto !bg-cyan-600 hover:!bg-cyan-500 !text-dark-900 font-bold !border-none">
                                View Backup Plans
                            </CTAButton>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-text-muted border-t border-dark-700 pt-8">
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">11x9s</span>
                                <span className="text-[10px] uppercase tracking-wider">Data Durability</span>
                            </div>
                            <div className="hidden sm:block w-px h-8 bg-dark-700" />
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">AES-256</span>
                                <span className="text-[10px] uppercase tracking-wider">At-Rest Encryption</span>
                            </div>
                            <div className="hidden sm:block w-px h-8 bg-dark-700" />
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">1m</span>
                                <span className="text-[10px] uppercase tracking-wider">RPO Achievable</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual: Data replication/backup mockup */}
                    <div className="flex-1 relative w-full xl:max-w-xl z-10 hidden lg:block">
                        <div className="relative h-[450px] flex items-center justify-center">

                            {/* Primary Server Interface */}
                            <div className="absolute top-1/4 left-0 w-64 bg-dark-900 border border-dark-700 rounded-xl shadow-2xl p-4 z-20">
                                <div className="flex items-center gap-3 border-b border-dark-800 pb-3 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-dark-800 flex items-center justify-center">
                                        <Icon name="server" size={16} className="text-text-muted" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white">Production Node</div>
                                        <div className="text-xs text-text-muted">Primary Database</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center bg-dark-950 p-2 rounded border border-dark-800">
                                        <div className="flex items-center gap-2">
                                            <Icon name="database" size={12} className="text-cyan-400" />
                                            <span className="text-xs text-white uppercase tracking-wider font-bold">Volume</span>
                                        </div>
                                        <span className="text-xs text-text-muted font-mono tracking-tighter">482 GB</span>
                                    </div>
                                </div>
                            </div>

                            {/* Flow Animation SVG */}
                            <svg className="absolute w-[200px] h-[150px] top-[30%] left-[25%]" style={{ overflow: 'visible' }}>
                                <path
                                    d="M 20 20 Q 150 20 180 80"
                                    fill="none"
                                    stroke="url(#cyanFlow)"
                                    strokeWidth="3"
                                    strokeDasharray="10 10"
                                    className="animate-[flow_1s_linear_infinite]"
                                />
                                <defs>
                                    <linearGradient id="cyanFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="rgba(34,211,238,0.2)" />
                                        <stop offset="100%" stopColor="rgba(34,211,238,1)" />
                                    </linearGradient>
                                </defs>
                                {/* Data packets moving */}
                                <circle cx="20" cy="20" r="4" fill="#22d3ee" className="animate-[packet_1.5s_linear_infinite]" />
                                <circle cx="20" cy="20" r="4" fill="#22d3ee" className="animate-[packet_1.5s_linear_infinite_0.5s]" />
                                <circle cx="20" cy="20" r="4" fill="#22d3ee" className="animate-[packet_1.5s_linear_infinite_1s]" />
                            </svg>

                            {/* Secure Vault / Backup Destination */}
                            <div className="absolute top-[35%] right-0 w-72 bg-dark-800 border-2 border-cyan-500/50 rounded-xl shadow-[0_0_50px_rgba(34,211,238,0.15)] p-5 z-20">
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center border-4 border-dark-900 shadow-lg text-dark-900">
                                    <Icon name="lock" size={14} className="stroke-[3]" />
                                </div>

                                <div className="text-center mb-4">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/10 mb-2">
                                        <Icon name="hard-drive" size={20} className="text-cyan-400" />
                                    </div>
                                    <div className="text-sm font-bold text-white">Secure Archive Vault</div>
                                    <div className="text-xs text-cyan-400">AES-256 Encrypted</div>
                                </div>

                                <div className="space-y-2">
                                    {/* Snapshot items */}
                                    <div className="bg-dark-900/50 border border-dark-700 rounded p-2 flex justify-between items-center text-xs group">
                                        <div className="flex items-center gap-2">
                                            <Icon name="file" size={10} className="text-text-muted" />
                                            <span className="text-text-secondary font-mono">2026-03-07T12:00</span>
                                        </div>
                                        <span className="text-emerald-400 group-hover:block uppercase tracking-widest text-[8px] font-bold">Verifying</span>
                                    </div>
                                    <div className="bg-dark-900 border border-dark-700 rounded p-2 flex justify-between items-center text-xs">
                                        <div className="flex items-center gap-2">
                                            <Icon name="file" size={10} className="text-text-muted" />
                                            <span className="text-text-secondary font-mono">2026-03-06T12:00</span>
                                        </div>
                                        <span className="text-text-muted">480 GB</span>
                                    </div>
                                    <div className="bg-dark-900 border border-dark-700 rounded p-2 flex justify-between items-center text-xs">
                                        <div className="flex items-center gap-2">
                                            <Icon name="file" size={10} className="text-text-muted" />
                                            <span className="text-text-secondary font-mono">2026-03-05T12:00</span>
                                        </div>
                                        <span className="text-text-muted">478 GB</span>
                                    </div>
                                </div>

                                {/* Background glow inside vault */}
                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-xl pointer-events-none" />
                            </div>

                            <style jsx>{`
                                @keyframes flow {
                                    from { stroke-dashoffset: 20; }
                                    to { stroke-dashoffset: 0; }
                                }
                                @keyframes packet {
                                    0% { offset-distance: 0%; opacity: 0; }
                                    10% { opacity: 1; }
                                    90% { opacity: 1; }
                                    100% { offset-distance: 100%; opacity: 0; }
                                }
                                circle {
                                    offset-path: path("M 20 20 Q 150 20 180 80");
                                }
                            `}</style>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
