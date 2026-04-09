import { serviceCategories } from '../../data/services';
import ServiceGroup from './ServiceGroup';

export default function ServicesSection() {
    return (
        <section id="services" className="bg-[#0B0F19] py-24 border-t border-[#334155]">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-5xl font-semibold tracking-tight text-white">Our Services</h2>
                    <p className="mt-4 text-xl text-[#94A3B8]">
                        Everything you need to build, deploy, and scale your digital presence
                    </p>
                </div>

                {/* Service groups - card layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {serviceCategories.map((category) => (
                        <div 
                            key={category.id} 
                            className="bg-[#1E293B] rounded-3xl p-1 border border-[#334155] hover:border-[#3B82F6]/30 transition-all duration-300 group"
                        >
                            <ServiceGroup
                                title={category.title}
                                services={category.services}
                                className="group-hover:scale-[1.02] transition-transform"
                            />
                        </div>
                    ))}
                </div>

                {/* Trust closer */}
                <div className="mt-20 text-center">
                    <p className="text-[#64748B] text-lg">
                        Can&apos;t find what you&apos;re looking for?
                        <a 
                            href="/contact" 
                            className="ml-3 text-[#3B82F6] hover:text-[#60A5FA] font-semibold inline-flex items-center gap-1 transition-colors"
                        >
                            Talk to our team <span className="text-xl leading-none">→</span>
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}