import Icon from '../ui/Icon';

export default function HelpHero() {
    return (
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-dark-800 bg-dark-900">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800" />
            <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-text-primary leading-tight mb-6 relative">
                    How can we help you?
                </h1>
                
                <div className="max-w-2xl mx-auto mt-10 relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <Icon name="search" size={20} className="text-text-muted group-focus-within:text-accent transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for articles, guides, or topics..."
                        className="w-full pl-14 pr-6 py-4 bg-dark-800/80 border border-dark-700 rounded-2xl text-text-primary text-lg placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-2xl shadow-black/20"
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center">
                        <button className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-xl text-sm font-medium transition-colors shadow-lg shadow-accent/20">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
