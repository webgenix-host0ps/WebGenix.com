import React, { useState } from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function AIFeatureSection() {
    const [inputValue, setInputValue] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const handleSimulate = () => {
        if (!inputValue) return;
        setIsGenerating(true);
        setTimeout(() => setIsGenerating(false), 3000);
    };

    return (
        <section className="py-24 bg-dark-800 border-y border-dark-700 relative overflow-hidden">
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-pink-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Interactive Prompt Area */}
                    <div className="flex-[1.5] w-full">
                        <div className="bg-dark-900 border border-dark-700 p-8 rounded-3xl shadow-2xl relative">
                            {/* Decorative Sparkle */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                                <Icon name="sparkles" size={24} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">Describe your site</h3>
                            <p className="text-text-secondary mb-6 text-sm">Our AI will generate a complete, customized website including layouts, colors, and initial copy in exactly 30 seconds.</p>

                            <div className="relative mb-4">
                                <textarea
                                    className="w-full bg-dark-800 border border-dark-700 rounded-xl p-4 text-white placeholder-text-muted focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 resize-none transition-all"
                                    rows="4"
                                    placeholder="E.g., I need a sleek, minimal portfolio for my freelance photography business based in New York. Neutral tones, large gallery grids, and a contact form."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    disabled={isGenerating}
                                />
                                <div className="absolute bottom-4 right-4 flex gap-2">
                                    <button className="px-3 py-1 bg-dark-700 hover:bg-dark-600 rounded text-xs text-text-secondary transition-colors" onClick={() => setInputValue('A modern landing page for an AI SaaS startup teaching kids how to code.')}>
                                        Try Example
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleSimulate}
                                disabled={isGenerating || !inputValue}
                                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${isGenerating ? 'bg-dark-700 text-text-muted cursor-not-allowed' :
                                        !inputValue ? 'bg-dark-800 text-text-muted border border-dark-700 cursor-not-allowed' :
                                            'bg-gradient-to-r from-pink-500 to-indigo-500 text-white shadow-lg hover:shadow-pink-500/25'
                                    }`}
                            >
                                {isGenerating ? (
                                    <>
                                        <Icon name="loader" size={20} className="animate-spin" />
                                        Generating Layout...
                                    </>
                                ) : (
                                    <>
                                        <Icon name="wand" size={20} />
                                        Generate Website
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Content / Explanation */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Text-to-Website AI
                        </h2>
                        <p className="text-text-secondary leading-relaxed mb-8">
                            Skip the blank canvas anxiety. Just type what you need in plain English, and our advanced AI engine will construct a fully responsive, beautifully designed starting point for you. Once generated, you have complete control to tweak every single pixel using our drag-and-drop editor.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm text-text-primary">
                                <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center">
                                    <Icon name="check" size={12} />
                                </div>
                                Generates contextual sample text and copy
                            </div>
                            <div className="flex items-center gap-3 text-sm text-text-primary">
                                <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center">
                                    <Icon name="check" size={12} />
                                </div>
                                Suggests cohesive color palettes
                            </div>
                            <div className="flex items-center gap-3 text-sm text-text-primary">
                                <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center">
                                    <Icon name="check" size={12} />
                                </div>
                                Inserts relevant royalty-free placeholder images
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
