import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900">
                {/* Deeper, more "server-like" purple/blue gradient */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full poiter-events-none translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full poiter-events-none -translate-x-1/2 translate-y-1/2" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                            <span className="text-sm font-medium text-purple-400">Full-Stack Power</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Dynamic Site <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                                Hosting
                            </span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                            Run robust Node.js, Python, or Dockerized applications with persistent storage, database connections, and intelligent auto-scaling that handles traffic spikes effortlessly.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <CTAButton variant="primary" size="large">
                                Create Server
                            </CTAButton>
                            <CTAButton variant="secondary" size="large">
                                Compare Plans
                            </CTAButton>
                        </div>
                    </div>

                    {/* Visual/Illustration: Server Load Balancer Animation */}
                    <div className="flex-1 relative w-full xl:max-w-lg z-10">
                        <div className="relative rounded-2xl bg-[#0D0D12] border border-dark-700 p-6 shadow-2xl">
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-dark-700/50">
                                <div className="flex items-center gap-2">
                                    <Icon name="server" size={18} className="text-purple-400" />
                                    <span className="text-sm font-medium text-white">App Cluster (production)</span>
                                </div>
                                <div className="flex items-center gap-2 px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-mono">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                    HEALTHY
                                </div>
                            </div>

                            {/* Server Nodes */}
                            <div className="space-y-4">
                                {/* Node 1 */}
                                <div className="p-3 rounded-lg border border-dark-700 bg-dark-800/50 flex items-center justify-between relative overflow-hidden group">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500" />
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-dark-900 border border-dark-700 flex items-center justify-center">
                                            <Icon name="cpu" size={14} className="text-text-secondary" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-white">node-app-primary</div>
                                            <div className="text-xs text-text-muted font-mono">10.0.0.1 • 512MB RAM</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-text-secondary mb-1">CPU Load</div>
                                        <div className="w-20 h-1.5 bg-dark-900 rounded-full overflow-hidden">
                                            <div className="h-full bg-purple-500 w-[45%] animate-[pulse_2s_ease-in-out_infinite]" />
                                        </div>
                                    </div>
                                </div>

                                {/* Node 2 */}
                                <div className="p-3 rounded-lg border border-dark-700 bg-dark-800/50 flex items-center justify-between relative overflow-hidden group">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-dark-900 border border-dark-700 flex items-center justify-center">
                                            <Icon name="cpu" size={14} className="text-text-secondary" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-white">node-app-replica-1</div>
                                            <div className="text-xs text-text-muted font-mono">10.0.0.2 • 512MB RAM</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-text-secondary mb-1">CPU Load</div>
                                        <div className="w-20 h-1.5 bg-dark-900 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500 w-[30%] animate-[pulse_3s_ease-in-out_infinite]" />
                                        </div>
                                    </div>
                                </div>

                                {/* Auto-scaling Trigger visualization */}
                                <div className="p-3 rounded-lg border border-dark-700 border-dashed flex items-center justify-center gap-2 text-text-muted bg-dark-800/10">
                                    <Icon name="plus" size={14} className="text-text-secondary" />
                                    <span className="text-xs font-mono">Auto-scaling standing by</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
