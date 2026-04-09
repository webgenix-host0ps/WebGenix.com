import CTAButton from '../ui/CTAButton';

export default function HeroSection() {
    return (
        <section className="bg-[#0B0F19] pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* LEFT: Text content - dominant headline, 3-second clarity */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 bg-[#1E293B] text-[#3B82F6] text-sm font-medium px-5 h-9 rounded-3xl mb-6 border border-[#334155]">
                            <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse"></div>
                            NOW IN PUBLIC BETA
                        </div>

                        <h1 className="text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-2.5px] text-white">
                            Deploy with confidence.
                            <br />
                            <span className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent">Scale without limits.</span>
                        </h1>

                        <p className="mt-8 text-2xl text-[#94A3B8] max-w-xl">
                            Production-grade infrastructure that grows with your ambitions. 
                            Static sites, full-stack apps, AI workloads — all in one platform.
                        </p>

                        <div className="mt-10 flex items-center gap-x-5">
                            <CTAButton 
                                to="/get-started"
                                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-10 py-5 rounded-3xl font-semibold text-xl shadow-xl shadow-[#3B82F6]/30 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-3"
                            >
                                Get Started — Free
                            </CTAButton>

                            <a 
                                href="#how-it-works"
                                className="text-[#94A3B8] hover:text-white font-medium flex items-center gap-2 transition-colors"
                            >
                                Watch 47-second demo
                                <span className="text-2xl leading-none">→</span>
                            </a>
                        </div>

                        <p className="mt-6 text-[#64748B] flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1">
                                <span className="text-emerald-400">✓</span> No credit card required
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="text-emerald-400">✓</span> Setup in under 5 minutes
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="text-emerald-400">✓</span> Cancel anytime
                            </span>
                        </p>
                    </div>

                    {/* RIGHT: Visual anchor - live dashboard preview */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative bg-[#1E293B] rounded-3xl p-3 shadow-2xl border border-[#334155] overflow-hidden">
                            {/* Window chrome */}
                            <div className="h-11 bg-[#0F172A] rounded-t-3xl flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                </div>
                                <div className="flex-1 text-center">
                                    <div className="bg-[#1E293B] text-[#64748B] text-xs px-8 py-1 rounded-3xl inline-block">project-alpha.yourdomain.dev</div>
                                </div>
                            </div>

                            {/* Dashboard content */}
                            <div className="p-8 bg-[#0B0F19] h-[480px] flex flex-col">
                                {/* Status header */}
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <div className="px-4 py-1 bg-emerald-400/10 text-emerald-400 text-sm font-medium rounded-3xl flex items-center gap-1.5">
                                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                                LIVE • 12 regions
                                            </div>
                                            <div className="text-xs text-[#64748B] font-mono">v2.4.1 deployed • 43s ago</div>
                                        </div>
                                        <h3 className="text-white text-3xl font-semibold mt-3">Project Alpha</h3>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[#3B82F6] text-sm font-medium">99.99% uptime</div>
                                        <div className="text-5xl font-bold text-white tracking-tighter leading-none">8.4k</div>
                                        <div className="text-xs text-[#64748B]">req/min</div>
                                    </div>
                                </div>

                                {/* Quick metrics */}
                                <div className="grid grid-cols-3 gap-4 mb-10">
                                    <div className="bg-[#1E293B] rounded-2xl p-5 text-center border border-[#334155]">
                                        <div className="text-[#64748B] text-xs tracking-widest">CPU</div>
                                        <div className="text-4xl font-semibold text-white mt-1">37%</div>
                                    </div>
                                    <div className="bg-[#1E293B] rounded-2xl p-5 text-center border border-[#334155]">
                                        <div className="text-[#64748B] text-xs tracking-widest">MEMORY</div>
                                        <div className="text-4xl font-semibold text-white mt-1">2.1<span className="text-base font-normal text-[#64748B]">GB</span></div>
                                    </div>
                                    <div className="bg-[#1E293B] rounded-2xl p-5 text-center border border-[#334155]">
                                        <div className="text-[#64748B] text-xs tracking-widest">BANDWIDTH</div>
                                        <div className="text-4xl font-semibold text-[#3B82F6] mt-1">1.8<span className="text-base font-normal text-[#64748B]">TB</span></div>
                                    </div>
                                </div>

                                {/* Terminal log */}
                                <div className="flex-1 bg-[#111827] rounded-2xl p-6 font-mono text-xs text-[#94A3B8] flex flex-col gap-1.5 overflow-hidden border border-[#334155]">
                                    <div className="text-emerald-400">$ git push origin main</div>
                                    <div>Building with 16 vCPU • 64GB RAM...</div>
                                    <div className="text-emerald-400">✓ Built in 4.8s</div>
                                    <div className="text-[#3B82F6]">Deployed to edge • https://project-alpha.yourdomain.dev</div>
                                    <div className="text-emerald-400 mt-auto">All 12 regions synced • Global latency &lt;42ms</div>
                                </div>
                            </div>
                        </div>

                        {/* Subtle floating badge for depth */}
                        <div className="absolute -top-4 -right-4 bg-[#1E293B] text-white text-xs font-medium px-5 h-9 rounded-3xl shadow-xl border border-[#334155] flex items-center gap-2">
                            <span className="text-[#3B82F6]">✦</span>
                            Powered by 42 global nodes
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}