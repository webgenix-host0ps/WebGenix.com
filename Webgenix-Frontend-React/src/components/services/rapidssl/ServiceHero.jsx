import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900">
                {/* Yellow/Amber gradient for speed/RapidSSL branding */}
                <div className="absolute top-0 right-1/4 w-[800px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full poiter-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-yellow-600/10 blur-[150px] rounded-full poiter-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
                            <Icon name="zap" size={14} className="text-amber-400" />
                            <span className="text-sm font-medium text-amber-400">Issued in Minutes</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Fast, automated <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">SSL encryption.</span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                            Don't wait days for website security. RapidSSL delivers strong 256-bit encryption and instant browser trust through a fully automated 10-minute validation process.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <CTAButton variant="primary" className="w-full sm:w-auto !bg-amber-600 hover:!bg-amber-500 !border-none text-dark-900 font-bold">
                                Get Secured Now
                            </CTAButton>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-text-muted border-t border-dark-700 pt-8">
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">10 <span className="text-sm text-text-muted">min</span></span>
                                <span className="text-[10px] uppercase tracking-wider">Avg Issuance Time</span>
                            </div>
                            <div className="hidden sm:block w-px h-8 bg-dark-700" />
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">₹8,00,000</span>
                                <span className="text-[10px] uppercase tracking-wider">Warranty Protection</span>
                            </div>
                            <div className="hidden sm:block w-px h-8 bg-dark-700" />
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">24/7</span>
                                <span className="text-[10px] uppercase tracking-wider">Automated Processing</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual: Speed/Automation Mockup */}
                    <div className="flex-1 relative w-full xl:max-w-xl z-10 hidden lg:block">
                        <div className="relative h-[450px] flex items-center justify-center">

                            {/* Fast-tracked certificate generation UI */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] bg-dark-900 border-2 border-dark-700 rounded-2xl shadow-[0_0_50px_rgba(245,158,11,0.15)] overflow-hidden z-20">

                                <div className="p-6 bg-dark-800 border-b border-dark-700 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                                            <Icon name="zap" size={20} className="text-amber-500" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">RapidSSL Order</div>
                                            <div className="text-xs text-text-muted font-mono">ID: RS-88492</div>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                                        Active
                                    </div>
                                </div>

                                <div className="p-6 space-y-5">
                                    {/* Progress Step 1 */}
                                    <div className="flex gap-4">
                                        <div className="relative flex flex-col items-center">
                                            <div className="w-6 h-6 rounded-full bg-emerald-500 text-dark-900 flex items-center justify-center shadow-lg shadow-emerald-500/30 z-10">
                                                <Icon name="check" size={14} className="stroke-[3]" />
                                            </div>
                                            <div className="w-0.5 h-10 bg-emerald-500/50 absolute top-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">CSR Received</div>
                                            <div className="text-xs text-text-muted mt-0.5">Automated key decryption</div>
                                        </div>
                                    </div>

                                    {/* Progress Step 2 */}
                                    <div className="flex gap-4">
                                        <div className="relative flex flex-col items-center">
                                            <div className="w-6 h-6 rounded-full bg-emerald-500 text-dark-900 flex items-center justify-center shadow-lg shadow-emerald-500/30 z-10">
                                                <Icon name="check" size={14} className="stroke-[3]" />
                                            </div>
                                            <div className="w-0.5 h-10 bg-amber-500/50 absolute top-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">Domain Validation</div>
                                            <div className="text-xs text-text-muted mt-0.5">DNS record verified instantly</div>
                                        </div>
                                    </div>

                                    {/* Progress Step 3 (Active) */}
                                    <div className="flex gap-4 group">
                                        <div className="relative flex flex-col items-center">
                                            <div className="w-6 h-6 rounded-full bg-dark-900 border-2 border-amber-500 flex items-center justify-center z-10 relative">
                                                <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping absolute" />
                                                <div className="w-2 h-2 rounded-full bg-amber-500" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-bold text-amber-500">Issuing Certificate</div>

                                            {/* Code injection visual */}
                                            <div className="mt-2 h-16 bg-dark-950 rounded border border-dark-700 p-2 overflow-hidden relative">
                                                <div className="absolute top-0 left-0 w-full h-[200%] bg-[linear-gradient(transparent,rgba(245,158,11,0.1),transparent)] animate-[scan_2s_linear_infinite]" />
                                                <div className="font-mono text-[9px] text-text-muted leading-tight whitespace-pre">
                                                    -----BEGIN CERTIFICATE-----<br />
                                                    MIIDrzCCApegAwIBAgIQCDvgVp<br />
                                                    Bv0A7l... <span className="text-amber-500 animate-pulse">generating_keys</span><br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative speed lines */}
                            <div className="absolute top-[30%] -right-[15%] w-32 h-1 bg-gradient-to-r from-transparent to-amber-500/50 rounded-full animate-[shoot_1s_ease-out_infinite]" />
                            <div className="absolute top-[40%] -right-[5%] w-24 h-1 bg-gradient-to-r from-transparent to-amber-500/30 rounded-full animate-[shoot_1.5s_ease-out_infinite_0.5s]" />
                            <div className="absolute bottom-[40%] -left-[10%] w-40 h-1 bg-gradient-to-l from-transparent to-amber-500/40 rounded-full animate-[shoot_1.2s_ease-out_infinite_0.2s]" />

                            <style jsx>{`
                                @keyframes scan {
                                    0% { transform: translateY(-50%); }
                                    100% { transform: translateY(0%); }
                                }
                                @keyframes shoot {
                                    0% { transform: translateX(0) scaleX(0); opacity: 0; }
                                    50% { opacity: 1; }
                                    100% { transform: translateX(-100px) scaleX(1); opacity: 0; }
                                }
                            `}</style>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
