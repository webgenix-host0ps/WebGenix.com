import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900">
                {/* Emerald/Teal gradient for security and trust */}
                <div className="absolute top-0 right-1/4 w-[800px] h-[600px] bg-emerald-600/10 blur-[150px] rounded-full poiter-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                            <Icon name="shield-check" size={14} className="text-emerald-400" />
                            <span className="text-sm font-medium text-emerald-400">Military-Grade Encryption</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Build trust with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">bulletproof security</span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                            Protect your customers' sensitive data, boost your SEO rankings, and instantly prove your authenticity with our premium 256-bit SSL/TLS certificates.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <CTAButton variant="primary" className="w-full sm:w-auto !bg-emerald-600 hover:!bg-emerald-500 !border-none">
                                Browse Certificates
                            </CTAButton>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-text-muted border-t border-dark-700 pt-8">
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">₹8L - ₹14Cr</span>
                                <span className="text-[10px] uppercase tracking-wider">Warranty Protection</span>
                            </div>
                            <div className="hidden sm:block w-px h-8 bg-dark-700" />
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">99.9%</span>
                                <span className="text-[10px] uppercase tracking-wider">Browser Recognition</span>
                            </div>
                            <div className="hidden sm:block w-px h-8 bg-dark-700" />
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">SHA-256</span>
                                <span className="text-[10px] uppercase tracking-wider">Hash Algorithm</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual: Address Bar Encryption Mockup */}
                    <div className="flex-1 relative w-full xl:max-w-lg z-10 hidden lg:block">
                        <div className="relative h-[400px] flex items-center justify-center">

                            {/* Browser Address Bar UI */}
                            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-dark-800 border-2 border-dark-700 rounded-xl shadow-[0_20px_50px_rgba(16,185,129,0.15)] overflow-hidden z-20">
                                <div className="h-10 border-b border-dark-700 flex items-center px-4 gap-3 bg-dark-900/50">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="flex-1 flex gap-2 ml-2">
                                        <Icon name="arrow-left" size={12} className="text-text-muted" />
                                        <Icon name="arrow-right" size={12} className="text-text-muted" />
                                        <Icon name="rotate-ccw" size={12} className="text-text-muted" />
                                    </div>
                                </div>

                                <div className="p-4 bg-dark-800 flex justify-center">
                                    {/* The "Green Bar" Effect */}
                                    <div className="w-full h-10 bg-dark-900 border border-emerald-500/50 rounded-lg flex items-center px-4 shadow-[0_0_20px_rgba(16,185,129,0.2)] inset-0 relative overflow-hidden group">

                                        {/* Sweeping Ray Animation */}
                                        <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent -skew-x-12 translate-x-[-150%] animate-[sweep_3s_ease-in-out_infinite]" />

                                        <div className="flex items-center gap-2 pr-3 border-r border-emerald-500/20">
                                            <Icon name="lock" size={14} className="text-emerald-400" />
                                            <span className="text-xs font-bold text-emerald-400">Secure</span>
                                        </div>
                                        <div className="flex items-center pl-3">
                                            <span className="text-emerald-400 font-bold text-sm">https://</span>
                                            <span className="text-white font-medium text-sm">yourbusiness.com</span>
                                            <span className="text-text-muted text-sm">/checkout</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* EV Certificate "Company Name" badge floating out */}
                            <div className="absolute top-[60%] -right-[5%] bg-dark-900 border border-emerald-500/30 p-4 rounded-xl shadow-2xl z-30 animate-[float_4s_ease-in-out_infinite]">
                                <div className="flex items-center gap-3 border-b border-dark-700 pb-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                        <Icon name="shield" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-text-muted uppercase tracking-wider">Issued To</div>
                                        <div className="text-sm font-bold text-white">Your Business Inc.</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-text-secondary">Location:</span>
                                    <span className="text-white font-mono">San Francisco, US</span>
                                </div>
                            </div>

                            {/* Floating "Encrypted Data" blocks */}
                            <div className="absolute bottom-[10%] left-[5%] flex flex-col gap-2 z-10 opacity-70">
                                <div className="px-3 py-1.5 bg-dark-800 border-l-2 border-emerald-500 rounded text-[10px] font-mono text-emerald-400 shadow-lg animate-[slideUp_3s_linear_infinite]">
                                    2g#9fK!xP7...
                                </div>
                                <div className="px-3 py-1.5 bg-dark-800 border-l-2 border-emerald-500 rounded text-[10px] font-mono text-emerald-400 shadow-lg animate-[slideUp_3s_linear_infinite_1s]">
                                    L9@mQ4$vB1...
                                </div>
                                <div className="px-3 py-1.5 bg-dark-800 border-l-2 border-emerald-500 rounded text-[10px] font-mono text-emerald-400 shadow-lg animate-[slideUp_3s_linear_infinite_2s]">
                                    xE5*cN8^aZ...
                                </div>
                            </div>

                            <style jsx>{`
                                @keyframes sweep {
                                    0% { transform: translateX(-150%) skewX(-12deg); }
                                    100% { transform: translateX(400%) skewX(-12deg); }
                                }
                                @keyframes float {
                                    0%, 100% { transform: translateY(0); }
                                    50% { transform: translateY(-15px); }
                                }
                                @keyframes slideUp {
                                    0% { transform: translateY(20px) scale(0.9); opacity: 0; }
                                    20% { transform: translateY(0) scale(1); opacity: 1; }
                                    80% { transform: translateY(-40px) scale(1); opacity: 1; }
                                    100% { transform: translateY(-60px) scale(0.9); opacity: 0; }
                                }
                            `}</style>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
