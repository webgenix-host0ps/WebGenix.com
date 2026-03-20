import React from 'react';
import Icon from '../../ui/Icon';

const facts = [
    {
        title: 'Zero Paperwork',
        description: 'Because RapidSSL focuses strictly on checking domain ownership, there are no company documents to fax or legal checks to wait for.',
        icon: 'file'
    },
    {
        title: 'Automated Authentication',
        description: 'Verification is entirely automated 24/7. Just approve a confirmation email sent to your domain, or add a simple DNS TXT record.',
        icon: 'cpu'
    },
    {
        title: 'Instant Installation',
        description: 'For domains hosted on our platform, the CSR generation and certificate installation happen automatically the moment validation passes.',
        icon: 'download'
    }
];

export default function SpeedFactsSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="flex-1 lg:order-2">
                        <div className="grid grid-cols-1 gap-6">
                            {facts.map((fact, index) => (
                                <div key={index} className="flex gap-4 p-6 bg-dark-900 border border-dark-700 rounded-2xl hover:border-amber-500/30 transition-colors">
                                    <div className="w-12 h-12 shrink-0 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                                        <Icon name={fact.icon} size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">{fact.title}</h3>
                                        <p className="text-sm text-text-secondary leading-relaxed">{fact.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900 border border-dark-700 mb-6">
                            <Icon name="clock" size={12} className="text-text-muted" />
                            <span className="text-xs font-medium text-text-secondary">Validation Speed</span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            From unsecured to protected in <span className="text-amber-500">10 minutes flat.</span>
                        </h2>

                        <p className="text-text-secondary leading-relaxed mb-8 text-lg">
                            When you need to launch a project right now, or you've accidentally let a certificate expire, you don't have time for multi-day organizational checks. RapidSSL bridges the gap between strong encryption and immediate deployment.
                        </p>

                        <div className="bg-dark-900 border border-dark-700 rounded-xl p-6 flex flex-col sm:flex-row md:flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="hidden sm:flex w-12 h-12 rounded-full bg-emerald-500/20 items-center justify-center text-emerald-400">
                                    <Icon name="check-circle" size={24} />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-bold text-white">Ideal for Startups & Blogs</div>
                                    <div className="text-xs text-text-muted mt-1">Perfect balance of speed and security.</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
