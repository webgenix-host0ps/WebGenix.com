import React, { useState } from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function StoreManagementSection() {
    const [activeTab, setActiveTab] = useState('products');

    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[100px] rounded-full poiter-events-none translate-x-1/3 -translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Master your inventory
                    </h2>
                    <p className="text-text-secondary">
                        Easily add products, organize variants, update availability, and fulfill orders all from an intuitive, lightning-fast command center.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

                    {/* Interactive UI Mockup */}
                    <div className="flex-[1.5] w-full bg-dark-900 border border-dark-700 rounded-3xl shadow-2xl p-4 flex flex-col md:flex-row gap-4 h-[500px]">

                        {/* Sidebar */}
                        <div className="w-full md:w-48 bg-dark-800 rounded-2xl p-3 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible">
                            <button
                                onClick={() => setActiveTab('products')}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap ${activeTab === 'products' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-text-secondary hover:bg-dark-700 hover:text-white'}`}
                            >
                                <Icon name="package" size={16} /> Products
                            </button>
                            <button
                                onClick={() => setActiveTab('orders')}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap ${activeTab === 'orders' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-text-secondary hover:bg-dark-700 hover:text-white'}`}
                            >
                                <Icon name="shopping-bag" size={16} /> Orders
                            </button>
                            <button
                                onClick={() => setActiveTab('customers')}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap ${activeTab === 'customers' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-text-secondary hover:bg-dark-700 hover:text-white'}`}
                            >
                                <Icon name="users" size={16} /> Customers
                            </button>
                            <button
                                onClick={() => setActiveTab('analytics')}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap ${activeTab === 'analytics' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-text-secondary hover:bg-dark-700 hover:text-white'}`}
                            >
                                <Icon name="bar-chart-2" size={16} /> Analytics
                            </button>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 bg-dark-800 rounded-2xl p-6 border border-dark-700 overflow-hidden relative">
                            {activeTab === 'products' && (
                                <div className="animate-[fadeSlideUp_0.3s_ease-out]">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-white font-semibold">Inventory</h3>
                                        <button className="px-3 py-1.5 bg-emerald-500 text-dark-900 rounded font-medium text-xs flex items-center gap-1 hover:bg-emerald-400 transition-colors">
                                            <Icon name="plus" size={14} /> Add Product
                                        </button>
                                    </div>

                                    {/* Table Mockup */}
                                    <div className="space-y-3">
                                        {/* Header */}
                                        <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-medium text-text-muted border-b border-dark-700">
                                            <div className="col-span-1"></div>
                                            <div className="col-span-5">Product</div>
                                            <div className="col-span-3">Status</div>
                                            <div className="col-span-3 text-right">Stock</div>
                                        </div>

                                        {/* Items */}
                                        <div className="grid grid-cols-12 gap-4 px-4 py-3 items-center bg-dark-900/50 rounded-lg border border-dark-700 hover:border-dark-600 transition-colors cursor-pointer group">
                                            <div className="col-span-1">
                                                <div className="w-8 h-8 rounded bg-dark-700 flex items-center justify-center">
                                                    <Icon name="image" size={14} className="text-text-muted" />
                                                </div>
                                            </div>
                                            <div className="col-span-5 text-sm text-white font-medium group-hover:text-emerald-400 transition-colors">Premium Leather Wallet</div>
                                            <div className="col-span-3">
                                                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Active</span>
                                            </div>
                                            <div className="col-span-3 text-right text-sm text-text-secondary">42 in stock</div>
                                        </div>

                                        <div className="grid grid-cols-12 gap-4 px-4 py-3 items-center bg-dark-900/50 rounded-lg border border-dark-700 hover:border-dark-600 transition-colors cursor-pointer group">
                                            <div className="col-span-1">
                                                <div className="w-8 h-8 rounded bg-dark-700 flex items-center justify-center">
                                                    <Icon name="image" size={14} className="text-text-muted" />
                                                </div>
                                            </div>
                                            <div className="col-span-5 text-sm text-white font-medium group-hover:text-emerald-400 transition-colors">Canvas Messenger Bag</div>
                                            <div className="col-span-3">
                                                <span className="px-2 py-0.5 rounded text-[10px] bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">Low Stock</span>
                                            </div>
                                            <div className="col-span-3 text-right text-sm text-yellow-500 font-medium">3 in stock</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab !== 'products' && (
                                <div className="flex flex-col items-center justify-center h-full text-center animate-[fadeSlideUp_0.3s_ease-out]">
                                    <div className="w-16 h-16 rounded-2xl bg-dark-700 flex items-center justify-center text-emerald-400 mb-4 opacity-50">
                                        <Icon name={activeTab === 'orders' ? 'shopping-bag' : activeTab === 'customers' ? 'users' : 'bar-chart-2'} size={32} />
                                    </div>
                                    <div className="text-white font-medium capitalize mb-1">{activeTab} Dashboard</div>
                                    <div className="text-xs text-text-muted">Interactive preview loading...</div>
                                </div>
                            )}
                        </div>

                        <style jsx>{`
                            @keyframes fadeSlideUp {
                                from { opacity: 0; transform: translateY(10px); }
                                to { opacity: 1; transform: translateY(0); }
                            }
                        `}</style>
                    </div>

                    {/* Features Explainer */}
                    <div className="flex-1 space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mt-1">
                                <Icon name="layers" size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-2">Infinite Variations</h4>
                                <p className="text-text-secondary text-sm leading-relaxed">Create products with multiple sizes, colors, and materials. Adjust pricing and track inventory individually for every single combination.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mt-1">
                                <Icon name="folder" size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-2">Smart Collections</h4>
                                <p className="text-text-secondary text-sm leading-relaxed">Group products automatically based on price, tags, or vendor. When you add a new hat, it instantly appears in the 'Summer Sale' collection.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mt-1">
                                <Icon name="download" size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-2">Digital Goods Delivery</h4>
                                <p className="text-text-secondary text-sm leading-relaxed">Selling ebooks or software? We explicitly handle secure, encrypted file delivery automatically the second payment clears.</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <CTAButton variant="secondary" className="group">
                                See Full Dashboard <Icon name="arrow-right" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </CTAButton>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
