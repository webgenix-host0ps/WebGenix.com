import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/services/ServicesSection';
import HowItWorks from '../components/sections/HowItWorks';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function HomePage() {
    return (
        <main className="bg-[#0B0F19] text-white">
            
            {/* HERO - Center of attraction */}
            <HeroSection />

            {/* VALUE STRIP - Instant credibility */}
            <section className="py-12 bg-[#0F172A] border-b border-[#334155]">
                <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="text-6xl font-bold text-[#3B82F6] tracking-tighter group-hover:scale-105 transition-transform">99.99%</div>
                            <div className="text-[#94A3B8] mt-3 text-lg">Uptime</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-6xl font-bold text-[#3B82F6] tracking-tighter group-hover:scale-105 transition-transform">&lt; 50ms</div>
                            <div className="text-[#94A3B8] mt-3 text-lg">Latency</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-6xl font-bold text-[#3B82F6] tracking-tighter group-hover:scale-105 transition-transform">24/7</div>
                            <div className="text-[#94A3B8] mt-3 text-lg">Support</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-6xl font-bold text-[#3B82F6] tracking-tighter group-hover:scale-105 transition-transform">5 min</div>
                            <div className="text-[#94A3B8] mt-3 text-lg">Deployment</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES GRID - Why choose us */}
            <section className="py-24 bg-[#0B0F19]">
                <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5">
                            <h2 className="text-5xl font-semibold tracking-tight">Everything You Need to Scale</h2>
                            <p className="mt-6 text-xl text-[#94A3B8] max-w-md">
                                Powerful infrastructure, automation tools, and performance optimization — all in one platform.
                            </p>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "High Performance", desc: "Optimized servers with SSD, caching, and CDN integration." },
                                    { title: "Instant Deployment", desc: "Deploy apps, websites, and services in seconds." },
                                    { title: "Scalable Infrastructure", desc: "Grow from startup to enterprise without limits." },
                                    { title: "Advanced Security", desc: "Firewall, SSL, and DDoS protection built-in." },
                                    { title: "Developer Friendly", desc: "CLI tools, APIs, and automation support." },
                                    { title: "Global Network", desc: "Low latency across worldwide data centers." }
                                ].map((item, i) => (
                                    <div 
                                        key={i}
                                        className="bg-[#1E293B] rounded-3xl p-8 hover:bg-[#334155] transition-all group border border-transparent hover:border-[#3B82F6]/20"
                                    >
                                        <h3 className="text-2xl font-semibold group-hover:text-[#3B82F6] transition-colors">{item.title}</h3>
                                        <p className="mt-4 text-[#94A3B8]">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <ServicesSection />

            {/* HOW IT WORKS */}
            <HowItWorks />

            {/* INFRASTRUCTURE / SCALABILITY - Authority builder */}
            <section className="bg-[#0F172A] py-24 border-t border-[#334155]">
                <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7">
                            <div className="max-w-lg">
                                <h2 className="text-5xl font-semibold tracking-tight text-white">Built for Developers.<br />Ready for Scale.</h2>
                                <p className="mt-6 text-xl text-[#94A3B8]">
                                    Inspired by modern cloud platforms, our infrastructure gives you complete control and flexibility.
                                </p>
                                <ul className="mt-10 space-y-6">
                                    <li className="flex items-start gap-3 text-lg">
                                        <span className="text-[#3B82F6] text-2xl leading-none mt-px">→</span>
                                        Auto-scaling infrastructure
                                    </li>
                                    <li className="flex items-start gap-3 text-lg">
                                        <span className="text-[#3B82F6] text-2xl leading-none mt-px">→</span>
                                        Container &amp; Docker support
                                    </li>
                                    <li className="flex items-start gap-3 text-lg">
                                        <span className="text-[#3B82F6] text-2xl leading-none mt-px">→</span>
                                        Global CDN integration
                                    </li>
                                    <li className="flex items-start gap-3 text-lg">
                                        <span className="text-[#3B82F6] text-2xl leading-none mt-px">→</span>
                                        Real-time monitoring
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Visual: Smart Resource Allocation Engine */}
                        <div className="lg:col-span-5">
                            <div className="bg-[#1E293B] rounded-3xl p-10 border border-[#334155]">
                                <div className="text-center mb-8">
                                    <span className="inline-flex bg-[#3B82F6]/10 text-[#3B82F6] px-6 h-8 rounded-3xl items-center text-sm font-semibold">SMART RESOURCE ALLOCATION ENGINE</span>
                                </div>
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex justify-between text-sm mb-3 text-[#94A3B8]">
                                            <span>Web traffic</span>
                                            <span className="font-medium text-white">1,284 concurrent users</span>
                                        </div>
                                        <div className="h-2.5 bg-[#334155] rounded-3xl overflow-hidden">
                                            <div className="h-2.5 w-4/5 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-3 text-[#94A3B8]">
                                            <span>Database load</span>
                                            <span className="font-medium text-white">42% capacity</span>
                                        </div>
                                        <div className="h-2.5 bg-[#334155] rounded-3xl overflow-hidden">
                                            <div className="h-2.5 w-2/5 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-3 text-[#94A3B8]">
                                            <span>AI inference</span>
                                            <span className="font-medium text-white">Auto-scaled to 8 GPUs</span>
                                        </div>
                                        <div className="h-2.5 bg-[#334155] rounded-3xl overflow-hidden">
                                            <div className="h-2.5 w-3/4 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-[#64748B] text-center text-sm mt-10">Real-time decisions • Zero downtime scaling</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECURITY TEASER */}
            <section className="py-20 bg-[#0B0F19]">
                <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 text-center">
                    <div className="inline-flex items-center bg-[#1E293B] px-6 h-9 rounded-3xl text-[#3B82F6] text-sm font-medium mb-6">Enterprise-grade protection</div>
                    <h2 className="text-5xl font-semibold tracking-tight">Security You Can Trust</h2>
                    <p className="mt-6 text-xl text-[#94A3B8] max-w-lg mx-auto">
                        SSL, firewalls, DDoS protection, and real-time threat monitoring — built in.
                    </p>
                </div>
            </section>

            {/* FULL TRUST SECTION */}
            <TrustSection />

            {/* FINAL CONVERSION CTA */}
            <ConversionFooter />

        </main>
    );
}