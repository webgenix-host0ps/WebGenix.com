import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-dark-900">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full poiter-events-none translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full poiter-events-none translate-y-1/2" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
                            <Icon name="cpu" size={14} className="text-indigo-400" />
                            <span className="text-sm font-medium text-indigo-400">Next-Gen Virtual Private Servers</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Power. Control. <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                Zero Compromise.
                            </span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                            Deploy instantly on blazing fast NVMe SSDs with AMD EPYC™ processors. Full root access, dedicated resources, and a 99.99% uptime SLA.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <CTAButton variant="primary" size="large">
                                Deploy Server
                            </CTAButton>
                            <CTAButton variant="secondary" size="large">
                                View Configurations
                            </CTAButton>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-text-muted border-t border-dark-700 pt-8">
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">10<span className="text-indigo-400">Gbps</span></span>
                                <span className="text-[10px] uppercase tracking-wider">Network Port</span>
                            </div>
                            <div className="hidden sm:block w-px h-8 bg-dark-700" />
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">100<span className="text-indigo-400">%</span></span>
                                <span className="text-[10px] uppercase tracking-wider">NVMe SSD</span>
                            </div>
                            <div className="hidden sm:block w-px h-8 bg-dark-700" />
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <span className="text-white font-bold text-xl">DDoS</span>
                                <span className="text-[10px] uppercase tracking-wider">Protected</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual: Server CLI Mockup */}
                    <div className="flex-1 relative w-full xl:max-w-lg z-10 hidden lg:block">
                        <div className="relative">
                            <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full" />
                            <div className="relative rounded-2xl bg-[#0D0D12] border border-dark-700 p-8 shadow-2xl overflow-hidden hover:border-indigo-500/30 transition-colors h-[400px]">
                                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-dark-800">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    <span className="ml-2 text-xs font-mono text-text-muted">root@vh-ny1:~</span>
                                </div>
                                <div className="font-mono text-sm space-y-3">
                                    <div className="flex items-start gap-3">
                                        <span className="text-indigo-400 animate-pulse">➜</span>
                                        <span className="text-white typing-effect">neofetch</span>
                                    </div>
                                    <div className="text-emerald-400 flex gap-4 mt-4 fade-in-up">
                                        <div className="text-indigo-500 font-bold whitespace-pre">
{`       .       
      / \\      
     /   \\     
    /     \\    
   /_______\\   `}
                                        </div>
                                        <div>
                                            <div className="text-white font-bold">root<span className="text-text-muted">@</span>vh-ny1</div>
                                            <div className="text-text-muted text-xs mb-2">-------------------</div>
                                            <div><span className="text-indigo-400 font-bold">OS:</span> Ubuntu 22.04 LTS</div>
                                            <div><span className="text-indigo-400 font-bold">Host:</span> HostPlatform KVM</div>
                                            <div><span className="text-indigo-400 font-bold">Kernel:</span> 5.15.0-generic</div>
                                            <div><span className="text-indigo-400 font-bold">CPU:</span> AMD EPYC 7003 (8)</div>
                                            <div><span className="text-indigo-400 font-bold">Memory:</span> 4831MiB / 16000MiB</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 mt-6">
                                        <span className="text-indigo-400">➜</span>
                                        <span className="text-white animate-pulse">_</span>
                                    </div>
                                </div>
                                <style jsx>{`
                                    .typing-effect {
                                        display: inline-block;
                                        overflow: hidden;
                                        white-space: nowrap;
                                        animation: typing 2s steps(40, end);
                                    }
                                    .fade-in-up {
                                        opacity: 0;
                                        transform: translateY(10px);
                                        animation: fadeInUp 0.5s ease forwards 2s;
                                    }
                                    @keyframes typing {
                                        from { width: 0 }
                                        to { width: 100% }
                                    }
                                    @keyframes fadeInUp {
                                        to { opacity: 1; transform: translateY(0); }
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
