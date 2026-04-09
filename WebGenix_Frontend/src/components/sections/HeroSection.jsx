import CTAButton from '../ui/CTAButton';

export default function HeroSection() {
    return (
        <section className="
      relative
      min-h-screen
      flex items-center justify-center
      pt-16
      overflow-hidden
    ">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800" />

            {/* Subtle grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h1 className="
          text-4xl sm:text-5xl lg:text-6xl
          font-semibold
          text-text-primary
          leading-tight
          mb-6
        ">
                    Deploy with confidence.
                    <br />
                    <span className="text-text-secondary">Scale without limits.</span>
                </h1>

                <p className="
          text-lg sm:text-xl
          text-text-secondary
          max-w-2xl mx-auto
          mb-10
        ">
                    Infrastructure that grows with your ambitions.
                    From static sites to enterprise workloads — we've got you covered.
                </p>

                <CTAButton size="large" to="/get-started">
                    Get Started
                </CTAButton>

                <p className="mt-6 text-sm text-text-muted">
                    No credit card or UPI required • Setup in under 5 minutes
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-dark-600 flex items-start justify-center p-2">
                    <div className="w-1 h-2 rounded-full bg-dark-600" />
                </div>
            </div>
        </section>
    );
}