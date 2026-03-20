import React, { useState } from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

const templates = [
    { id: 1, name: 'SaaS Startup', category: 'Technology', image: 'bg-gradient-to-br from-indigo-500 to-purple-600' },
    { id: 2, name: 'Minimal Portfolio', category: 'Creative', image: 'bg-gradient-to-tr from-gray-700 to-gray-400' },
    { id: 3, name: 'Local Coffee Shop', category: 'Business', image: 'bg-gradient-to-bl from-orange-400 to-amber-700' },
    { id: 4, name: 'Modern E-commerce', category: 'Store', image: 'bg-gradient-to-tr from-pink-500 to-rose-400' },
    { id: 5, name: 'Tech Blog', category: 'Blog', image: 'bg-gradient-to-br from-emerald-500 to-teal-700' },
    { id: 6, name: 'Event Registration', category: 'Events', image: 'bg-gradient-to-tr from-blue-500 to-cyan-400' },
];

const categories = ['All', 'Technology', 'Creative', 'Business', 'Store', 'Blog', 'Events'];

export default function TemplatesSection() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredTemplates = activeFilter === 'All'
        ? templates
        : templates.filter(t => t.category === activeFilter);

    return (
        <section className="py-24 bg-dark-900 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Start with a stunning template
                        </h2>
                        <p className="text-text-secondary">
                            Don't want to design from scratch? Choose from hundreds of designer-made, fully responsive website templates tailored for every industry.
                        </p>
                    </div>
                    <CTAButton variant="secondary" className="whitespace-nowrap hidden md:inline-flex">
                        View All Templates
                    </CTAButton>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-4 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${activeFilter === cat
                                    ? 'bg-white text-dark-900'
                                    : 'bg-dark-800 text-text-secondary hover:text-white hover:bg-dark-700 border border-dark-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Template Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTemplates.map((template) => (
                        <div key={template.id} className="group cursor-pointer">
                            {/* Template Preview Box */}
                            <div className="w-full aspect-[4/3] rounded-2xl bg-dark-800 border border-dark-700 mb-4 overflow-hidden relative">
                                {/* Simulated image using gradients */}
                                <div className={`absolute inset-0 ${template.image} opacity-80 group-hover:scale-105 transition-transform duration-700`} />

                                {/* Overlay wireframe details to make it look like a site */}
                                <div className="absolute inset-0 p-4 opacity-50 flex flex-col pointer-events-none">
                                    <div className="w-full h-4 bg-white/20 rounded mb-4" />
                                    <div className="w-1/2 h-8 bg-white/20 rounded mb-2" />
                                    <div className="w-3/4 h-2 bg-white/20 rounded mb-4" />
                                    <div className="flex gap-2 flex-1">
                                        <div className="w-1/2 h-full bg-white/10 rounded" />
                                        <div className="w-1/2 h-full bg-white/10 rounded" />
                                    </div>
                                </div>

                                {/* Hover overlay action */}
                                <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                    <span className="px-6 py-3 bg-white text-dark-900 rounded-lg font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        Preview Template
                                    </span>
                                </div>
                            </div>

                            {/* Template Details */}
                            <div className="flex items-center justify-between px-1">
                                <div>
                                    <h4 className="text-white font-medium mb-1">{template.name}</h4>
                                    <p className="text-xs text-text-muted">{template.category}</p>
                                </div>
                                <button className="text-text-muted hover:text-white transition-colors">
                                    <Icon name="heart" size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <CTAButton variant="secondary" className="w-full justify-center">
                        View All Templates
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
