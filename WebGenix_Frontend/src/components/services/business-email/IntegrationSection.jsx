import React from 'react';
import Icon from '../../ui/Icon';

const integrations = [
    { name: 'Microsoft Outlook', icon: 'clipboard' }, // Placeholder for generic mail icons
    { name: 'Apple Mail', icon: 'mail' },
    { name: 'Thunderbird', icon: 'send' },
    { name: 'iOS Mail App', icon: 'smartphone' },
    { name: 'Android Gmail', icon: 'smartphone' },
    { name: 'Webmail Interface', icon: 'globe' },
];

export default function IntegrationSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700 overflow-hidden relative">

            {/* Background design */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Use the apps you <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">already love</span>
                        </h2>
                        <p className="text-text-secondary leading-relaxed mb-8">
                            You aren't forced to use a clunky proprietary webmail interface. Our business email supports full IMAP/POP3 and Exchange ActiveSync, meaning you can connect it instantly to your favorite email client on desktop or mobile.
                        </p>

                        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
                            {integrations.map((app, index) => (
                                <div key={index} className="flex items-center gap-3 bg-dark-900/50 border border-dark-600 rounded-lg p-3">
                                    <Icon name={app.icon} size={18} className="text-sky-400" />
                                    <span className="text-sm font-medium text-white">{app.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-lg relative">
                        {/* Abstract visual representing multi-device syncing */}
                        <div className="relative h-[400px] flex items-center justify-center">

                            {/* Central Cloud/Mail Server */}
                            <div className="absolute z-20 w-24 h-24 rounded-full bg-dark-800 border-4 border-dark-700 flex items-center justify-center shadow-[0_0_40px_rgba(14,165,233,0.2)]">
                                <Icon name="cloud" size={32} className="text-sky-400" />
                            </div>

                            {/* Orbiting Devices */}
                            <div className="absolute w-[280px] h-[280px] border border-dark-600 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute w-[280px] h-[280px] animate-[spin_10s_linear_infinite]">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-dark-800 border-2 border-sky-500 rounded-xl flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
                                    <Icon name="monitor" size={20} className="text-white" />
                                </div>
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-dark-800 border-2 border-indigo-500 rounded-xl flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
                                    <Icon name="smartphone" size={20} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
