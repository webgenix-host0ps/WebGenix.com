import React from 'react';
import Icon from '../../ui/Icon';

const steps = [
    {
        number: '01',
        title: 'Generate your CSR',
        description: 'Create a Certificate Signing Request (CSR) on your server. This contains your public key and organization details encrypted securely. If you host with us, this is a 1-click button.',
        icon: 'file-text'
    },
    {
        number: '02',
        title: 'Pass Validation',
        description: 'The Certificate Authority (CA) verifies your identity. For DV, this just means clicking an email link. For OV/EV, they will verify your business registration and phone number.',
        icon: 'shield'
    },
    {
        number: '03',
        title: 'Install & Secure',
        description: 'Once issued, download your certificate files (.crt and .ca-bundle) and install them on your web server. Force HTTPS traffic and watch the padlock appear.',
        icon: 'check'
    }
];

export default function HowItWorksSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        How SSL issuance works
                    </h2>
                    <p className="text-text-secondary">
                        From generating keys to securing data in transit. We've simplified the process so you can secure your site in minutes, not days.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 right-0 h-0.5 bg-dark-700" />

                    {/* Animated Progress Line */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-1/3 h-0.5 bg-gradient-to-r from-emerald-500/50 to-emerald-400 z-0 animate-[pulse_3s_ease-in-out_infinite]" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center">

                                {/* Timeline Node */}
                                <div className="w-32 h-32 rounded-full bg-dark-900 border-4 border-dark-800 flex items-center justify-center relative mb-8 shadow-xl group">
                                    <div className="absolute inset-2 rounded-full border border-dark-700 group-hover:border-emerald-500/50 transition-colors" />
                                    <Icon name={step.icon} size={40} className={`relative z-10 ${index === 2 ? 'text-emerald-400' : 'text-text-muted group-hover:text-white transition-colors'}`} />

                                    {/* Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-600 border-2 border-dark-900 text-white text-xs font-bold flex items-center justify-center">
                                        {step.number}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
