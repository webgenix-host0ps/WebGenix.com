import CTAButton from '../ui/CTAButton';

export default function HelpContact() {
    return (
        <section className="py-24 relative overflow-hidden bg-dark-800 border-t border-dark-700">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-6">
                    Still can't find what you're looking for?
                </h2>
                <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
                    Our support team is online 24/7 to help you with any technical issues, billing inquiries, or general questions.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <CTAButton size="large" to="/contact">
                        Contact Support
                    </CTAButton>
                    <CTAButton size="large" variant="secondary" to="/community">
                        Ask the Community
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
