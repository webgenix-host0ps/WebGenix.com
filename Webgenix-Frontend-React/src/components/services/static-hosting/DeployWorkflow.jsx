import React from 'react';
import Icon from '../../ui/Icon';

export default function DeployWorkflow() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        A workflow you'll love
                    </h2>
                    <p className="text-text-secondary">
                        From localhost to a global URL in seconds. No manual server configuration, FTP uploads, or tedious CLI commands.
                    </p>
                </div>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-[45%] left-[10%] right-[10%] h-0.5 bg-dark-700 z-0">
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 translate-x-[-100%] animate-[flowRight_3s_ease-in-out_infinite]" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">

                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-2xl bg-dark-900 border-2 border-dark-700 flex items-center justify-center mb-6 group-hover:border-accent group-hover:-translate-y-2 transition-all duration-300 shadow-xl">
                                <Icon name="github" size={32} className="text-text-secondary group-hover:text-white transition-colors" />
                            </div>
                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-dark-700 text-sm font-bold text-white mb-4">
                                1
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Push to Git</h3>
                            <p className="text-sm text-text-secondary px-4">
                                Connect your repository. Every time you push to your main branch, an automatic deployment triggers.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-2xl bg-dark-900 border-2 border-dark-700 flex items-center justify-center mb-6 group-hover:border-accent group-hover:-translate-y-2 transition-all duration-300 shadow-xl overflow-hidden relative">
                                <Icon name="cpu" size={32} className="text-text-secondary group-hover:text-white transition-colors relative z-10" />
                                <div className="absolute inset-0 bg-accent/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                            </div>
                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-dark-700 text-sm font-bold text-white mb-4">
                                2
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Auto Build</h3>
                            <p className="text-sm text-text-secondary px-4">
                                Our platform instantly detects your framework, runs your build scripts, and optimizes your assets natively.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-2xl bg-dark-900 border-2 border-dark-700 flex items-center justify-center mb-6 group-hover:border-accent group-hover:-translate-y-2 transition-all duration-300 shadow-xl relative">
                                <div className="absolute -inset-2 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Icon name="globe" size={32} className="text-text-secondary group-hover:text-accent transition-colors relative z-10" />
                            </div>
                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-dark-700 text-sm font-bold text-white mb-4">
                                3
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Live URL</h3>
                            <p className="text-sm text-text-secondary px-4">
                                Your site goes live instantly on our global edge network, complete with automatically generated SSL.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
