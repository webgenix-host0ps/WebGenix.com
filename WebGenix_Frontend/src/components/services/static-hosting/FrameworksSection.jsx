import React, { useState } from 'react';
import Icon from '../../ui/Icon';

const frameworks = [
    {
        id: 'react',
        name: 'React',
        icon: 'codesandbox',
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        code: `// .hostplatform.yml
build:
  command: "npm run build"
  output: "build/"
  env:
    REACT_APP_API: "production"
        `
    },
    {
        id: 'nextjs',
        name: 'Next.js',
        icon: 'triangle',
        color: 'text-white',
        bg: 'bg-white/10',
        code: `// .hostplatform.yml
build:
  command: "npx next build"
  output: ".next/"
  serverless: true
        `
    },
    {
        id: 'vue',
        name: 'Vue.js',
        icon: 'wind',
        color: 'text-emerald-400',
        bg: 'bg-emerald-400/10',
        code: `// .hostplatform.yml
build:
  command: "npm run build"
  output: "dist/"
        `
    },
    {
        id: 'html',
        name: 'Vanilla HTML',
        icon: 'layout',
        color: 'text-orange-400',
        bg: 'bg-orange-400/10',
        code: `// .hostplatform.yml
build:
  command: "" // No build needed
  output: "."
        `
    }
];

export default function FrameworksSection() {
    const [activeTab, setActiveTab] = useState(frameworks[0]);

    return (
        <section className="py-24 bg-dark-800 border-y border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            First-class support for any framework
                        </h2>
                        <p className="text-text-secondary leading-relaxed mb-8">
                            Whether you're building a simple landing page in raw HTML or a complex enterprise application with Next.js, our platform automatically detects your project settings and builds it with zero configuration required.
                        </p>

                        {/* Framework Selector Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {frameworks.map((fw) => (
                                <button
                                    key={fw.id}
                                    onClick={() => setActiveTab(fw)}
                                    className={`
                                        flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300
                                        ${activeTab.id === fw.id
                                            ? 'border-accent bg-accent/5 shadow-[0_0_15px_rgba(var(--color-accent),0.1)]'
                                            : 'border-dark-700 bg-dark-900/50 hover:border-dark-600 hover:bg-dark-800'
                                        }
                                    `}
                                >
                                    <div className={`w-10 h-10 rounded-lg ${fw.bg} ${fw.color} flex items-center justify-center mb-3 transition-transform ${activeTab.id === fw.id ? 'scale-110' : ''}`}>
                                        <Icon name={fw.icon} size={20} />
                                    </div>
                                    <span className={`text-sm font-medium ${activeTab.id === fw.id ? 'text-white' : 'text-text-secondary'}`}>
                                        {fw.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Code Visualizer */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="bg-[#0D0D12] overflow-hidden rounded-2xl border border-dark-700 shadow-2xl relative group">
                            {/* Decorative Top Mac-like bar */}
                            <div className="flex items-center px-4 py-3 border-b border-dark-700/50 bg-[#16161E]">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-dark-600" />
                                    <div className="w-3 h-3 rounded-full bg-dark-600" />
                                    <div className="w-3 h-3 rounded-full bg-dark-600" />
                                </div>
                                <div className="flex-1 text-center">
                                    <span className="text-xs font-mono text-text-muted">.hostplatform.yml ({activeTab.name})</span>
                                </div>
                            </div>

                            <div className="p-6 relative">
                                <pre className="font-mono text-sm leading-relaxed text-text-secondary overflow-x-auto">
                                    <code className="animate-[fadeIn_0.3s_ease-out_forwards]" key={activeTab.id}>
                                        {activeTab.code}
                                    </code>
                                </pre>

                                {/* Accent glow effect matching the framework color */}
                                <div
                                    className={`absolute -right-10 -bottom-10 w-32 h-32 blur-[60px] opacity-20 pointer-events-none transition-colors duration-500`}
                                    style={{ backgroundColor: activeTab.color.replace('text-', '') }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
