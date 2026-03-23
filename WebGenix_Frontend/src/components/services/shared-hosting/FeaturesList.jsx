import React from 'react';
import Icon from '../../ui/Icon';

const features = [
    {
        title: 'Free Website Migration',
        description: 'Our expert team will transfer your existing websites from your old host to our platform absolutely free, with zero downtime.',
        icon: 'move'
    },
    {
        title: 'cPanel Included',
        description: 'Manage your website, emails, domains, and databases easily via the industry-standard cPanel control dashboard.',
        icon: 'layout'
    },
    {
        title: '1-Click Installer',
        description: 'Install over 400 applications including WordPress, Joomla, and Magento in seconds using the Softaculous autoinstaller.',
        icon: 'mouse-pointer'
    },
    {
        title: 'Daily Automated Backups',
        description: 'We take daily snapshots of your complete account (files, emails, databases) and retain them securely for 14 days.',
        icon: 'refresh-ccw'
    },
    {
        title: 'Free SSL Certificates',
        description: 'Secure all your hosted domains and subdomains automatically with AutoSSL. Enhance SEO rankings and visitor trust.',
        icon: 'lock'
    },
    {
        title: 'LiteSpeed Caching',
        description: 'Experience blazing fast page loads with server-level LiteSpeed caching, especially optimized for WordPress sites.',
        icon: 'zap'
    }
];

export default function FeaturesList() {
    return (
        <section className="py-24 bg-dark-900 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Loaded With Premium Features
                    </h2>
                    <p className="text-text-secondary">
                        Everything you need to launch, manage, and scale your online presence, bundled into one powerful platform.
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
