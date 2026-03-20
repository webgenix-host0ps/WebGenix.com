import React from 'react';
import Icon from '../../ui/Icon';

const features = [
    {
        title: 'Pixel-Perfect Drag & Drop',
        description: 'Position elements exactly where you want them. Our smart grid ensures everything aligns perfectly across all screen sizes.',
        icon: 'move'
    },
    {
        title: 'AI Copywriter Included',
        description: 'Stuck on writing? Generate engaging headlines, product descriptions, and about pages instantly with our built-in AI.',
        icon: 'type'
    },
    {
        title: 'Auto-Responsive Layouts',
        description: 'Design once, look great everywhere. Your site automatically perfectly adapts to mobile phones, tablets, and massive desktop screens.',
        icon: 'smartphone'
    },
    {
        title: 'Built-in SEO Tools',
        description: 'Rank higher on Google automatically. We handle meta tags, sitemaps, fast loading speeds, and perfectly structured HTML.',
        icon: 'search'
    },
    {
        title: 'E-commerce Ready',
        description: 'Turn any page into a storefront. Add a shopping cart, accept strict payments, and manage inventory with a single click.',
        icon: 'shopping-cart'
    },
    {
        title: 'Global Hosting Included',
        description: 'Publish your site directly to our enterprise-grade global CDN. No servers to manage, no FTP uploads—just click publish.',
        icon: 'globe'
    }
];

export default function FeaturesList() {
    return (
        <section className="py-24 bg-dark-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Everything a modern website needs
                    </h2>
                    <p className="text-text-secondary">
                        From powerful design capabilities to robust marketing tools, we provide the complete package to grow your presence online.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-pink-500/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(236,72,153,0.1)]">
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
