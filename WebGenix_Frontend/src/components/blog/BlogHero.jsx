import Icon from '../ui/Icon';

export default function BlogHero() {
    return (
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-dark-800">
            {/* Ambient background glows */}
            <div className="absolute inset-0 bg-dark-900" />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
                        <Icon name="book" size={14} />
                        Webgenix Blog
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-text-primary leading-tight mb-6">
                        Insights, updates, and stories from the team.
                    </h1>
                    
                    <p className="text-lg text-text-secondary mb-10">
                        Everything you need to know about building, scaling, and managing modern web infrastructure.
                    </p>

                    {/* Simple Search Input */}
                    <div className="max-w-md mx-auto relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Icon name="search" size={18} className="text-text-muted group-focus-within:text-accent transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full pl-11 pr-4 py-3 bg-dark-800/80 border border-dark-700 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-lg shadow-black/20"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
