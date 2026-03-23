import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900">
                {/* Purple/Indigo gradient for extended capabilities */}
                <div className="absolute top-0 right-1/4 w-[800px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full poiter-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full poiter-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
                            <Icon name="layers" size={14} className="text-indigo-400" />
                            <span className="text-sm font-medium text-indigo-400">Unlimited Subdomain Security</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            One certificate.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Infinite subdomains.</span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                            Secure your primary domain and an unlimited number of subdomains with a single, easy-to-manage Wildcard SSL certificate. Save time and money instantly.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <CTAButton variant="primary" className="w-full sm:w-auto !bg-indigo-600 hover:!bg-indigo-500 !border-none">
                                Browse Wildcard Plans
                            </CTAButton>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-text-muted border-t border-dark-700 pt-8">
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">*.domain.com</span>
                                <span className="text-[10px] uppercase tracking-wider">Universal Coverage</span>
                            </div>
                            <div className="hidden sm:block w-px h-8 bg-dark-700" />
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">256-Bit</span>
                                <span className="text-[10px] uppercase tracking-wider">Industry Std. Encryption</span>
                            </div>
                            <div className="hidden sm:block w-px h-8 bg-dark-700" />
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">Unified</span>
                                <span className="text-[10px] uppercase tracking-wider">Management Dashboard</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual: Wildcard capturing subdomains mock */}
                    <div className="flex-1 relative w-full xl:max-w-xl z-10 hidden lg:block">
                        <div className="relative h-[450px] flex items-center justify-center">

                            {/* Central Master Certificate node */}
                            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-48 bg-dark-800 border-2 border-indigo-500/50 rounded-xl p-4 shadow-[0_0_40px_rgba(99,102,241,0.2)] z-30 flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3 relative">
                                    <Icon name="shield-check" size={24} />
                                    {/* Pulse effect */}
                                    <div className="absolute inset-0 rounded-full border-2 border-indigo-400 animate-ping opacity-20" />
                                </div>
                                <div className="text-center">
                                    <div className="text-xs font-bold text-indigo-400 tracking-widest uppercase mb-1">Master Cert</div>
                                    <div className="text-lg font-bold text-white">*.yourbusiness.com</div>
                                </div>
                            </div>

                            {/* Connection Lines rendered as SVG */}
                            <svg className="absolute inset-0 w-full h-full z-10" style={{ filter: 'drop-shadow(0 0 8px rgba(99,102,241,0.5))' }}>
                                {/* Left connection */}
                                <path d="M 180 160 C 130 180, 100 240, 120 300"
                                    fill="none" stroke="url(#indigoGrad)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                                {/* Center connection */}
                                <path d="M 280 160 L 280 300"
                                    fill="none" stroke="url(#indigoGrad)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite_reverse]" />
                                {/* Right connection */}
                                <path d="M 380 160 C 430 180, 460 240, 440 300"
                                    fill="none" stroke="url(#indigoGrad)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />

                                <defs>
                                    <linearGradient id="indigoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(99,102,241,0.8)" />
                                        <stop offset="100%" stopColor="rgba(99,102,241,0.1)" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Subdomain Nodes Array */}
                            <div className="absolute top-[65%] left-0 right-0 flex justify-between px-4 z-20">
                                {/* Subdomain 1 */}
                                <div className="bg-dark-900 border border-dark-600 rounded-lg p-3 shadow-xl w-32 flex flex-col items-center animate-[float_4s_ease-in-out_infinite]">
                                    <Icon name="shopping-bag" size={16} className="text-emerald-400 mb-2" />
                                    <div className="text-xs font-medium text-white text-center break-all">
                                        <span className="text-emerald-400">store.</span><br />yourbusiness.com
                                    </div>
                                </div>

                                {/* Subdomain 2 */}
                                <div className="bg-dark-900 border border-dark-600 rounded-lg p-3 shadow-xl w-32 flex flex-col items-center animate-[float_5s_ease-in-out_infinite_1s]">
                                    <Icon name="mail" size={16} className="text-sky-400 mb-2" />
                                    <div className="text-xs font-medium text-white text-center break-all">
                                        <span className="text-sky-400">mail.</span><br />yourbusiness.com
                                    </div>
                                </div>

                                {/* Subdomain 3 */}
                                <div className="bg-dark-900 border border-dark-600 rounded-lg p-3 shadow-xl w-32 flex flex-col items-center animate-[float_4.5s_ease-in-out_infinite_2s]">
                                    <Icon name="terminal" size={16} className="text-orange-400 mb-2" />
                                    <div className="text-xs font-medium text-white text-center break-all">
                                        <span className="text-orange-400">api.</span><br />yourbusiness.com
                                    </div>
                                </div>
                            </div>

                            {/* Plus floating indicator */}
                            <div className="absolute bottom-[5%] right-[20%] text-indigo-500/50 font-bold text-4xl animate-pulse">
                                + ∞
                            </div>

                            <style jsx>{`
                                @keyframes float {
                                    0%, 100% { transform: translateY(0); }
                                    50% { transform: translateY(-10px); }
                                }
                                @keyframes dash {
                                    to { stroke-dashoffset: -1000; }
                                }
                            `}</style>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
