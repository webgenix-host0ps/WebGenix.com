import React from 'react';
import Icon from '../../ui/Icon';

const processSteps = [
    {
        title: 'Unlock Your Domain',
        description: 'Log into your current registrar and remove the registrar lock protecting your domain from unauthorized transfers.',
        icon: 'unlock'
    },
    {
        title: 'Get the Auth Code',
        description: 'Request the EPP Authorization Code (Auth-Code) from your current provider. This proves you own the domain.',
        icon: 'key'
    },
    {
        title: 'Enter Code & Checkout',
        description: 'Enter the Auth-Code on our platform and complete the checkout process for the transfer fee (which includes +1 year of registration).',
        icon: 'shopping-cart'
    },
    {
        title: 'Approve the Transfer',
        description: 'Check your email. Your old registrar will send a final confirmation link. Click approve, and the transfer completes within 1-5 days.',
        icon: 'mail'
    }
];

export default function TransferProcessSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        How domain transfers work
                    </h2>
                    <p className="text-text-secondary">
                        Transferring your domain is completely safe and won't affect your website or email uptime if your DNS remains the same. Here is the process:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="relative group">

                            {/* Connector Line (hidden on mobile, visible on lg) */}
                            {index < 3 && (
                                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px border-t-2 border-dashed border-dark-600 z-0 group-hover:border-blue-500/50 transition-colors duration-500" />
                            )}

                            <div className="relative z-10 flex flex-col items-center text-center pt-8 px-4">
                                <div className={`w-16 h-16 rounded-2xl bg-dark-900 border border-dark-700 flex items-center justify-center mb-6 shadow-xl transition-transform duration-300 group-hover:-translate-y-2 ${index === 3 ? 'text-emerald-400 group-hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)] group-hover:border-emerald-500/50' : 'text-blue-400 group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] group-hover:border-blue-500/50'}`}>
                                    <Icon name={step.icon} size={28} />
                                </div>

                                <span className="text-xs font-bold text-dark-500 tracking-widest uppercase mb-2">Step 0{index + 1}</span>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional reassuring alert */}
                <div className="mt-16 max-w-3xl mx-auto bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                        <Icon name="shield-check" size={24} className="text-blue-400" />
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-1">Zero Downtime Guarantee</h4>
                        <p className="text-sm text-blue-200/70">As long as you do not change your nameservers during the transfer process, your website and emails will remain 100% online while the registrar changes in the background.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
