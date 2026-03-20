import React from 'react';
import Icon from '../../ui/Icon';

export default function PerformanceSection() {
    return (
        <section className="py-24 bg-dark-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-dark-700 mb-6">
                        <Icon name="zap" size={14} className="text-accent" />
                        <span className="text-xs font-medium text-text-primary uppercase tracking-wider">Unmatched Performance</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Served from the edge, <br />closest to your users
                    </h2>
                    <p className="text-text-secondary">
                        Our intelligent global CDN ensures your website loads instantly, no matter where your visitors are located.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Stat 1 */}
                    <div className="relative p-8 rounded-2xl bg-dark-800/30 border border-dark-700 text-center group hover:border-accent/30 transition-colors">
                        <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform tracking-tight">
                            &lt;10<span className="text-accent text-2xl">ms</span>
                        </div>
                        <p className="text-text-secondary font-medium">Global Latency</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="relative p-8 rounded-2xl bg-dark-800/30 border border-dark-700 text-center group hover:border-accent/30 transition-colors">
                        <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform tracking-tight">
                            300<span className="text-accent text-2xl">+</span>
                        </div>
                        <p className="text-text-secondary font-medium">Edge Locations</p>
                    </div>

                    {/* Stat 3 */}
                    <div className="relative p-8 rounded-2xl bg-dark-800/30 border border-dark-700 text-center group hover:border-accent/30 transition-colors">
                        <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform tracking-tight">
                            99.99<span className="text-accent text-2xl">%</span>
                        </div>
                        <p className="text-text-secondary font-medium">Uptime Guarantee</p>
                    </div>
                </div>

                {/* Simulated World Map Graphic */}
                <div className="relative w-full aspect-[21/9] bg-dark-800 rounded-3xl border border-dark-700 flex items-center justify-center overflow-hidden isolate">
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

                    {/* Map nodes */}
                    <div className="relative w-full h-full max-w-4xl max-h-[80%] opacity-80">
                        {/* Node lines connecting everything */}
                        <svg className="absolute inset-0 w-full h-full opacity-20 text-accent" preserveAspectRatio="none">
                            <line x1="20%" y1="30%" x2="50%" y2="40%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="animate-[pulse_3s_ease-in-out_infinite]" />
                            <line x1="50%" y1="40%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="animate-[pulse_4s_ease-in-out_infinite]" />
                            <line x1="20%" y1="60%" x2="50%" y2="40%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="animate-[pulse_2.5s_ease-in-out_infinite]" />
                            <line x1="50%" y1="40%" x2="70%" y2="70%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="animate-[pulse_3.5s_ease-in-out_infinite]" />
                            <line x1="80%" y1="20%" x2="70%" y2="70%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="animate-[pulse_2s_ease-in-out_infinite]" />
                        </svg>

                        {/* Node points */}
                        <div className="absolute top-[30%] left-[20%] w-3 h-3 rounded-full bg-accent animate-ping opacity-75" />
                        <div className="absolute top-[30%] left-[20%] w-3 h-3 rounded-full bg-accent" />

                        <div className="absolute top-[60%] left-[20%] w-2 h-2 rounded-full bg-white opacity-50" />

                        <div className="absolute top-[40%] left-[50%] w-4 h-4 rounded-full bg-accent shadow-[0_0_20px_rgba(var(--color-accent),1)]" />
                        <div className="absolute top-[40%] left-[50%] w-4 h-4 rounded-full bg-accent animate-ping opacity-50" />

                        <div className="absolute top-[20%] left-[80%] w-3 h-3 rounded-full bg-white opacity-80" />

                        <div className="absolute top-[70%] left-[70%] w-2.5 h-2.5 rounded-full bg-accent opacity-90" />
                    </div>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-dark-900/80 backdrop-blur border border-dark-700">
                        <span className="text-xs text-text-secondary font-mono tracking-widest uppercase">Global Edge Routing Active</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
