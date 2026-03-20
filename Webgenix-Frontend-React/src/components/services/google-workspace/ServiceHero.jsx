import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900">
                {/* Google-inspired multi-color gradient */}
                <div className="absolute top-0 right-1/4 w-[800px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full poiter-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-green-600/10 blur-[150px] rounded-full poiter-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-dark-700 mb-8">
                            <span className="flex gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                            </span>
                            <span className="text-sm font-medium text-text-secondary ml-1">Official Cloud Partner</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Do your best work, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400">all in one place</span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                            Get custom email (@yourcompany.com) and the industry-leading suite of collaboration tools including Drive, Meet, Docs, and Calendar. Managed effortlessly through your hosting dashboard.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                            <CTAButton variant="primary" className="w-full sm:w-auto !bg-blue-600 hover:!bg-blue-500 !border-none">
                                View Plans & Pricing
                            </CTAButton>
                        </div>

                        {/* Google Workspace App Icons Strip */}
                        <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 border-t border-dark-700">
                            <div className="flex flex-col items-center gap-2 text-text-muted hover:text-white transition-colors cursor-pointer group">
                                <div className="p-3 bg-dark-800 rounded-xl group-hover:bg-red-500/10 transition-colors">
                                    <Icon name="mail" size={24} className="text-red-400" />
                                </div>
                                <span className="text-xs font-semibold">Gmail</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 text-text-muted hover:text-white transition-colors cursor-pointer group">
                                <div className="p-3 bg-dark-800 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                                    <Icon name="video" size={24} className="text-blue-400" />
                                </div>
                                <span className="text-xs font-semibold">Meet</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 text-text-muted hover:text-white transition-colors cursor-pointer group">
                                <div className="p-3 bg-dark-800 rounded-xl group-hover:bg-green-500/10 transition-colors">
                                    <Icon name="hard-drive" size={24} className="text-green-400" />
                                </div>
                                <span className="text-xs font-semibold">Drive</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 text-text-muted hover:text-white transition-colors cursor-pointer group">
                                <div className="p-3 bg-dark-800 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                                    <Icon name="file-text" size={24} className="text-blue-400" />
                                </div>
                                <span className="text-xs font-semibold">Docs</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 text-text-muted hover:text-white transition-colors cursor-pointer group">
                                <div className="p-3 bg-dark-800 rounded-xl group-hover:bg-yellow-500/10 transition-colors">
                                    <Icon name="calendar" size={24} className="text-yellow-400" />
                                </div>
                                <span className="text-xs font-semibold">Calendar</span>
                            </div>
                        </div>

                    </div>

                    {/* Visual: Floating UI Elements */}
                    <div className="flex-1 relative w-full xl:max-w-lg z-10 hidden lg:block">
                        <div className="relative h-[500px] flex items-center justify-center">

                            {/* Main Browser Mockup (Drive/Docs) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[280px] bg-dark-800 border-2 border-dark-700 rounded-xl shadow-2xl overflow-hidden z-20">
                                {/* Header */}
                                <div className="h-12 bg-dark-900 border-b border-dark-700 flex items-center px-4 gap-3">
                                    <Icon name="file-text" size={20} className="text-blue-400" />
                                    <div className="h-4 w-32 bg-dark-700 rounded" />
                                    <div className="ml-auto flex -space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-dark-900" />
                                        <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-dark-900" />
                                    </div>
                                    <div className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full cursor-pointer hover:bg-blue-500 transition-colors">
                                        Share
                                    </div>
                                </div>
                                {/* Body */}
                                <div className="p-6 bg-white overflow-hidden h-full relative">
                                    <div className="w-3/4 h-6 bg-gray-200 rounded mb-4" />
                                    <div className="w-full h-3 bg-gray-100 rounded mb-2" />
                                    <div className="w-full h-3 bg-gray-100 rounded mb-2" />
                                    <div className="w-5/6 h-3 bg-gray-100 rounded mb-6" />

                                    {/* Artificial Cursor */}
                                    <div className="absolute top-24 left-32 flex flex-col items-start animate-[pulse_2s_infinite]">
                                        <Icon name="mouse-pointer" size={16} className="text-emerald-500 translate-x-1 -translate-y-1 drop-shadow-md" />
                                        <div className="bg-emerald-500 text-white text-[8px] px-1.5 py-0.5 rounded shadow-lg mt-1 font-bold">
                                            Sarah M.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Meet Window */}
                            <div className="absolute top-[10%] -right-[10%] w-48 h-32 bg-dark-900 border border-dark-600 rounded-xl shadow-2xl overflow-hidden z-30 animate-[float_5s_ease-in-out_infinite]">
                                <div className="h-full bg-dark-800 flex items-center justify-center relative">
                                    <Icon name="user" size={40} className="text-dark-600" />
                                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-dark-700/80 flex items-center justify-center backdrop-blur text-red-400">
                                            <Icon name="mic-off" size={10} />
                                        </div>
                                        <div className="w-6 h-6 rounded-full bg-dark-700/80 flex items-center justify-center backdrop-blur text-white">
                                            <Icon name="video" size={10} />
                                        </div>
                                        <div className="w-8 h-6 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                                            <Icon name="phone-off" size={10} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Calendar Notify */}
                            <div className="absolute bottom-[20%] -left-[15%] bg-dark-900 border border-dark-600 p-3 rounded-lg flex items-center gap-3 shadow-xl z-30 animate-[float_6s_ease-in-out_infinite_1s]">
                                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex flex-col items-center justify-center text-yellow-500">
                                    <div className="text-[8px] font-bold uppercase">Oct</div>
                                    <div className="text-sm font-bold -mt-1">24</div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white">Project Kickoff</div>
                                    <div className="text-[10px] text-text-muted">10:00 AM - 11:30 AM</div>
                                </div>
                            </div>

                            <style jsx>{`
                                @keyframes float {
                                    0%, 100% { transform: translateY(0); }
                                    50% { transform: translateY(-15px); }
                                }
                            `}</style>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
