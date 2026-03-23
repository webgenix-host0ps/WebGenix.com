export default function ContactHero() {
    return (
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-dark-800 bg-dark-900">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800" />
            <div className="absolute top-1/4 left-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8 border border-accent/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                    Let's Connect
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-text-primary leading-tight mb-6">
                    Build something <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">great together.</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
                    Whether you have a question about pricing, need support with your infrastructure, or want to explore an enterprise plan, our team is ready to help.
                </p>
            </div>
        </section>
    );
}
