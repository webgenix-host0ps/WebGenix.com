import React from 'react';
import Icon from '../../ui/Icon';

export default function CampaignBuilderSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Automate your customer journey
                    </h2>
                    <p className="text-text-secondary">
                        Build powerful visual workflows. Trigger emails based on user behavior, time delays, or custom events without writing a single line of code.
                    </p>
                </div>

                {/* Workflow Builder Mockup */}
                <div className="relative w-full max-w-4xl mx-auto bg-dark-900 rounded-2xl border border-dark-700 shadow-2xl p-6 overflow-hidden">
                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

                    <div className="relative z-10 flex flex-col items-center">

                        {/* Trigger Node */}
                        <div className="w-64 bg-dark-800 border border-dark-600 rounded-xl p-4 shadow-lg group hover:border-rose-500 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                                    <Icon name="user-plus" size={16} />
                                </div>
                                <div className="text-sm font-bold text-white">Subscriber Joins List</div>
                            </div>
                            <div className="text-xs text-text-muted">List: Newsletter Signups</div>
                        </div>

                        {/* Connector Line */}
                        <div className="w-px h-8 bg-dark-600 relative">
                            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 bg-dark-700 border border-dark-500 rounded-full flex items-center justify-center text-[10px] text-text-muted cursor-pointer hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-colors">
                                <Icon name="plus" size={10} />
                            </div>
                        </div>

                        {/* Action Node 1 */}
                        <div className="w-64 bg-dark-800 border border-dark-600 rounded-xl p-4 shadow-lg group hover:border-rose-500 transition-colors cursor-pointer relative">
                            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-dark-900 border border-dark-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Icon name="settings" size={12} className="text-text-muted" />
                            </div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                                    <Icon name="mail" size={16} />
                                </div>
                                <div className="text-sm font-bold text-white">Send Welcome Email</div>
                            </div>
                            <div className="text-xs text-text-muted">Template: Welcome Series #1</div>
                        </div>

                        {/* Connector Line */}
                        <div className="w-px h-8 bg-dark-600" />

                        {/* Delay Node */}
                        <div className="bg-dark-900 border border-dark-600 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm text-xs font-medium text-text-secondary cursor-pointer hover:border-dark-400 transition-colors z-10">
                            <Icon name="clock" size={12} />
                            Wait 3 days
                        </div>

                        {/* Connector Line */}
                        <div className="w-px h-8 bg-dark-600" />

                        {/* Condition Split */}
                        <div className="w-64 bg-dark-800 border border-dark-600 rounded-xl p-4 shadow-lg group hover:border-rose-500 transition-colors cursor-pointer text-center relative">
                            <div className="text-xs font-bold text-blue-400 mb-1 uppercase tracking-widest">Condition</div>
                            <div className="text-sm font-medium text-white mb-2">Did they open the email?</div>

                            <div className="flex justify-between items-end absolute -bottom-[33px] left-0 right-0 px-8">
                                <div className="w-px h-8 bg-dark-600" />
                                <div className="w-px h-8 bg-dark-600" />
                            </div>
                            <div className="absolute -bottom-px left-[32px] right-[32px] h-px bg-dark-600" />
                        </div>

                        {/* Split Paths */}
                        <div className="flex w-full justify-center gap-16 mt-8 relative">
                            {/* Yes Path */}
                            <div className="flex flex-col items-center">
                                <div className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2">Yes</div>
                                <div className="w-48 bg-dark-800 border border-dark-600 rounded-xl p-3 text-center shadow-lg">
                                    <Icon name="tag" size={16} className="text-emerald-400 mx-auto mb-2" />
                                    <div className="text-sm font-bold text-white">Tag: Active Lead</div>
                                </div>
                            </div>

                            {/* No Path */}
                            <div className="flex flex-col items-center">
                                <div className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2">No</div>
                                <div className="w-48 bg-dark-800 border border-dark-600 rounded-xl p-3 text-center shadow-lg">
                                    <Icon name="mail" size={16} className="text-red-400 mx-auto mb-2" />
                                    <div className="text-sm font-bold text-white">Send Subject A/B</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
