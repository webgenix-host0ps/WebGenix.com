import CTAButton from '../ui/CTAButton';

export default function ConversionFooter() {
    return (
        <section className="bg-gradient-to-b from-[#0B0F19] to-[#1E293B] py-24 border-t border-[#334155]">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 text-center">
                <h2 className="text-5xl font-semibold tracking-tight text-white max-w-2xl mx-auto">
                    Ready to deploy your next project?
                </h2>

                <p className="mt-6 text-xl text-[#94A3B8] max-w-md mx-auto">
                    Join thousands of developers and businesses who trust us with their infrastructure.
                </p>

                <div className="mt-12">
                    <CTAButton 
                        to="/get-started"
                        className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-14 py-6 rounded-3xl font-semibold text-2xl shadow-2xl shadow-[#3B82F6]/40 transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        Get Started — Free
                    </CTAButton>
                </div>

                <p className="mt-8 text-[#64748B] flex items-center justify-center gap-x-8 text-sm">
                    <span>No credit card or UPI required</span>
                    <span className="w-px h-3 bg-[#334155]"></span>
                    <span>Free tier available</span>
                    <span className="w-px h-3 bg-[#334155]"></span>
                    <span>Cancel anytime</span>
                </p>
            </div>
        </section>
    );
}