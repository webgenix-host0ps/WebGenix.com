import React from 'react';
import Icon from '../../ui/Icon';

const technologies = [
    { name: 'Node.js', icon: 'server', color: 'text-green-500', bg: 'bg-green-500/10' },
    { name: 'Python', icon: 'code', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { name: 'Go', icon: 'terminal', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { name: 'Ruby', icon: 'diamond', color: 'text-red-500', bg: 'bg-red-500/10' },
    { name: 'PostgreSQL', icon: 'database', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
    { name: 'Redis', icon: 'zap', color: 'text-red-600', bg: 'bg-red-600/10' },
    { name: 'Docker', icon: 'box', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { name: 'Nginx', icon: 'globe', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
];

export default function TechStackSection() {
    return (
        <section className="py-24 bg-dark-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Deploy your favorite stack
                        </h2>
                        <p className="text-text-secondary">
                            Whether you're migrating a legacy monolith or building a modern microservices architecture, we provide native runtimes and containerization support for the tools you love.
                        </p>
                    </div>

                    <div className="flex -space-x-4">
                        {technologies.slice(0, 4).map((tech, i) => (
                            <div key={i} className={`w-14 h-14 rounded-full border-4 border-dark-900 ${tech.bg} flex items-center justify-center relative z-[${4 - i}] shadow-lg`}>
                                <Icon name={tech.icon} size={20} className={tech.color} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 p-4 rounded-xl bg-dark-800/30 border border-dark-700 hover:border-dark-600 hover:bg-dark-800 transition-all cursor-default"
                        >
                            <div className={`w-10 h-10 rounded-lg ${tech.bg} ${tech.color} flex items-center justify-center`}>
                                <Icon name={tech.icon} size={18} />
                            </div>
                            <span className="font-medium text-white">{tech.name}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
