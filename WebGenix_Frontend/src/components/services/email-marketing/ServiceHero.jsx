import React from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900">
                {/* Rose/Orange gradient for marketing energy and growth */}
                <div className="absolute top-0 right-1/4 w-[800px] h-[600px] bg-rose-600/10 blur-[150px] rounded-full poiter-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-8">
                            <Icon name="send" size={14} className="text-rose-400" />
                            <span className="text-sm font-medium text-rose-400">High-Converting Campaigns</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Build audiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">actually engage</span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                            Design beautiful newsletters, automate targeted follow-ups, and track your ROI with our powerful, intuitive email marketing suite.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <CTAButton variant="primary" className="w-full sm:w-auto !bg-rose-600 hover:!bg-rose-500 !border-none">
                                Start Free Trial
                            </CTAButton>
                            <CTAButton variant="secondary" className="w-full sm:w-auto">
                                Watch Demo
                            </CTAButton>
                        </div>

                        <div className="mt-10 grid grid-cols-3 gap-6 text-left border-t border-dark-700 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">99%</div>
                                <div className="text-xs text-text-muted font-medium uppercase tracking-wider">Deliverability</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">50M+</div>
                                <div className="text-xs text-text-muted font-medium uppercase tracking-wider">Emails Sent</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                <div className="text-xs text-text-muted font-medium uppercase tracking-wider">Expert Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Illustration: Modern Campaign Broadcast Mockup */}
                    <div className="flex-1 relative w-full xl:max-w-lg z-10 hidden lg:block perspective-1000">
                        {/* Send Campaign Animation Container */}
                        <div className="relative h-[450px]">

                            {/* Main UI Mockup */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] bg-dark-800 border-2 border-dark-700 rounded-2xl shadow-2xl overflow-hidden z-20">
                                {/* Header */}
                                <div className="bg-dark-900 border-b border-dark-700 p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                                            <Icon name="mail" size={16} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">Summer Sale 2026</div>
                                            <div className="text-xs text-text-muted">Draft • 12,450 Recipients</div>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 bg-rose-600 text-white text-xs font-bold rounded-full">
                                        Send Now
                                    </div>
                                </div>

                                {/* Email Preview Body */}
                                <div className="p-6 bg-dark-800">
                                    <div className="w-full max-w-[280px] mx-auto bg-dark-900 rounded-xl border border-dark-700 p-4 shadow-inner">
                                        <div className="w-full h-24 bg-dark-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-orange-500/20" />
                                            <Icon name="image" size={24} className="text-dark-600" />
                                            <div className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/50 px-2 py-0.5 rounded">HERO IMAGE</div>
                                        </div>
                                        <div className="w-3/4 h-4 bg-dark-700 rounded mb-2" />
                                        <div className="w-full h-3 bg-dark-800 rounded mb-1" />
                                        <div className="w-5/6 h-3 bg-dark-800 rounded mb-4" />
                                        <div className="w-24 h-8 bg-rose-600 rounded-lg mx-auto" />
                                    </div>
                                </div>
                            </div>

                            {/* Flying Envelopes Elements */}
                            <div className="absolute top-10 right-10 w-12 h-12 bg-dark-800 border border-dark-600 rounded-lg shadow-xl flex items-center justify-center animate-[flyUpRight_4s_ease-in-out_infinite] z-10 opacity-0">
                                <Icon name="send" size={20} className="text-rose-400" />
                            </div>
                            <div className="absolute bottom-20 left-4 w-10 h-10 bg-dark-800 border border-dark-600 rounded-lg shadow-xl flex items-center justify-center animate-[flyUpLeft_5s_ease-in-out_infinite_1s] z-10 opacity-0">
                                <Icon name="mail" size={16} className="text-orange-400" />
                            </div>
                            <div className="absolute top-24 left-10 w-8 h-8 bg-dark-800 border border-dark-600 rounded-lg shadow-xl flex items-center justify-center animate-[flyUpLeft_6s_ease-in-out_infinite_2s] z-10 opacity-0">
                                <Icon name="users" size={14} className="text-emerald-400" />
                            </div>

                            {/* Floating "Sent" Success Badge */}
                            <div className="absolute bottom-10 right-10 bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-3 z-30 shadow-2xl animate-[float_4s_ease-in-out_infinite_1.5s]">
                                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                                    <Icon name="check" size={16} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white">Campaign Sent</div>
                                    <div className="text-[10px] text-emerald-400">Delivering to 12k inboxes...</div>
                                </div>
                            </div>

                            <style jsx>{`
                                @keyframes flyUpRight {
                                    0% { transform: translate(0, 0) scale(0.8) rotate(0deg); opacity: 0; }
                                    20% { opacity: 1; transform: translate(20px, -20px) scale(1) rotate(10deg); }
                                    80% { opacity: 1; transform: translate(80px, -80px) scale(1) rotate(25deg); }
                                    100% { transform: translate(100px, -100px) scale(0.8) rotate(30deg); opacity: 0; }
                                }
                                @keyframes flyUpLeft {
                                    0% { transform: translate(0, 0) scale(0.8) rotate(0deg); opacity: 0; }
                                    20% { opacity: 1; transform: translate(-10px, -20px) scale(1) rotate(-10deg); }
                                    80% { opacity: 1; transform: translate(-40px, -80px) scale(1) rotate(-25deg); }
                                    100% { transform: translate(-50px, -100px) scale(0.8) rotate(-30deg); opacity: 0; }
                                }
                                @keyframes float {
                                    0%, 100% { transform: translateY(0); }
                                    50% { transform: translateY(-10px); }
                                }
                            `}</style>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
