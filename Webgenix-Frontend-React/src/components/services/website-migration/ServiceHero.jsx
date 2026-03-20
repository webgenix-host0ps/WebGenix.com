import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900">
                {/* Indigo/Cyan gradient to represent data transfer & speed */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 blur-[150px] rounded-full poiter-events-none translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[120px] rounded-full poiter-events-none -translate-x-1/3 translate-y-1/3" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
                            <Icon name="shield" size={14} className="text-cyan-400" />
                            <span className="text-sm font-medium text-cyan-400">Zero Downtime Guarantee</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Migrate Without <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                                The Headache
                            </span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                            Move your websites, databases, and emails to our premium infrastructure seamlessly. Our migration experts handle everything ensuring zero downtime and zero data loss.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <CTAButton variant="primary" size="large">
                                Request Free Migration
                            </CTAButton>
                            <CTAButton variant="secondary" size="large" className="gap-2">
                                <Icon name="phone" size={18} /> Speak to an Expert
                            </CTAButton>
                        </div>

                        <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-text-muted">
                            <div className="flex items-center gap-2">
                                <Icon name="check-circle" size={16} className="text-cyan-400" /> Free for new accounts
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon name="check-circle" size={16} className="text-cyan-400" /> SEO rankings preserved
                            </div>
                        </div>
                    </div>

                    {/* Visual/Illustration: Server Migration Animation */}
                    <div className="flex-1 relative w-full xl:max-w-lg z-10">
                        <div className="relative rounded-2xl bg-[#0D0D12] border border-dark-700 p-8 shadow-2xl h-[400px] flex items-center justify-between overflow-hidden">

                            {/* Old Server (Source) */}
                            <div className="relative z-10 flex flex-col items-center gap-4 group">
                                <div className="text-xs font-mono text-text-muted mb-2 opacity-50">Legacy Host</div>
                                <div className="w-24 h-32 rounded-xl bg-dark-800 border border-dark-600 flex flex-col items-center justify-center relative overflow-hidden">
                                    <Icon name="hard-drive" size={32} className="text-text-secondary mb-2" />
                                    {/* Data Blocks escaping */}
                                    <div className="w-8 h-2 bg-dark-600 rounded mb-1 opacity-50" />
                                    <div className="w-8 h-2 bg-dark-600 rounded opacity-50" />

                                    {/* Scanning laser effect */}
                                    <div className="absolute inset-0 bg-cyan-500/10 border-b-2 border-cyan-400 animate-[scan_2s_ease-in-out_infinite]" />
                                </div>
                            </div>

                            {/* Migration Pipeline / Connection */}
                            <div className="flex-1 flex items-center justify-center relative h-full">
                                {/* Base connection line */}
                                <div className="absolute w-full h-1 bg-dark-700 rounded-full" />

                                {/* Animated data packets moving left to right */}
                                <div className="absolute left-0 w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)] animate-[transfer_3s_linear_infinite]">
                                    <Icon name="file" size={12} className="text-indigo-400" />
                                </div>
                                <div className="absolute left-0 w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)] animate-[transfer_3s_linear_infinite_1s]">
                                    <Icon name="database" size={12} className="text-cyan-400" />
                                </div>
                                <div className="absolute left-0 w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)] animate-[transfer_3s_linear_infinite_2s]">
                                    <Icon name="image" size={12} className="text-purple-400" />
                                </div>

                                {/* Security lock symbol in the middle */}
                                <div className="absolute left-1/2 -translate-x-1/2 -top-6 bg-dark-900 border border-dark-700 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                                    <Icon name="lock" size={10} className="text-emerald-400" />
                                    <span className="text-[10px] text-emerald-400 font-mono">256-bit AES</span>
                                </div>
                            </div>

                            {/* New Server (Destination) */}
                            <div className="relative z-10 flex flex-col items-center gap-4">
                                <div className="text-xs font-mono text-cyan-400 mb-2 font-bold tracking-wider">HOSTPLATFORM</div>
                                <div className="w-28 h-40 rounded-xl bg-gradient-to-br from-indigo-900/40 to-cyan-900/40 border border-indigo-500/30 flex flex-col items-center justify-center relative shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                                    <Icon name="server" size={40} className="text-cyan-400 mb-3 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                                    <div className="flex gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                    </div>

                                    {/* Success ripples arriving */}
                                    <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/0 animate-[arrive_3s_linear_infinite]" />
                                </div>
                            </div>

                            <style jsx>{`
                                @keyframes scan {
                                    0% { transform: translateY(-100%); opacity: 0; }
                                    10% { opacity: 1; }
                                    90% { opacity: 1; }
                                    100% { transform: translateY(100%); opacity: 0; }
                                }
                                @keyframes transfer {
                                    0% { left: 0%; transform: scale(0.5) translate(-50%, -50%); opacity: 0; }
                                    10% { opacity: 1; transform: scale(1) translate(-50%, -50%); }
                                    90% { opacity: 1; transform: scale(1) translate(-50%, -50%); }
                                    100% { left: 100%; transform: scale(0.5) translate(-50%, -50%); opacity: 0; }
                                }
                                @keyframes arrive {
                                    0% { border-color: rgba(34, 211, 238, 0); transform: scale(0.95); }
                                    90% { border-color: rgba(34, 211, 238, 0); transform: scale(0.95); }
                                    95% { border-color: rgba(34, 211, 238, 1); transform: scale(1.05); }
                                    100% { border-color: rgba(34, 211, 238, 0); transform: scale(1.1); }
                                }
                            `}</style>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
