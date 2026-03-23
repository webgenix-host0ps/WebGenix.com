import React from 'react';
import Icon from '../../ui/Icon';

export default function ArchitectureMap() {
    return (
        <section className="py-24 bg-dark-800 border-y border-dark-700 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Production-grade architecture out of the box
                    </h2>
                    <p className="text-text-secondary">
                        We automatically provision load balancers, configure private networks, and manage database connections without requiring you to write infrastructure code.
                    </p>
                </div>

                {/* Architecture Visualizer */}
                <div className="relative max-w-4xl mx-auto p-4 md:p-12 rounded-3xl bg-dark-900 border border-dark-700 shadow-2xl isolate">

                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_16px] rounded-3xl" />

                    <div className="relative z-10 flex flex-col items-center gap-12">

                        {/* Traffic Source */}
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-dark-800 border-2 border-dark-700 flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                                <Icon name="users" size={24} className="text-white" />
                            </div>
                            <span className="text-sm font-medium text-text-secondary">Global Traffic</span>
                        </div>

                        {/* Animated Connection Line Down */}
                        <div className="h-12 w-0.5 bg-dark-700 relative -my-8">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-400 opacity-50 blur-[2px] animate-[pulse_1s_ease-in-out_infinite] translate-y-full" />
                        </div>

                        {/* Load Balancer */}
                        <div className="w-full max-w-xs p-4 rounded-xl bg-blue-900/20 border border-blue-500/30 text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent translate-x-[-100%] group-hover:animate-[flowRight_2s_ease-in-out_infinite]" />
                            <Icon name="share-2" size={20} className="text-blue-400 mx-auto mb-2" />
                            <h4 className="font-semibold text-white">Anycast Load Balancer</h4>
                            <p className="text-xs text-blue-400/70 mt-1">Routes traffic to nearest healthy node</p>
                        </div>

                        {/* Connection Lines Splitting */}
                        <div className="flex justify-center w-full max-w-lg relative -my-8 h-16">
                            <svg className="absolute inset-0 w-full h-full text-dark-700" preserveAspectRatio="none">
                                <path d="M50% 0 L50% 20% L15% 20% L15% 100%" fill="none" stroke="currentColor" strokeWidth="2" />
                                <path d="M50% 0 L50% 100%" fill="none" stroke="currentColor" strokeWidth="2" />
                                <path d="M50% 0 L50% 20% L85% 20% L85% 100%" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            {/* Animated traffic packets */}
                            <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,1)] animate-[ping_2s_ease-out_infinite]" />
                            <div className="absolute top-[20%] left-[50%] w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,1)] animate-[ping_2s_ease-out_infinite_0.5s]" />
                            <div className="absolute top-[20%] left-[85%] w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,1)] animate-[ping_2s_ease-out_infinite_1s]" />
                        </div>

                        {/* App Cluster Nodes */}
                        <div className="w-full max-w-2xl bg-dark-800/50 border border-dark-700 border-dashed rounded-2xl p-6 relative">
                            <div className="absolute -top-3 left-6 px-2 bg-dark-900 text-xs font-mono text-text-muted">Private Subnet (VPC)</div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                <div className="p-4 rounded-xl bg-purple-900/10 border border-purple-500/20 text-center">
                                    <Icon name="server" size={24} className="text-purple-400 mx-auto mb-3" />
                                    <h4 className="text-sm font-semibold text-white">App Node 1</h4>
                                </div>

                                <div className="p-4 rounded-xl bg-purple-900/10 border border-purple-500/20 text-center border-b-4 border-b-purple-500">
                                    <Icon name="server" size={24} className="text-purple-400 mx-auto mb-3" />
                                    <h4 className="text-sm font-semibold text-white">App Node 2</h4>
                                    <div className="text-[10px] text-purple-400/80 mt-1 font-mono">PRIMARY</div>
                                </div>

                                <div className="p-4 rounded-xl bg-purple-900/5 border border-purple-500/10 text-center opacity-50 border-dashed">
                                    <Icon name="plus-circle" size={24} className="text-purple-400 mx-auto mb-3" />
                                    <h4 className="text-sm font-semibold text-white">Auto-scaling Node</h4>
                                    <div className="text-[10px] text-text-muted mt-1">Spins up in 3s</div>
                                </div>

                            </div>
                        </div>

                        {/* Connection Line Down to DB */}
                        <div className="h-12 w-0.5 bg-dark-700 relative -my-8">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-green-400 opacity-50 blur-[2px] animate-[pulse_1.5s_ease-in-out_infinite] translate-y-full" />
                        </div>

                        {/* Database Container */}
                        <div className="flex gap-6 items-center">
                            <div className="w-full max-w-xs p-5 rounded-xl bg-green-900/10 border border-green-500/30 text-center flex items-center justify-center gap-4">
                                <div className="p-3 bg-dark-800 rounded-lg">
                                    <Icon name="database" size={24} className="text-green-400" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-white">Managed PostgreSQL</h4>
                                    <p className="text-xs text-green-400/70 mt-0.5">Automated backups • HA Enabled</p>
                                </div>
                            </div>

                            <div className="hidden md:flex items-center gap-2 text-text-muted">
                                <Icon name="refresh-cw" size={14} className="animate-spin" />
                                <span className="text-xs font-mono">Replicating to standby</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
