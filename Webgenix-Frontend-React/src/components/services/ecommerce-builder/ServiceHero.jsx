import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900">
                {/* Emerald/Teal gradient to represent sales/growth */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/10 blur-[150px] rounded-full poiter-events-none translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-600/10 blur-[120px] rounded-full poiter-events-none -translate-x-1/3 translate-y-1/3" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                            <Icon name="shopping-cart" size={14} className="text-emerald-400" />
                            <span className="text-sm font-medium text-emerald-400">Sell Anything, Anywhere</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Build A Store <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                                That Converts
                            </span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                            Launch your fully integrated e-commerce empire. Manage inventory, process global payments, calculate realtime shipping rates, and scale your revenue.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <CTAButton variant="primary" size="large">
                                Open Your Store
                            </CTAButton>
                            <CTAButton variant="secondary" size="large">
                                View Demo Store
                            </CTAButton>
                        </div>
                    </div>

                    {/* Visual/Illustration: Store Dashboard Animation */}
                    <div className="flex-1 relative w-full xl:max-w-lg z-10">
                        <div className="relative rounded-2xl bg-[#0D0D12] border border-dark-700 p-6 shadow-2xl overflow-hidden group">

                            {/* Dashboard Header */}
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-dark-700/50">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                                        <Icon name="bar-chart-2" size={18} className="text-emerald-400" />
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-white block">Seller Dashboard</span>
                                        <span className="text-xs text-text-muted">Live view</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-800 border border-dark-700">
                                    <span className="text-xs font-semibold text-white">Today</span>
                                    <Icon name="chevron-down" size={14} className="text-text-muted" />
                                </div>
                            </div>

                            {/* Live Metrics */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {/* Revenue Metric */}
                                <div className="p-4 rounded-xl border border-dark-700 bg-dark-800/50 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-bl-full translate-x-1/2 -translate-y-1/2 blur-xl" />
                                    <div className="text-xs text-text-secondary flex items-center gap-2 mb-1">
                                        Total Sales
                                    </div>
                                    <div className="text-2xl font-bold text-white flex items-center gap-2">
                                        ₹44,892.50
                                        <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                                            <Icon name="trending-up" size={10} />
                                            12%
                                        </span>
                                    </div>
                                </div>

                                {/* Active Carts Metric */}
                                <div className="p-4 rounded-xl border border-dark-700 bg-dark-800/50">
                                    <div className="text-xs text-text-secondary flex items-center gap-2 mb-1">
                                        Active Carts
                                    </div>
                                    <div className="text-2xl font-bold text-white flex items-center gap-3">
                                        14
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full border-2 border-dark-800 bg-indigo-500/20" />
                                            <div className="w-6 h-6 rounded-full border-2 border-dark-800 bg-pink-500/20" />
                                            <div className="w-6 h-6 rounded-full border-2 border-dark-800 bg-emerald-500/20" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Live Order Feed Simulation */}
                            <div className="space-y-3">
                                <div className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Recent Orders</div>

                                <div className="flex items-center justify-between p-3 rounded-lg bg-dark-800 border border-dark-700 hover:border-emerald-500/30 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded bg-dark-900 flex items-center justify-center">
                                            <Icon name="package" size={16} className="text-text-secondary" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-white">#ORD-4921</div>
                                            <div className="text-xs text-text-muted">2 items • Paid via Razorpay</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-semibold text-emerald-400">₹1,299.99</div>
                                        <div className="text-[10px] text-text-muted">Just now</div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-3 rounded-lg bg-dark-800 border border-dark-700 hover:border-emerald-500/30 transition-colors opacity-70">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded bg-dark-900 flex items-center justify-center">
                                            <Icon name="package" size={16} className="text-text-secondary" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-white">#ORD-4920</div>
                                            <div className="text-xs text-text-muted">1 item • Paid via UPI</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-semibold text-white">₹450.00</div>
                                        <div className="text-[10px] text-text-muted">5m ago</div>
                                    </div>
                                </div>
                            </div>

                            {/* Overlay flash effect to simulate new order arriving */}
                            <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:animate-[pulse_2s_ease-out_1] pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
