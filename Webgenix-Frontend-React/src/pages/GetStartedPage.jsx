import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';

const onboardingOptions = [
    {
        id: 'website',
        title: 'I need a Website',
        description: 'Launch a beautiful site in minutes with our AI-powered dragged-and-drop builder.',
        icon: 'layout',
        path: '/services/website-builder',
        color: 'text-pink-400',
        bg: 'bg-pink-500/10',
        border: 'group-hover:border-pink-500/50'
    },
    {
        id: 'hosting',
        title: 'I need Hosting',
        description: 'Reliable, lightning-fast cPanel hosting for your existing WordPress or custom sites.',
        icon: 'server',
        path: '/services/shared-hosting',
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'group-hover:border-emerald-500/50'
    },
    {
        id: 'server',
        title: 'I need a Server',
        description: 'Deploy high-performance Virtual Private Servers with full root access instantly.',
        icon: 'cpu',
        path: '/services/vps',
        color: 'text-indigo-400',
        bg: 'bg-indigo-500/10',
        border: 'group-hover:border-indigo-500/50'
    },
    {
        id: 'email',
        title: 'I need Professional Email',
        description: 'Look professional with custom business email addresses matching your domain.',
        icon: 'mail',
        path: '/services/business-email',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'group-hover:border-blue-500/50'
    }
];

export default function GetStartedPage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900 pt-32 pb-24 relative overflow-hidden flex flex-col justify-center">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />
            
            <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 w-full">
                
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <Icon name="rocket" size={14} className="text-accent" />
                        <span className="text-sm font-medium text-accent">Let's get started</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        What do you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">build today?</span>
                    </h1>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Choose your primary goal below, and we'll guide you to the perfect tools to make it happen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {onboardingOptions.map((option) => (
                        <Link 
                            key={option.id} 
                            to={option.path}
                            className={`
                                group relative p-8 rounded-2xl bg-dark-800 border border-dark-700 
                                transition-all duration-300 ease-in-out
                                hover:-translate-y-1 hover:shadow-2xl hover:bg-dark-700/50
                                ${option.border}
                            `}
                        >
                            {/* Decorative background glow on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="flex items-start gap-5 relative z-10">
                                <div className={`w-14 h-14 rounded-xl ${option.bg} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${option.color}`}>
                                    <Icon name={option.icon} size={28} />
                                </div>
                                <div className="flex-1 text-left">
                                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                        {option.title}
                                    </h2>
                                    <p className="text-text-secondary leading-relaxed">
                                        {option.description}
                                    </p>
                                </div>
                                <div className="mt-2 text-text-muted group-hover:text-accent transition-colors">
                                    <Icon name="arrow-right" size={20} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center text-sm text-text-muted">
                    Already know exactly what you need? <Link to="/signup" className="text-accent hover:underline font-medium">Skip to Signup</Link>
                </div>

            </div>
        </main>
    );
}
