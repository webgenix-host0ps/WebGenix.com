import { trustFeatures } from '../../data/services';
import Icon from '../ui/Icon';

export default function TrustSection() {
    return (
        <section id="trust" className="bg-[#0F172A] py-24">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left content */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-12">
                            <div className="inline-flex items-center bg-[#1E293B] text-[#3B82F6] text-sm font-medium px-5 h-9 rounded-3xl mb-6">
                                Enterprise-grade
                            </div>
                            <h2 className="text-5xl font-semibold tracking-tight text-white leading-tight">
                                Built for reliability
                            </h2>
                            <p className="mt-4 text-xl text-[#94A3B8]">
                                Enterprise-grade infrastructure you can depend on — 24/7.
                            </p>
                        </div>
                    </div>

                    {/* Features grid */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {trustFeatures.map((feature) => (
                                <div 
                                    key={feature.text}
                                    className="bg-[#1E293B] rounded-3xl p-8 flex gap-6 items-start hover:scale-[1.02] transition-all duration-200 border border-transparent hover:border-[#334155]"
                                >
                                    <Icon name={feature.icon} size={28} className="text-[#3B82F6] mt-1 flex-shrink-0" />
                                    <span className="text-[#94A3B8] text-lg leading-tight">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Hard SLA stats - high contrast */}
                <div className="mt-20 grid grid-cols-3 gap-8">
                    <div className="bg-[#1E293B] rounded-3xl px-8 py-9 text-center border border-[#334155]">
                        <div className="text-6xl font-semibold text-white tracking-tighter">99.9%</div>
                        <div className="text-[#64748B] mt-2 text-lg">Uptime SLA</div>
                        <div className="text-emerald-400 text-xs mt-6 font-medium">Guaranteed • Backed by contract</div>
                    </div>
                    <div className="bg-[#1E293B] rounded-3xl px-8 py-9 text-center border border-[#334155]">
                        <div className="text-6xl font-semibold text-white tracking-tighter">&lt;50ms</div>
                        <div className="text-[#64748B] mt-2 text-lg">Global Latency</div>
                        <div className="text-emerald-400 text-xs mt-6 font-medium">Edge network • 42 locations</div>
                    </div>
                    <div className="bg-[#1E293B] rounded-3xl px-8 py-9 text-center border border-[#334155]">
                        <div className="text-6xl font-semibold text-white tracking-tighter">24/7</div>
                        <div className="text-[#64748B] mt-2 text-lg">Expert Support</div>
                        <div className="text-emerald-400 text-xs mt-6 font-medium">Human + AI • Instant response</div>
                    </div>
                </div>
            </div>
        </section>
    );
}