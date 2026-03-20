import React from 'react';
import Icon from '../../ui/Icon';

const platforms = [
    { name: 'cPanel', icon: 'server', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { name: 'Plesk', icon: 'server', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { name: 'WordPress', icon: 'layout', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
    { name: 'Magento', icon: 'shopping-cart', color: 'text-orange-600', bg: 'bg-orange-600/10' },
    { name: 'Shopify', icon: 'shopping-bag', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { name: 'Squarespace', icon: 'square', color: 'text-gray-300', bg: 'bg-gray-500/20' },
    { name: 'Wix', icon: 'mouse-pointer', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { name: 'Custom Sites', icon: 'code', color: 'text-purple-400', bg: 'bg-purple-400/10' },
];

export default function SupportedPlatformsSection() {
    return (
        <section className="py-24 bg-dark-900 border-t border-dark-700 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            We move it all.
                        </h2>
                        <p className="text-text-secondary">
                            Whether you're running a massive multi-site WordPress network, an old cPanel server, or a custom-coded React application, we have the tools to port it flawlessly.
                        </p>
                    </div>
                </div>

                {/* Platforms Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {platforms.map((platform, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 p-4 rounded-xl bg-dark-800/30 border border-dark-700 hover:border-dark-600 hover:bg-dark-800 transition-all cursor-default"
                        >
                            <div className={`w-10 h-10 rounded-lg ${platform.bg} ${platform.color} flex items-center justify-center`}>
                                <Icon name={platform.icon} size={18} />
                            </div>
                            <span className="font-medium text-white">{platform.name}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
