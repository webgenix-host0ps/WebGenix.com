import { trustFeatures } from '../../data/services';
import Icon from '../ui/Icon';

export default function TrustSection() {
    return (
        <section id="about" className="py-24 lg:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-4">
                        Built for reliability
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Enterprise-grade infrastructure you can depend on,
                        backed by a team that puts your success first.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trustFeatures.map((feature) => (
                        <div
                            key={feature.text}
                            className="
                flex items-center gap-4
                p-5
                rounded-xl
                bg-dark-800
                border border-dark-700
                hover:border-dark-600
                transition-colors
              "
                        >
                            <div className="
                flex-shrink-0
                w-12 h-12
                rounded-lg
                bg-success/10
                flex items-center justify-center
              ">
                                <Icon
                                    name={feature.icon}
                                    size={22}
                                    className="text-success"
                                />
                            </div>
                            <span className="text-text-primary font-medium">
                                {feature.text}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-16 pt-16 border-t border-dark-700">
                    <div className="grid sm:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-text-primary mb-2">99.9%</div>
                            <div className="text-text-secondary">Uptime SLA</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-text-primary mb-2">&lt;50ms</div>
                            <div className="text-text-secondary">Global Latency</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-text-primary mb-2">24/7</div>
                            <div className="text-text-secondary">Expert Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}