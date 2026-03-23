import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-pink-500/10 blur-[130px] rounded-full poiter-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full poiter-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 mb-8">
                            <Icon name="sparkles" size={14} className="text-pink-400" />
                            <span className="text-sm font-medium text-pink-400">AI-Powered Creation</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Build Your Site <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                                Without Code
                            </span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                            Design stunning, responsive websites in minutes using our intuitive drag-and-drop editor or let our AI generate the perfect layout for your business instantly.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <CTAButton variant="primary" size="large">
                                Start Building Free
                            </CTAButton>
                            <CTAButton variant="secondary" size="large">
                                Browse Templates
                            </CTAButton>
                        </div>
                    </div>

                    {/* Visual/Illustration: AI Builder Animation */}
                    <div className="flex-1 relative w-full xl:max-w-lg z-10">
                        <div className="relative rounded-2xl bg-[#0D0D12] border border-dark-700 p-2 shadow-2xl h-[420px] overflow-hidden flex flex-col">

                            {/* Editor Top Bar */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-dark-700 bg-dark-900/50 rounded-t-xl">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-dark-600" />
                                        <div className="w-3 h-3 rounded-full bg-dark-600" />
                                        <div className="w-3 h-3 rounded-full bg-dark-600" />
                                    </div>
                                    <div className="flex items-center gap-2 text-text-muted text-xs font-medium bg-dark-800 px-2 py-1 rounded">
                                        <Icon name="monitor" size={14} />
                                        <Icon name="smartphone" size={14} className="opacity-50" />
                                    </div>
                                </div>
                                <div className="bg-accent text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider">
                                    Publish
                                </div>
                            </div>

                            {/* Canvas Area */}
                            <div className="flex-1 bg-white relative overflow-hidden group">
                                {/* Simulated generated wireframe blocks */}
                                <div className="absolute inset-0 p-4 space-y-4">
                                    {/* Header block */}
                                    <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                        <div className="w-24 h-6 bg-gray-200 rounded animate-[pulse_3s_ease-in-out_infinite]" />
                                        <div className="flex gap-4 hidden sm:flex">
                                            <div className="w-12 h-2 bg-gray-200 rounded" />
                                            <div className="w-12 h-2 bg-gray-200 rounded" />
                                            <div className="w-12 h-2 bg-gray-200 rounded" />
                                        </div>
                                    </div>

                                    {/* Hero block */}
                                    <div className="h-40 bg-gray-50 rounded-lg border border-gray-100 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                                        <div className="w-3/4 h-8 bg-gray-200 rounded mb-4" />
                                        <div className="w-1/2 h-4 bg-gray-200 rounded mb-6" />
                                        <div className="w-32 h-10 bg-pink-500/20 rounded-full border border-pink-500/30" />

                                        {/* Drag and Drop UI outline hover effect */}
                                        <div className="absolute inset-0 border-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity bg-pink-500/5" />
                                    </div>

                                    {/* Grid block */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-24 bg-gray-50 rounded-lg border border-gray-100" />
                                        <div className="h-24 bg-gray-50 rounded-lg border border-gray-100" />
                                    </div>
                                </div>

                                {/* AI Generation Overlay */}
                                <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm flex items-center justify-center animate-[fadeOut_1s_ease-in-out_3s_forwards]">
                                    <div className="bg-dark-800 border border-dark-700 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4">
                                        <Icon name="sparkles" size={24} className="text-pink-400 animate-spin" />
                                        <div className="text-left">
                                            <div className="text-sm font-semibold text-white">Generating layout...</div>
                                            <div className="text-xs text-text-muted mt-0.5">Applying optimal conversion styles</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <style jsx>{`
                                @keyframes fadeOut {
                                    from { opacity: 1; pointer-events: auto; }
                                    to { opacity: 0; pointer-events: none; display: none; }
                                }
                            `}</style>
                        </div>

                        {/* Floating Tool Panel UI */}
                        <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-dark-800 border border-dark-700 shadow-2xl rounded-xl p-2 hidden md:flex flex-col gap-2 z-20">
                            <div className="h-8 w-8 rounded bg-dark-700 flex items-center justify-center text-text-secondary hover:text-white hover:bg-dark-600 transition-colors cursor-pointer"><Icon name="type" size={16} /></div>
                            <div className="h-8 w-8 rounded bg-dark-700 flex items-center justify-center text-text-secondary hover:text-white hover:bg-dark-600 transition-colors cursor-pointer"><Icon name="image" size={16} /></div>
                            <div className="h-8 w-8 rounded bg-dark-700 flex items-center justify-center text-text-secondary hover:text-white hover:bg-dark-600 transition-colors cursor-pointer"><Icon name="square" size={16} /></div>
                            <div className="h-8 w-8 rounded bg-dark-700 flex items-center justify-center text-text-secondary hover:text-white hover:bg-dark-600 transition-colors cursor-pointer"><Icon name="layout" size={16} /></div>
                            <div className="w-full h-px bg-dark-700 my-1" />
                            <div className="h-8 w-8 rounded bg-pink-500/20 text-pink-400 flex items-center justify-center border border-pink-500/30 cursor-pointer shadow-[0_0_10px_rgba(236,72,153,0.3)]"><Icon name="sparkles" size={16} /></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
