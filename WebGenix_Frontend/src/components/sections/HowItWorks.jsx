import { howItWorksSteps } from '../../data/services';
import Icon from '../ui/Icon';
import CTAButton from '../ui/CTAButton';

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 lg:py-32 bg-dark-800">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-4">
                        Get started in minutes
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Three simple steps to deploy your project
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {howItWorksSteps.map((step, index) => (
                        <div key={step.step} className="relative text-center">

                            {index < howItWorksSteps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-dark-600" />
                            )}

                            <div className="relative inline-flex items-center justify-center mb-6">
                                <div className="
                  w-24 h-24
                  rounded-2xl
                  bg-dark-700
                  border border-dark-600
                  flex items-center justify-center
                  group
                  hover:border-accent/50
                  transition-colors duration-300
                ">
                                    <Icon
                                        name={step.icon}
                                        size={32}
                                        className="text-text-muted group-hover:text-accent transition-colors"
                                    />
                                </div>

                                <span className="
                  absolute -top-2 -right-2
                  w-7 h-7
                  rounded-full
                  bg-accent
                  text-white text-sm font-semibold
                  flex items-center justify-center
                ">
                                    {step.step}
                                </span>
                            </div>

                            <h3 className="text-xl font-semibold text-text-primary mb-2">
                                {step.title}
                            </h3>
                            <p className="text-text-secondary">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 sm:mt-16 text-center z-10 relative">
                    <CTAButton variant="primary" size="large" to="/get-started">
                        Get started in minutes
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}