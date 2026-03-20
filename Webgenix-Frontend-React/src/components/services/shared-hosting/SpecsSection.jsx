import React from 'react';
import Icon from '../../ui/Icon';

const specs = [
    { label: 'Control Panel', value: 'cPanel / WHM Included', icon: 'server' },
    { label: 'Web Server', value: 'LiteSpeed Web Server', icon: 'zap' },
    { label: 'PHP Support', value: 'Multiple PHP Versions (5.6 to 8.2)', icon: 'code' },
    { label: 'Databases', value: 'Unlimited MySQL / MariaDB', icon: 'database' },
    { label: 'Backups', value: 'JetBackup Daily Snapshots', icon: 'refresh-cw' },
    { label: 'Installer', value: 'Softaculous (400+ Apps)', icon: 'box' }
];

export default function SpecsSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    
                    {/* Visual: Cloud / Website Management Mockup */}
                    <div className="flex-1 relative w-full xl:max-w-lg hidden md:block">
                        <div className="relative p-8 rounded-2xl bg-dark-900 border border-dark-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] h-[400px] flex items-center justify-center overflow-hidden">
                            {/* Abstract decorative circles */}
                            <div className="absolute w-[300px] h-[300px] border border-dark-600 rounded-full inset-0 m-auto" />
                            <div className="absolute w-[200px] h-[200px] border border-dark-600 rounded-full inset-0 m-auto shrink-0 animate-[spin_30s_linear_infinite]" />
                            <div className="absolute w-[100px] h-[100px] border border-dark-600/50 rounded-full inset-0 m-auto animate-[spin_20s_linear_infinite_reverse]" />
                            
                            {/* Central Cloud Node */}
                            <div className="absolute inset-0 m-auto w-24 h-24 bg-emerald-500/10 border border-emerald-500 border-2 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center z-20 backdrop-blur-md">
                                <Icon name="cloud" size={40} className="text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)] flex-shrink-0" />
                            </div>

                            {/* Orbiting Elements */}
                            <div className="absolute w-full h-full animate-[spin_15s_linear_infinite] pointer-events-none z-10 origin-center">
                                <div className="absolute left-1/2 top-4 -translate-x-1/2 w-12 h-12 bg-dark-800 border border-dark-600 rounded-xl flex items-center justify-center shadow-lg transform -rotate-[0deg]"> {/* Maintain upright visually - though hard in css spin, just accept the spin */}
                                    <Icon name="monitor" size={18} className="text-blue-400" />
                                </div>
                            </div>

                            <div className="absolute w-[80%] h-[80%] animate-[spin_20s_linear_infinite_reverse] pointer-events-none z-30 origin-center">
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark-800 border border-dark-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <Icon name="smartphone" size={16} className="text-pink-400" />
                                </div>
                                <div className="absolute left-0 bottom-1/4 w-10 h-10 bg-dark-800 border border-dark-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <Icon name="code" size={16} className="text-purple-400" />
                                </div>
                            </div>

                            {/* Connecting lines effect */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#10b981" />
                                    <stop offset="100%" stopColor="transparent" />
                                </radialGradient>
                                <circle cx="50%" cy="50%" r="48%" fill="url(#grad1)" />
                            </svg>

                            <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-dark-800 border border-dark-600 rounded-full shadow-xl">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981] animate-pulse" />
                                <span className="text-[10px] font-mono text-emerald-400 uppercase">CloudLinux OS Active</span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Optimized for Speed,<br />
                            Built for Simplicity.
                        </h2>
                        <p className="text-text-secondary leading-relaxed mb-8">
                            Experience unparalleled load times with LiteSpeed caching and enterprise-grade NVMe storage. Manage everything effortlessly from universally renowned cPanel interface. Whether you run a simple blog or a booming eCommerce site, our isolated CloudLinux environment ensures your resources are strictly yours.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {specs.map((spec, i) => (
                                <div key={i} className="flex items-start gap-4 text-left">
                                    <div className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center shrink-0 border border-dark-700 text-emerald-400 hover:scale-110 transition-transform">
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
