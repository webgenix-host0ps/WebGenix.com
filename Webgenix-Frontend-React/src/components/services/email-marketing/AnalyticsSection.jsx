import React from 'react';
import Icon from '../../ui/Icon';

const metrics = [
    { label: 'Avg. Open Rate', value: '42.8%', trend: '+5.2%', positive: true },
    { label: 'Click-Through Rate', value: '12.4%', trend: '+1.8%', positive: true },
    { label: 'Unsubscribe Rate', value: '0.1%', trend: '-0.3%', positive: true },
    { label: 'Bounce Rate', value: '0.8%', trend: '-1.1%', positive: true }
];

export default function AnalyticsSection() {
    return (
        <section className="py-24 bg-dark-900 overflow-hidden relative border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left text */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Insights that drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">real results</span>
                        </h2>
                        <p className="text-text-secondary leading-relaxed mb-8">
                            Stop guessing what works. Our real-time analytics dashboard gives you deep insights into subscriber behavior, device usage, and engagement trends.
                        </p>

                        <ul className="space-y-4 mb-8 text-left max-w-md mx-auto lg:mx-0">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">✓</div>
                                <span className="text-white text-sm">Geolocation and timezone tracking</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">✓</div>
                                <span className="text-white text-sm">Desktop vs. Mobile open breakdowns</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">✓</div>
                                <span className="text-white text-sm">Automated A/B test winner selection</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Analytics Dashboard Mockup */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="bg-dark-800 rounded-2xl border border-dark-700 shadow-xl overflow-hidden p-6">

                            {/* Dashboard Header */}
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-dark-700">
                                <div>
                                    <h3 className="text-lg font-bold text-white">Campaign Performance</h3>
                                    <p className="text-xs text-text-muted">Last 30 Days</p>
                                </div>
                                <div className="p-2 bg-dark-900 rounded-lg text-text-secondary hover:text-white cursor-pointer transition-colors border border-dark-600">
                                    <Icon name="download" size={16} />
                                </div>
                            </div>

                            {/* Key Metrics Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {metrics.map((metric, index) => (
                                    <div key={index} className="bg-dark-900 p-4 rounded-xl border border-dark-700">
                                        <div className="text-xs text-text-muted mb-1 font-medium">{metric.label}</div>
                                        <div className="flex items-end justify-between">
                                            <div className="text-2xl font-bold text-white tracking-tight">{metric.value}</div>
                                            <div className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${metric.positive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                                                {metric.trend}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Simulated Graph */}
                            <div className="relative h-48 bg-dark-900 rounded-xl border border-dark-700 p-4 flex items-end gap-2">
                                {/* Abstract Bars */}
                                <div className="w-1/6 bg-gradient-to-t from-rose-600/20 to-rose-600 rounded-t-md h-[40%] hover:brightness-125 transition-all cursor-pointer group relative">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">Week 1</div>
                                </div>
                                <div className="w-1/6 bg-gradient-to-t from-rose-600/20 to-rose-600 rounded-t-md h-[30%] hover:brightness-125 transition-all cursor-pointer group relative">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">Week 2</div>
                                </div>
                                <div className="w-1/6 bg-gradient-to-t from-rose-600/20 to-rose-600 rounded-t-md h-[60%] hover:brightness-125 transition-all cursor-pointer group relative">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">Week 3</div>
                                </div>
                                <div className="w-1/6 bg-gradient-to-t from-rose-600/20 to-rose-600 rounded-t-md h-[45%] hover:brightness-125 transition-all cursor-pointer group relative">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">Week 4</div>
                                </div>
                                <div className="w-1/6 bg-gradient-to-t from-orange-500/20 to-orange-500 rounded-t-md h-[85%] hover:brightness-125 transition-all cursor-pointer shadow-[0_0_15px_rgba(249,115,22,0.4)] relative group">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-orange-400 font-bold text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">Black Friday</div>
                                </div>
                                <div className="w-1/6 bg-gradient-to-t from-rose-600/20 to-rose-600 rounded-t-md h-[55%] hover:brightness-125 transition-all cursor-pointer group relative">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">Week 6</div>
                                </div>

                                {/* Graph Grid Lines */}
                                <div className="absolute bottom-4 left-0 right-0 h-px bg-dark-700" />
                                <div className="absolute bottom-1/2 left-0 right-0 h-px bg-dark-700 border-dashed border-dark-600" />
                                <div className="absolute top-4 left-0 right-0 h-px bg-dark-700 border-dashed border-dark-600" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
