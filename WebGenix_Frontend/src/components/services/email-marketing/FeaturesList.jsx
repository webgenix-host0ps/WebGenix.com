import React from 'react';
import Icon from '../../ui/Icon';

const features = [
    {
        title: 'Drag & Drop Builder',
        description: 'Design beautiful, responsive emails in minutes without writing HTML. Add images, buttons, and products instantly.',
        icon: 'layout'
    },
    {
        title: 'Advanced Segmentation',
        description: 'Filter your audience by location, purchase history, or recent engagement behavior to send highly targeted offers.',
        icon: 'users'
    },
    {
        title: 'A/B Testing Content',
        description: 'Test subject lines, sender names, and content variations to automatically discover highest-converting combinations.',
        icon: 'git-merge'
    },
    {
        title: 'Personalization Tags',
        description: 'Address subscribers by name, mention their company, or inject dynamic content to make emails feel 1-on-1.',
        icon: 'tag'
    },
    {
        title: 'Responsive Templates',
        description: 'Choose from 200+ professionally designed templates that look perfect on both desktop and mobile devices natively.',
        icon: 'smartphone'
    },
    {
        title: 'Deliverability Experts',
        description: 'Our IP reputation and dedicated abuse team ensure your emails land securely in the "Primary" inbox, not "Promotions".',
        icon: 'shield-check'
    }
];

export default function FeaturesList() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Everything you need to grow
                    </h2>
                    <p className="text-text-secondary">
                        Powerful email marketing tools built natively into your hosting interface. Send smarter emails and grow your business faster.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-dark-900/50 border border-dark-700 hover:border-rose-500/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-dark-800 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(225,29,72,0.1)]">
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
