import React from 'react';
import Icon from '../../ui/Icon';

const features = [
    {
        title: 'Global Payments Engine',
        description: 'Accept credit cards, UPI, Paytm, and local payment methods in over 130 currencies perfectly seamlessly.',
        icon: 'credit-card'
    },
    {
        title: 'Smart Inventory Tracking',
        description: 'Never oversell again. Automatically track stock levels across multiple locations and get low-stock alerts natively.',
        icon: 'box'
    },
    {
        title: 'Real-time Shipping Rates',
        description: 'Connect to major carriers (FedEx, UPS, USPS). Customers see exact shipping costs instantly at checkout.',
        icon: 'truck'
    },
    {
        title: 'Abandoned Cart Recovery',
        description: 'Automatically email customers who left items in their cart. Recover up to 15% of lost sales with zero effort.',
        icon: 'mail'
    },
    {
        title: 'Discount & Coupon Engine',
        description: 'Run flash sales, generate percentage discounts, or offer free shipping over a certain threshold easily.',
        icon: 'tag'
    },
    {
        title: 'Tax Automation',
        description: 'Stop worrying about local tax laws. We automatically calculate and collect the correct sales tax at checkout globally.',
        icon: 'file-text'
    }
];

export default function FeaturesList() {
    return (
        <section className="py-24 bg-dark-900 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Everything you need to sell online
                    </h2>
                    <p className="text-text-secondary">
                        Powerful backend tools dressed in a beautifully simple interface. Manage your entire business from a single dashboard.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-emerald-500/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                <Icon name={feature.icon} size={24} />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
