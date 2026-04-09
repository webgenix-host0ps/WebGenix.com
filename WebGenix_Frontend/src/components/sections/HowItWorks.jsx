import { howItWorksSteps } from '../../data/services';
import Icon from '../ui/Icon';
import CTAButton from '../ui/CTAButton';

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-[#0B0F19] py-24">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-5xl font-semibold tracking-tight text-white">Get started in minutes</h2>
                    <p className="mt-4 text-xl text-[#94A3B8]">Three simple steps to deploy your project</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {howItWorksSteps.map((step, index) => (
                        <div 
                            key={step.step}
                            className="group bg-[#1E293B] rounded-3xl p-8 hover:bg-[#334155] transition-all duration-300 border border-transparent hover:border-[#3B82F6]/20"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-[#3B82F6]/10 text-[#3B82F6] rounded-2xl flex items-center justify-center text-3xl font-semibold group-hover:scale-110 transition-transform">
                                    {step.step}
                                </div>
                                <Icon name={step.icon} size={32} className="text-[#3B82F6]" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                            <p className="mt-3 text-[#94A3B8] leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <CTAButton 
                        to="/get-started"
                        className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-10 py-5 rounded-3xl font-semibold text-xl shadow-xl shadow-[#3B82F6]/30 transition-all duration-200 hover:scale-105"
                    >
                        Get started in minutes
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}