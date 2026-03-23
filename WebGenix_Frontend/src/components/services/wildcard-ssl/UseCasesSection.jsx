import React from 'react';
import Icon from '../../ui/Icon';

const usecases = [
    {
        subdomain: 'dev.company.com',
        description: 'Secure development and staging environments without repeatedly buying new certificates.',
        icon: 'code',
        color: 'text-orange-400'
    },
    {
        subdomain: 'internal.company.com',
        description: 'Encrypt internal staff portals, intranets, and VPN endpoints seamlessly.',
        icon: 'users',
        color: 'text-blue-400'
    },
    {
        subdomain: 'store.company.com',
        description: 'Isolate sensitive e-commerce transaction data on a dedicated, secured subdomain.',
        icon: 'shopping-cart',
        color: 'text-emerald-400'
    },
    {
        subdomain: 'tenant1.company.com',
        description: 'Perfect for SaaS apps providing custom subdomains for individual clients or tenants.',
        icon: 'layout',
        color: 'text-purple-400'
    }
];

export default function UseCasesSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700 overflow-hidden relative">

            {/* Background design */}
            <div className="absolute inset-0 bg-dark-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="flex-1 w-full max-w-lg lg:order-2">
                        {/* Server Rack / App Deployment Visual */}
                        <div className="relative h-[450px]">
                            <div className="w-[320px] h-full absolute right-0 bg-dark-900 border-2 border-dark-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                                {/* Rack header */}
                                <div className="h-14 border-b border-dark-700 flex items-center px-6 justify-between bg-dark-950">
                                    <div className="flex items-center gap-2">
                                        <Icon name="server" size={18} className="text-text-muted" />
                                        <span className="text-sm font-bold text-white tracking-widest uppercase">Infrastructure</span>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-75" />
                                    </div>
                                </div>

                                {/* Rack slots (Use Cases) */}
                                <div className="flex-1 p-4 flex flex-col gap-3 justify-center">
                                    {usecases.map((uc, i) => (
                                        <div key={i} className="bg-dark-800 border border-dark-600 rounded-lg p-3 flex items-center gap-4 relative overflow-hidden group hover:border-indigo-500/50 transition-colors">
                                            {/* Security Line visual */}
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500" />

                                            <div className={`p-2 rounded-md bg-dark-900 border border-dark-700 ${uc.color}`}>
                                                <Icon name={uc.icon} size={16} />
                                            </div>

                                            <div className="flex-1">
                                                <div className="font-mono text-xs font-bold text-white truncate">{uc.subdomain}</div>
                                                <div className="flex items-center gap-1 mt-1">
                                                    <Icon name="lock" size={10} className="text-indigo-400" />
                                                    <span className="text-[9px] text-text-muted uppercase tracking-wider">Secured</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Empty Slot */}
                                    <div className="bg-dark-900/50 border border-dark-700 border-dashed rounded-lg p-3 flex items-center justify-center h-[62px]">
                                        <span className="text-xs text-text-muted font-medium">+ Add New Service</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-dark-700 mb-6">
                            <Icon name="tool" size={12} className="text-indigo-400" />
                            <span className="text-xs font-medium text-text-secondary">Use Cases</span>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6">
                            Built for modern, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">scalable architectures.</span>
                        </h2>
                        <p className="text-text-secondary leading-relaxed mb-10 text-lg">
                            Agile teams deploy new services rapidly. Don't let certificate provisioning slow down your pipeline.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {usecases.map((uc, idx) => (
                                <div key={idx}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className={`w-2 h-2 rounded-full ${uc.color.replace('text-', 'bg-')}`} />
                                        <h3 className="font-mono text-sm font-bold text-white">{uc.subdomain}</h3>
                                    </div>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        {uc.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
