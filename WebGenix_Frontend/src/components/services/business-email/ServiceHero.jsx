import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900">
                {/* Sky / Indigo gradient for professional, reliable communication */}
                <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-sky-600/10 blur-[150px] rounded-full poiter-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 mb-8">
                            <Icon name="mail" size={14} className="text-sky-400" />
                            <span className="text-sm font-medium text-sky-400">Professional Communication</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Email that <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">means business</span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                            Build trust with a custom email address matching your domain. Enjoy massive storage, advanced spam protection, and real-time syncing across all your devices.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <CTAButton variant="primary" className="w-full sm:w-auto !bg-sky-600 hover:!bg-sky-500 !border-none">
                                View Plans
                            </CTAButton>
                            <CTAButton variant="secondary" className="w-full sm:w-auto">
                                Compare Features
                            </CTAButton>
                        </div>

                        <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-text-muted">
                            <div className="flex items-center gap-2">
                                <Icon name="check" size={16} className="text-sky-400" /> No ads
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon name="check" size={16} className="text-sky-400" /> 99.9% uptime
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon name="check" size={16} className="text-sky-400" /> 24/7 support
                            </div>
                        </div>
                    </div>

                    {/* Visual/Illustration: Modern Inbox Mockup */}
                    <div className="flex-1 relative w-full xl:max-w-lg z-10 hidden lg:block perspective-1000">
                        <div className="relative rotate-y-[-10deg] rotate-x-[5deg] shadow-[0_20px_50px_rgba(14,165,233,0.15)] rounded-2xl border border-dark-600 bg-dark-800 overflow-hidden group hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
                            {/* Browser Header */}
                            <div className="h-10 border-b border-dark-700 bg-dark-900/50 flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="ml-4 flex-1 h-6 bg-dark-800 rounded-md border border-dark-700 flex items-center px-3 gap-2">
                                    <Icon name="search" size={12} className="text-text-muted" />
                                    <span className="text-xs text-text-muted">Search mail...</span>
                                </div>
                            </div>

                            {/* Inbox Content */}
                            <div className="flex h-80">
                                {/* Sidebar */}
                                <div className="w-1/3 border-r border-dark-700 bg-dark-900/20 p-4 space-y-4">
                                    <div className="h-8 bg-sky-600/20 rounded-md flex items-center px-3 border border-sky-500/30">
                                        <Icon name="mail" size={14} className="text-sky-400 mr-2" />
                                        <span className="text-xs font-semibold text-sky-400">Inbox</span>
                                        <span className="ml-auto text-[10px] bg-sky-500 text-white px-1.5 rounded-full">3</span>
                                    </div>
                                    <div className="h-8 bg-dark-800 rounded-md flex items-center px-3">
                                        <Icon name="send" size={14} className="text-text-secondary mr-2" />
                                        <span className="text-xs font-medium text-text-secondary">Sent</span>
                                    </div>
                                    <div className="h-8 bg-dark-800 rounded-md flex items-center px-3">
                                        <Icon name="file" size={14} className="text-text-secondary mr-2" />
                                        <span className="text-xs font-medium text-text-secondary">Drafts</span>
                                    </div>
                                </div>

                                {/* Message List */}
                                <div className="flex-1 p-0">
                                    {/* Unread Message 1 */}
                                    <div className="p-4 border-b border-dark-700 bg-sky-900/10 cursor-pointer overflow-hidden relative">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-500" />
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm font-bold text-white">New Client Lead</span>
                                            <span className="text-[10px] text-sky-400 font-medium">10:42 AM</span>
                                        </div>
                                        <div className="text-xs text-white font-medium mb-1">hello@yourdomain.com</div>
                                        <div className="text-xs text-text-secondary truncate">Hi, I saw your portfolio and would like...</div>
                                    </div>

                                    {/* Unread Message 2 */}
                                    <div className="p-4 border-b border-dark-700 bg-sky-900/10 cursor-pointer overflow-hidden relative group-hover:bg-dark-800 transition-colors">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-500" />
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm font-bold text-white">Invoice Paid #4092</span>
                                            <span className="text-[10px] text-sky-400 font-medium">09:15 AM</span>
                                        </div>
                                        <div className="text-xs text-white font-medium mb-1">admin@yourdomain.com</div>
                                        <div className="text-xs text-text-secondary truncate">Your invoice for the recent project has...</div>
                                    </div>

                                    {/* Read Message */}
                                    <div className="p-4 border-b border-dark-700 bg-transparent opacity-60">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm font-medium text-text-secondary">Weekly Team Update</span>
                                            <span className="text-[10px] text-text-muted">Yesterday</span>
                                        </div>
                                        <div className="text-xs text-text-muted mb-1">team@yourdomain.com</div>
                                        <div className="text-xs text-text-muted truncate">Here are the notes from yesterday's standup...</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating "Compose" button animation */}
                            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/30 animate-[pulse_3s_infinite]">
                                <Icon name="plus" size={20} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
