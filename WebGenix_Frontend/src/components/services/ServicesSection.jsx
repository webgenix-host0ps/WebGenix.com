import { serviceCategories } from '../../data/services';
import ServiceGroup from './ServiceGroup';

export default function ServicesSection() {
    return (
        <section id="services" className="relative py-24 lg:py-32">

            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Everything you need to build, deploy, and scale your digital presence
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {serviceCategories.map((category) => (
                        <div key={category.id}>
                            <ServiceGroup
                                title={category.title}
                                services={category.services}
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-sm text-text-muted">
                        Can't find what you're looking for?{' '}
                        <a href="/contact" className="text-accent hover:text-accent-hover">
                            Talk to our team
                        </a>
                    </p>
                </div>

            </div>
        </section>
    );
}