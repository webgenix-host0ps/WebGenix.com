import React from 'react';
import Icon from '../../ui/Icon';

const timelineSteps = [
    {
        number: '01',
        title: 'Initial Audit & Plan',
        description: 'We review your current hosting environment, identify dependencies (databases, cron jobs, email accounts), and build a custom migration strategy.',
        icon: 'clipboard'
    },
    {
        number: '02',
        title: 'Initial Data Sync',
        description: 'We copy all your files and databases to our servers while your old site remains live and operational. No changes to DNS yet.',
        icon: 'copy'
    },
    {
        number: '03',
        title: 'Testing & Verification',
        description: 'We provide you a temporary URL to test the cloned site on our infrastructure. You verify everything works perfectly before we proceed.',
        icon: 'tool'
    },
    {
        number: '04',
        title: 'Final Sync & Go Live',
        description: 'We perform a final quick-sync of any new data (like recent orders), update the DNS, and the internet seamlessly switches to the new server.',
        icon: 'power'
    }
];

export default function MigrationProcessSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700 overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        How the migration works
                    </h2>
                    <p className="text-text-secondary">
                        A transparent, heavily-tested four step process designed to eliminate risks and keep you informed at every stage.
                    </p>
                </div>

                <div className="relative">
                    {/* Background Connecting Line for Desktop */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-dark-700 z-0">
                        <div className="h-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 w-full opacity-50 absolute inset-0" />

                        {/* Animated passing dot */}
                        <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white] animate-[travelLine_4s_ease-in-out_infinite]" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                        {timelineSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">

                                {/* Step Icon Node */}
                                <div className={`relative w-[120px] h-[120px] rounded-full bg-dark-900 border-[8px] border-dark-800 flex items-center justify-center mb-6 shadow-xl transition-transform duration-500 group-hover:scale-110 ${index === 3 ? 'border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.2)]' : ''}`}>
                                    <div className="absolute inset-2 border border-dashed border-dark-600 rounded-full group-hover:animate-spin-slow" />
                                    <span className="absolute top-2 right-2 flex w-6 h-6 items-center justify-center bg-indigo-500 text-white font-bold text-xs rounded-full shadow-lg">
                                        {step.number}
                                    </span>
                                    <Icon name={step.icon} size={32} className={`text-text-muted transition-colors duration-300 group-hover:text-indigo-400 ${index === 3 ? 'text-indigo-400' : ''}`} />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{step.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed max-w-[280px]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <style jsx>{`
                        @keyframes travelLine {
                            0% { left: 0%; opacity: 0; }
                            10% { opacity: 1; }
                            90% { opacity: 1; }
                            100% { left: 100%; opacity: 0; }
                        }
                    `}</style>

                </div>
            </div>
        </section>
    );
}
