export default function StatusHero() {
    return (
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-dark-800 bg-dark-900">
            {/* Ambient success glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800" />
            <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-success/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-success/10 border border-success/30 shadow-[0_0_20px_rgba(34,197,94,0.15)] mb-8">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                    </span>
                    <span className="text-success font-semibold tracking-wide">All Systems Operational</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-semibold text-text-primary leading-tight mb-6">
                    Webgenix Status
                </h1>
                
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                    Real-time and historical health data encompassing our API, Delivery Networks, and core server deployment infrastructure.
                </p>
            </div>
        </section>
    );
}
