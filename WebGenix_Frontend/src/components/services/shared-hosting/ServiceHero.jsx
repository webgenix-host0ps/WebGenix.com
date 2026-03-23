import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-dark-900">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-600/10 blur-[120px] rounded-full poiter-events-none translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full poiter-events-none -translate-x-1/2 translate-y-1/2" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                            <Icon name="users" size={14} className="text-emerald-400" />
                            <span className="text-sm font-medium text-emerald-400">Premium Shared Cloud Hosting</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Reliable Hosting. <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                                Zero Headaches.
                            </span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                            Blazing fast cPanel hosting built on NVMe SSD arrays. Free migrations, free SSL certificates, and optimized for WordPress.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <CTAButton variant="primary" size="large">
                                Start Hosting Now
                            </CTAButton>
                            <CTAButton variant="secondary" size="large">
                                Compare Plans
                            </CTAButton>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-text-muted border-t border-dark-700 pt-8">
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">99.9<span className="text-emerald-400">%</span></span>
                                <span className="text-[10px] uppercase tracking-wider">Uptime</span>
                            </div>
                            <div className="hidden sm:block w-px h-8 bg-dark-700" />
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">NVMe</span>
                                <span className="text-[10px] uppercase tracking-wider">Storage</span>
                            </div>
                            <div className="hidden sm:block w-px h-8 bg-dark-700" />
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">LiteSpeed</span>
                                <span className="text-[10px] uppercase tracking-wider">Enabled</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual: cPanel Mockup */}
                    <div className="flex-1 relative w-full xl:max-w-lg z-10 hidden lg:block">
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full animate-pulse" />
                            <div className="relative rounded-2xl bg-[#0D0D12] border border-dark-700 p-8 shadow-2xl overflow-hidden hover:border-emerald-500/30 transition-colors h-[400px] flex flex-col">
                                
                                {/* Header */}
                                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-dark-800">
                                    <Icon name="layout" size={16} className="text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                                    <span className="ml-1 text-sm font-semibold text-text-secondary">cPanel Control Center</span>
                                    <div className="ml-auto flex items-center gap-2 text-xs">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span className="text-emerald-400">Online</span>
                                    </div>
                                </div>
                                
                                {/* Tools Grid */}
                                <div className="grid grid-cols-3 gap-4 flex-1 content-start">
                                    {[
                                        { icon: 'mail', label: 'Email Accounts', color: 'text-blue-400' },
                                        { icon: 'folder', label: 'File Manager', color: 'text-yellow-400' },
                                        { icon: 'database', label: 'MySQL®', color: 'text-orange-400' },
                                        { icon: 'globe', label: 'Domains', color: 'text-purple-400' },
                                        { icon: 'shield', label: 'SSL/TLS', color: 'text-emerald-400' },
                                        { icon: 'box', label: 'Softaculous', color: 'text-indigo-400' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-xl bg-dark-800 border border-dark-700 hover:bg-dark-700 transition-all cursor-pointer group shadow-sm hover:shadow-md hover:-translate-y-1">
                                            <Icon name={item.icon} size={28} className={`${item.color} mb-3 group-hover:scale-110 transition-transform`} />
                                            <span className="text-[10px] text-center text-text-muted font-medium whitespace-nowrap">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Stats Footer */}
                                <div className="mt-auto pt-6 border-t border-dark-800">
                                    <div className="flex justify-between items-center text-xs mb-2">
                                        <span className="text-text-secondary font-medium">Disk Usage (NVMe)</span>
                                        <span className="text-emerald-400 font-bold">12%</span>
                                    </div>
                                    <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                                        <div className="bg-emerald-500 h-2 rounded-full relative" style={{ width: '12%' }}>
                                            <div className="absolute inset-0 bg-white/20 w-full animate-[progress_2s_linear_infinite]" />
                                        </div>
                                    </div>
                                </div>

                                <style jsx>{`
                                    @keyframes progress {
                                        0% { transform: translateX(-100%); }
                                        100% { transform: translateX(100%); }
                                    }
                                `}</style>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
