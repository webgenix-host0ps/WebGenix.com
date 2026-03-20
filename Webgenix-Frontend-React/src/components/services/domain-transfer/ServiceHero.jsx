import React, { useState } from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    const [domain, setDomain] = useState('');
    const [step, setStep] = useState(1); // 1: input, 2: verifying, 3: unlocked/ready

    const handleCheck = (e) => {
        e.preventDefault();
        if (!domain) return;

        setStep(2);

        // Simulate checking domain status
        setTimeout(() => {
            setStep(3);
        }, 2000);
    };

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900">
                {/* Blue/Cyan gradient for trust & transition */}
                <div className="absolute top-0 right-1/4 w-[800px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full poiter-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                            <Icon name="arrow-right" size={14} className="text-blue-400" />
                            <span className="text-sm font-medium text-blue-400">Zero Downtime Transfers</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Consolidate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">domains</span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                            Stop overpaying for renewals. Transfer your domains to us, manage everything in one place, and get <strong className="text-white">1 free year of registration</strong> added automatically.
                        </p>

                        {/* Interactive Transfer Bar */}
                        <div className="max-w-xl mx-auto lg:mx-0 relative">
                            {step === 1 && (
                                <form
                                    onSubmit={handleCheck}
                                    className="flex flex-col sm:flex-row gap-4 animate-[fadeIn_0.3s_ease-out]"
                                >
                                    <div className="relative flex-1">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted">
                                            <Icon name="globe" size={20} />
                                        </div>
                                        <input
                                            type="text"
                                            value={domain}
                                            onChange={(e) => setDomain(e.target.value)}
                                            placeholder="Enter domain to transfer (e.g. yoursite.com)"
                                            className="w-full bg-dark-800 border-2 border-dark-700 hover:border-blue-500/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-text-muted transition-all"
                                        />
                                    </div>
                                    <CTAButton type="submit" variant="primary" className="!px-8 sm:w-auto w-full justify-center !bg-blue-600 hover:!bg-blue-500 !border-none">
                                        Transfer
                                    </CTAButton>
                                </form>
                            )}

                            {step === 2 && (
                                <div className="p-4 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-center gap-3 animate-[fadeIn_0.3s_ease-out]">
                                    <Icon name="loader" size={24} className="text-blue-400 animate-spin" />
                                    <span className="text-white font-medium tracking-wide">Querying WHOIS for {domain}...</span>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="p-6 rounded-2xl bg-dark-800 border-2 border-emerald-500/30 shadow-[0_10px_30px_rgba(16,185,129,0.1)] relative animate-[slideUp_0.4s_ease-out]">
                                    <button
                                        onClick={() => { setStep(1); setDomain(''); }}
                                        className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors"
                                    >
                                        <Icon name="x" size={20} />
                                    </button>

                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <Icon name="unlock" size={24} className="text-emerald-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{domain} is ready to transfer!</h3>
                                            <p className="text-sm text-text-secondary">Please ensure the domain is unlocked at your current registrar and you have the <span className="text-white font-mono bg-dark-900 px-1 py-0.5 rounded">EPP Auth Code</span>.</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-dark-900 rounded-xl gap-4">
                                        <div className="flex items-center gap-2">
                                            <Icon name="gift" size={16} className="text-cyan-400" />
                                            <span className="text-sm text-white font-medium">+1 Year Free Registration Included</span>
                                        </div>
                                        <CTAButton variant="primary" className="!bg-emerald-500 hover:!bg-emerald-400 !text-white !border-none w-full sm:w-auto justify-center">
                                            Continue Transfer
                                        </CTAButton>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Visual/Illustration: The Transfer Process */}
                    <div className="flex-1 relative w-full xl:max-w-lg z-10 hidden lg:block">
                        <div className="relative h-[400px] flex items-center justify-center">

                            {/* Provider A (Old) */}
                            <div className="absolute left-0 w-32 h-40 bg-dark-800 border border-dark-600 rounded-2xl flex flex-col items-center justify-center z-10 shadow-xl opacity-50">
                                <div className="text-xs text-text-muted uppercase tracking-widest mb-4">Old Host</div>
                                <Icon name="server" size={40} className="text-text-secondary" />
                            </div>

                            {/* Provider B (Us) */}
                            <div className="absolute right-0 w-40 h-48 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-2xl flex flex-col items-center justify-center z-10 shadow-[0_0_40px_rgba(56,189,248,0.2)]">
                                <div className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold mb-4">HostPlatform</div>
                                <Icon name="database" size={48} className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                            </div>

                            {/* Animated Domain Object transferring */}
                            <div className="absolute w-[60%] h-px bg-dark-700 z-0" />
                            <div className="absolute w-[60%] h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 z-0 animate-[pulse_2s_infinite]" />

                            <div className="absolute z-20 w-24 h-16 bg-dark-900 border border-blue-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] animate-[floatRight_4s_ease-in-out_infinite]">
                                <div className="flex items-center gap-2">
                                    <Icon name="globe" size={14} className="text-blue-400" />
                                    <span className="text-xs font-bold text-white tracking-widest">.COM</span>
                                </div>
                                <div className="absolute -top-3 -right-3 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg transform scale-90">
                                    <Icon name="check" size={12} className="text-white" />
                                </div>
                            </div>

                            <style jsx>{`
                                @keyframes floatRight {
                                    0% { left: 10%; transform: translateY(0) scale(0.9); opacity: 0; }
                                    20% { opacity: 1; transform: translateY(-10px) scale(1); }
                                    50% { transform: translateY(5px) scale(1.05); }
                                    80% { opacity: 1; transform: translateY(-5px) scale(1); }
                                    100% { left: 65%; transform: translateY(0) scale(0.9); opacity: 0; }
                                }
                                @keyframes fadeIn {
                                    from { opacity: 0; }
                                    to { opacity: 1; }
                                }
                                @keyframes slideUp {
                                    from { opacity: 0; transform: translateY(10px); }
                                    to { opacity: 1; transform: translateY(0); }
                                }
                            `}</style>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
