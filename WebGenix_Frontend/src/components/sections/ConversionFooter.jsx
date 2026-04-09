import CTAButton from '../ui/CTAButton';

export default function ConversionFooter() {
    return (
        <section className="py-24 lg:py-32 bg-dark-800 border-t border-dark-700">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-4">
                    Ready to deploy your next project?
                </h2>

                <p className="text-lg text-text-secondary mb-10">
                    Join thousands of developers and businesses who trust us
                    with their infrastructure.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <CTAButton variant="primary" size="large" to="/get-started">
                        Get Started
                    </CTAButton>
                </div>

                <p className="mt-6 text-sm text-text-muted">
                    No credit card or UPI required • Free tier available • Cancel anytime
                </p>
            </div>
        </section>
    );
}