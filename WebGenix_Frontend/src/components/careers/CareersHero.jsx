import CTAButton from '../ui/CTAButton';

export default function CareersHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dark-900 border-b border-dark-800">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800" />
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />
            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-hover/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8 border border-accent/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    We're hiring
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-text-primary leading-tight mb-6">
                    Build the future of<br />
                    <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">web infrastructure.</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
                    Join a remote-first team of passionate builders. We're on a mission to make enterprise-grade hosting accessible to everyone.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <CTAButton size="large" onClick={() => document.getElementById('open-roles').scrollIntoView({ behavior: 'smooth' })}>
                        View Open Roles
                    </CTAButton>
                    <CTAButton variant="secondary" size="large" onClick={() => document.getElementById('values').scrollIntoView({ behavior: 'smooth' })}>
                        Our Values
                    </CTAButton>
                </div>
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
