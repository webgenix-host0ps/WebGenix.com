import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-accent/10 blur-[120px] rounded-full poiter-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-8">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-sm font-medium text-accent">Lightning Fast</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Static Site <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                                Hosting
                            </span>
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                            Deploy your frontend applications and static sites globally in seconds.
                            Experience zero-config deployments, automatic SSL, and an edge network that delivers your content instantly.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <CTAButton variant="primary" size="large">
                                Deploy for Free
                            </CTAButton>
                            <CTAButton variant="secondary" size="large">
                                View Documentation
                            </CTAButton>
                        </div>

                        {/* Technologies */}
                        <div className="mt-12 pt-8 border-t border-dark-700/50">
                            <p className="text-sm text-text-muted mb-4 uppercase tracking-wider">Perfect for modern frameworks</p>
                            <div className="flex items-center justify-center lg:justify-start gap-6 text-text-secondary/50">
                                {/* Simulated framework logos via Text/Icons */}
                                <span className="font-bold">Next.js</span>
                                <span className="font-bold">React</span>
                                <span className="font-bold">Vue</span>
                                <span className="font-bold">Gatsby</span>
                                <span className="font-bold">Astro</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Illustration */}
                    <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
                        <div className="relative rounded-2xl bg-dark-800/50 border border-dark-700 backdrop-blur-sm p-6 overflow-hidden">
                            {/* Terminal-like Window */}
                            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-dark-700">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="flex-1 text-center">
                                    <span className="text-xs text-text-muted font-mono">bash - deploy</span>
                                </div>
                            </div>

                            {/* Code lines animation */}
                            <div className="space-y-4 font-mono text-sm">
                                <div className="text-accent-light">$ npm run build</div>
                                <div className="text-text-secondary">Building optimized production logic...</div>
                                <div className="text-green-400">✓ Compiled successfully</div>
                                <div className="text-accent-light mt-4">$ hostplatform deploy</div>
                                <div className="text-text-secondary">Deploying to Global Edge Network...</div>
                                <div className="flex items-center gap-2 text-text-primary">
                                    <Icon name="globe" size={14} className="text-accent" />
                                    <span>https://your-app.com</span>
                                </div>
                                <div className="text-green-400">✓ Deployed in 0.8s</div>
                            </div>

                            {/* Decorative gradient orb inside */}
                            <div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 bg-accent/20 blur-[60px] rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
